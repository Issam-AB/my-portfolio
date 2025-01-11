"use client";

import { tw } from "@/lib/utils/tw";
import NextImage from "next/image";
import { useState } from "react";

type ImageProps = {
  imageClassName?: string;
  lazy?: boolean;
} & React.ComponentProps<typeof NextImage>;

export const BlurImage = (props: ImageProps) => {
  const { alt, src, className, imageClassName, lazy = true, ...rest } = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={tw("overflow-hidden", isLoading && "animate-pulse", className)}
    >
      <NextImage
        className={tw(
          isLoading && "scale-[1.02] blur-xl grayscale",
          imageClassName
        )}
        style={{
          transition: "filter 700ms ease, transform 150ms ease",
        }}
        src={src}
        alt={alt}
        loading={lazy ? "lazy" : undefined}
        priority={!lazy}
        quality={100}
        onLoad={() => {
          setIsLoading(false);
        }}
        {...rest}
      />
    </div>
  );
};
