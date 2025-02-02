import { BlurImage } from "@/components/ui";
import Link from "next/link";
import React from "react";

const AboutDetails = () => {
  return (
    <div>
      <h2 className="scroll-m-32 text-2xl font-bold mb-4">WHO AM I</h2>
      <p className="text-foreground/85 mb-4">
        I&apos;m a Full Stack Engineer from{" "}
        <Link
          className="font-bold text-blue-500"
          href={
            "https://www.google.com/maps/place/Morocco/@31.700686,-12.4432133,6z/data=!3m1!4b1!4m6!3m5!1s0xd0b88619651c58d:0xd9d39381c42cffc3!8m2!3d31.791702!4d-7.09262!16zL20vMDR3Z2g?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
          }
        >
          Morocco
        </Link>{" "}
        with over four (4) years of professional experience. I focus on details
        and I&apos;m passionate about crafting software products that look great
        and are both accessible and easy to maintain.
      </p>

      <BlurImage
        src="/images/about-img.jpg"
        alt="about-picture"
        width={1000}
        height={200}
        imageClassName="rounded-lg"
      />

      <p className="text-foreground/85 mt-4">
        I bring a unique perspective to every project, ensuring seamless
        functionality meets stunning aesthetics. My approach combines clean code
        architecture with intuitive user interfaces, creating solutions that not
        only work flawlessly but also delight users.
      </p>
      <p className="text-foreground/85 mt-4">
        I specialize in building responsive web applications with React and
        creating cross-platform mobile experiences using React Native. When I'm
        not coding, you&apos;ll find me designing sleek user interfaces in
        Figma, always striving to bridge the gap between functionality and
        beautiful design. Let&apos;s build something amazing together! ✨
      </p>
    </div>
  );
};

export default AboutDetails;
