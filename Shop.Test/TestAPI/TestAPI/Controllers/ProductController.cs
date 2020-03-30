using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _products.ToArray();
        }

        private readonly IList<Product> _products = new List<Product>()
        {
            new Product()
            {
                Id = 1,
                ProductName =  "Leaf Rake",
                ProductCode = "GDN-0011",
                ReleaseDate = "March 19, 2016",
                Description = "Leaf rake with 48-inch wooden handle.",
                Price = 19.95m,
                StarRating = 3.2m,
                ImageUrl = "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
                Tags = new[]{"rake", "leaf", "yard", "home"}
            },
            new Product()
            {
                Id = 2,
                ProductName =  "Garden Cart",
                ProductCode = "GDN-0023",
                ReleaseDate = "March 18, 2016",
                Description = "15 gallon capacity rolling garden cart.",
                Price = 39.95m,
                StarRating = 4.2m,
                ImageUrl = "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
                Tags = new[]{"tools", "construction", "yard", "home"}
            },
            new Product()
            {
                Id = 5,
                ProductName =  "Hammer",
                ProductCode = "TBX-0048",
                ReleaseDate = "May 21, 2016",
                Description = "Curved claw steel hammer.",
                Price = 8.95m,
                StarRating = 4.8m,
                ImageUrl = "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
                Tags = new []{"rake", "hammer", "construction"}
            }
        };
    }

    public class Product
    {
        public int Id { get; set; }

        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public string ReleaseDate { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public decimal StarRating { get; set; }
        public string ImageUrl { get; set; }
        public string[] Tags { get; set; }
    }
}