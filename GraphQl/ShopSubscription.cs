using GraphQL.Resolvers;
using GraphQL.Types;
using Shop.GraphQl.Services;
using Shop.GraphQl.Types;

namespace Shop.GraphQl
{
    public class ShopSubscription: ObjectGraphType
    {
        public ShopSubscription(ProductMessageService messageService)
        {
            Name = "Subscription";
            AddField(new EventStreamFieldType
            {
                Name = "productAdded",
                Type = typeof(ProductAddedMessageType),
                Resolver = new FuncFieldResolver<ProductAddedMessage>(c => c.Source as ProductAddedMessage),
                Subscriber = new EventStreamResolver<ProductAddedMessage>(c => messageService.GetMessages())
            });
        }
    }
}
