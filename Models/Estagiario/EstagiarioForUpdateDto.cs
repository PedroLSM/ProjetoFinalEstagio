using System;
using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace ProjetoFinal.Models.Estagiario
{
    public class EstagiarioForUpdateDto
    {
        [Required(ErrorMessage = "Nome é requerido.")]
        [MaxLength(45, ErrorMessage = "Nome tem que ter no máximo 50 caracteres.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Data de Nascimento é requerido.")]
        public string DataNasc { get; set;}

        public DateTime DataNascimento { 
            get => DateTime.ParseExact(DataNasc, "dd/MM/yyyy", CultureInfo.InvariantCulture);
        }

        [Required(ErrorMessage = "Cidade é requerido.")]
        public int CidadeId { get; set; }

        [Required(ErrorMessage = "Instituição de Ensino é requerido.")]
        public int InstituicaoDeEnsinoId { get; set; }
    }
}