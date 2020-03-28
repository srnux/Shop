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
}
