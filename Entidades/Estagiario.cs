using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Uni7_Estagio.Entidades
{
    [Table("Estagiário")]
    public class Estagiario
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EstagiarioId { get; set; }

        [Required]
        [MaxLength(45)]
        public string Nome { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Date)]
        public DateTime DataNascimento { get; set; }

        [ForeignKey("CidadeId")]
        public int CidadeId { get; set; }
        public Cidade Cidade { get; set; }

        [ForeignKey("InstituicaoDeEnsinoId")]
        public int InstituicaoDeEnsinoId { get; set; }
        public InstituicaoDeEnsino InstituicaoDeEnsino { get; set; }

    }
}