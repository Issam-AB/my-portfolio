"use client";

import { useTranslations } from "@/i18n/client";
import { BlurImage, buttonVariants } from "@/components/ui";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Link from "../link";
import CodingHours from "./coding-hours";
import Connect from "./connect";
import FavoriteFramework from "./favorite-framework";
import LocationCard from "./location-card";
import StacksCard from "./stacks-card";
import { tw } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

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

const AboutMe = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });
  const t = useTranslations();

  return (
    <>
      <div className="absolute start-0 end-0 sm:-bottom-[70px] -bottom-[60px] sm:overflow-visible overflow-hidden  pointer-events-none">
        <div className="relative">
          <div
            className="w-full sm:h-24 h-20 opacity-80 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/gradient-background-bottom.webp')",
            }}
          />
          <Marquee
            gap="20px"
            className="sm:py-4 py-2 absolute top-0 z-20 bg-white dark:bg-[#0A0A0A] shadow-feature-card sm:-rotate-[1.5deg] -rotate-[0.5deg] sm:-skew-x-[8deg] -skew-x-[4deg]"
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
                  src="/images/crystal.webp"
                  className="object-contain"
                  width={50}
                  height={50}
                  alt="crystal"
                  lazy={true}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <motion.div
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={variants}
        ref={cardsRef}
        transition={{
          duration: 0.5,
        }}
        className="relative sm:my-24 my-16"
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
          {t("homepage.about-me.title")}
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
          <div className="grid gap-4">
            <LocationCard />
            <StacksCard />
          </div>
          <div className="grid gap-4">
            <Connect />
            <div className="grid gap-4 [@media(min-width:450px)]:grid-cols-2">
              <CodingHours />
              <FavoriteFramework />
            </div>
          </div>
        </motion.div>
        <div className="my-8 flex items-center justify-center">
          <Link
            href="/about"
            className={tw(buttonVariants({ variant: "outline" }), "rounded-xl")}
          >
            {t("homepage.about-me.more")}
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
