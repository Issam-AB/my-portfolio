"use client";

import { useTranslations } from "@/i18n/client";
import { BlurImage, buttonVariants } from "@/components/ui";
import { ArrowUpRightIcon, LightbulbIcon } from "lucide-react";
import { allProjects } from "@/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Link from "../link";
import { tw } from "@/lib/utils";
import BorderGlow from "../ui/border-glowing";

interface CardProps {
  project: {
    slug: string;
    name: string;
    img: string;
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
        {allProjects.map((project) => (
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
  const { slug, name, description, img } = project;
  const t = useTranslations();

  return (
    <BorderGlow>
      <Link key={slug} href={`/projects/${slug}`}>
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
          className="rounded-lg grayscale "
        />
        {/* <div className="absolute bottom-6 left-7 flex flex-col transition-[left] ease-out group-hover:left-[30px]">
        <h3 className="text-2xl font-semibold text-white">{name}</h3>
        <p className="dark:text-muted-foreground mt-2 text-zinc-100">
          {description}
        </p>
      </div> */}

        <div className="px-2 mt-4">
          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
            {name}
          </h1>

          <p className="dark:text-muted-foreground mt-2font-light text-sm line-clamp-2">
            {description}
          </p>

          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              {/* {item.iconLists.map((icon, index) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              style={{
                transform: `translateX(-${5 * index + 2}px)`,
              }}
            >
              <img src={icon} alt="icon5" className="p-2" />
            </div>
          ))} */}
            </div>

            <div className="flex justify-center items-center">
              <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                Check Live Site
              </p>
              <ArrowUpRightIcon className="ms-3" color="#CBACF9" />
            </div>
          </div>
        </div>
      </Link>
    </BorderGlow>
  );
};

export default SelectedProjects;
