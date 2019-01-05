using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProjetoFinal.Models.Estagiario;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Services;

namespace Uni7_Estagio.Controllers
{
    [Route("api/estagiarios")]
    public class EstagiarioController : Controller
    {
        private IEstagiarioInfoRepository _estagiarioInfoRepository;
        public EstagiarioController(IEstagiarioInfoRepository estagiarioInfoRepository)
        {
            _estagiarioInfoRepository = estagiarioInfoRepository;
        }

        [HttpGet()]
        public IActionResult GetEstagiarios()
        {
            var estagiariosEntities = _estagiarioInfoRepository.GetEstagiarios();

            var estagiariosDto = Mapper.Map<IEnumerable<EstagiarioDto>>(estagiariosEntities);

            return Ok(estagiariosDto);
        }

        [HttpGet("{id}", Name = "GetEstagiario")]
        public IActionResult GetEstagiario(int id)
        {
            var estagiarioEntity = _estagiarioInfoRepository.GetEstagiario(id);

            if (estagiarioEntity == null) return BadRequest();

            var estagiarioDto = Mapper.Map<EstagiarioDto>(estagiarioEntity);

            return Ok(estagiarioDto);
        }

        [HttpPost()]
        public IActionResult CreateEstagiario(
            [FromBody] EstagiarioCreationDto estagiarioCreationDto)
        {
            if (estagiarioCreationDto == null) return BadRequest();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var ultimoEstagiario = Mapper.Map<Estagiario>(estagiarioCreationDto);
            
            _estagiarioInfoRepository.AddEstagiario(ultimoEstagiario);

            if (!_estagiarioInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            var ec = _estagiarioInfoRepository.GetEstagiario(ultimoEstagiario.EstagiarioId);
            var createdEstagiario = Mapper.Map<EstagiarioDto>(ec);

            return CreatedAtAction("GetEstagiario", new { EstagiarioId = createdEstagiario.EstagiarioId }, createdEstagiario);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateEstagiario(int id,
            [FromBody] EstagiarioForUpdateDto estagiario)
        {
            if (estagiario == null) return NotFound();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var estagiarioEntity = _estagiarioInfoRepository.GetEstagiario(id);

            if (estagiarioEntity == null) return NotFound();

            Mapper.Map(estagiario, estagiarioEntity);

            if (!_estagiarioInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            var estagiarioEditadoEntity = _estagiarioInfoRepository.GetEstagiario(id);
            var estagiarioEditadoDto = Mapper.Map<EstagiarioDto>(estagiarioEditadoEntity);

            return Ok(estagiarioEditadoDto);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEstagiario(int id)
        {
            if (!_estagiarioInfoRepository.EstagiarioExists(id)) return NotFound();

            var estagiarioEntity = _estagiarioInfoRepository.GetEstagiario(id);

            if (estagiarioEntity == null) return NotFound();

            _estagiarioInfoRepository.DeleteEstagiario(estagiarioEntity);
            
            if (!_estagiarioInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            return NoContent();
        }

    }
}