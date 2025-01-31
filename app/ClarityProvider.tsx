"use client";

import { clarity } from "react-microsoft-clarity";
import { useEffect } from "react";

export function ClarityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Clarity with your project ID
    clarity.init("q2jxrzq0lt");

    // Optional: Consent management
    clarity.consent();

    // Optional: Set app version tag
    clarity.setTag("app_version", "1.0.0");
  }, []);

  return <>{children}</>;
}
