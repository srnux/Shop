using System;
using GraphQL.Types;
using GraphQL.Utilities;

namespace Shop.GraphQl
{
    public class ShopSchema: Schema
    {
        public ShopSchema(IServiceProvider provider): base(provider)
        {           
            Query = provider.GetRequiredService<ShopQuery>();
            Mutation = provider.GetRequiredService<ShopMutation>();
            Subscription = provider.GetRequiredService<ShopSubscription>();
        }
    }
}
