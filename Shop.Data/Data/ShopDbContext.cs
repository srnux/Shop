using System.Collections.Generic;
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
        public DbSet<MainCategory> MainCategory { get; set; }
        public DbSet<SubCategory> SubCategory { get; set; }
        public DbSet<ProductMainCategory> ProductMainCategory { get; set; }
        public DbSet<ProductSubCategory> ProductSubCategory { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductMainCategory>()
                .HasKey(bc => new { bc.ProductId, bc.MainCategoryId });
            modelBuilder.Entity<ProductMainCategory>()
                .HasOne(bc => bc.Product)
                .WithMany(b => b.ProductMainCategories)
                .HasForeignKey(bc => bc.ProductId);

            modelBuilder.Entity<ProductSubCategory>()
                .HasKey(bc => new { bc.ProductId, bc.SubCategoryId });
            modelBuilder.Entity<ProductSubCategory>()
                .HasOne(bc => bc.Product)
                .WithMany(b => b.ProductSubCategories)
                .HasForeignKey(bc => bc.ProductId);

        }

    }
}
