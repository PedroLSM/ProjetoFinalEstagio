using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Entidades.Context;

namespace Uni7_Estagio
{
    public static class EstagiarioInfoContextExtensions
    {
        public static void GarantirDadosDeEstagiarioParaBanco(this ProjetoContext pc){
            if(pc.Estagiario.Any()){
                return;
            }

            var estagiarios = new List<Estagiario>(){
                new Estagiario(){
                    CidadeId = 3,
                    InstituicaoDeEnsinoId = 2,
                    Nome = "Pedro Lucas",
                    DataNascimento = DateTime.ParseExact("30/06/2001", "dd/MM/yyyy", CultureInfo.InvariantCulture)
                },
                new Estagiario(){
                    CidadeId = 3,
                    InstituicaoDeEnsinoId = 3,
                    Nome = "Gustavo Sampaio",
                    DataNascimento = DateTime.ParseExact("10/03/2002", "dd/MM/yyyy", CultureInfo.InvariantCulture)
                }
            };

            pc.Estagiario.AddRange(estagiarios);
            pc.SaveChanges();
        }
    }
}