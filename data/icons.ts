// icons.ts
import { 
    type IconType,
    SiReact, 
    SiNextdotjs, 
    SiTailwindcss, 
    SiTypescript, 
    SiThreedotjs,
    SiFramer,
    SiCloudflare,
  } from "@icons-pack/react-simple-icons";
  
  export const iconMap: { [key: string]: IconType } = {
    "/re.svg": SiReact,
    "/next.svg": SiNextdotjs,
    "/tail.svg": SiTailwindcss,
    "/ts.svg": SiTypescript,
    "/three.svg": SiThreedotjs,
    "/fm.svg": SiFramer,
    "/c.svg": SiCloudflare,
  };
  
  export const getIconComponent = (path: string): IconType => {
    return iconMap[path] || SiReact;
  };