import { useEffect, useRef, useState, ReactNode } from "react";

const BorderGlow = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({
    x: "-100%",
    y: "-100%",
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x: `${x}px`, y: `${y}px` });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden transform transition-transform ease-in-out active:scale-90 shadow-feature-card dark:shadow-feature-card-dark group rounded-xl p-2"
      ref={ref}
    >
      <span
        className={`absolute z-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#fb3b53_0%,transparent_50%)] `}
        style={
          {
            left: mousePosition.x,
            top: mousePosition.y,
          } as React.CSSProperties
        }
      ></span>
      {children}
    </div>
  );
};

export default BorderGlow;
