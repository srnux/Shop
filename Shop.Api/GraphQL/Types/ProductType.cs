using System.Linq;
using GraphQL.Types;
using Shop.Api.Data.Entities;

namespace Shop.Api.GraphQL.Types
{
    public class ProductType: ObjectGraphType<Product>
    {
        public ProductType()
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

        }
    }
}
