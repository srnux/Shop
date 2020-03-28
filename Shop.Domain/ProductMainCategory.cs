namespace Shop.Api.Data.Entities
{
    public class ProductMainCategory
    {
        public string ProductId { get; set; }
        public int MainCategoryId { get; set; }
        public Product Product { get; set; }
        public MainCategory MainCategory { get; set; }
    }
}