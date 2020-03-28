using GraphQL.Types;
using Shop.Api.Data.Entities;
using Shop.Api.Repositories;

namespace Shop.GraphQl.GraphQL.Types
{
    public class MainCategoryType : ObjectGraphType<ProductMainCategory>
    {
        public MainCategoryType(MainCategoryRepository mainCategoriesRepository)
        {
            Field(t => t.MainCategory.Name).Description("Category name");
            Field(t => t.MainCategory.Description,nullable:true).Description("Category description");
        }
    }
}
