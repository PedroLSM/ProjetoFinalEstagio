using System.Collections.Generic;
using System.Linq;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Entidades.Context;

namespace Uni7_Estagio.Services
{
    public class InstituicaoDeEnsinoInfoRepository : IInstituicaoDeEnsinoInfoRepository
    {
        private ProjetoContext _context;
        public InstituicaoDeEnsinoInfoRepository(ProjetoContext context)
        {
            _context = context;
        }

        public void AddInstituicaoDeEnsino(InstituicaoDeEnsino instituicaoDeEnsino)
        {
            _context.InstituicaoDeEnsino.Add(instituicaoDeEnsino);
        }

        public InstituicaoDeEnsino GetInstituicaoDeEnsino(int id)
        {
            return _context.InstituicaoDeEnsino
                    .Where(i => i.InstituicaoDeEnsinoId == id)
                    .FirstOrDefault();
        }

        public IEnumerable<InstituicaoDeEnsino> GetInstituicoesDeEnsino()
        {
            return _context.InstituicaoDeEnsino.ToList();
        }

        public bool InstituicaoDeEnsinoExist(string sigla, string nome)
        {
            return _context.InstituicaoDeEnsino.Any(i => i.Sigla == sigla || i.Nome == nome);
        }

        public void DeleteInstituicaoDeEnsino(InstituicaoDeEnsino instituicao)
        {
            _context.InstituicaoDeEnsino.Remove(instituicao);
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }

        public bool IntituicaoDeEnsinoContainEstagiario(int id)
        {
            return( _context.Estagiario
                        .Where(e => e.InstituicaoDeEnsinoId == id)
                        .Count() > 0);
        }
    }
}