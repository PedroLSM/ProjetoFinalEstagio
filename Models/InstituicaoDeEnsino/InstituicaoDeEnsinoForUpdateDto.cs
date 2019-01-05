using System.ComponentModel.DataAnnotations;

namespace Uni7_Estagio.Models.InstituicaoDeEnsino
{
    public class InstituicaoDeEnsinoForUpdateDto
    {
        [Required(ErrorMessage="Campo sigla é obrigatório")]
        [MaxLength(8)]
        public string Sigla { get; set; }
        
        [Required(ErrorMessage="Campo nome é obrigatório")]
        public string Nome { get; set; }
    }
}