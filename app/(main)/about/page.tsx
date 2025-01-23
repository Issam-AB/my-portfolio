import type { Metadata, ResolvingMetadata } from "next";
import type { AboutPage, WithContext } from "schema-dts";

import { i18n } from "@/i18n/config";
import { getTranslations, setRequestLocale } from "@/i18n/server";
// import { notFound } from "next/navigation";

import PageTitle from "@/components/page-title";
import {
  SITE_GITHUB_URL,
  SITE_INSTAGRAM_URL,
  SITE_NAME,
  SITE_URL,
  SITE_X_URL,
  SITE_YOUTUBE_URL,
} from "@/lib/constants";
import { getLocalizedPath } from "@/lib/utils";
import AboutDetails from "./details";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const generateStaticParams = (): Array<{ locale: string }> => {
  return i18n.locales.map((locale) => ({ locale }));
};

export const generateMetadata = async (
  props: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { locale } = await props.params;
  const previousOpenGraph = (await parent).openGraph ?? {};
  const previousTwitter = (await parent).twitter ?? {};
  const t = await getTranslations({ locale, namespace: "about" });
  const title = t("title");
  const description = t("description");
  const url = getLocalizedPath({ slug: "/about", locale });

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...previousOpenGraph,
      url,
      type: "profile",
      title,
      description,
    },
    twitter: {
      ...previousTwitter,
      title,
      description,
    },
  };
};

const Page = async (props: PageProps) => {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const title = t("about.title");
  const description = t("about.description");
  const url = `${SITE_URL}${getLocalizedPath({ slug: "/about", locale })}`;

  const jsonLd: WithContext<AboutPage> = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: title,
    description,
    url,
    mainEntity: {
      "@type": "Person",
      name: SITE_NAME,
      description: t("metadata.site-description"),
      url: SITE_URL,
      sameAs: [
        SITE_INSTAGRAM_URL,
        SITE_X_URL,
        SITE_GITHUB_URL,
        SITE_YOUTUBE_URL,
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageTitle
        title={title}
        description={
          "👋 Hi there! I'm Issam, a Full Stack Engineer hybrid who loves to build great products with delightful interfaces."
        }
      />
      <AboutDetails />
    </>
  );
};

export default Page;
