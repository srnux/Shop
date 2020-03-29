using GraphQL.Types;
using Shop.Api.Data.Entities;

namespace Shop.GraphQl.Types
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
