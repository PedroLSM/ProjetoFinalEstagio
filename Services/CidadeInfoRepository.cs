using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Entidades.Context;

namespace Uni7_Estagio.Services
{
    public class CidadeInfoRepository : ICidadeInfoRepository
    {
        private ProjetoContext _context;
        public CidadeInfoRepository(ProjetoContext context)
        {
            _context = context;
        }

        public void AddCidade(Cidade Cidade)
        {
            _context.Cidade.Add(Cidade);
        }

        public bool CidadeExist(string cidadeNome)
        {
            return _context.Cidade.Any(c => c.Nome == cidadeNome);
        }

        public void DeleteCidade(Cidade Cidade)
        {
            _context.Cidade.Remove(Cidade);
        }

        public bool EstadoExist(int EstadoId)
        {
            return _context.Estado.Any(e => e.EstadoId == EstadoId);
        }

        public Cidade GetCidade(int Id)
        {
            return _context.Cidade
                        .Where(c => c.CidadeId == Id)
                        .Include(e => e.Estado)
                        .FirstOrDefault();
        }

        public IEnumerable<Cidade> GetCidades()
        {
            return _context.Cidade
                        .OrderBy(c => c.CidadeId)
                        .Include(e => e.Estado)
                        .ToList();
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
