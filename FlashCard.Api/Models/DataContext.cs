using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlashCard.Api.Models
{
    public class DataContext : DbContext

    {
        public DataContext()        {        }
        public DataContext(DbContextOptions<DataContext> opts) : base(opts)        {        }

        public DbSet<Card> Cards { get; set; }
        public DbSet<Topic> Topics { get; set; }
    }
}
