using Microsoft.EntityFrameworkCore;
using Shop.Api.Data.Entities;

namespace Shop.Api.Data
{
    public class ShopDbContext: DbContext
    {
        public ShopDbContext(DbContextOptions<ShopDbContext> options): base(options)
        {
            
        }
        public DbSet<Product> Products { get; set; }
    }
}
