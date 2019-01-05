
using System.Collections.Generic;
using System.Linq;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Entidades.Context;

namespace Uni7_Estagio.Services
{
    public class EstadoInfoRepository: IEstadoInfoRepository
    {
        private ProjetoContext _context;

        public EstadoInfoRepository(ProjetoContext context)
        {
            _context = context;
        }

        public bool EstadoExist(string uf, string nome)
        {
            return _context.Estado.Any(e => e.UF == uf || e.Nome == nome);
        }

        public void AddEstado(Estado estado)
        {
            _context.Estado.Add(estado);
        }

        public void DeleteEstado(Estado estado)
        {
            _context.Estado.Remove(estado);
        }

        public IEnumerable<Estado> GetEstados() {
            return _context.Estado.OrderBy(e => e.EstadoId).ToList();
        }
        public Estado GetEstado(int Id)
        {
            return _context.Estado.Where(e => e.EstadoId == Id).FirstOrDefault();
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }

        public int CountCidadeExistsInEstado(int EstadoId)
        {
            return _context.Cidade
                    .Where(c => c.EstadoId == EstadoId)
                    .Count();
        }
    }
}