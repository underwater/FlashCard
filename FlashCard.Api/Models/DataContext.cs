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
    }
}
