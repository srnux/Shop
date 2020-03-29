using System;
using System.Reactive.Linq;
using System.Reactive.Subjects;
using Shop.Api.Data.Entities;

namespace Shop.GraphQl.Services
{
    public class ProductMessageService
    {
        private readonly ISubject<ProductAddedMessage> _messageStream = new ReplaySubject<ProductAddedMessage>(1);

        public ProductAddedMessage ProductAddedMessage(Product product)
        {
            var message = new ProductAddedMessage
            {
                ProductId = product.Id,
                DisplayName = product.DisplayName,
                Gtin = product.Gtin
            };
            _messageStream.OnNext(message);
            return message;
        }

        public IObservable<ProductAddedMessage> GetMessages()
        {
            return _messageStream.AsObservable();
        }
    }
}
