import React from "react";
import {
  type IconType,
  SiGithub,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import {
  BarChartIcon,
  FlameIcon,
  // MessageCircleIcon,
  // MonitorIcon,
  PencilIcon,
  UserCircleIcon,
} from "lucide-react";

import {
  SITE_LINKEDIN_URL,
  SITE_GITHUB_URL,
  SITE_INSTAGRAM_URL,
  SITE_X_URL,
  SITE_YOUTUBE_URL,
} from "@/lib/constants";

type SocialLinks = Array<{
  href: string;
  title: string;
  icon: IconType;
}>;

export const HEADER_LINKS = [
  {
    icon: <UserCircleIcon className="size-3.5" />,
    href: "/about",
    key: "about",
  },
  {
    icon: <FlameIcon className="size-3.5" />,
    href: "/projects",
    key: "projects",
  },
  {
    icon: <PencilIcon className="size-3.5" />,
    href: "/blog",
    key: "blog",
  },
  // {
  //   icon: <MessageCircleIcon className="size-3.5" />,
  //   href: "/guestbook",
  //   key: "guestbook",
  // },
  {
    icon: <BarChartIcon className="size-3.5" />,
    href: "/dashboard",
    key: "dashboard",
  },

  // {
  //   icon: <MonitorIcon className="size-3.5" />,
  //   href: "/uses",
  //   key: "uses",
  // },
] as const;

export const FOOTER_LINKS = [
  {
    id: 1,
    links: [
      { href: "/", key: "home" },
      { href: "/blog", key: "blog" },
      { href: "/about", key: "about" },
      { href: "/dashboard", key: "dashboard" },
    ],
  },
  {
    id: 2,
    links: [
      { href: "/guestbook", key: "guestbook" },
      { href: "/uses", key: "uses" },
      { href: "/projects", key: "projects" },
      { href: "https://links.honghong.me", key: "links" },
    ],
  },
  {
    id: 3,
    links: [
      { href: SITE_LINKEDIN_URL, key: "linkedin" },
      { href: SITE_INSTAGRAM_URL, key: "instagram" },
      { href: SITE_GITHUB_URL, key: "github" },
      { href: SITE_YOUTUBE_URL, key: "youtube" },
    ],
  },
] as const;

export const Linkedin: IconType = React.forwardRef<SVGSVGElement>(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        {...props}
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
);

Linkedin.displayName = "Linkedin";

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: SITE_GITHUB_URL,
    title: "GitHub",
    icon: SiGithub,
  },
  {
    href: SITE_LINKEDIN_URL,
    title: "Linkedin",
    icon: Linkedin,
  },
  {
    href: SITE_INSTAGRAM_URL,
    title: "Instagram",
    icon: SiInstagram,
  },
  {
    href: SITE_X_URL,
    title: "X",
    icon: SiX,
  },
  {
    href: SITE_YOUTUBE_URL,
    title: "YouTube",
    icon: SiYoutube,
  },
];
