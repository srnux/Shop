using System.Collections.Generic;

namespace Shop.Api.Data.Entities
{
    public class Multimedia
    {
        public int Id { get; set; }
        public List<Image> Images { get; set; }
        public List<Video> Videos { get; set; }
    }
}