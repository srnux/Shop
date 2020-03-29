using GraphQL.Types;
using Shop.GraphQl.Services;

namespace Shop.GraphQl.Types
{
    public class ProductAddedMessageType: ObjectGraphType<ProductAddedMessage>
    {
        public ProductAddedMessageType()
        {
            Field(t => t.ProductId);
            Field(t => t.DisplayName);
            Field(t => t.Gtin);
        }
    }
}
