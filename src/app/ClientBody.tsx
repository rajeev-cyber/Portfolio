"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = `${document.body.className
      .replace(/bg-\w+/g, "")
      .trim()} bg-background text-foreground antialiased`;
  }, []);

  return children;
}
