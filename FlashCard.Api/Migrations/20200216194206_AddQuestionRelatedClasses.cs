using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FlashCard.Api.Migrations
{
    public partial class AddQuestionRelatedClasses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CodeSnippet",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "References",
                table: "Questions");

            migrationBuilder.AddColumn<int>(
                name: "AllowedTimeToAnswer",
                table: "Questions",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "QuizId",
                table: "Questions",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Quizes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    NumberOfQuestions = table.Column<int>(nullable: false),
                    TimeToComplete = table.Column<int>(nullable: false),
                    PassingScore = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quizes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Token = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "QuizTakes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartedOn = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<int>(nullable: true),
                    Score = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QuizTakes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_QuizTakes_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserResponse",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QuestionId = table.Column<int>(nullable: false),
                    AnswerId = table.Column<int>(nullable: false),
                    QuizTakeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserResponse", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserResponse_Answers_AnswerId",
                        column: x => x.AnswerId,
                        principalTable: "Answers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserResponse_Questions_QuestionId",
                        column: x => x.QuestionId,
                        principalTable: "Questions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserResponse_QuizTakes_QuizTakeId",
                        column: x => x.QuizTakeId,
                        principalTable: "QuizTakes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Questions_QuizId",
                table: "Questions",
                column: "QuizId");

            migrationBuilder.CreateIndex(
                name: "IX_QuizTakes_UserId",
                table: "QuizTakes",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserResponse_AnswerId",
                table: "UserResponse",
                column: "AnswerId");

            migrationBuilder.CreateIndex(
                name: "IX_UserResponse_QuestionId",
                table: "UserResponse",
                column: "QuestionId");

            migrationBuilder.CreateIndex(
                name: "IX_UserResponse_QuizTakeId",
                table: "UserResponse",
                column: "QuizTakeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Quizes_QuizId",
                table: "Questions",
                column: "QuizId",
                principalTable: "Quizes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Quizes_QuizId",
                table: "Questions");

            migrationBuilder.DropTable(
                name: "Quizes");

            migrationBuilder.DropTable(
                name: "UserResponse");

            migrationBuilder.DropTable(
                name: "QuizTakes");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropIndex(
                name: "IX_Questions_QuizId",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "AllowedTimeToAnswer",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "QuizId",
                table: "Questions");

            migrationBuilder.AddColumn<string>(
                name: "CodeSnippet",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "References",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
