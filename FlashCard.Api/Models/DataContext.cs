using Microsoft.EntityFrameworkCore;

namespace FlashCard.Api.Models
{
    public class DataContext : DbContext

    {
        public DataContext()        {        }
        public DataContext(DbContextOptions<DataContext> opts) : base(opts)        {        }
        public DbSet<Card> Cards { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<QuizTake> QuizTakes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QuizQuestion>()
                .HasKey(bc => new { bc.QuizId, bc.QuestionId});

            modelBuilder.Entity<QuizQuestion>()
                .HasOne(bc => bc.Quiz)
                .WithMany(b => b.Questions)
                .HasForeignKey(bc => bc.QuestionId);
          
        }
    }


}
