"use client";
import Container from "../components/Container";
import Marquee from "../components/Marquee";

import {
  FaReact,
  FaWordpress,
  FaInstagram,
} from "react-icons/fa";

import {
  SiFlutter,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiCloudinary,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";

import {
  TbDeviceMobile,
  TbApi,
  TbSearch,
} from "react-icons/tb";

import {
  MdOutlineWeb,
  MdOutlineCampaign,
} from "react-icons/md";


const technologies = [
  {
    title: "React.js",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    title: "Django",
    icon: SiDjango,
    color: "#44B78B",
  },
  {
    title: "Node.js",
    icon: SiNodedotjs,
    color: "#68A063",
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },
  {
    title: "MySQL",
    icon: SiMysql,
    color: "#00758F",
  },
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
  },
  {
    title: "Cloudinary",
    icon: SiCloudinary,
    color: "#3448C5",
  },
  {
    title: "REST APIs",
    icon: TbApi,
    color: "#10B981",
  },
  {
    title: "Flutter",
    icon: SiFlutter,
    color: "#54C5F8",
  },
];


const services = [
  {
    title: "Website Development",
    icon: MdOutlineWeb,
    color: "#38BDF8",
  },
  {
    title: "Web Applications",
    icon: MdOutlineWeb,
    color: "#818CF8",
  },
  {
    title: "Mobile Apps",
    icon: TbDeviceMobile,
    color: "#A78BFA",
  },
  {
    title: "WordPress",
    icon: FaWordpress,
    color: "#21759B",
  },
  {
    title: "SEO",
    icon: TbSearch,
    color: "#F59E0B",
  },
  {
    title: "Digital Marketing",
    icon: MdOutlineCampaign,
    color: "#EC4899",
  },
  {
    title: "Social Media Management",
    icon: FaInstagram,
    color: "#E1306C",
  },
];


const Expertise = () => {
  return (
    <section
      id="expertise"
      className="py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      <Container>

        {/* Label */}
        <p className="uppercase tracking-[4px] sm:tracking-[6px] text-[#D4AF37] text-center text-sm sm:text-base">
          OUR EXPERTISE
        </p>

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5 text-white leading-tight">
          Modern Technologies
          <br />
          Powering Every Project
        </h2>

        {/* Description */}
        <p className="text-center text-gray-400 max-w-3xl mx-auto mt-5 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base">
          From high-performance websites and scalable web applications
          to mobile apps and digital marketing, we combine the right
          technologies with creative strategies to help businesses grow.
        </p>

        {/* Technologies */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Marquee items={technologies} />
        </div>

        {/* Services */}
        <div className="mt-6 sm:mt-8">
          <Marquee
            items={services}
            reverse
          />
        </div>

      </Container>
    </section>
  );
};

export default Expertise;