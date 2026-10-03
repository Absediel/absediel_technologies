import "@/index.css";
import ScrollProgress from "@/components/ScrollProgress";
import CursorSpotlight from "@/components/CursorSpotlight";
import TechCanvas from "@/components/TechCanvas";
import ScrollToHash from "@/components/ScrollToHash";
import NavigationProgressBar from "@/components/NavigationProgressBar";
import RoutePrefetcher from "@/components/RoutePrefetcher";

export const metadata = {
  title: "Absediel Technologies | Engineering Digital Excellence",
  description: "Absediel Technologies builds high-performance web applications, scalable software architectures, and modern digital experiences.",
  icons: {
    icon: "/assets/Icons/Favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white font-sans overflow-x-hidden antialiased selection:bg-[#D4AF37]/30 selection:text-[#FFE57F]">
        <NavigationProgressBar />
        <RoutePrefetcher />
        <ScrollProgress />
        <CursorSpotlight />
        <TechCanvas />
        <ScrollToHash />
        {children}
      </body>
    </html>
  );
}
