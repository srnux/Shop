# Content
Skeleton of a future shopping GraphQL service.

# Projects
* **Shop.API** - GraphQL Service
* **Shop.Function** - GraphQL Azure Functions
* **Shop.GraphQL** - GraphQL Library - Shema, Query, Types
* **Shop.Data** - Data Access Layer with Entity Core ORM
* **Shop.Domain** - Domain classes

# Technology stack
* .NET Core 3.1 LTS
* Entity Core 3.1 LTS
* GraphQL API 3.5 alpha
* Azure Functions 3.1 LTS

# Live playgrounds on Azure
**REST API** running on Azure App Service - Linux instance
https://shop-prototype.azurewebsites.net/ui/playground

**Azure Function** 
https://shopgraphqlfunction.azurewebsites.net/api/ShopGraphApiFunction

# cUrl GraphQL query example
```cUrl
curl --location --request POST 'https://shopgraphqlfunction.azurewebsites.net/api/ShopGraphApiFunction' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query shopquery ($productId:ID!) {\r\n  firstproduct:product(id: $productId){\r\n    ...productFields\r\n    mainCategories{\r\n      name,\r\n      description\r\n    }\r\n  },\r\n  secondProduct:product(id: \"40059005762790001\"){\r\n    ...productFields\r\n    mainCategories{\r\n      name,\r\n      description\r\n    }\r\n  }\r\n} \r\nfragment productFields on ProductType {\r\n  \tid, displayName\r\n}\r\n","variables":{"productId":"40059006333300001"}}'
```

# Futher development 
- [ ] Mutations for Product
- [ ] Subcategory Repository
- [ ] Subscription for Product
- [ ] Product Data Importer


# Local development

## restore packages

`dotnet restore`

## update database - creates when non existant

`dotnet ef database update`

## build

`dotnet build`

## run

`dotnet run`

## run function locally
cd to Shop.Function directory
`func host start`
