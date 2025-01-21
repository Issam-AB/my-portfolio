import { BlurImage } from "@/components/ui";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { allProjects } from "@/data";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

import type { WithContext, SoftwareApplication } from "schema-dts";
import Header from "./header";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const generateStaticParams = (): Array<{
  slug: string;
}> => {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
};

export const generateMetadata = async (
  props: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { slug } = await props.params;

  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  const { name, description } = project;
  const previousTwitter = (await parent).twitter ?? {};
  const previousOpenGraph = (await parent).openGraph ?? {};
  const url = `/projects/${slug}`;

  return {
    title: name,
    description: description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...previousOpenGraph,
      url,
      title: name,
      description: description,
      images: [
        {
          url: `/images/projects/${slug}/cover.png`,
          width: 1280,
          height: 832,
          alt: description,
          type: "image/png",
        },
      ],
    },
    twitter: {
      ...previousTwitter,
      title: name,
      description: description,
      images: [
        {
          url: `/images/projects/${slug}/cover.png`,
          width: 1280,
          height: 832,
          alt: description,
        },
      ],
    },
  };
};

const Page = async (props: PageProps) => {
  const { slug } = await props.params;

  const project = allProjects.find((p) => p.slug === slug);
  const url = `${SITE_URL}/projects/${slug}`;

  if (!project) {
    notFound();
  }

  const { name, description, images } = project;

  const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "WebApplication",
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    screenshot: `${images[0]}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <Header {...project} />

        {images.map((img: string, index: number) => (
          <div className="flex flex-col" key={index}>
            <BlurImage
              key={index}
              width={1280}
              height={832}
              src={`/images${img}`}
              alt={description}
              className="mt-10 rounded-lg shadow-feature-card dark:shadow-feature-card-dark"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
