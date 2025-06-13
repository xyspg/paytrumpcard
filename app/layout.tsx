import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Trump Card - Pathway to American Citizenship",
  description: "Pay the official Trump Card - Donald Trump's revolutionary pathway to American citizenship. Secure your spot for this exclusive opportunity to become an American citizen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        defer
        src="https://analytics.xyspg.moe/script.js"
        data-website-id="ddecac37-8e28-4c02-95ab-e132aa4f6dcc"
      />
      <html lang="en">
        <body className={`antialiased`}>{children}</body>
      </html>
    </>
  );
}
