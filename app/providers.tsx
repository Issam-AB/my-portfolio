"use client";

import React from "react";
import { Toaster, type ToasterProps } from "@/components/ui";
import { ThemeProvider, useTheme } from "next-themes";
// import { SessionProvider } from "next-auth/react";

type ProvidesProps = {
  children: React.ReactNode;
};

const Providers = (props: ProvidesProps) => {
  const { children } = props;
  const { theme = "system" } = useTheme();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      {/* <SessionProvider> */}
      {children}
      {/* </SessionProvider> */}
      <Toaster
        toastOptions={{
          duration: 2500,
        }}
        visibleToasts={5}
        theme={theme as ToasterProps["theme"]}
        expand
      />
    </ThemeProvider>
  );
};

export default Providers;
