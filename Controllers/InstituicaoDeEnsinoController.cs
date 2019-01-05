using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Models.InstituicaoDeEnsino;
using Uni7_Estagio.Services;

namespace Uni7_Estagio.Controllers
{
    [Route("api/instituicoesdeensino")]
    public class InstituicaoDeEnsinoController: Controller
    {
        private IInstituicaoDeEnsinoInfoRepository _instituicaoDeEnsinoRepository;
        public InstituicaoDeEnsinoController(IInstituicaoDeEnsinoInfoRepository instituicaoDeEnsinoInfoRepository)
        {
            _instituicaoDeEnsinoRepository = instituicaoDeEnsinoInfoRepository;
        }

        [HttpGet()]
        public IActionResult GetInstituicoes()
        {
            var instituicoesEntities = _instituicaoDeEnsinoRepository.GetInstituicoesDeEnsino();

            var results = Mapper.Map<IEnumerable<InstituicaoDeEnsinoDto>>(instituicoesEntities);

            return Ok(results);
        }

        [HttpGet("{id}", Name = "GetInstituicao")]
        public IActionResult GetInstituicao(int id)
        {
            var instituicaoEntity = _instituicaoDeEnsinoRepository.GetInstituicaoDeEnsino(id);

            var result = Mapper.Map<InstituicaoDeEnsinoDto>(instituicaoEntity);

            return Ok(result);
        }

        [HttpPost()]        
        public IActionResult AddInstituicaoDeEnsino(
            [FromBody] InstituicaoDeEnsinoCreationDto instituicaoDeEnsino)
        {
            if(instituicaoDeEnsino == null) return BadRequest();
            
            if(_instituicaoDeEnsinoRepository.InstituicaoDeEnsinoExist(instituicaoDeEnsino.Sigla, instituicaoDeEnsino.Nome))
            {
                return BadRequest("Já existe instituicao com esse nome ou sigla!");
            }

            if(!ModelState.IsValid) return BadRequest(ModelState);
            

            var finalInstituicaoDeEnsino = Mapper.Map<InstituicaoDeEnsino>(instituicaoDeEnsino);

            _instituicaoDeEnsinoRepository.AddInstituicaoDeEnsino(finalInstituicaoDeEnsino);

            if(!_instituicaoDeEnsinoRepository.Save())
            {
                return StatusCode(500, "Ocorreu um erro ao salvar.");
            }

            var createdInstituicao = Mapper.Map<InstituicaoDeEnsinoDto>(finalInstituicaoDeEnsino);

            return CreatedAtAction("GetInstituicao", new { IntituicaoDeEnsinoId = createdInstituicao.InstituicaoDeEnsinoId }, createdInstituicao);
        
        }

        [HttpPut("{id}")]
        public IActionResult UpdateInstituicao(int id,
            [FromBody] InstituicaoDeEnsinoForUpdateDto instituicao)
        {
            if (instituicao == null) return NotFound();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var instituicaoEntity = _instituicaoDeEnsinoRepository.GetInstituicaoDeEnsino(id);

            if (instituicaoEntity == null) return NotFound();

            Mapper.Map(instituicao, instituicaoEntity);

            if (!_instituicaoDeEnsinoRepository.Save())
            {
                return StatusCode(500, "Ocorreu um erro ao salvar.");
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult deleteInstituicaoById(int id) {
            
            var instituicao = _instituicaoDeEnsinoRepository.GetInstituicaoDeEnsino(id);

            if(instituicao == null)
            {
                return BadRequest("Não existe Instituição de Ensino com esse Id");
            }

            if(_instituicaoDeEnsinoRepository.IntituicaoDeEnsinoContainEstagiario(id)) 
            {
                return BadRequest("Não é possivel deletar uma instituição que contém estagiários");
            }

            _instituicaoDeEnsinoRepository.DeleteInstituicaoDeEnsino(instituicao);

            if(!_instituicaoDeEnsinoRepository.Save())
            {
                return StatusCode(500, "Ocorreu um erro ao salvar");
            }

            return NoContent();
        }
    }
}