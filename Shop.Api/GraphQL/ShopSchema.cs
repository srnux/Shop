using GraphQL;
using GraphQL.Types;

namespace Shop.Api.GraphQL
{
    public class ShopSchema: Schema
    {
        public ShopSchema(IDependencyResolver resolver): base(resolver)
        {           
            Query = resolver.Resolve<ShopQuery>();
        }
    }
}
