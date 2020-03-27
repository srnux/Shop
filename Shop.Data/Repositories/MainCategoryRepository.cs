﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shop.Api.Data;
using Shop.Api.Data.Entities;

namespace Shop.Api.Repositories
{
    public class MainCategoryRepository
    {
        private readonly ShopDbContext _dbContext;

        public MainCategoryRepository(ShopDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<List<MainCategory>> GetAll()
        {
            return _dbContext.MainCategory.ToListAsync();
        }

        //public Task<List<MainCategory>> GetMainCategoriesForProduct(string productId)
        //{
        //    return _dbContext.ProductMainCategory
        //        .Where(p => p.ProductId == productId)
        //        .Select(p=>p.MainCategory).ToListAsync();
        //}

        public List<MainCategory> GetMainCategoriesForProduct(string productId)
        {
            return _dbContext.ProductMainCategory
                .Where(p => p.ProductId == productId)
                .Select(p => p.MainCategory).ToList();
        }
        //public Task<MainCategories> GetMainCategoryForCategory(int categoriesId)
        //{
        //    return _dbContext.MainCategories.FirstOrDefaultAsync(p => p.Id == categoriesId);
        //}
    }
}