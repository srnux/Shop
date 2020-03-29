using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shop.Api.Data;
using Shop.Api.Data.Entities;

namespace Shop.Api.Repositories
{
    public class ProductRepository
    {
        private readonly ShopDbContext _dbContext;

        public ProductRepository(ShopDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Product>> GetAll()
        {
            return await _dbContext.Products.ToListAsync();
        }

        public async Task<Product> GetProductAsync(string id)
        {
            return await _dbContext.Products.SingleOrDefaultAsync(p=>p.Id==id);
        }
        public Product GetProduct(string id)
        {
            return _dbContext.Products.SingleOrDefault(p => p.Id == id);
        }
        
        public async Task<Product> AddProduct(Product product)
        {
            _dbContext.Products.Add(product);
            await _dbContext.SaveChangesAsync();
            return product;
        }
    }
}
