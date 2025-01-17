import { tw, range } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  gap?: string;
  direction?: "left" | "up";
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
  haveMask?: boolean;
};

export const Marquee = (props: MarqueeProps) => {
  const {
    children,
    gap = "1rem",
    direction = "left",
    pauseOnHover = false,
    reverse = false,
    fade = false,
    className,
    haveMask = true,
  } = props;

  const maskDirection = direction === "left" ? "to right" : "to bottom";
  const mask = fade
    ? `linear-gradient(${maskDirection}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
    : undefined;

  return (
    <div
      className={tw(
        "group flex overflow-hidden",
        direction === "left" ? "flex-row" : "flex-col",
        className
      )}
      style={{
        maskImage: haveMask ? mask : "",
        WebkitMaskImage: haveMask ? mask : "",
        gap,
      }}
    >
      {range(2).map((n) => (
        <div
          key={n}
          style={
            {
              "--gap": gap,
            } as React.CSSProperties
          }
          className={tw(
            "flex shrink-0 justify-around gap-[var(--gap)]",
            direction === "left"
              ? "animate-marquee-left flex-row"
              : "animate-marquee-up flex-col",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "direction-reverse"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
};
