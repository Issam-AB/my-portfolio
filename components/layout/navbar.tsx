"use client";

import { useTranslations } from "@/i18n/client";
import { usePathname } from "next/navigation";

import { HEADER_LINKS } from "@/config/links";

import Link from "../link";
import { tw } from "@/lib/utils/tw";

const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <nav>
      <ul className="hidden gap-2 md:flex">
        {HEADER_LINKS.map((link) => {
          const isActive = link.href === pathname;

          return (
            <li
              key={link.key}
              className="relative flex h-[60px] items-center justify-center"
            >
              <Link
                className={tw(
                  "rounded px-3 py-2 text-sm font-medium transition-colors",
                  {
                    ["text-muted-foreground hover:text-foreground"]: !isActive,
                  },
                  {
                    ["text-foreground"]: isActive,
                  }
                )}
                href={link.href}
              >
                {t(`layout.${link.key}`)}
              </Link>
              {isActive ? (
                <>
                  <div className="bg-nav-link-indicator dark:bg-nav-link-indicator-dark absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2" />
                  <div className="absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 rounded-[4px] bg-[rgb(255_122_151)] blur dark:bg-[rgb(223_29_72)]" />
                </>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
