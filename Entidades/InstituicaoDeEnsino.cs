using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Uni7_Estagio.Entidades
{
    [Table ("Instituicao_de_Ensino")]
    public class InstituicaoDeEnsino
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int InstituicaoDeEnsinoId { get; set; }
        public string Sigla { get; set; }
        public string Nome { get; set; }
        public ICollection<Estagiario> Estagiarios { get; set; } = new List<Estagiario>();
    }
}