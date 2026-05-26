'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Tab = 'pp' | 'tou';

export default function LegalTabs({ defaultTab }: { defaultTab: Tab }) {
  const [active, setActive] = useState<Tab>(defaultTab);
  const router = useRouter();

  function switchTab(tab: Tab) {
    setActive(tab);
    router.replace(tab === 'pp' ? '/privacy' : '/terms', { scroll: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="lg-wrap">
      <div className="lg-tabs">
        <button className={`lg-tab${active === 'pp' ? ' active' : ''}`} onClick={() => switchTab('pp')}>
          Privacy Policy
        </button>
        <button className={`lg-tab${active === 'tou' ? ' active' : ''}`} onClick={() => switchTab('tou')}>
          Terms of Use
        </button>
      </div>

      {/* ── Privacy Policy ── */}
      {active === 'pp' && (
        <div className="lg-content">
          <div className="lg-badge">Last updated: April 2025</div>
          <h1>Privacy Policy</h1>
          <p className="lg-meta">Zutomate | zutomate.com</p>
          <div className="lg-box">
            <p>This policy explains how Zutomate (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects information when you visit our website or engage our services. By using our site you agree to the practices described here.</p>
          </div>

          <h2>1. Information we collect</h2>
          <p>We collect information you provide directly and information generated when you use our site:</p>
          <ul>
            <li><strong>Contact data</strong> — name, email address, company name, and any details you submit via our contact or booking forms.</li>
            <li><strong>Usage data</strong> — pages visited, time on site, browser type, and referring URL, collected automatically via analytics tools.</li>
            <li><strong>Communication data</strong> — messages, emails, or other content you send us.</li>
            <li><strong>Cookie data</strong> — small files stored in your browser to remember preferences and support analytics (see Section 6).</li>
          </ul>
          <p>We do not knowingly collect sensitive personal data or information from individuals under the age of 16.</p>

          <h2>2. How we use your information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Respond to enquiries and provide the services you request.</li>
            <li>Send operational communications related to your engagement with us.</li>
            <li>Improve and personalise the experience on our website.</li>
            <li>Analyse site performance and understand how visitors interact with our content.</li>
            <li>Comply with applicable legal obligations.</li>
          </ul>
          <p>We will not sell, rent, or trade your personal information to third parties for their own marketing purposes.</p>

          <h2>3. Legal basis for processing</h2>
          <p>Where applicable under data protection law (including GDPR), we process your personal data on the following bases:</p>
          <ul>
            <li><strong>Consent</strong> — where you have given clear consent (e.g. subscribing to updates).</li>
            <li><strong>Legitimate interests</strong> — to operate and improve our business, provided your rights are not overridden.</li>
            <li><strong>Contractual necessity</strong> — to deliver services you have engaged us for.</li>
            <li><strong>Legal obligation</strong> — where required by law.</li>
          </ul>

          <h2>4. How we share your information</h2>
          <p>We may share your information with trusted service providers who help us operate our business, including:</p>
          <ul>
            <li>CRM and email platforms (e.g. HubSpot, Google Workspace).</li>
            <li>Analytics tools (e.g. Google Analytics).</li>
            <li>Scheduling and meeting tools (e.g. Calendly).</li>
            <li>Cloud infrastructure and hosting providers.</li>
          </ul>
          <p>All third-party processors are bound by appropriate data processing agreements and are only permitted to use your data for specified purposes.</p>

          <h2>5. Data retention</h2>
          <p>We retain personal data only as long as necessary to fulfil the purposes outlined in this policy or as required by law. Contact and client data is typically retained for up to 3 years after the end of engagement, unless you request earlier deletion.</p>

          <h2>6. Cookies</h2>
          <p>Our website uses cookies to support analytics and improve user experience. You may control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain parts of the site. We do not use cookies to serve third-party advertising.</p>

          <h2>7. Your rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Object to or restrict certain processing activities.</li>
            <li>Data portability (receive your data in a structured format).</li>
            <li>Withdraw consent at any time where processing is based on consent.</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:hello@zutomate.com">hello@zutomate.com</a>.</p>

          <h2>8. Data security</h2>
          <p>We implement appropriate technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. However, no internet transmission is entirely secure and we cannot guarantee absolute security.</p>

          <h2>9. International transfers</h2>
          <p>Your data may be processed in countries outside your own. Where transfers occur, we ensure appropriate safeguards are in place (such as standard contractual clauses) to protect your data in accordance with applicable law.</p>

          <h2>10. Changes to this policy</h2>
          <p>We may update this policy from time to time. The &quot;Last updated&quot; date at the top of this page will reflect any changes. Continued use of our site after updates constitutes acceptance of the revised policy.</p>

          <h2>11. Contact</h2>
          <p>If you have questions about this policy or how we handle your data, contact us at <a href="mailto:hello@zutomate.com">hello@zutomate.com</a> or visit <Link href="/">zutomate.com</Link>.</p>
        </div>
      )}

      {/* ── Terms of Use ── */}
      {active === 'tou' && (
        <div className="lg-content">
          <div className="lg-badge">Last updated: April 2025</div>
          <h1>Terms of Use</h1>
          <p className="lg-meta">Zutomate | zutomate.com</p>
          <div className="lg-box">
            <p>By accessing or using zutomate.com (the &quot;Site&quot;) or engaging Zutomate&apos;s services, you agree to be bound by the following terms. Please read them carefully. If you do not agree, do not use the Site.</p>
          </div>

          <h2>1. About Zutomate</h2>
          <p>Zutomate is a GTM and AI automation agency that provides outbound infrastructure, Clay-based systems, AI agents, and go-to-market strategy to B2B businesses. References to &quot;Zutomate&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; in these terms refer to Zutomate and its team.</p>

          <h2>2. Use of the site</h2>
          <p>You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
          <ul>
            <li>Use the Site in any way that violates applicable local, national, or international laws or regulations.</li>
            <li>Transmit unsolicited or unauthorised advertising or promotional material.</li>
            <li>Attempt to gain unauthorised access to any part of the Site or its related systems.</li>
            <li>Scrape, copy, or reproduce any content from the Site without our prior written consent.</li>
            <li>Misrepresent your identity or affiliation with any person or organisation.</li>
          </ul>

          <h2>3. Intellectual property</h2>
          <p>All content on this Site, including text, graphics, logos, icons, case studies, and code, is the property of Zutomate or its licensors and is protected by applicable intellectual property laws.</p>
          <p>You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission. Referencing or linking to our Site is permitted provided you do so fairly and without damaging our reputation.</p>

          <h2>4. Service engagements</h2>
          <p>Enquiries submitted through the Site do not constitute a binding contract. Any service engagement between you and Zutomate is governed by a separate written agreement (such as a Statement of Work or service contract) entered into by both parties.</p>
          <p>Zutomate reserves the right to decline any engagement at its sole discretion.</p>

          <h2>5. Disclaimer of warranties</h2>
          <p>The Site and all content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free from viruses or other harmful components.</p>
          <p>While we strive to ensure accuracy, we make no representations about the completeness or reliability of any content on the Site.</p>

          <h2>6. Limitation of liability</h2>
          <p>To the fullest extent permitted by law, Zutomate shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, the Site or its content. Our total liability to you for any claim arising from your use of the Site shall not exceed the amount you paid us (if any) in the 3 months preceding the claim.</p>

          <h2>7. Third-party links</h2>
          <p>The Site may contain links to third-party websites or services. These are provided for convenience only. Zutomate has no control over and accepts no responsibility for the content, privacy practices, or terms of any third-party sites. Accessing third-party links is at your own risk.</p>

          <h2>8. Privacy</h2>
          <p>Your use of the Site is also governed by our <button className="lg-link-btn" onClick={() => switchTab('pp')}>Privacy Policy</button>, which is incorporated into these Terms by reference.</p>

          <h2>9. Changes to the site and terms</h2>
          <p>We reserve the right to modify, suspend, or discontinue any part of the Site at any time without notice. We may also update these Terms at any time. The &quot;Last updated&quot; date reflects the most recent revision. Continued use of the Site after changes constitutes your acceptance of the updated Terms.</p>

          <h2>10. Governing law</h2>
          <p>These Terms are governed by and construed in accordance with applicable law. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of the applicable territory. Where Zutomate operates across multiple jurisdictions, parties agree to resolve disputes by good-faith negotiation before initiating formal proceedings.</p>

          <h2>11. Contact</h2>
          <p>For questions about these Terms, reach us at <a href="mailto:hello@zutomate.com">hello@zutomate.com</a> or visit <Link href="/">zutomate.com</Link>.</p>
        </div>
      )}
    </div>
  );
}
