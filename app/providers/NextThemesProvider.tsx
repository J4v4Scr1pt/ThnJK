// app/providers.tsx
"use client";

import {ThemeProvider } from "next-themes";

export function NextThemesProvider({children}: { children: React.ReactNode }) {
  return (
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
  )
}