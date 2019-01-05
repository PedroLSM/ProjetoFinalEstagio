﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Uni7_Estagio.Entidades.Context;

namespace ProjetoFinal.Migrations
{
    [DbContext(typeof(ProjetoContext))]
    [Migration("20181227162813_AlterandoTabelaIdadeDeEstagiario")]
    partial class AlterandoTabelaIdadeDeEstagiario
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Uni7_Estagio.Entidades.Cidade", b =>
                {
                    b.Property<int>("CidadeId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("EstadoId");

                    b.Property<string>("Nome");

                    b.HasKey("CidadeId");

                    b.HasIndex("EstadoId");

                    b.ToTable("Cidade");
                });

            modelBuilder.Entity("Uni7_Estagio.Entidades.Estado", b =>
                {
                    b.Property<int>("EstadoId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nome");

                    b.Property<string>("UF");

                    b.HasKey("EstadoId");

                    b.ToTable("Estado");
                });

            modelBuilder.Entity("Uni7_Estagio.Entidades.Estagiario", b =>
                {
                    b.Property<int>("EstagiarioId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CidadeId");

                    b.Property<DateTime>("DataNascimento");

                    b.Property<int>("InstituicaoDeEnsinoId");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(45);

                    b.HasKey("EstagiarioId");

                    b.HasIndex("CidadeId");

                    b.HasIndex("InstituicaoDeEnsinoId");

                    b.ToTable("Estagiário");
                });

            modelBuilder.Entity("Uni7_Estagio.Entidades.InstituicaoDeEnsino", b =>
                {
                    b.Property<int>("InstituicaoDeEnsinoId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nome");

                    b.Property<string>("Sigla");

                    b.HasKey("InstituicaoDeEnsinoId");

                    b.ToTable("Instituicao_de_Ensino");
                });

            modelBuilder.Entity("Uni7_Estagio.Entidades.Cidade", b =>
                {
                    b.HasOne("Uni7_Estagio.Entidades.Estado", "Estado")
                        .WithMany("Cidades")
                        .HasForeignKey("EstadoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Uni7_Estagio.Entidades.Estagiario", b =>
                {
                    b.HasOne("Uni7_Estagio.Entidades.Cidade", "Cidade")
                        .WithMany("Estagiarios")
                        .HasForeignKey("CidadeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Uni7_Estagio.Entidades.InstituicaoDeEnsino", "InstituicaoDeEnsino")
                        .WithMany("Estagiarios")
                        .HasForeignKey("InstituicaoDeEnsinoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
