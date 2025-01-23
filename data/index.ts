import { Project } from "@/types/project";

export const allProjects: Project[] = [
  {
      id: 1,
      name: "Opineo Manager - SaaS platform connecting Google reviews",
      slug: "opineo-manager",
      description: "Opineo Manager is an AI-powered platform that simplifies Google Review management by analyzing customer feedback and generating actionable insights. It helps businesses transform thousands of reviews into meaningful data through smart analysis and custom reporting.",
      img: "/images/opineo/manager-1.png",
      images: ["/opineo/overview.png", "/opineo/analyse.png", "/opineo/formule.png", "/opineo/engager.png", "/opineo/comparaison.png"],
      iconLists: ["/svg/re.svg", "/svg/nest.svg", "/svg/prisma.svg" ,"/svg/react-query.svg", "/svg/tail.svg", "/svg/ts.svg", "/svg/fm.svg", "/svg/gb.svg"],
      link: "https://opineomanager.com/manager",
      language: "en"
  },
  {
      id: 2,
      name: "Opineo WhatsApp - Responses Automated, Smarter Google Review Management",
      slug: "opineo-whatsapp",
      description: "Opineo WhatsApp connects your Google Reviews directly to WhatsApp, enabling quick and efficient review management through your messaging app. It uses AI to generate personalized responses, making it easy to maintain your online reputation while saving valuable time.",
      img: "/images/opineo/whatsapp.jpg",
      images: ["/opineo/whatsapp-1.jpg", "/opineo/whatsapp-2.jpg", "/opineo/onboarding.jpg", "/opineo/payment-whatsapp.png", "/opineo/notification-whatsapp.png", "/opineo/generate.png" ],
      iconLists: ["/svg/re.svg", "/svg/prisma.svg", "/svg/react-query.svg", "/svg/tail.svg", "/svg/ts.svg", "/svg/fm.svg", "/svg/gb.svg", "/images/storybook.webp"],
      link: "https://opineomanager.com/whatsapp",
      language: "en"
  },
  {
      id: 3,
      name: "Astra",
      slug: "astra",
      description: "Astra is a modern, fully responsive website built with a powerful tech stack. This project showcases the use of Next.js for server-side rendering, TailwindCSS for sleek styling, shadcn UI for elegant components, and Clerk for secure authentication",
      img: "/images/astra.png",
      images: ["/astra-full.png"],
      iconLists: ["/svg/next.svg", "/svg/tail.svg",'/images/accentry.png', "/svg/ts.svg", "/svg/fm.svg","/svg/c.svg"],
      link: "https://astra-rust.vercel.app/",
      github: "https://github.com/Issam-AB/astra",
      language: "en"
  },
  {
      id: 4,
      name: "Shopco - E-commerce Website.",
      slug: "shopco",
      description: "Shopco is project that converts a Figma design of an e-commerce website into a fully responsive front-end application. It utilizes Next.js 14 App Router, TypeScript, Tailwind CSS, Redux, Framer Motion, and ShadCN UI to deliver a modern, scalable, and optimized solution based on industry standards.",
      img: "/images/shop.png",
      images: ["/shop-full.png"],
      iconLists: ["/svg/next.svg", "/svg/re.svg", "/svg/redux.svg", "/svg/ts.svg", "/svg/fm.svg", "/svg/tail.svg"],
      link: "https://next-ecommerce-shopco-seven.vercel.app/",
      github: "https://github.com/Issam-AB/next-ecommerce-shopco",
      language: "en"
  },
];

export const socialMedia = [
    {
      id: 1,
      img: "/svg/git.svg",
      link:"https://github.com/Issam-AB"
    },
    {
      id: 2,
      img: "/svg/twit.svg",
      link:"https://x.com/Issam_afdl"
    },
    {
      id: 3,
      img: "/svg/link.svg",
      link:"https://www.linkedin.com/in/issam-aboulfadl/"
    },
  ];