"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "@/i18n/client";
import { motion, useInView, Variants } from "framer-motion";
import { BlurImage } from "../ui";
import { EXPERIENCE } from "@/lib/constants";

// Container Animation (Overall section)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

// Experience Item Animation
// const experienceItemVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: [0.4, 0, 0.2, 1],
//     },
//   },
// };

// Content Variants (Company Details)
const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Details Variants (Responsibilities)
const detailsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Tags Variants
const tagVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 12,
    },
  },
};

const AnimatedTags: React.FC<{ tags?: string[] }> = ({ tags }) => {
  return tags && tags.length > 0 ? (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3, // Delay after details animation
            staggerChildren: 0.07, // Quick stagger between tags
          },
        },
      }}
      className="flex items-center flex-wrap gap-2"
    >
      {tags.map((tech: string, techIndex: number) => (
        <motion.div
          key={techIndex}
          variants={tagVariants}
          className="border bg-zinc-50 leading-4 dark:bg-zinc-900 text-xs px-2 py-1 rounded"
        >
          {tech}
        </motion.div>
      ))}
    </motion.div>
  ) : null;
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

  // Track if we're on a mobile device
  const [isMobile, setIsMobile] = useState(false);
  // Track touch interaction state
  const [isTouched, setIsTouched] = useState(false);
  // Track if we should show the hover effect
  const [showHoverEffect, setShowHoverEffect] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle touch interactions
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;

    // Prevent default only if this is the first touch
    if (!isTouched) {
      e.preventDefault();
      setIsTouched(true);
      setHoveredIndex(index);
      setShowHoverEffect(true);
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;

    // Add a slight delay before resetting the touch state
    setTimeout(() => {
      setIsTouched(false);
    }, 100);
  };

  // Handle mouse interactions (desktop only)
  const handleMouseEnter = () => {
    if (!isMobile) {
      setHoveredIndex(index);
      setShowHoverEffect(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredIndex(null);
      setShowHoverEffect(false);
    }
  };

  // Auto-reset touch state when switching items
  useEffect(() => {
    if (hoveredIndex !== index) {
      setIsTouched(false);
      setShowHoverEffect(false);
    }
  }, [hoveredIndex, index]);

  const blurClassName =
    hoveredIndex !== null && hoveredIndex !== index
      ? "blur-[2px] opacity-40 transition-all duration-200 ease-out"
      : "transition-all duration-200 ease-out";

  return (
    <motion.li
      ref={containerRef}
      initial="hidden"
      animate={isContainerInView ? "visible" : "hidden"}
      className={`group mb-10 ml-10 ${isMobile ? "touch-manipulation" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        WebkitTapHighlightColor: "transparent", // Remove tap highlight on iOS
      }}
    >
      {isMobile && (
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-200 rounded-lg -z-10 ${
            showHoverEffect ? "opacity-10" : ""
          }`}
        />
      )}

      <span className="absolute flex items-center justify-center rounded-full -start-6">
        <BlurImage
          width={200}
          height={200}
          src={exp.picture}
          alt={exp.company}
          className="rounded-lg border border-divider"
          imageClassName={`size-12 object-cover object-center transition-all duration-300 ${
            isMobile
              ? showHoverEffect
                ? ""
                : "grayscale"
              : "grayscale group-hover:grayscale-0"
          }`}
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

        <AnimatedTags tags={exp.tags} />
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
