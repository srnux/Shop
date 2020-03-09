using System;
using System.Collections.Generic;
using System.Linq;
using Shop.Api.Data.Entities;

namespace Shop.Api.Data
{
    public static class InitialData
    {
        public static void Seed(this ShopDbContext dbContext)
        {
            if (!dbContext.MainCategory.Any())
            {
                dbContext.MainCategory.Add(new MainCategory() {Name = "Gesicht"});
                dbContext.MainCategory.Add(new MainCategory() { Name = "Körper" });
                dbContext.MainCategory.Add(new MainCategory() { Name = "Haare" });
                dbContext.MainCategory.Add(new MainCategory() { Name = "Sonne" });
            }
            if (!dbContext.SubCategory.Any())
            {
                dbContext.SubCategory.Add(new SubCategory() { Name = "Lippenpflege" });
                dbContext.SubCategory.Add(new SubCategory() { Name = "Rasur" });
                dbContext.SubCategory.Add(new SubCategory() { Name = "Deo" });
                dbContext.SubCategory.Add(new SubCategory() { Name = "Reinigung" });
                dbContext.SubCategory.Add(new SubCategory() { Name = "Pflege" });
            }

            dbContext.SaveChanges();

            if (!dbContext.Products.Any())
            {
                dbContext.Products.Add(new Product
                {
                    Urls = new List<Url>
                    {
                        new Url { Description = "ProductDetailsPage", Path = "http://www.nivea.de/shop/lips2kiss-coral-crush-40059006333300001.html"}, 
                        new Url { Description = "AddToCart", Path = "https://www.nivea.de/tin-shop/mini-cart?ajax_context=%2fsitecore%2fcontent%2fProducts%2fLabello%2fLabello+Lip+Care%2fLabello+Lip+Care%2fLABELLO%2fLAB+COLOUR++CARE%2f85125&pid=40059006333300001&sc_device=ajax&quantity=1\r\n" },
                        new Url { Description = "AddToFavorites", Path = "https://www.nivea.de/client/MyAccount/AddToFavourites?id=40059006333300001&sc_device=ajax"},
                    },
                    Gtin = "4005900633330",
                    Upc = "851250101100",
                    Id = "40059006333300001",
                    DisplayName = "Lips2Kiss Coral Crush",
                    ShortDescription = "Der erste Make-Up Look mit echter Labello Pﬂege! Die Formel mit intensiven Farbpigmenten und natürlichen Ölen sorgt für strahlende Farbe. Die cremige, angenehme Textur macht jede Anwendung zu einem Vergnügen: Lip Balm Lips2Kiss Coral Crush.",
                    LongDescription = "<![CDATA[\r\nCORAL CRUSH Lips2Kiss Color Lip Balm Ohne Mineralöle Der erste Make-Up Look mit echter Labello Pﬂege! Verleih deinen Lippen mit dem Color Lip Balm Lips2Kiss intensive Farbe mit dem unwiderstehlichen Farbton Coral Crush. Unsere Farben sind so entwickelt, dass sie zu den meisten Hauttönen passen. Die Formel mit intensiven Farbpigmenten und natürlichen Ölen sorgt für strahlende Farbe und versorgt deine Lippen sofort mit Feuchtigkeit*. Die cremige, angenehme Textur macht jede Anwendung zu einem Vergnügen! Trage gerne mehrere Schichten auf, um die Farbintensität zu erhöhen. Die spitze Applikationsform ermöglicht eine präzise Anwendung –auch ohne Spiegel: Color Lip Balm Lips2Kiss Coral Crush.\r\n]]>",
                    Currency = "EUR",
                    CurrencySymbol = "€",
                    GrossPrice = 4.99M,
                    PricePerHundred = 1.66M,
                    IsPromoPrice = false,
                    CurrentPromotionDiscount = 0,
                    Unit = "G",
                    SizePerUnit = 1,
                    MinOrderQuantity = 1,
                    Size = 3.00M,
                    OnlineFlag = true,
                    OnlineFrom = new DateTime(2020,01,14),
                    Multimedia = new Multimedia() { 
                        Images = new List<Image>
                        {
                                new Image() {Path = "https://www.nivea.de/~/images/media-center-items/6/f/6-350809-1.png" }, 
                                new Image() { Path = "https://www.nivea.de/~/images/media-center-items/4/e/0-350811-1.png" }, 
                                new Image() { Path = "https://www.nivea.de/-/media/media-center-items/2/e/4/1301a63019884ff9982dd82be8ea2a8e-original.png" }
                        },
                        Videos = new List<Video>()
                    },
                    NewUntil = new DateTime(2020,04,01),
                    IsExclusive = false,
                    StockLevel = 38,
                    Brand = "Labello Lip Care",
                    ShippingCosts = 3.95M
                });

                dbContext.Products.Add(new Product
                {
                    Urls = new List<Url>
                    {
                        new Url { Description = "ProductDetailsPage", Path = "http://www.nivea.de/shop/lips2kiss-poppy-red-40059005762790001.html"},
                        new Url { Description = "AddToCart", Path = "https://www.nivea.de/tin-shop/mini-cart?ajax_context=%2fsitecore%2fcontent%2fProducts%2fLabello%2fLabello+Lip+Care%2fLabello+Lip+Care%2fLABELLO%2fLAB+COLOUR++CARE%2f85131&pid=40059005762790001&sc_device=ajax&quantity=1\r\n" },
                        new Url { Description = "WriteReview", Path = "https://www.nivea.de/pdp/write-review?productItem={E51F0AED-D9C0-DAC3-4842-D9F25888B590}"},
                    },
                    Gtin = "4005900576279",
                    Upc = "851310107000",
                    Id = "40059005762790001",
                    DisplayName = "Lips2Kiss POPPY RED",
                    ShortDescription = "Der erste Make-Up Look mit echter Labello Pﬂege! Die Formel mit intensiven Farbpigmenten und natürlichen Ölen sorgt für strahlende Farbe. Die cremige, angenehme Textur macht jede Anwendung zu einem Vergnügen: Lip Balm Lips2Kiss Poppy Red.",
                    LongDescription = "<![CDATA[\r\nPOPPY RED Lips2Kiss Color Lip Balm Ohne Mineralöle Der erste Make-Up Look mit echter Labello Pﬂege! Verleih deinen Lippen mit dem Color Lip Balm Lips2Kiss intensive Farbe mit dem unwiderstehlichen Farbton Poppy Red. Unsere Farben sind so entwickelt, dass sie zu den meisten Hauttönen passen. Die Formel mit intensiven Farbpigmenten und natürlichen Ölen sorgt für strahlende Farbe und versorgt deine Lippen sofort mit Feuchtigkeit*. Die cremige, angenehme Textur macht jede Anwendung zu einem Vergnügen! Trage gerne mehrere Schichten auf, um die Farbintensität zu erhöhen. Die spitze Applikationsform ermöglicht eine präzise Anwendung –auch ohne Spiegel: Color Lip Balm Lips2Kiss Poppy Red.\r\n]]>",
                    Currency = "EUR",
                    CurrencySymbol = "€",
                    GrossPrice = 4.99M,
                    PricePerHundred = 1.66M,
                    IsPromoPrice = false,
                    CurrentPromotionDiscount = 0,
                    Unit = "G",
                    SizePerUnit = 1,
                    MinOrderQuantity = 1,
                    Size = 3.00M,
                    OnlineFlag = true,
                    OnlineFrom = new DateTime(2019, 11, 24),
                    Multimedia = new Multimedia()
                    {
                        Images = new List<Image>
                        {
                                new Image() {Path = "https://www.nivea.de/~/images/media-center-items/7/0/8-283296-1.png" },
                                new Image() { Path = "https://www.nivea.de/~/images/media-center-items/0/c/6-283297-1.png" },
                                new Image() { Path = "https://www.nivea.de/~/images/media-center-items/3/c/3-283295-1.png" },
                                new Image() { Path = "https://www.nivea.de/-/media/media-center-items/0/e/f/7702a01a2faf453c95cbde9669b703bd-original.png" },
                                new Image() { Path = "https://www.nivea.de/-/media/media-center-items/f/1/8/395110-original.png" }
                        },
                        Videos = new List<Video>()
                    },
                    NewUntil = new DateTime(2019, 07, 01),
                    IsExclusive = false,
                    StockLevel = 11,
                    Brand = "Labello Lip Care",
                    ShippingCosts = 3.95M,
                    
                });

                dbContext.SaveChanges();

                if (!dbContext.ProductMainCategory.Any())
                {
                    dbContext.ProductMainCategory.Add
                    (
                        new ProductMainCategory()
                        {
                            ProductId = "40059006333300001",
                            MainCategoryId = dbContext.MainCategory.FirstOrDefault(p => p.Name.Equals("Gesicht")).Id
                        }
                    );
                    dbContext.ProductMainCategory.Add
                    (
                        new ProductMainCategory()
                        {
                            ProductId =  "40059006333300001",
                            MainCategoryId = dbContext.MainCategory.FirstOrDefault(p => p.Name.Equals("Sonne")).Id
                        }
                    );

                    dbContext.ProductMainCategory.Add
                    (
                        new ProductMainCategory()
                        {
                            ProductId =  "40059005762790001",
                            MainCategoryId = dbContext.MainCategory.FirstOrDefault(p => p.Name.Equals("Gesicht")).Id
                        }
                    );
                    dbContext.ProductMainCategory.Add
                    (
                        new ProductMainCategory()
                        {
                            ProductId =  "40059005762790001",
                            MainCategoryId = dbContext.MainCategory.FirstOrDefault(p => p.Name.Equals("Sonne")).Id
                        }
                    );
                }

                if (!dbContext.ProductSubCategory.Any())
                {
                    dbContext.ProductSubCategory.Add
                    (
                        new ProductSubCategory()
                        {
                            Product = dbContext.Products.FirstOrDefault(p => p.Id == "40059006333300001"),
                            SubCategory = dbContext.SubCategory.FirstOrDefault(p => p.Name.Equals("Lippenpflege"))
                        }
                    );
                    dbContext.ProductSubCategory.Add
                    (
                        new ProductSubCategory()
                        {
                            Product = dbContext.Products.FirstOrDefault(p => p.Id == "40059006333300001"),
                            SubCategory = dbContext.SubCategory.FirstOrDefault(p => p.Name.Equals("Pflege"))
                        }
                    );

                    dbContext.ProductSubCategory.Add
                    (
                        new ProductSubCategory()
                        {
                            Product = dbContext.Products.FirstOrDefault(p => p.Id == "40059005762790001"),
                            SubCategory = dbContext.SubCategory.FirstOrDefault(p => p.Name.Equals("Lippenpflege"))
                        }
                    );
                    dbContext.ProductSubCategory.Add
                    (
                        new ProductSubCategory()
                        {
                            Product = dbContext.Products.FirstOrDefault(p => p.Id == "40059005762790001"),
                            SubCategory = dbContext.SubCategory.FirstOrDefault(p => p.Name.Equals("Pflege"))
                        }
                    );
                }

                dbContext.SaveChanges();
            }
        }
    }
}
