using GraphQL.Types;
using Shop.Api.Data.Entities;
using Shop.Api.Repositories;
using Shop.Data.Repositories;

namespace Shop.GraphQl.GraphQL.Types
{
    public class MainCategoryType : ObjectGraphType<ProductMainCategory>
    {
        public MainCategoryType()
        {
            Field(t => t.MainCategory.Name).Description("Category name");
            Field(t => t.MainCategory.Description,nullable:true).Description("Category description");
        }
    }
}
