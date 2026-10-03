import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import ServiceDetails from "@/legacy_pages/ServiceDetails";

export const serviceSlugs = [
  "website-development",
  "web-applications",
  "mobile-applications",
  "digital-marketing",
  "social-media-management",
  "wordpress-solutions",
  "seo",
];

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  return (
    <>
      <Navbar />
      <ServiceDetails slug={slug} />
      <Footer />
    </>
  );
}
