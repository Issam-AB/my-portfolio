"use client";

import {
  SiCloudflare,
  SiCss3,
  SiDrizzle,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
  SiSpringboot,
  SiVuedotjs,
} from "@icons-pack/react-simple-icons";
import { useTranslations } from "@/i18n/client";
import { ZapIcon } from "lucide-react";
import { Marquee } from "../ui/marquee";

const StacksCard = () => {
  const t = useTranslations();

  return (
    <div className="shadow-feature-card dark:shadow-feature-card-dark flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <ZapIcon className="size-[18px]" />
        <h2 className="text-sm">{t("homepage.about-me.stacks")}</h2>
      </div>
      <Marquee gap="20px" className="py-4" fade pauseOnHover>
        <SiHtml5 className="size-10" />
        <SiCss3 className="size-10" />
        <SiJavascript className="size-10" />
        <SiTypescript className="size-10" />
        <SiSpringboot className="size-10" />
        <SiFigma className="size-10" />
        <SiTailwindcss className="size-10" />
        <SiNextdotjs className="size-10" />
        <SiReact className="size-10" />
        <SiVuedotjs className="size-10" />
        <SiPython className="size-10" />
        <SiPostgresql className="size-10" />
        <SiRadixui className="size-10" />
      </Marquee>
      <Marquee gap="20px" className="py-4" reverse fade pauseOnHover>
        <SiPrisma className="size-10" />
        <SiMysql className="size-10" />
        <SiFirebase className="size-10" />
        <SiGit className="size-10" />
        <SiVite className="size-10" />
        <SiDrizzle className="size-10" />
        <SiCloudflare className="size-10" />
        <SiMarkdown className="size-10" />
        <SiVitest className="size-10" />
        <SiNodedotjs className="size-10" />
        <SiReactquery className="size-10" />
      </Marquee>
    </div>
  );
};

export default StacksCard;
