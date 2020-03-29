using GraphQL.Types;
using Shop.Api.Data.Entities;

namespace Shop.GraphQl.Types
{
    public class ProductInputType: InputObjectGraphType
    {
        public ProductInputType()
        {
            Name = "productInput";
            Field<IdGraphType>("id");
            Field<NonNullGraphType<StringGraphType>>("gtin");
            Field<NonNullGraphType<StringGraphType>>("displayName");

            Field<NonNullGraphType<StringGraphType>>("upc");
            Field<StringGraphType>("productSlogan");
            Field<NonNullGraphType<StringGraphType>>("shortDescription");
            Field<NonNullGraphType<StringGraphType>>("longDescription");
            Field<NonNullGraphType<StringGraphType>>("currency");
            Field<NonNullGraphType<StringGraphType>>("currencySymbol");

            Field<NonNullGraphType<DecimalGraphType>>("grossPrice");
            Field<NonNullGraphType<DecimalGraphType>>("pricePerHundred");

            Field<BooleanGraphType>("isPromoPrice");
            Field<DecimalGraphType>("currentPromotionDiscount");

            Field<NonNullGraphType<StringGraphType>>("unit");
            Field <NonNullGraphType<DecimalGraphType>>("sizePerUnit");
            Field <NonNullGraphType<IntGraphType>>("minOrderQuantity");
            Field <NonNullGraphType<DecimalGraphType>>("size");

            Field<BooleanGraphType>("onlineFlag");
            Field<DateTimeGraphType>("onlineFrom");
            Field<DateTimeGraphType>("expiryDate");
            Field<DateTimeGraphType>("newUntil");

            Field<IntGraphType>("multimediaId");
            Field<BooleanGraphType>("isExclusive");

            Field<IntGraphType>("stockLevel");
            Field <NonNullGraphType<StringGraphType>>("brand");

            Field <NonNullGraphType<DecimalGraphType>>("shippingCosts");
            Field<IntGraphType>("rating");

        }
    }
}
