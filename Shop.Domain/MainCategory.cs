﻿namespace Shop.Api.Data.Entities
{
    public class MainCategory : ICategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}