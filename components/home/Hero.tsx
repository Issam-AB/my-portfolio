"use client";

import { useTranslations } from "@/i18n/client";
import { BlurImage } from "@/components/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RetroGrid } from "../ui/retro-grid";
import { StarBorder } from "../ui/star-border";
import { Marquee } from "@/components/ui/marquee";

const TEXTS = [
  {
    key: "amazing",
    className:
      "bg-clip-text text-center text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]",
  },
  {
    key: "stunning",
    className:
      "bg-clip-text text-center text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]",
  },
  {
    key: "fantastic",
    className:
      "bg-clip-text text-center text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]",
  },
  {
    key: "attractive",
    className:
      "bg-clip-text text-center text-transparent bg-gradient-to-r from-[#2ecc70] to-[#1ca085]",
  },
] as const;

const SPEED = 2;

const variants = {
  enter: {
    y: 100,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -100,
    opacity: 0,
  },
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TEXTS.length);
    }, SPEED * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const textItem = TEXTS[currentIndex];
  if (!textItem) return null;

  return (
    <div className="mt-16 space-y-6 h-[85dvh]">
      <div className="flex flex-col items-center justify-between gap-8">
        <motion.div
          className="relative size-28"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="relative">
            <BlurImage
              src="/images/photo.png"
              className="rounded-full ring ring-white object-contain"
              width={150}
              height={150}
              alt="Issam"
              lazy={false}
            />
            <StarBorder className="absolute top-5 -right-32 text-sm font-medium font-sans flex w-max -rotate-[15deg]">
              <div className="inline-flex items-center gap-1.5">
                <div className="relative w-2 h-2 bg-green-500 rounded-full">
                  <span className="absolute inset-0 -z-1 inline-flex h-full w-full animate-ping  rounded-full bg-green-500 opacity-75"></span>
                </div>
                Issam aboulfadl 👋🏻
              </div>
            </StarBorder>
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-2xl" />
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-title flex flex-col text-center flex-wrap gap-2 text-xl font-bold sm:text-3xl">
            <div>{t("homepage.hero.title-top")}</div>
            <div className="flex gap-2">
              <motion.div
                layout
                key="title-middle-left"
                className="leading-[30px] sm:leading-[45px]"
              >
                {t("homepage.hero.title-middle-left")}
              </motion.div>
              <div className="relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    layout
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="inline-flex items-center justify-center leading-[30px] sm:leading-[45px]"
                  >
                    <span className={textItem.className}>
                      {t(`homepage.hero.${textItem.key}`)}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
              <motion.div
                layout
                key="title-middle-right"
                className="leading-[30px] sm:leading-[45px]"
              >
                {t("homepage.hero.title-middle-right")}
              </motion.div>
            </div>
            <div>{t("homepage.hero.title-bottom")}</div>
          </h1>
          <div className="text-muted-foreground text-sm">
            {t("homepage.hero.location-timezone")}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <RetroGrid />
      </div>
      <div className="absolute start-0 end-0 bottom-0 sm:overflow-visible overflow-hidden  pointer-events-none">
        <div className="relative">
          <div
            className="w-full sm:h-24 h-20 opacity-60"
            style={{
              background: `linear-gradient(90deg, rgba(216,214,238,1) 0%, rgba(224,175,182,1) 50%, rgba(247,203,189,1) 100%)`,
            }}
          />
          <Marquee
            gap="20px"
            className="sm:py-4 py-2 absolute top-0 z-20 bg-white shadow-feature-card sm:-rotate-[1.5deg] -rotate-[0.5deg] sm:-skew-x-[7deg] -skew-x-[4deg]"
            fade
            pauseOnHover
            haveMask={false}
          >
            {[
              "Web Design",
              "App Design",
              "Dashboard",
              "CRM Software",
              "Strategy",

              "Web Design",
              "App Design",
              "Dashboard",
              "CRM Software",
              "Strategy",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-[20px]">
                <span className="font-semibold sm:text-3xl text-xl">
                  {text}
                </span>
                <BlurImage
                  src="/images/crystal.png"
                  className="object-contain"
                  width={50}
                  height={50}
                  alt="crystal"
                  lazy={false}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero;
