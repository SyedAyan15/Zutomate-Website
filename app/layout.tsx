import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { graph, organization } from "./seo/schema";

export const metadata: Metadata = {
  title: "Zutomate | RevOps and GTM Engineering for B2B",
  description:
    "Zutomate is a RevOps and GTM engineering agency for B2B companies. We design, build and manage CRM architecture, data infrastructure and outbound systems.",
  metadataBase: new URL("https://zutomate.com"),
  alternates: { canonical: "/" },
  // /favicon.ico comes from the app/favicon.ico file convention, which emits its
  // own link tag. Declaring `icons` here suppresses the convention's apple link,
  // so /apple-icon.png (also a file convention) has to be named explicitly.
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://zutomate.com/",
    title: "Zutomate | RevOps and GTM Engineering for B2B",
    description:
      "Zutomate is a RevOps and GTM engineering agency for B2B companies. We design, build and manage CRM architecture, data infrastructure and outbound systems.",
    siteName: "Zutomate",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zutomate | RevOps and GTM Engineering for B2B",
    description:
      "Zutomate is a RevOps and GTM engineering agency for B2B companies. We design, build and manage CRM architecture, data infrastructure and outbound systems.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Bricolage is requested as a variable range (200..800) rather than
            fixed instances, so any weight is available for fine-tuning. */}
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=DM+Sans:wght@300;400;500&family=Black+Han+Sans&family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body>
        <JsonLd data={graph(organization())} />
        {children}
      </body>
    </html>
  );
}
