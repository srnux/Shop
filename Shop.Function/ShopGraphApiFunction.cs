using System;
using System.IO;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Server.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Shop.Function.Infrastructure;
using Shop.GraphQl.GraphQL;

namespace Shop.Function
{
    public class ShopGraphApiFunction
    {
        private readonly IGraphQLExecuter<ShopSchema> _graphQLExecuter;

        public ShopGraphApiFunction(IGraphQLExecuter<ShopSchema> graphQLExecuter)
        {
            _graphQLExecuter = graphQLExecuter ?? throw new ArgumentNullException(nameof(graphQLExecuter));
        }

        [FunctionName("ShopGraphApiFunction")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest request,
            ILogger logger)
        {
            try
            {
                ExecutionResult executionResult = await _graphQLExecuter.ExecuteAsync(request);

                if (executionResult.Errors != null)
                {
                    logger.LogError("GraphQL execution error(s): {Errors}", executionResult.Errors);
                }

                return new GraphQLExecutionResult(executionResult);
            }
            catch (GraphQLBadRequestException ex)
            {
                return new BadRequestObjectResult(new { message = ex.Message });
            }
        }
    }
}
