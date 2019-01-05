using System.Collections.Generic;
using System.Linq;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Entidades.Context;
using Microsoft.EntityFrameworkCore;

namespace Uni7_Estagio.Services
{
    public class EstagiarioInfoRepository : IEstagiarioInfoRepository
    {   
        ProjetoContext _projetoCtx;
        ICidadeInfoRepository _cidadeCtx;
        public EstagiarioInfoRepository(ProjetoContext projetoContext, ICidadeInfoRepository cidadeContext)
        {
            _projetoCtx = projetoContext;
            _cidadeCtx = cidadeContext;
        }

        public void AddEstagiario(Estagiario estagiario)
        {
            _projetoCtx.Estagiario.Add(estagiario);
        }

        public void DeleteEstagiario(Estagiario estagiario)
        {
            _projetoCtx.Estagiario.Remove(estagiario);
        }

        public bool EstagiarioExists(int Id)
        {
            return _projetoCtx.Estagiario.Any(c => c.EstagiarioId == Id);
        }

        public Estagiario GetEstagiario(int Id)
        {
            var estagiario = _projetoCtx.Estagiario
                .Where(e => e.EstagiarioId == Id)
                .Include(c => c.Cidade)
                .Include(i => i.InstituicaoDeEnsino)
                .FirstOrDefault();
            
            estagiario.Cidade = _cidadeCtx.GetCidade(estagiario.CidadeId);

            return estagiario;
        }

        public IEnumerable<Estagiario> GetEstagiarios()
        {
            var estagiarios = _projetoCtx.Estagiario
                .Include(c => c.Cidade)
                .Include(i => i.InstituicaoDeEnsino)
                .ToList();
                
            foreach (var e in estagiarios)
            {
                e.Cidade = _cidadeCtx.GetCidade(e.CidadeId);
            }

            return estagiarios;
        }

        public bool Save()
        {
            return (_projetoCtx.SaveChanges() >= 0);
        }
    }
}