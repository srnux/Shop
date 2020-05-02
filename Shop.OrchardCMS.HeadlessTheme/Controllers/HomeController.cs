using Microsoft.AspNetCore.Mvc;

namespace ECommerceHeadlessTheme.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
