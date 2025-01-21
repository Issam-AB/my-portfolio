import { Project } from "@/types/project";

export const allProjects: Project[] = [
  {
      id: 1,
      name: "Opineo Manager - SaaS platform connecting Google reviews",
      slug: "opineo-manager",
      description: "Opineo Manager is an AI-powered platform that simplifies Google Review management by analyzing customer feedback and generating actionable insights. It helps businesses transform thousands of reviews into meaningful data through smart analysis and custom reporting.",
      img: "/images/opineo/manager-1.png",
      images: ["/opineo/overview.png", "/opineo/analyse.png", "/opineo/formule.png", "/opineo/engager.png", "/opineo/comparaison.png"],
      iconLists: ["/svg/re.svg", "/svg/nest.svg", "/svg/prisma.svg", "/svg/tail.svg", "/svg/ts.svg", "/svg/fm.svg", "/svg/gb.svg"],
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
      iconLists: ["/svg/re.svg", "/svg/prisma.svg", "/svg/tail.svg", "/svg/ts.svg", "/svg/fm.svg", "/svg/gb.svg"],
      link: "https://opineomanager.com/whatsapp",
      language: "en"
  },
  {
      id: 3,
      name: "Astra",
      slug: "astra",
      description: "A modern landing page crafted for a no-code site builder, showcasing its potential and simplicity.",
      img: "/images/astra.png",
      images: ["/astra-full.png"],
      iconLists: ["/svg/next.svg", "/svg/tail.svg", "/svg/ts.svg", "/svg/fm.svg","/svg/c.svg"],
      link: "https://astra-rust.vercel.app/",
      github: "https://github.com/Issam-AB/astra",
      language: "en"
  },
  {
      id: 4,
      name: "Animated Apple Iphone 3D Website",
      slug: "animated",
      description: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/svg/p2.svg",
      images: ["/manager/overview.png"],
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "/ui.apple.com",
      github: "/issam-ab",
      language: "en"
  },
];