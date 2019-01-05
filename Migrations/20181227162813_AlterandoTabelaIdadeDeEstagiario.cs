using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetoFinal.Migrations
{
    public partial class AlterandoTabelaIdadeDeEstagiario : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Idade",
                table: "Estagiário");

            migrationBuilder.AddColumn<DateTime>(
                name: "DataNascimento",
                table: "Estagiário",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataNascimento",
                table: "Estagiário");

            migrationBuilder.AddColumn<int>(
                name: "Idade",
                table: "Estagiário",
                nullable: false,
                defaultValue: 0);
        }
    }
}
