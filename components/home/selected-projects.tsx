"use client";

import { useTranslations } from "@/i18n/client";
import { BlurImage, buttonVariants } from "@/components/ui";
import { ArrowUpRightIcon, LightbulbIcon } from "lucide-react";
import { allProjects } from "@/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Link from "next/link";
import { tw } from "@/lib/utils";
import BorderGlow from "../ui/border-glowing";
import { TechIcon } from "../tech-icon";
interface CardProps {
  project: {
    slug: string;
    name: string;
    img: string;
    iconLists: string[];
    description: string;
  };
}

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const SelectedProjects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const t = useTranslations();

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={projectsRef}
      transition={{
        duration: 0.5,
      }}
      className="relative my-24"
    >
      <motion.h2
        className="text-center text-3xl font-semibold"
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {t("homepage.selectedProjects.title")}
      </motion.h2>
      <motion.div
        className="mt-12 grid gap-4 md:grid-cols-2"
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {allProjects.slice(0, 4).map((project) => (
          <Card key={project.slug} project={project} />
        ))}
      </motion.div>
      <div className="my-8 flex items-center justify-center">
        <Link
          href="/projects"
          className={tw(
            buttonVariants({
              variant: "outline",
            }),
            "rounded-xl"
          )}
        >
          {t("homepage.selectedProjects.more")}
        </Link>
      </div>
    </motion.div>
  );
};

const Card = (props: CardProps) => {
  const { project } = props;
  const { slug, name, description, img, iconLists } = project;
  const t = useTranslations();

  return (
    <Link key={slug} href={`/projects/${slug}`} className="group">
      <BorderGlow>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <LightbulbIcon className="size-[18px]" />
            <h2>{t("homepage.selectedProjects.card")}</h2>
          </div>
          <ArrowUpRightIcon className="size-[18px] opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <BlurImage
          width={1280}
          height={832}
          src={`${img}`}
          alt={description}
          imageClassName="rounded-lg grayscale sm:h-[290px] h-auto w-full object-contain group-hover:grayscale-0 transition-transform duration-300 delay-300"
        />

        <div className="px-2 sm:mt-4 mt-2">
          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
            {name}
          </h1>

          <p className="dark:text-muted-foreground text-muted-foreground mt-2 font-light text-sm line-clamp-2">
            {description}
          </p>

          <div className="flex items-center justify-between sm:mt-7 mt-5 mb-3">
            <div className="flex items-center">
              {iconLists.map((iconPath, index) => (
                <div
                  key={index}
                  className="border grayscale group-hover:grayscale-0 dark:grayscale border-zinc-200 dark:border-zinc-50/40 rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center bg-[#F3F4F6] backdrop-blur-lg bg-opacity-30"
                  style={{
                    transform: `translateX(-${8 * index + 2}px)`,
                  }}
                >
                  <TechIcon
                    key={index}
                    iconPath={iconPath}
                    className="w-8 h-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </BorderGlow>
    </Link>
  );
};

export default SelectedProjects;
