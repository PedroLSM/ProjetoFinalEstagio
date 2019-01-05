using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using ProjetoFinal.Models.Estagiario;

using Uni7_Estagio;
using Uni7_Estagio.Entidades;
using Uni7_Estagio.Entidades.Context;
using Uni7_Estagio.Models.Cidade;
using Uni7_Estagio.Models.InstituicaoDeEnsino;
using Uni7_Estagio.Models.Estado;
using Uni7_Estagio.Services;

namespace ProjetoFinal
{
    public class Startup
    {
    
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            var connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            services.AddDbContext<ProjetoContext>( o => o.UseSqlServer(connectionString));


            services.AddScoped<IEstadoInfoRepository, EstadoInfoRepository>();
            services.AddScoped<ICidadeInfoRepository, CidadeInfoRepository>();
            services.AddScoped<IInstituicaoDeEnsinoInfoRepository, InstituicaoDeEnsinoInfoRepository>();
            services.AddScoped<IEstagiarioInfoRepository, EstagiarioInfoRepository>();
            

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ProjetoContext pc)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            pc.GarantirDadosDeInstituicaoParaBanco();
            pc.GarantirDadosDeEstadoParaBanco();
            pc.GarantirDadosDeCidadesParaBanco();
            pc.GarantirDadosDeEstagiarioParaBanco();

            AutoMapper.Mapper.Initialize(config => {
                config.CreateMap<InstituicaoDeEnsino, InstituicaoDeEnsinoDto>();
                config.CreateMap<InstituicaoDeEnsinoCreationDto, InstituicaoDeEnsino>();
                config.CreateMap<InstituicaoDeEnsinoForUpdateDto, InstituicaoDeEnsino>();
                config.CreateMap<InstituicaoDeEnsino, InstituicaoDeEnsinoForUpdateDto>();
                
                config.CreateMap<Cidade, CidadeDto>();
                config.CreateMap<CidadeCreationDto, Cidade>();
                config.CreateMap<CidadeForUpdateDto, Cidade>();
                config.CreateMap<Cidade, CidadeForUpdateDto>();

                config.CreateMap<Estagiario, EstagiarioDto>();
                config.CreateMap<EstagiarioCreationDto, Estagiario>();
                config.CreateMap<EstagiarioForUpdateDto, Estagiario>();
                config.CreateMap<Estagiario, EstagiarioForUpdateDto>();

                config.CreateMap<Estado, EstadoDto>();
                config.CreateMap<EstadoCreationDto, Estado>();
                config.CreateMap<EstadoForUpdateDto, Estado>();
                config.CreateMap<Estado, EstadoForUpdateDto>();

            });

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
