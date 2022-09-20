using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class ProposalStatusChanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Proposals");

            migrationBuilder.AddColumn<string>(
                name: "ProposalStatus",
                table: "Proposals",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProposalStatus",
                table: "Proposals");

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Proposals",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
