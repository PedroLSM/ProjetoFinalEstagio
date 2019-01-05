using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Uni7_Estagio.Entidades
{
    [Table ("Estado")]
    public class Estado
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EstadoId { get; set; }
        public string UF { get; set; }
        public string Nome { get; set; }
        public ICollection<Cidade> Cidades { get; set; } = new List<Cidade>();
    }
}