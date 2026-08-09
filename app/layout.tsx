import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zutomate | Predictable Growth Systems for B2B",
  description:
    "Zutomate builds AI-powered outbound systems, Clay automations, and AI agents for B2B teams. Predictable pipeline without the guesswork.",
  metadataBase: new URL("https://zutomate.com"),
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
    title: "Zutomate | Predictable Growth Systems for B2B",
    description:
      "Zutomate builds AI-powered outbound systems, Clay automations, and AI agents for B2B teams. Predictable pipeline without the guesswork.",
    siteName: "Zutomate",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zutomate | Predictable Growth Systems for B2B",
    description:
      "Zutomate builds AI-powered outbound systems, Clay automations, and AI agents for B2B teams. Predictable pipeline without the guesswork.",
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
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;400;500;600&family=DM+Sans:wght@300;400;500&family=Black+Han+Sans&family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
