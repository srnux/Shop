using System;
using GraphQL;
using GraphQL.NewtonsoftJson;
using GraphQL.Server;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Shop.Api.Data;
using Shop.Api.Repositories;
using Shop.Data.Repositories;
using Shop.GraphQl;
using Shop.GraphQl.Services;
using Shop.GraphQl.Types;
using ProductType = Shop.GraphQl.Types.ProductType;

[assembly: FunctionsStartup(typeof(Shop.Function.Startup))]
namespace Shop.Function
{
    public class Startup:FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddDbContext<ShopDbContext>(options =>
                options.UseSqlServer(Environment.GetEnvironmentVariable("ShopConnectionString") ));

            builder.Services.AddScoped<ProductRepository>();
            builder.Services.AddScoped<MainCategoryRepository>();

            builder.Services.AddSingleton<IDocumentExecuter>(new DocumentExecuter());

            builder.Services.AddSingleton<IDocumentWriter>(sp => new DocumentWriter());
            builder.Services.AddScoped<ShopSchema>();
            builder.Services.AddScoped<ShopQuery>();
            builder.Services.AddScoped<ShopMutation>();
            builder.Services.AddScoped<ShopSubscription>();
            builder.Services.AddSingleton<ProductMessageService>();

            builder.Services.AddScoped<ProductType>();
            builder.Services.AddScoped<MainCategoryType>();
            builder.Services.AddScoped<ProductInputType>();
            builder.Services.AddScoped<ProductAddedMessageType>();

            builder.Services.AddGraphQL(o => { o.ExposeExceptions = false; })
                .AddGraphTypes(ServiceLifetime.Scoped)
                .AddDataLoader();
        }

    }
}