using Microsoft.EntityFrameworkCore;

namespace Uni7_Estagio.Entidades.Context
{
    public class ProjetoContext: DbContext
    {
        public ProjetoContext (DbContextOptions<ProjetoContext> options) 
        : base(options)
        {
            Database.Migrate();
        }

        public DbSet<Estagiario> Estagiario { get; set; }
        public DbSet<Cidade> Cidade { get; set; }
        public DbSet<Estado> Estado { get; set; }
        public DbSet<InstituicaoDeEnsino> InstituicaoDeEnsino { get; set; }
    }
}