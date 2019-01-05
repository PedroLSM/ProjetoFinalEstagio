using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Models.Cidade;
using Uni7_Estagio.Models.Estado;
using Uni7_Estagio.Services;

namespace Uni7_Estagio.Controllers
{
    [Route("api/cidades")]
    public class CidadeController : Controller
    {
        private ICidadeInfoRepository _cidadeInfoRepository;
        private IEstadoInfoRepository _estadoInfoRepository;
        
        public CidadeController(ICidadeInfoRepository cidadeInfoRepository, IEstadoInfoRepository estadoInfoRepository)
        {
            _cidadeInfoRepository = cidadeInfoRepository;
            _estadoInfoRepository = estadoInfoRepository;
        }

        [HttpGet()]
        public IActionResult GetCidades()
        {
            var cidades = _cidadeInfoRepository.GetCidades();

            var results = Mapper.Map<IEnumerable<CidadeDto>>(cidades);

            return Ok(results);
        }

        [HttpGet("{id}", Name = "GetCidade")]
        public IActionResult GetCidade(int id)
        {
            var cidade = _cidadeInfoRepository.GetCidade(id);
            
            if(cidade == null) return BadRequest();
            
            var results = Mapper.Map<CidadeDto>(cidade);

            return Ok(results);
        }

        [HttpPost()]
        public IActionResult AddCidade([FromBody] CidadeCreationDto cidade)
        {
            if(cidade == null) return BadRequest();

            var estado = _estadoInfoRepository.GetEstado(cidade.EstadoId);
            
            if(estado == null) 
                return BadRequest("Não existe estado com esse Id: " + cidade.EstadoId);
            
            if(_cidadeInfoRepository.CidadeExist(cidade.Nome))
                return BadRequest("Já existe cidade com esse nome");

            var finalCidade = Mapper.Map<Cidade>(cidade);

            _cidadeInfoRepository.AddCidade(finalCidade);

            if(!_cidadeInfoRepository.Save())
            {
                return StatusCode(500, "Ocorreu um erro ao salvar");
            }

            var createdCidade = Mapper.Map<CidadeDto>(finalCidade);
            createdCidade.Estado = Mapper.Map<EstadoDto>(estado);

            return CreatedAtAction("GetCidade", new { CidadeId = createdCidade.CidadeId }, createdCidade);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCidade(int id,
            [FromBody] CidadeForUpdateDto cidade)
        {
            if (cidade == null) return NotFound();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var cidadeEntity = _cidadeInfoRepository.GetCidade(id);

            if (cidadeEntity == null) return NotFound();

            Mapper.Map(cidade, cidadeEntity);

            if (!_cidadeInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            var cidadeEdit = Mapper.Map<CidadeDto>(_cidadeInfoRepository.GetCidade(id));

            return Ok(cidadeEdit);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCidade(int id)
        {
            var cidade = _cidadeInfoRepository.GetCidade(id);

            if(cidade == null)
            {
                return BadRequest("Não existe estado com esse Id");
            }

            _cidadeInfoRepository.DeleteCidade(cidade);

            if(!_cidadeInfoRepository.Save())
            {
                return StatusCode(500, "Ocorreu um erro ao salvar");
            }

            return NoContent();
        }

    }

}