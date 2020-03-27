﻿using GraphQL.Types;
using Shop.Api.Data.Entities;
using Shop.Api.Repositories;

namespace Shop.GraphQl.GraphQL.Types
{
    public class ProductType: ObjectGraphType<Product>
    {
        public ProductType(MainCategoryRepository mainCategoriesRepository)
        {
            Field(t => t.Id);
            Field(t => t.DisplayName);
            Field(t => t.ShortDescription).Description("The name of the product");
            Field(t => t.LongDescription);
            Field(t => t.OnlineFrom).Description("When the product was first introduced in the catalog");
            //Field(t => t.Multimedia.Images.FirstOrDefault()).Description("The file name of the photo so the client can render it");
            Field(t => t.GrossPrice);
            Field(t => t.Rating).Description("The (max 5) star customer rating");
            Field(t => t.StockLevel);
            //Field<ProductTypeEnumType>("Type", "The type of product");

            Field<ListGraphType<MainCategoryType>>("MainCategories",
                resolve: context => mainCategoriesRepository.GetMainCategoriesForProduct(context.Source.Id) );
            //Field(x => x.ProductMainCategories, nullable: true, type:
            //    typeof(ListGraphType<MainCategoriesType>)).Description("main categories");
            
            
            //Field<PortfolioType>("portfolio",
            //    arguments: new QueryArguments(new
            //        QueryArgument<IntGraphType>
            //        { Name = "id" }),
            //    resolve: context =>
            //        context.Source.Portfolios
            //            .FirstOrDefault(port => port.Id ==
            //                                    context.GetArgument<int>("id")));
        }
    }
}