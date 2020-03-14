using System;

namespace Shop.Function.Infrastructure
{
    internal class GraphQLBadRequestException : Exception
    {
        public GraphQLBadRequestException(string message)
            : base(message)
        { }
    }
}
