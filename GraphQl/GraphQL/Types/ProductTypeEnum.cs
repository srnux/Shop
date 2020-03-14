using GraphQL.Types;

namespace Shop.GraphQl.GraphQL.Types
{
    public class ProductTypeEnumType: EnumerationGraphType<Api.Data.ProductType>
    {
        public ProductTypeEnumType()
        {
            Name = "Type";
            Description = "The type of product";
        }
    }
}
