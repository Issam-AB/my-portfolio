"use client";

import React, { useState } from "react";
import { useTranslations } from "@/i18n/client";
import { motion, useInView, Variants } from "framer-motion";
import { BlurImage } from "../ui";
import { EXPERIENCE } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1, // Reduced delay
      staggerChildren: 0.15, // Reduced stagger time
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 20, // Reduced distance
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4, // Faster duration
      ease: [0.25, 0.1, 0.25, 1], // Custom easing curve
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    y: 15,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const detailsVariants: Variants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.1, // Slight delay for staggered effect
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Create a separate component for each experience item
interface ExperienceItemProps {
  exp: {
    picture: string;
    company: string;
    position: string;
    date: string;
    location: string;
    responsibilities: string;
    tags?: string[];
  };
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  exp,
  index,
  hoveredIndex,
  setHoveredIndex,
}) => {
  const containerRef = React.useRef<HTMLLIElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const detailsRef = React.useRef<HTMLDivElement>(null);

  const isContainerInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  const blurClassName =
    hoveredIndex !== null && hoveredIndex !== index
      ? "blur-[2px] opacity-40 transition-all duration-200 ease-out"
      : "transition-all duration-200 ease-out";

  return (
    <motion.li
      ref={containerRef}
      initial="hidden"
      animate={isContainerInView ? "visible" : "hidden"}
      className={`group mb-10 ml-10`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onTouchStart={() => setHoveredIndex(index)}
      onTouchEnd={() => setHoveredIndex(null)}
    >
      <span className="absolute flex items-center justify-center rounded-full -start-6">
        <BlurImage
          width={200}
          height={200}
          src={exp.picture}
          alt={exp.company}
          className="rounded-lg border border-divider"
          imageClassName="grayscale group-hover:grayscale-0 size-12 object-cover object-center transition-all duration-300"
        />
      </span>

      <motion.div
        ref={contentRef}
        variants={contentVariants}
        className={`flex items-center justify-between ${blurClassName}`}
      >
        <div>
          <h3 className="flex items-center mb-1 sm:text-lg text-base font-semibold text-gray-900 dark:text-white">
            {exp.company}
          </h3>
          <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {exp.position}
          </span>
        </div>

        <div className="self-baseline mt-1">
          <time className="block mb-2 sm:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            {exp.date}
          </time>
          <p className="float-right sm:text-sm text-xs text-gray-400 dark:text-gray-500">
            {exp.location}
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={detailsRef}
        variants={detailsVariants}
        className={`flex flex-col mt-1.5 ${blurClassName}`}
      >
        <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
          {exp.responsibilities}
        </p>

        <div className="flex items-center flex-wrap gap-2">
          {exp.tags?.map((tech: string, techIndex: number) => (
            <div
              key={techIndex}
              className="border bg-zinc-50 leading-4 dark:bg-zinc-900 text-xs px-2 py-1 rounded"
            >
              {tech}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.li>
  );
};

const Experience = () => {
  const experienceRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(experienceRef, {
    once: true,
    margin: "-50px",
    amount: 0.3,
  });
  const t = useTranslations();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      ref={experienceRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative my-24"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="text-center text-3xl font-semibold mb-12"
      >
        {t("homepage.experiences.title")}
      </motion.h2>

      <motion.div
        className="mt-12 md:px-8 px-5"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceItem
              key={index}
              exp={exp}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </ol>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
