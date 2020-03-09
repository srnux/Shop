using System.Linq;
using GraphQL.Types;
using Shop.Api.Data.Entities;
using Shop.Api.Repositories;

namespace Shop.Api.GraphQL.Types
{
    public class MainCategoryType : ObjectGraphType<MainCategory>
    {
        public MainCategoryType(MainCategoryRepository mainCategoriesRepository)
        {
            Field(t => t.Id);
            Field(t => t.Name).Description("Category name");
            Field(t => t.Description,nullable:true).Description("Category description");
        }
    }
}
