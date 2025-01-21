"use client";

import { useTranslations } from "@/i18n/client";
import { buttonVariants } from "@/components/ui";
import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "framer-motion";

import Link from "@/components/link";
import { GITHUB_USERNAME } from "@/lib/constants";
import { tw } from "@/lib/utils";

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

type HeaderProps = {
  name: string;
  description: string;
  homepage?: string;
  github?: string;
  link: string;
};

const Header = (props: HeaderProps) => {
  const { name, description, link, github } = props;
  const t = useTranslations();

  const repo = github?.split("/").pop();

  return (
    <div className="space-y-8 pt-10">
      <motion.div
        className="flex items-center gap-3"
        initial={animation.hide}
        animate={animation.show}
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{name}</h1>
          <h2 className="text-muted-foreground">{description}</h2>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {link ? (
          <Link
            href={link}
            target="_blank"
            className={tw(buttonVariants(), "group")}
          >
            {t("projects.visit-website")}
            <ArrowUpRightIcon className="ml-2 size-5 transition-transform group-hover:-rotate-12" />
          </Link>
        ) : null}

        {github ? (
          <Link href={github} className={tw(buttonVariants(), "group")}>
            {GITHUB_USERNAME}/{repo}
            <ArrowUpRightIcon className="ml-2 size-5 transition-transform group-hover:-rotate-12" />
          </Link>
        ) : null}
      </motion.div>
    </div>
  );
};
export default Header;
