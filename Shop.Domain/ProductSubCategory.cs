namespace Shop.Api.Data.Entities
{
    public class ProductSubCategory
    {
        public string ProductId { get; set; }
        public int SubCategoryId { get; set; }
        public Product Product { get; set; }
        public SubCategory SubCategory { get; set; }
    }
}