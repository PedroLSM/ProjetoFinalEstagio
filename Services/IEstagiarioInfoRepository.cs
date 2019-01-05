using System.Collections.Generic;
using Uni7_Estagio.Entidades;

namespace Uni7_Estagio.Services
{
    public interface IEstagiarioInfoRepository
    {
        IEnumerable<Estagiario> GetEstagiarios();
        Estagiario GetEstagiario(int Id);
        void AddEstagiario(Estagiario estagiario);
        void DeleteEstagiario(Estagiario estagiario);
        bool EstagiarioExists(int Id);
        bool Save();
    }
}