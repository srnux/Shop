using System;
using GraphQL.Types;
using GraphQL.Utilities;

namespace Shop.GraphQl.GraphQL
{
    public class ShopSchema: Schema
    {
        public ShopSchema(IServiceProvider provider): base(provider)
        {           
            Query = provider.GetRequiredService<ShopQuery>(); 
        }
    }
}
