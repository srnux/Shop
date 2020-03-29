using GraphQL;
using GraphQL.Types;
using Shop.Api.Data.Entities;
using Shop.Api.Repositories;
using Shop.GraphQl.Services;
using Shop.GraphQl.Types;

namespace Shop.GraphQl
{
    public class ShopMutation : ObjectGraphType
    {
        public ShopMutation(ProductRepository productRepository, ProductMessageService messageService)
        {
            FieldAsync<ProductType>(
                "createProduct",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<ProductInputType>> {Name = "product"}), 
               
                resolve: async context =>
                {
                    var product = context.GetArgument<Product>("product");
                    await productRepository.AddProduct(product);
                    messageService.ProductAddedMessage(product);
                    return product;
                });
        }
    }
}
