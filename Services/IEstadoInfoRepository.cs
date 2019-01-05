using System.Collections.Generic;
using Uni7_Estagio.Entidades;

namespace Uni7_Estagio.Services
{
    public interface IEstadoInfoRepository
    {
        IEnumerable<Estado> GetEstados();
        Estado GetEstado(int Id);
        bool EstadoExist(string uf, string nome);
        void AddEstado(Estado estado);
        void DeleteEstado(Estado estado);
        int CountCidadeExistsInEstado(int EstadoId);
        bool Save();
    }
}