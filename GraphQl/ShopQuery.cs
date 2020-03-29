using GraphQL;
using GraphQL.Types;
using Shop.Api.Repositories;
using Shop.GraphQl.Types;

namespace Shop.GraphQl
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
                    return productRepository.GetProduct(id);//forced to use sync version 
                }
            );
        }
    }
}
