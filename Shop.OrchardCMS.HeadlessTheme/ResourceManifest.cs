using OrchardCore.ResourceManagement;

namespace ECommerceHeadlessTheme
{
    public class ResourceManifest : IResourceManifestProvider
    {
        public void BuildManifests(IResourceManifestBuilder builder)
        {
            var manifest = builder.Add();

            manifest
                .DefineStyle("ECommerceHeadlessTheme-bootstrap-oc")
                .SetUrl("~/ECommerceHeadlessTheme/css/bootstrap-oc.min.css", "~/ECommerceHeadlessTheme/css/bootstrap-oc.css")
                .SetVersion("1.0.0");
				
        }
    }
}
