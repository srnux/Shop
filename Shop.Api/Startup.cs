
using GraphQL;
using GraphQL.NewtonsoftJson;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Shop.Api.Data;
using Shop.Api.Repositories;
using Shop.GraphQl.GraphQL;
using Shop.GraphQl.GraphQL.Types;

namespace Shop.Api
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IWebHostEnvironment _env;

        public Startup(IConfiguration config, IWebHostEnvironment env)
        {
            _config = config;
            _env = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddDbContext<ShopDbContext>(options =>
                options.UseSqlServer(_config["ConnectionStrings:Shop"]));
            services.AddScoped<ProductRepository>();
            services.AddScoped <MainCategoryRepository>();

            //services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddScoped<ShopSchema>();
            services.AddScoped<ShopSchema>();
            services.AddScoped<ShopQuery>();
            services.AddScoped<Shop.GraphQl.GraphQL.Types.ProductType>();
            services.AddScoped<MainCategoryType>();

            services.AddSingleton<IDocumentExecuter>(new DocumentExecuter());
            services.AddSingleton<IDocumentWriter>(sp => new DocumentWriter());

            //services.AddGraphQL(o => { o.ExposeExceptions = false; })
            //    .AddGraphTypes(ServiceLifetime.Scoped);
            
            services.AddGraphQL(options =>
                {
                    options.EnableMetrics = true;
                    options.ExposeExceptions = true;
                }).AddGraphTypes(ServiceLifetime.Scoped)
                .AddDataLoader()
                .AddNewtonsoftJson();
            
            services.Configure<KestrelServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });

        }

        public void Configure(IApplicationBuilder app, ShopDbContext dbContext)
        {
            app.UseGraphQL<ShopSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());

            app.UseStaticFiles();

            dbContext.Seed();
        }
    }
}