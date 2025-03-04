"use client";

import { useTranslations } from "@/i18n/client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import CommandMenu from "@/components/command-menu";

// import LocaleSwitcher from "./locale-switcher";
import MobileNav from "./mobile-nav";
import Navbar from "./navbar";
import ThemeSwitcher from "./theme-switcher";
import { tw } from "@/lib/utils/tw";
import Link from "../link";
import { Logo, Separator } from "../ui";
import ResumeBtn from "../ui/resume-btn";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);

    return () => {
      document.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <motion.header
      className={tw(
        "bg-background/30 fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors",
        isScrolled && "bg-background/80"
      )}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <a
        href="#skip-nav"
        className="bg-background focus-visible:ring-ring fixed left-4 top-4 -translate-y-20 rounded-sm border p-2 font-medium shadow-sm transition-transform focus-visible:translate-y-0 focus-visible:ring focus-visible:ring-offset-2"
      >
        <span>{t("layout.skip-to-main-content")}</span>
      </a>
      <Link href="/" className="flex items-center justify-center gap-1">
        <span className="sr-only">{t("layout.home")}</span>
        <Logo width={28} height={28} aria-hidden="true" />
      </Link>
      <div className="flex items-center gap-2">
        <Navbar />
        <ResumeBtn />
        <Separator orientation="vertical" className="h-6" />
        <ThemeSwitcher />
        {/* <LocaleSwitcher /> */}
        <CommandMenu />
        <MobileNav />
      </div>
    </motion.header>
  );
};

export default Header;
