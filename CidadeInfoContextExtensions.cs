using System.Collections.Generic;
using System.Linq;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Entidades.Context;

namespace Uni7_Estagio
{
    public static class CidadeInfoContextExtensions
    {

        public static void GarantirDadosDeCidadesParaBanco(this ProjetoContext pc)
        {

            if (pc.Cidade.Any())
            {
                return;
            }

            var cidades = new List<Cidade>() {
                new Cidade()
                {
                    Nome = "Fortaleza",
                    EstadoId = 1
                },

                new Cidade()
                {
                    Nome = "Rio de Janeiro",
                    EstadoId = 2
                },

                new Cidade()
                {
                    Nome = "São Paulo",
                    EstadoId = 3
                },

                new Cidade()
                {
                    Nome = "Recife",
                    EstadoId = 4
                },

                new Cidade()
                {
                    Nome = "Natal",
                    EstadoId = 5
                }
            };

            pc.Cidade.AddRange(cidades);
            pc.SaveChanges();
        }
    }
}