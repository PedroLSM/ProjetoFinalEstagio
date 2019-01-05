using System.ComponentModel.DataAnnotations;

namespace Uni7_Estagio.Models.Cidade
{
    public class CidadeCreationDto
    {
        [Required(ErrorMessage="Campo Nome é obrigatório")]
        public string Nome { get; set; }

        [Required(ErrorMessage="Campo EstadoId é obrigatório")]
        public int EstadoId { get; set; }
    }
}