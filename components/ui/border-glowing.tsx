import { useMouse } from "@/lib/hooks/usemouse";
import { tw } from "@/lib/utils";
import { ReactNode } from "react";

const BorderGlow = ({
  circleSize = 400,
  children,
}: {
  circleSize?: number;
  children: ReactNode;
}) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      className="group relative overflow-hidden transform transition-transform ease-in-out active:scale-90 shadow-feature-card dark:shadow-feature-card-dark group rounded-xl p-2"
      ref={parentRef}
    >
      <div
        className={tw(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100"
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          opacity: 0.1,
          background:
            "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
        }}
      />
      {children}
    </div>
  );
};

export default BorderGlow;
