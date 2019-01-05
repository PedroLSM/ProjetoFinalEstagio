using System.Collections.Generic;
using System.Linq;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Entidades.Context;

namespace Uni7_Estagio {
    public static class InstituicaoInfoContextExtensions {

        public static void GarantirDadosDeInstituicaoParaBanco(this ProjetoContext pc) {

            if (pc.InstituicaoDeEnsino.Any())
            {
                return;
            }

            var instituicoes = new List<InstituicaoDeEnsino>() {
                new InstituicaoDeEnsino() 
                {
                    
                    Sigla = "UECE",
                    Nome = "Universidade Estadual do Ceará",
                },
                 
                new InstituicaoDeEnsino()
                {
                    Sigla = "IFCE",
                    Nome = "Instituto Federal do Ceará"
                },

                new InstituicaoDeEnsino()
                {
                    Sigla = "UFC",
                    Nome = "Universidade Federal do Ceará"
                },

                new InstituicaoDeEnsino()
                {
                    Sigla = "Uni7",
                    Nome = "Faculdade 7 de Setembro"
                },

                new InstituicaoDeEnsino()
                {
                    Sigla = "LMB",
                    Nome = "EEEP Leonel de Moura Brizola"
                }
            };

            pc.InstituicaoDeEnsino.AddRange(instituicoes);
            pc.SaveChanges();
        }
    }
}