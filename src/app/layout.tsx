import type { Metadata } from "next";
import "./globals.css";
import { person } from "@/lib/resume";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tushank.dev"),
  title: `${person.name} – ${person.title}`,
  description: person.summary,
  keywords: person.keywords,
  openGraph: {
    title: `${person.name} – ${person.title}`,
    description: person.summary,
    url: "https://tushank.dev",
    siteName: person.name,
    type: "profile"
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} – ${person.title}`,
    description: person.summary
  },
  alternates: { canonical: "https://tushank.dev" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.title,
    email: `mailto:${person.email}`,
    url: "https://tushank.dev",
    sameAs: [person.linkedin, person.github].filter(Boolean)
  };
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${person.name} – ${person.title}`,
    url: "https://tushank.dev",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tushank.dev/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <body className="antialiased text-[15px] sm:text-base">
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
