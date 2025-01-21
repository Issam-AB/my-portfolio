"use client";

import { BlurImage } from "@/components/ui";
import Link from "../link";
import { Project } from "@/types/project";
import { TechIcon } from "../tech-icon";

type ProjectCardProps = Project;
type ProjectCardsProps = {
  projects: Project[];
};

const ProjectCards = (props: ProjectCardsProps) => {
  const { projects } = props;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
};

const ProjectCard = (props: ProjectCardProps) => {
  const { name, description, slug, img, iconLists } = props;

  return (
    <Link
      href={`/projects/${slug}`}
      className="shadow-feature-card dark:shadow-feature-card-dark group rounded-xl px-2 py-4"
    >
      <BlurImage
        src={img}
        width={1280}
        height={832}
        imageClassName="group-hover:scale-105 h-[290px] w-full object-cover object-top transition-transform duration-300 delay-300"
        alt={name}
        className="rounded-lg"
      />

      <div className="flex-1 px-2 py-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold truncate">{name}</h2>
          <div className="text-muted-foreground line-clamp-2">
            {description}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {iconLists.map((iconPath, index) => (
            <div
              key={index}
              className="border border-zinc-200 rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center bg-[#F3F4F6] backdrop-blur-lg bg-opacity-30"
              style={{
                transform: `translateX(-${13 * index + 2}px)`,
              }}
            >
              <TechIcon key={index} iconPath={iconPath} className="w-8 h-8" />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCards;
