"use client";

import { Navigation } from "lucide-react";
import { socialMedia } from "@/data";
import MagicButton from "../ui/MagicButton";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const h1Ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const buttonMagicRef = useRef<HTMLAnchorElement>(null);

  const h1InView = useInView(h1Ref, { once: true, margin: "-100px" });
  const buttonInView = useInView(buttonRef || buttonMagicRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <footer className="relative sm:px-2 px-4 sm:pb-8 pb-4" id="contact">
      <div className="bg-background/30 mx-auto max-w-5xl rounded-2xl flex flex-col p-8 shadow-sm saturate-100 backdrop-blur-[10px]">
        <div className="flex flex-col items-center">
          <motion.h1
            ref={h1Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: h1InView ? 1 : 0, y: h1InView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="sm:text-5xl text-3xl font-bold text-center lg:max-w-[45vw]"
          >
            Ready to take{" "}
            <span className="bg-clip-text text-center text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]">
              your
            </span>{" "}
            digital presence to the next level?
          </motion.h1>
          <motion.p
            ref={buttonRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: buttonInView ? 1 : 0,
              y: buttonInView ? 0 : 50,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:mt-10 my-5 text-center"
          >
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </motion.p>
          <motion.a
            ref={buttonMagicRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: buttonInView ? 1 : 0,
              y: buttonInView ? 0 : 50,
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="mailto:Issam.aboulfadl05@gmail.com"
          >
            <MagicButton
              title="Let's get in touch"
              icon={<Navigation />}
              position="right"
            />
          </motion.a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
          <p className="text-sm md:font-normal font-light">
            <div>
              &copy; {new Date().getFullYear()} Made with ❤️ by Issam ABOULFADL
            </div>
          </p>

          <div className="sm:flex hidden items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                onClick={() => window.open(info.link, "_blank")}
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 dark:bg-slate-50/80 rounded-lg border border-black-300"
              >
                <Image src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        fill
        layout="fill"
        objectFit="cover"
        className="absolute inset-x-0 bottom-0 -z-10"
        src="/images/gradient-background-bottom.png"
        alt=""
        role="presentation"
        priority
      />
    </footer>
  );
};

export default Footer;
