using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Candidates",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    Prefix = table.Column<string>(type: "TEXT", nullable: false),
                    Lastname = table.Column<string>(type: "TEXT", nullable: false),
                    Searching = table.Column<bool>(type: "INTEGER", nullable: true),
                    Rate = table.Column<int>(type: "INTEGER", nullable: true),
                    Hours = table.Column<int>(type: "INTEGER", nullable: true),
                    Role = table.Column<string>(type: "TEXT", nullable: false),
                    Availability = table.Column<DateTime>(type: "TEXT", nullable: true),
                    PhoneNumber = table.Column<string>(type: "TEXT", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: false),
                    FileName = table.Column<string>(type: "TEXT", nullable: false),
                    AgreedTermsAndConditions = table.Column<bool>(type: "INTEGER", nullable: true),
                    AgreedTermsAndConditionsDate = table.Column<DateTime>(type: "TEXT", nullable: true),
                    KvkNummer = table.Column<int>(type: "INTEGER", nullable: true),
                    AssignmentSearchRadius = table.Column<int>(type: "INTEGER", nullable: true),
                    DiscountGuid = table.Column<Guid>(type: "TEXT", nullable: false),
                    Whatsapp = table.Column<bool>(type: "INTEGER", nullable: true),
                    DefaultMotivation = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidates", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Candidates");
        }
    }
}
