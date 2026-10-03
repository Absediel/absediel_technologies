import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import ProjectDetails from "@/legacy_pages/ProjectDetails";

export const projectSlugs = [
  "business-tarakki",
  "bangla-divine-charitable-trust",
  "alex-voyage",
  "gk-dream-interior",
  "ildc-india",
];

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({
    slug,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  return (
    <>
      <Navbar />
      <ProjectDetails slug={slug} />
      <Footer />
    </>
  );
}