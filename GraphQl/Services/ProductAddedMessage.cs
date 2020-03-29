namespace Shop.GraphQl.Services
{
    public class ProductAddedMessage
    {
        public string ProductId { get; set; }
        public string DisplayName { get; set; }
        public string Gtin { get; set; }
    }
}
