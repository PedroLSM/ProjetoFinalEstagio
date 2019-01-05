using System.Collections.Generic;
using Uni7_Estagio.Entidades;

namespace Uni7_Estagio.Services
{
    public interface ICidadeInfoRepository
    {
        IEnumerable<Cidade> GetCidades();
        Cidade GetCidade(int Id);
        bool CidadeExist(string cidadeNome);
        bool EstadoExist(int estadoId);
        void AddCidade(Cidade Cidade);
        void DeleteCidade(Cidade Cidade);

        bool Save();
    }
}