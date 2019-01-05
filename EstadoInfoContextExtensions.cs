using System.Collections.Generic;
using System.Linq;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Entidades.Context;

namespace Uni7_Estagio {
    
    public static class EstadoInfoContextExtensions {

        public static void GarantirDadosDeEstadoParaBanco(this ProjetoContext pc) {

            if (pc.Estado.Any())
            {
                return;
            }

            var estados = new List<Estado>() {
                new Estado() 
                {
                    
                    UF = "CE",
                    Nome = "Ceará",
                },
                
                new Estado()
                {
                    UF = "RJ",
                    Nome = "Rio de Janeiro"
                },

                new Estado()
                {
                    UF = "SP",
                    Nome = "SAO PAULO"
                },

                new Estado()
                {
                    UF = "PE",
                    Nome = "Pernambuco"
                },

                new Estado()
                {
                    UF = "RN",
                    Nome = "Rio Grande do Norte"
                }
            };

            pc.Estado.AddRange(estados);
            pc.SaveChanges();
        }
    }
}