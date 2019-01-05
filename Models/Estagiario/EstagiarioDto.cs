using System;
using System.Globalization;
using AutoMapper;
using Uni7_Estagio.Models.Cidade;
using Uni7_Estagio.Models.InstituicaoDeEnsino;
using Uni7_Estagio.Services;

namespace ProjetoFinal.Models.Estagiario
{
    public class EstagiarioDto
    {
        public int EstagiarioId { get; set; }
        public string Nome { get; set; }
        public DateTime DataNascimento { private get; set; }
        public string DataNasc
        {
            get
            {
                return DataNascimento
                    .ToString("d", CultureInfo.CreateSpecificCulture("pt-BR"));
            }
        }
        public CidadeDto Cidade { get; set; }
        public InstituicaoDeEnsinoDto InstituicaoDeEnsino { get; set; }
    }
}