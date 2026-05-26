import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalTabs from "../legal/LegalTabs";
import "../legal/styles.css";

export const metadata: Metadata = {
  title: "Terms of Use | Zutomate",
  description: "Zutomate's Terms of Use — the terms governing your use of our site and services.",
  robots: "noindex, follow",
  alternates: { canonical: "https://zutomate.com/terms" },
  openGraph: {
    type: "website",
    url: "https://zutomate.com/terms",
    title: "Privacy Policy & Terms of Use | Zutomate",
    description: "Zutomate's Privacy Policy and Terms of Use — how we collect, use, and protect your information.",
    images: [{ url: "https://zutomate.com/og-image.png" }],
    siteName: "Zutomate",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="lg-hero">
        <div className="badge"><span className="badge-text">Legal</span></div>
        <h1>Policies &amp; Terms</h1>
        <p>How we handle your data and the terms governing your use of our site.</p>
      </div>
      <LegalTabs defaultTab="tou" />
      <Footer />
    </>
  );
}
