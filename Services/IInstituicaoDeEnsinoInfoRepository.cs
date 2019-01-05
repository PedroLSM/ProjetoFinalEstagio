using System.Collections.Generic;
using Uni7_Estagio.Entidades;

namespace Uni7_Estagio.Services
{
    public interface IInstituicaoDeEnsinoInfoRepository
    {
        bool InstituicaoDeEnsinoExist(string sigla, string nome);

        InstituicaoDeEnsino GetInstituicaoDeEnsino(int id);

        void AddInstituicaoDeEnsino(InstituicaoDeEnsino instituicaoDeEnsino);

        IEnumerable<InstituicaoDeEnsino> GetInstituicoesDeEnsino();

        void DeleteInstituicaoDeEnsino(InstituicaoDeEnsino instituicao);

        bool IntituicaoDeEnsinoContainEstagiario(int id);

        bool Save();
    }
}