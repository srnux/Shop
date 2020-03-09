using GraphQL.Types;
using Shop.Api.GraphQL.Types;
using Shop.Api.Repositories;

namespace Shop.Api.GraphQL
{
    public class ShopQuery: ObjectGraphType
    {
        public ShopQuery(ProductRepository productRepository)
        {
            Field<ListGraphType<ProductType>>(
                "products", 
                resolve: context => productRepository.GetAll()
            );
            Field<ProductType>("product",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>> {Name = "id"}),
                resolve: context =>
                {
                    var id = context.GetArgument<string>("id");
                    return productRepository.GetProduct(id);
                }
            );
        }
    }
}
