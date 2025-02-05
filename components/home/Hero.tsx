"use client";

import { useTranslations } from "@/i18n/client";
import { BlurImage } from "@/components/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RetroGrid } from "../ui/retro-grid";
import { StarBorder } from "../ui/star-border";
import Image from "next/image";

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
      <div className="flex flex-col items-center justify-between gap-6">
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
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-2xl" />
        </motion.div>

        <StarBorder className="text-sm font-medium font-sans flex w-max rounded-lg cursor-text">
          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-2 h-2 bg-green-500 rounded-full">
              <span className="absolute inset-0 -z-1 inline-flex h-full w-full animate-ping  rounded-full bg-green-500 opacity-75"></span>
            </div>
            Welcome&apos;s you!{" "}
            <Image
              src="/images/hello-hand.gif"
              alt="Welcome animation"
              width={20}
              height={20}
              priority
              className="object-contain -rotate-[25deg]"
              quality={60}
            />
          </div>
        </StarBorder>

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
    </div>
  );
};

export default Hero;
