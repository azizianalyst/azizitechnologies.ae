import type { Metadata } from 'next';
import Link from 'next/link';
import Icon, { type IconName } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'IT Support & Services Dubai — AMC from AED 800/mo | Azizi Technologies',
  description:
    'Expert IT support and managed services in Dubai. 2-hour on-site response, AMC from AED 800/month, cybersecurity, cloud, Microsoft 365. Trusted by 200+ Dubai businesses.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'IT Support & Services Dubai | Azizi Technologies',
    description:
      '200+ Dubai businesses trust us. AMC from AED 800/mo. 2-hour on-site response.',
    type: 'website',
    url: 'https://azizitechnologies.ae/',
    siteName: 'Azizi Technologies',
  },
};

const services: { href: string; title: string; desc: string; icon: IconName }[] = [
  { href: '/it-support-dubai/', title: 'IT Support', desc: 'On-site and remote support for SMEs and enterprises.', icon: 'support' },
  { href: '/it-amc-dubai/', title: 'IT AMC', desc: 'Annual maintenance from AED 800/month, SLA-backed.', icon: 'amc' },
  { href: '/networking/', title: 'Networking', desc: 'WiFi, cabling, firewall, and VPN for every office size.', icon: 'network' },
  { href: '/it-security/', title: 'Cybersecurity', desc: 'EDR, firewall, and ISO-27001 readiness.', icon: 'shield' },
  { href: '/data-recovery/', title: 'Data Recovery', desc: 'Hard drive, SSD, RAID, and cloud data recovery.', icon: 'database' },
  { href: '/b2b-services/', title: 'Managed IT', desc: 'Fully managed IT departments for 10–500 staff.', icon: 'building' },
];

const faqs = [
  { q: 'How much does IT support in Dubai cost?', a: 'AMC plans start at AED 800/month for up to 10 staff. Pro tier (AED 2,500/mo) covers 11–50 staff with 24/7 helpdesk. Enterprise is custom-quoted. Ad-hoc support starts from AED 300/visit.' },
  { q: 'Do you support Dubai free zones?', a: 'Yes — DMCC, Media City, DIFC, Internet City, JLT, TECOM, and all mainland areas. Our Media City office means sub-30-minute response to most free zones.' },
  { q: 'How quickly can you respond?', a: 'Starter: 4-hour on-site SLA. Pro: 2-hour. Enterprise: 1-hour. Remote support in 15 minutes during business hours.' },
  { q: 'Can you manage Microsoft 365?', a: 'Yes — licensing via our CSP partnership, tenant setup, migrations, email security (SPF/DKIM/DMARC), Teams, and ongoing admin.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Azizi Technologies',
  description: 'IT support and managed services for Dubai businesses.',
  url: 'https://azizitechnologies.ae',
  telephone: '+971557530104',
  priceRange: 'AED 800 – AED 10,000+',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Concord Tower, Dubai Media City',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '200' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="hero" id="hero">
        <div className="hero__bg" />
        <div className="hero__content">
          <div className="hero__badge">Trusted by 200+ Dubai Businesses</div>
          <h1 className="hero__title">
            IT Support &amp; Services
            <br />
            <span className="hero__title-accent">for Dubai Businesses</span>
          </h1>
          <p className="hero__sub">
            AMC from AED 800/month. 2-hour on-site response. 24/7 monitoring, cybersecurity, and Microsoft 365.
          </p>
          <div className="hero__actions">
            <Link href="#contact" className="btn btn--primary btn--lg">Get a Free Assessment</Link>
            <a href="tel:+971557530104" className="btn btn--outline btn--lg">Call 055 753 0104</a>
          </div>
        </div>
      </header>

      <section className="simple-services">
        <div className="container">
          <div className="simple-services__header">
            <h2>What we do</h2>
            <p>Six focused service lines for Dubai businesses.</p>
          </div>
          <div className="simple-services__grid">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="simple-service">
                <div className="simple-service__icon">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="simple-service__title">{s.title}</h3>
                <p className="simple-service__desc">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="simple-faq">
        <div className="container">
          <h2 className="simple-faq__heading">Common questions</h2>
          <div className="simple-faq__list">
            {faqs.map((f, i) => (
              <details key={i} className="simple-faq__item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="simple-cta" id="contact">
        <div className="container simple-cta__inner">
          <h2 className="simple-cta__title">Ready to talk?</h2>
          <p className="simple-cta__sub">
            Free IT assessment. No obligation. Call, email, or WhatsApp — we reply within 15 minutes.
          </p>
          <div className="simple-cta__actions">
            <a href="tel:+971557530104" className="btn btn--primary btn--lg">📞 055 753 0104</a>
            <a href="https://wa.me/971557530104" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">💬 WhatsApp</a>
            <a href="mailto:info@azizitechnologies.ae" className="btn btn--outline btn--lg">✉️ Email</a>
          </div>
          <p className="simple-cta__address">📍 Concord Tower, Dubai Media City · Mon–Sat 9 AM – 6 PM</p>
        </div>
      </section>
    </>
  );
}
