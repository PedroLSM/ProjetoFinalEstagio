using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Models.Estado;
using Uni7_Estagio.Services;

namespace Uni7_Estagio.Controllers
{
    [Route("api/estados")]
    public class EstadoController: Controller
    {
        private IEstadoInfoRepository _estadoInfoRepository;
        public EstadoController(IEstadoInfoRepository estadoInfoRepository) 
        {
            _estadoInfoRepository = estadoInfoRepository;
        }

        [HttpGet()]
        public IActionResult GetEstados() {

            var estados = _estadoInfoRepository.GetEstados();

            var results = Mapper.Map<IEnumerable<EstadoDto>>(estados);

            return Ok(results);
        }
        
        [HttpGet("{id}", Name = "GetEstado")]
        public IActionResult GetEstado(int id) {

            var estado = _estadoInfoRepository.GetEstado(id);

            if(estado == null) return BadRequest();

            var result = Mapper.Map<EstadoDto>(estado);

            return Ok(result);
        }

        [HttpPost()]
        public IActionResult CreateEstado([FromBody] EstadoCreationDto estado)
        {
            if(estado == null) return BadRequest();

            if(!ModelState.IsValid) return BadRequest(ModelState);

            if(_estadoInfoRepository.EstadoExist(estado.UF, estado.Nome))
            {
                return BadRequest("Já exite estado com esse UF ou Nome");
            }

            //AutoMapper
            var finalEstado = Mapper.Map<Estado>(estado);

            _estadoInfoRepository.AddEstado(finalEstado);

            if(!_estadoInfoRepository.Save())
            {
                return StatusCode(500, "Ocorreu um erro ao salvar");
            }

            var createdEstado = Mapper.Map<EstadoDto>(finalEstado);

            return CreatedAtAction("GetEstado", new { EstadoId = createdEstado.EstadoId }, createdEstado);
        }  

        [HttpPut("{id}")]
        public IActionResult UpdateEstado(int id,
            [FromBody] EstadoForUpdateDto estado)
        {
            if (estado == null) return NotFound();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var estadoEntity = _estadoInfoRepository.GetEstado(id);

            if (estadoEntity == null) return NotFound();

            Mapper.Map(estado, estadoEntity);

            if (!_estadoInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEstado(int id)
        {
            var estado = _estadoInfoRepository.GetEstado(id);

            if(estado == null)
            {
                return BadRequest("Não existe estado com esse Id");
            }

            if(_estadoInfoRepository.CountCidadeExistsInEstado(id) > 0)
            {
                return BadRequest("Não é possivel deletar um estado que contém cidades registradas");
            }

            _estadoInfoRepository.DeleteEstado(estado);

            if(!_estadoInfoRepository.Save())
            {
                return StatusCode(500, "Ocorreu um erro ao salvar");
            }

            return NoContent();
        }
    }
}