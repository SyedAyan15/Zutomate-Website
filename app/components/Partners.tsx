import { Fragment } from 'react';

export default function Partners() {
  return (
    <section className="partners-section">
      <p className="partners-label">Companies that partnered with Zutomate</p>
      <div className="partners-rows">
        <div className="partners-track-wrapper">
          <div className="partners-track scroll-left">
            {[0, 1, 2].map((rep) => (
              <Fragment key={rep}>
                <div className="partner-pill">
                  <svg className="pill-icon" viewBox="0 0 28 28" fill="none">
                    <path d="M3 17 C7 9,11 9,14 14 C17 19,21 19,25 11" stroke="rgba(255,255,255,0.85)" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                    <path d="M3 21 C7 13,11 13,14 18 C17 23,21 23,25 15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                  </svg>
                  <span className="pill-name pill-shopwave">shopwave</span>
                </div>
                <div className="partner-pill"><span className="pill-name pill-goso">GOSO</span></div>
                <div className="partner-pill">
                  <span className="pill-name pill-truclean">TRU CLEAN<span className="pill-truclean-sub">Janitorial</span></span>
                </div>
                <div className="partner-pill">
                  <span className="pill-name pill-vjr-mono">VJR<span className="pill-vjr-text">Victoria James Recruitment</span></span>
                </div>
                <div className="partner-pill"><span className="pill-name pill-theagency">The Agency</span></div>
                <div className="partner-pill">
                  <svg className="pill-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2 L20 6 L20 13 C20 17 16 20.5 12 22 C8 20.5 4 17 4 13 L4 6 Z" stroke="rgba(255,255,255,0.70)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                    <path d="M9 11 Q12 8.5 15 11" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                    <circle cx="12" cy="13" r="1.8" fill="rgba(255,255,255,0.80)" />
                  </svg>
                  <span className="pill-name pill-insight-main">INSIGHT<span className="pill-insight-sub">Cyber Solutions</span></span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="partners-track-wrapper">
          <div className="partners-track scroll-right">
            {[0, 1, 2].map((rep) => (
              <Fragment key={rep}>
                <div className="partner-pill">
                  <svg className="pill-icon" viewBox="0 0 28 28" fill="none">
                    <path d="M5 24 Q9 18,23 5" stroke="rgba(255,255,255,0.90)" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                    <path d="M5 24 Q11 16,23 8" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M5 24 Q13 15,23 11" stroke="rgba(255,255,255,0.40)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                    <path d="M5 24 Q15 16,23 14" stroke="rgba(255,255,255,0.20)" strokeWidth="0.9" strokeLinecap="round" fill="none" />
                  </svg>
                  <span className="pill-name pill-navitas">navitas</span>
                </div>
                <div className="partner-pill">
                  <span className="pill-name pill-adams">adams<span className="pill-adams-sub">Limitless</span></span>
                </div>
                <div className="partner-pill">
                  <span className="pill-name"><span className="pill-bizbee-biz">Biz</span><span className="pill-bizbee-bee">Bee</span></span>
                </div>
                <div className="partner-pill">
                  <span className="pill-name pill-bell-mono">BR<span className="pill-bell-text">Bell Recruitment</span></span>
                </div>
                <div className="partner-pill"><span className="pill-name pill-goso">GOSO</span></div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
