import {
  MdOutlineTravelExplore,
  MdSchool,
  MdVideoLibrary,
  MdHomeWork,
  MdVolunteerActivism
} from "react-icons/md";

const projects = [
 {
  number: "01",
  category: "DIGITAL MARKETING & MEDIA",
  title: "Business Tarakki",
  description:
    "A modern digital presence built for Business Tarakki to showcase its creative agency expertise across video marketing, photography, and brand campaigns. Designed with engaging visuals and clear conversion paths, the platform helps the agency connect with ambitious businesses seeking to expand their reach.",
  icon: MdVideoLibrary,
  slug: "business-tarakki",
  liveUrl: "https://businesstarakki.com/",
  githubUrl: "",
  type: "Business Website",
  year: "2026",
  overview:
    "Business Tarakki is a digital marketing and media agency website showcasing its expertise in video marketing, video editing, photography, graphic design, social media marketing and Google Ads.",
  challenge:
    "The business needed a professional online presence that could clearly communicate its services, experience, achievements and marketing capabilities while building trust with potential clients.",
  solution:
    "We created a visually engaging business website that presents the agency's services, achievements, client experiences and marketing solutions in a structured and professional way.",
  features: [
    "Service showcase",
    "Video marketing presentation",
    "Social media marketing section",
    "Google Ads services",
    "Portfolio and client showcase",
    "Testimonials section",
    "Business enquiry/contact system",
    "Responsive design",
  ],
  technologies: [
    "React.js",
    "JavaScript",
    "REST APIs",
    "Cloudinary",
  ],
},

{
  number: "02",
  category: "NON-PROFIT & COMMUNITY",
  title: "Bangla Divine Charitable Trust",
  description:
    "A mission-driven platform designed for Bangla Divine Charitable Trust to showcase its community outreach, mission programs, and social impact across Bengal. The website combines transparent storytelling with dedicated sections for initiatives, donor support, and community involvement.",
  icon: MdVolunteerActivism,
  slug: "bangla-divine-charitable-trust",
  liveUrl: "https://bdct.in/",
  githubUrl: "",
  type: "Non-Profit Website",
  year: "2026",
  overview:
    "Bangla Divine Charitable Trust is a non-profit platform focused on supporting communities, local churches and mission workers across Bengal through outreach, community support and empowerment initiatives.",
  challenge:
    "The organization needed a trustworthy digital platform where visitors could understand its mission, explore its work, learn about its impact and easily find ways to contribute or get involved.",
  solution:
    "We structured the website around the organization's mission, vision and community work, with dedicated sections for its initiatives, impact, donation opportunities, team and contact information.",
  features: [
    "Organization introduction",
    "Mission and vision section",
    "Community initiatives",
    "Impact statistics",
    "Donation section",
    "Volunteer and involvement information",
    "Team information",
    "Contact and enquiry system",
    "Responsive design",
  ],
  technologies: [
    "React.js",
    "JavaScript",
    "REST APIs",
    "Cloudinary",
  ],
},

{
  number: "03",
  category: "TRAVEL & TOURISM",
  title: "Alex Voyage",
  description:
    "A comprehensive travel consultancy and tour booking platform developed to help travelers explore curated destinations and guided tours across India. The platform streamlines destination discovery, package details, and personalized travel inquiries in an intuitive interface.",
  icon: MdOutlineTravelExplore,
  slug: "alex-voyage",
  liveUrl: "https://alexvoyage.com/",
  githubUrl: "",
  type: "Travel & Tour Platform",
  year: "2026",
  overview:
    "Alex Voyage is a travel consultancy and tour booking platform focused on helping travelers make better travel decisions across India through guided tours, destination planning and travel assistance.",
  challenge:
    "The platform needed to present multiple destinations and tour packages in an engaging way while giving travelers an easy path to explore tours, understand available services and connect with the travel team.",
  solution:
    "We developed a structured travel platform with destination discovery, tour listings, detailed tour information, reviews, travel services and booking-focused user journeys.",
  features: [
    "Destination browsing",
    "Tour listings",
    "Detailed tour pages",
    "Travel services",
    "Tour categories",
    "User registration and login",
    "Reviews and testimonials",
    "Travel enquiry and booking flow",
    "Responsive design",
  ],
  technologies: [
    "React.js",
    "Django",
    "Django REST Framework",
    "MySQL",
    "Razorpay",
    "Cloudinary",
  ],
},

{
  number: "04",
  category: "INTERIOR DESIGN",
  title: "GK Dream Interior",
  description:
    "A visually focused digital showcase built for GK Dream Interior to highlight residential and commercial interior solutions across Kolkata and Howrah. The website features project portfolios and streamlined consultation booking to convert visitors into consultation leads.",
  icon: MdHomeWork,
  slug: "gk-dream-interior",
  liveUrl: "https://gkdreaminterior.com/",
  githubUrl: "",
  type: "Business Website",
  year: "2026",
  overview:
    "GK Dream Interior is an interior design business serving clients across Kolkata and Howrah, with a digital platform focused on showcasing its services and helping potential clients request consultations.",
  challenge:
    "The business needed a strong digital presence where its interior design expertise and services could be presented professionally while making it easy for potential customers to request a consultation.",
  solution:
    "We created a visually focused business website with service presentation, project imagery, company information and prominent consultation enquiry sections designed to convert visitors into potential leads.",
  features: [
    "Interior design service showcase",
    "Project and portfolio presentation",
    "Visual gallery",
    "About company section",
    "Free consultation enquiry",
    "Contact information",
    "Service request form",
    "Responsive design",
    "Location-focused business presence",
  ],
  technologies: [
    "React.js",
    "JavaScript",
    "REST APIs",
    "Cloudinary",
  ],
},

{
  number: "05",
  category: "NON-PROFIT ORGANIZATION",
  title: "ILDC India",
  description:
    "An authoritative organizational platform created for ILDC India to present its institutional vision, community programs, and national development initiatives. Structured for clarity and accessibility, the site helps stakeholders easily explore activities and get involved.",
  icon: MdSchool,
  slug: "ildc-india",
  liveUrl: "https://ildc-india.org/",
  githubUrl: "",
  type: "Organization Website",
  year: "2026",
  overview:
    "ILDC India is an organization-focused digital platform created to provide visitors with information about the organization, its initiatives and its work.",
  challenge:
    "The organization required a structured online presence that could communicate important information clearly and provide visitors with an easy way to understand its work and connect with the organization.",
  solution:
    "We developed a professional organizational website with a clear information architecture, structured content presentation and an accessible interface for visitors across devices.",
  features: [
    "Organization information",
    "Initiatives and activities",
    "Information sections",
    "Professional content presentation",
    "Contact and enquiry options",
    "Responsive interface",
    "Mobile-friendly experience",
  ],
  technologies: [
    "React.js",
    "JavaScript",
    "REST APIs",
    "Cloudinary",
  ],
},
];

export default projects;