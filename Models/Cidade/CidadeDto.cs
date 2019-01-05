using Uni7_Estagio.Models.Estado;

namespace Uni7_Estagio.Models.Cidade
{
    public class CidadeDto
    {
        public int CidadeId { get; set; }

        public string Nome { get; set; }

        public EstadoDto Estado { get; set; }
    }
}