using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop.Api.Data.Entities
{
    public class Product
    {
        public string Id { get; set; }
        public string Gtin { get; set; }
        public string Upc { get; set; }
        public List<Url> Urls { get; set; }
        public string DisplayName { get; set; }
        public string ProductSlogan { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }
        public string Currency { get; set; }
        public string CurrencySymbol { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal GrossPrice { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal PricePerHundred { get; set; }
        public bool IsPromoPrice { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal CurrentPromotionDiscount { get; set; }
        public string Unit { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal SizePerUnit { get; set; }
        public int MinOrderQuantity { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Size { get; set; }
        public bool OnlineFlag { get; set; }
        public DateTime OnlineFrom { get; set; }
        public DateTime ExpiryDate { get; set; }
        public Multimedia Multimedia { get; set; }
        public DateTime NewUntil { get; set; }
        public bool IsExclusive { get; set; }
        public int StockLevel { get; set; }
        public string Brand { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal ShippingCosts { get; set; }
        public int Rating { get; set; }
        public IEnumerable<ProductMainCategory> ProductMainCategories { get; set; }
        public IEnumerable<ProductSubCategory> ProductSubCategories { get; set; }
    }

    public class Url
    {
        public int Id { get; set; }
        public string Path { get; set; } 
        public string Description { get; set; }
    }

    public class Image
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public string Description { get; set; }
    }
    public class Video
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public string Description { get; set; }
    }

    public class Multimedia
    {
        public int Id { get; set; }
        public List<Image> Images { get; set; }
        public List<Video> Videos { get; set; }
    }

    public interface ICategory
    {
        int Id { get; set; }
        string Name { get; set; }
        string Description { get; set; }
    }

    public class ProductMainCategory
    {
        public string ProductId { get; set; }
        public int MainCategoryId { get; set; }
        public Product Product { get; set; }
        public MainCategory MainCategory { get; set; }
    }

    public class ProductSubCategory
    {
        public string ProductId { get; set; }
        public int SubCategoryId { get; set; }
        public Product Product { get; set; }
        public SubCategory SubCategory { get; set; }
    }

    public class MainCategory : ICategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class SubCategory:ICategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
