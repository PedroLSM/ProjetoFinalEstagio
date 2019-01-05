using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Uni7_Estagio.Entidades
{
    [Table ("Cidade")]
    public class Cidade
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CidadeId { get; set; }
        public string Nome { get; set; }

        public ICollection<Estagiario> Estagiarios { get; set; } = new List<Estagiario>();

        [ForeignKey("EstadoId")]
        public int EstadoId { get; set; }
        public Estado Estado { get; set; }
    }
}