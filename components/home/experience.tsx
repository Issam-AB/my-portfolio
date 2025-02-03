"use client";

import React, { useRef, useState } from "react";
import { useTranslations } from "@/i18n/client";
import { motion, useInView, Variants } from "framer-motion";
import { BlurImage } from "../ui";
import { EXPERIENCE } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(experienceRef, {
    once: true,
    margin: "-100px",
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
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-semibold mb-12"
      >
        {t("homepage.experiences.title")}
      </motion.h2>

      <motion.div
        className="mt-12 md:px-8 px-5"
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
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {EXPERIENCE.map((exp, index) => (
            <motion.li
              key={index}
              className={`group mb-10 ml-10 `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="absolute flex items-center justify-center bg-blue-100 rounded-full -start-6 ring-4 ring-white">
                <BlurImage
                  width={200}
                  height={200}
                  src={exp.picture}
                  alt={exp.company}
                  className="rounded-lg border border-divider"
                  imageClassName="grayscale group-hover:grayscale-0 size-12 object-cover object-center transition-transform duration-300 delay-300"
                />
              </span>

              <motion.div
                variants={itemVariants}
                className={`flex items-center justify-between transition duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "blur-sm opacity-50"
                    : ""
                }`}
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
                variants={itemVariants}
                className={`flex flex-col mt-1.5 transition duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "blur-sm opacity-50"
                    : ""
                }`}
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
          ))}
        </ol>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
