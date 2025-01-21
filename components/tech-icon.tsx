// components/TechIcon.tsx
import Image from "next/image";

interface TechIconProps {
  iconPath: string;
  className?: string;
}

export const TechIcon = ({
  iconPath,
  className = "w-6 h-6",
}: TechIconProps) => {
  return (
    <div className={className}>
      <Image
        src={iconPath.startsWith("/") ? iconPath : `/${iconPath}`}
        alt={`Technology icon ${iconPath
          .split("/")
          .pop()
          ?.replace(".svg", "")}`}
        width={24}
        height={24}
        className="object-contain w-full h-full p-1"
      />
    </div>
  );
};
