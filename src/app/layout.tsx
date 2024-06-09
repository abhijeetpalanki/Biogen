import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

export const metadata: Metadata = {
  title: "Biogen",
  description: "Bio Generator using Next.js and Groq",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, "font-sans")}>
        <GridPattern width={60} height={60} className="-z-10 opacity-70" />
        {children}
      </body>
    </html>
  );
}
