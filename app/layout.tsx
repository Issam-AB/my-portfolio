import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Providers from "./providers";
import Header from "@/components/layout/header";
import Image from "next/image";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Issam - A Full Stack Engineer",
  description: "Issam • Modern & Minimal Portfolio • Full Stack Engineer",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={"en"} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <>
              <Header />
              <main
                id="skip-nav"
                className="mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8"
              >
                {children}
              </main>

              <Footer />
              <Image
                width={1512}
                height={550}
                className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
                src="/images/gradient-background-top.webp"
                alt=""
                role="presentation"
                priority
              />
            </>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
