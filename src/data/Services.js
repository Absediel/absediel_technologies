import { MdOutlineWeb, MdOutlineCampaign, MdOutlineDesignServices } from "react-icons/md";
import { TbDeviceMobile, TbApi, TbBrandWordpress, TbSearch } from "react-icons/tb";

const services = [
  {
    slug: "website-development",
    number: "01",
    title: "Website Development",
    shortDescription:
      "Modern, responsive and performance-focused websites built around your business and your audience.",
    description:
      "We design and build bespoke, high-performance websites engineered to establish a commanding digital presence for growing businesses. Our development process fuses intuitive UI/UX design, mobile-first responsiveness, blazing-fast load speeds, and modern web architectures to convert curious visitors into long-term loyal clients. Every website is built from the ground up with clean code standards, future-ready scalability, robust security protocols, and search engine optimization embedded directly into its core foundation.",
    icon: MdOutlineWeb,

    features: [
      "Responsive website design",
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "Performance optimization",
      "SEO-friendly structure",
    ],
  },

  {
    slug: "web-applications",
    number: "02",
    title: "Web Applications",
    shortDescription:
      "Custom web applications and digital solutions designed to simplify processes and support business growth.",
    description:
      "We develop sophisticated, full-stack web applications tailored to streamline complex business workflows, automate manual operations, and deliver seamless digital experiences. Leveraging cutting-edge frontend libraries, resilient backend frameworks, secure RESTful APIs, and scalable relational databases, we transform visionary business ideas into robust digital platforms that scale effortlessly as your enterprise grows and user demands multiply.",
    icon: TbApi,

    features: [
      "Custom web applications",
      "REST API integration",
      "Business dashboards",
      "Authentication systems",
      "Database integration",
      "Third-party integrations",
    ],
  },

  {
    slug: "mobile-applications",
    number: "03",
    title: "Mobile Applications",
    shortDescription:
      "User-friendly mobile applications that help businesses turn ideas into useful digital products.",
    description:
      "We craft intuitive, high-performance native and cross-platform mobile applications that bring your digital products directly into the hands of users worldwide. By combining smooth 60fps animations, ergonomic mobile navigation, resilient offline functionality, and secure API integrations, we deliver engaging mobile experiences on iOS and Android that drive user retention, enhance operational efficiency, and elevate brand reputation.",
    icon: TbDeviceMobile,

    features: [
      "Business mobile apps",
      "Cross-platform development",
      "API integration",
      "User authentication",
      "Responsive interfaces",
      "App performance optimization",
    ],
  },

  {
    slug: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    shortDescription:
      "Practical digital marketing strategies focused on visibility, reach, engagement and sustainable growth.",
    description:
      "We architect data-driven digital marketing campaigns and growth strategies tailored to amplify your brand visibility, attract high-intent prospects, and deliver measurable return on investment. From comprehensive search engine optimization and targeted pay-per-click advertising to strategic conversion rate optimization, we ensure your message reaches the right audience at the right time across every digital touchpoint.",
    icon: MdOutlineCampaign,

    features: [
      "Digital marketing strategy",
      "Search engine optimization",
      "Online presence management",
      "Campaign planning",
      "Content strategy",
      "Performance tracking",
    ],
  },

  {
    slug: "social-media-management",
    number: "05",
    title: "Social Media Management",
    shortDescription:
      "Consistent social media management that helps your brand stay active, relevant and connected with its audience.",
    description:
      "We curate and execute impactful social media strategies that elevate your brand narrative, cultivate engaged communities, and foster genuine connections across key platforms. Our end-to-end management encompasses content ideation, striking visual design, strategic scheduling, proactive community engagement, and thorough analytics monitoring to ensure your brand maintains a distinct, authoritative, and consistent digital voice.",
    icon: MdOutlineDesignServices,

    features: [
      "Social media strategy",
      "Content planning",
      "Profile management",
      "Content scheduling",
      "Audience engagement",
      "Performance monitoring",
    ],
  },

  {
    slug: "wordpress-solutions",
    number: "06",
    title: "WordPress Solutions",
    shortDescription:
      "Professional WordPress websites that are responsive, easy to manage and built for your business needs.",
    description:
      "We engineer custom, enterprise-grade WordPress websites that seamlessly combine effortless content management with exceptional speed, security, and design flexibility. Whether building tailor-made themes, developing custom plugins, or optimizing WooCommerce architectures, we provide easy-to-manage web solutions that empower non-technical teams to scale content without ever compromising site integrity or performance.",
    icon: TbBrandWordpress,

    features: [
      "Business WordPress websites",
      "Custom WordPress pages",
      "Theme customization",
      "Plugin integration",
      "Responsive layouts",
      "Website maintenance",
    ],
  },

  {
    slug: "seo",
    number: "07",
    title: "SEO",
    shortDescription:
      "Strategic search engine optimization to improve search rankings, drive organic traffic, and boost online visibility.",
    description:
      "We deploy comprehensive, white-hat search engine optimization strategies engineered to propel your website to the forefront of search results and drive high-intent organic traffic. By conducting in-depth semantic keyword research, executing technical infrastructure audits, refining on-page content architecture, and building authoritative backlink profiles, we establish sustainable, long-term organic visibility that outpaces your market competition.",
    icon: TbSearch,

    features: [
      "On-page & Off-page SEO",
      "Keyword research & strategy",
      "Technical SEO audits",
      "Local SEO optimization",
      "Content optimization",
      "SEO performance reporting",
    ],
  },
];

export default services;