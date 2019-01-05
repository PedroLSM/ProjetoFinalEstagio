using System.ComponentModel.DataAnnotations;

namespace Uni7_Estagio.Models.Estado
{
    public class EstadoForUpdateDto
    {
        [Required(ErrorMessage="Campo UF é obrigatório")]
        [MaxLength(2)]
        public string UF { get; set; }

        [Required(ErrorMessage="Campo Nome é obrigatório")]
        public string Nome { get; set; }
    }
}