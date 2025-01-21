import { i18n } from "@/i18n/config";
import { getTranslations, setRequestLocale } from "@/i18n/server";
import type { Metadata } from "next";
import type { WebSite, WithContext } from "schema-dts";

import AboutMe from "@/components/home/about-me";
import SelectedProjects from "@/components/home/selected-projects";
import {
  SITE_LINKEDIN_URL,
  SITE_GITHUB_URL,
  SITE_INSTAGRAM_URL,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  SITE_X_URL,
  SITE_YOUTUBE_URL,
} from "@/lib/constants";
import { getLocalizedPath } from "@/lib/utils";
import Hero from "@/components/home/Hero";
import GetInTouch from "@/components/home/get-in-touch";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const generateStaticParams = (): Array<{ locale: string }> => {
  return i18n.locales.map((locale) => ({ locale }));
};

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const { locale } = await props.params;

  return {
    alternates: {
      canonical: getLocalizedPath({ slug: "", locale }),
    },
  };
};

const Page = async (props: PageProps) => {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("metadata");

  const url = `${SITE_URL}${getLocalizedPath({ slug: "", locale })}`;

  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: t("site-title"),
    description: t("site-description"),
    url,
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
      sameAs: [
        SITE_LINKEDIN_URL,
        SITE_INSTAGRAM_URL,
        SITE_X_URL,
        SITE_GITHUB_URL,
        SITE_YOUTUBE_URL,
      ],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SITE_URL,
    },
    inLanguage: locale,
    copyrightYear: new Date().getFullYear(),
    keywords: SITE_KEYWORDS,
    dateCreated: "2020-12-05",
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutMe />
      <SelectedProjects />
      {/* <LatestArticles /> */}
      <GetInTouch />
    </>
  );
};

export default Page;
