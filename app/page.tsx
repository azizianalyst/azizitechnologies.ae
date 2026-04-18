import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Support & Services Dubai — AMC from AED 800/mo | Azizi Technologies',
  description:
    'Expert IT support and managed services in Dubai. 2-hour on-site response, AMC plans from AED 800/month, 24/7 monitoring, cybersecurity, cloud. Trusted by 200+ Dubai businesses.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'IT Support & Services Dubai | Azizi Technologies',
    description:
      '200+ Dubai businesses trust us. AMC from AED 800/mo. 2-hour on-site response. Cybersecurity, cloud, Microsoft 365, networking.',
    type: 'website',
    url: 'https://azizitechnologies.ae/',
    siteName: 'Azizi Technologies',
  },
};

const services = [
  { href: '/it-support-dubai/', title: 'IT Support Dubai', desc: 'On-site & remote support for SMEs and enterprises.', icon: '🖥️' },
  { href: '/it-amc-dubai/', title: 'IT AMC Contracts', desc: 'Annual maintenance from AED 800/month with SLA.', icon: '📋' },
  { href: '/networking/', title: 'Networking & WiFi', desc: 'Office WiFi, structured cabling, firewall, VPN.', icon: '📡' },
  { href: '/it-security/', title: 'Cybersecurity', desc: 'Endpoint protection, firewall, EDR, ISO-27001 ready.', icon: '🛡️' },
  { href: '/data-recovery/', title: 'Data Recovery', desc: 'Hard drive, SSD, RAID, and cloud recovery.', icon: '💾' },
  { href: '/b2b-services/', title: 'B2B Managed IT', desc: 'Fully managed IT for offices of 10–500 staff.', icon: '🏢' },
];

const pillars = [
  { title: '2-hour on-site response', desc: 'Certified engineers dispatched across all Emirates.' },
  { title: 'Transparent pricing', desc: 'Fixed AMC fees from AED 800/mo. No hidden charges.' },
  { title: '24/7 monitoring', desc: 'Proactive alerts before issues become outages.' },
  { title: 'Free zone experts', desc: 'DMCC, Media City, DIFC, Internet City, JLT, TECOM.' },
];

const plans = [
  { name: 'Starter', price: 'AED 800', for: '1–10 staff', features: ['1 on-site visit/month', 'Unlimited remote support', '4-hour SLA', 'Patch management'], featured: false },
  { name: 'Pro', price: 'AED 2,500', for: '11–50 staff', features: ['Weekly on-site visits', '24/7 helpdesk', '2-hour SLA', 'Backup monitoring', 'M365 / Google Workspace'], featured: true },
  { name: 'Enterprise', price: 'Custom', for: '50+ staff', features: ['Dedicated engineer', 'vCIO quarterly reviews', '1-hour SLA', 'Cybersecurity suite', 'ISO compliance support'], featured: false },
];

const faqs = [
  { q: 'How much does IT support in Dubai cost?', a: 'Our AMC plans start at AED 800/month for businesses with up to 10 staff. Larger plans scale with team size and SLA requirements. Walk-in and per-visit support starts from AED 300.' },
  { q: 'What is an IT AMC contract?', a: 'An IT Annual Maintenance Contract bundles proactive monitoring, patch management, unlimited remote support, and on-site visits into a fixed monthly fee. It replaces unpredictable break-fix costs with a flat price and SLA-backed response times.' },
  { q: 'Do you support Dubai free zones?', a: 'Yes — we serve DMCC, Dubai Media City, DIFC, Internet City, JLT, TECOM and all mainland areas. Our office at Concord Tower in Media City means sub-2-hour response to most free zones.' },
  { q: 'Can you manage Microsoft 365 and Google Workspace?', a: 'Yes. We handle licensing, tenant setup, migrations, email security (SPF/DKIM/DMARC), Teams/SharePoint configuration, and day-to-day admin for both platforms.' },
  { q: 'Do you offer cybersecurity services?', a: 'Yes. Endpoint protection (EDR), firewall configuration, vulnerability assessments, phishing simulation, ISO-27001 readiness, and 24/7 SOC monitoring options.' },
  { q: 'How quickly can you respond to an emergency?', a: 'Standard AMC clients get a 4-hour on-site SLA. Pro clients 2-hour, Enterprise 1-hour. Critical incidents (server down, ransomware) are dispatched immediately during business hours, with after-hours on-call.' },
];

function jsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Azizi Technologies',
    description: 'IT support and managed services for Dubai businesses.',
    url: 'https://azizitechnologies.ae',
    telephone: '+971557530104',
    email: 'info@azizitechnologies.ae',
    priceRange: 'AED 800 – AED 10,000+',
    image: 'https://azizitechnologies.ae/apple-icon.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Concord Tower, Dubai Media City',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 25.098, longitude: 55.162 },
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'AdministrativeArea', name: 'United Arab Emirates' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '200' },
  };
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return [localBusiness, faqPage];
}

export default function Home() {
  return (
    <>
      {jsonLd().map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      <header className="hero" id="hero">
        <div className="hero__bg" />
        <div className="hero__content">
          <div className="hero__badge">Trusted by 200+ Dubai Businesses</div>
          <h1 className="hero__title">
            IT Support &amp; Managed Services
            <br />
            <span className="hero__title-accent">in Dubai</span>
          </h1>
          <p className="hero__sub">
            AMC plans from AED 800/month. 2-hour on-site response, 24/7 monitoring, cybersecurity,
            cloud migration, and Microsoft 365. One partner for everything IT.
          </p>
          <div className="hero__stats">
            <div className="hero__stat"><span className="hero__stat-num">200+</span><span className="hero__stat-label">Businesses Served</span></div>
            <div className="hero__stat"><span className="hero__stat-num">2hr</span><span className="hero__stat-label">On-Site SLA</span></div>
            <div className="hero__stat"><span className="hero__stat-num">24/7</span><span className="hero__stat-label">Monitoring</span></div>
            <div className="hero__stat"><span className="hero__stat-num">17+</span><span className="hero__stat-label">Years in Dubai</span></div>
          </div>
          <div className="hero__actions">
            <Link href="#contact" className="btn btn--primary btn--lg">Get a Free IT Assessment</Link>
            <a href="tel:+971557530104" className="btn btn--outline btn--lg">Call 055 753 0104</a>
          </div>
          <p className="hero__location">Concord Tower, Dubai Media City · Serving all Emirates</p>
        </div>
      </header>

      <section className="home-services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">What We Do</span>
            <h2 id="services-heading" className="section-header__title">Complete IT services for Dubai businesses</h2>
            <p className="section-header__sub">Six focused service lines. 862 individual services. One contract, one invoice, one responsible partner.</p>
          </div>
          <div className="home-services__grid">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="home-service-card">
                <div className="home-service-card__icon" aria-hidden>{s.icon}</div>
                <h3 className="home-service-card__title">{s.title}</h3>
                <p className="home-service-card__desc">{s.desc}</p>
                <span className="home-service-card__cta">Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="home-services__footer">
            <Link href="/services/" className="btn btn--outline">View all 862 services →</Link>
          </div>
        </div>
      </section>

      <section className="home-why" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Why Azizi</span>
            <h2 id="why-heading" className="section-header__title">Why 200+ Dubai businesses trust us with their IT</h2>
          </div>
          <div className="home-why__grid">
            {pillars.map((p) => (
              <div key={p.title} className="home-why__card">
                <h3 className="home-why__card-title">{p.title}</h3>
                <p className="home-why__card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-plans" aria-labelledby="plans-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">IT AMC Plans</span>
            <h2 id="plans-heading" className="section-header__title">Transparent monthly pricing, SLA-backed</h2>
            <p className="section-header__sub">Every plan includes unlimited remote support, patch management, and backup monitoring.</p>
          </div>
          <div className="home-plans__grid">
            {plans.map((p) => (
              <div key={p.name} className={`home-plan ${p.featured ? 'home-plan--featured' : ''}`}>
                {p.featured && <div className="home-plan__badge">Most popular</div>}
                <div className="home-plan__name">{p.name}</div>
                <div className="home-plan__price">{p.price}<span>/month</span></div>
                <div className="home-plan__for">{p.for}</div>
                <ul className="home-plan__features">
                  {p.features.map((f) => (<li key={f}>{f}</li>))}
                </ul>
                <Link href="#contact" className={`btn ${p.featured ? 'btn--primary' : 'btn--outline'} btn--full`}>Get this plan</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">FAQ</span>
            <h2 id="faq-heading" className="section-header__title">Common questions about IT support in Dubai</h2>
          </div>
          <div className="home-faq__list">
            {faqs.map((f, i) => (
              <details key={i} className="home-faq__item">
                <summary className="home-faq__q">{f.q}</summary>
                <p className="home-faq__a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact" id="contact" aria-labelledby="contact-heading">
        <div className="container home-contact__inner">
          <div className="home-contact__copy">
            <h2 id="contact-heading" className="home-contact__title">Get a Free IT Assessment</h2>
            <p className="home-contact__sub">We&apos;ll review your current setup, flag risks, and propose a plan — no obligation, no jargon.</p>
            <div className="home-contact__details">
              <a href="tel:+971557530104" className="home-contact__detail">📞 055 753 0104</a>
              <a href="mailto:info@azizitechnologies.ae" className="home-contact__detail">✉️ info@azizitechnologies.ae</a>
              <a href="https://wa.me/971557530104" target="_blank" rel="noopener noreferrer" className="home-contact__detail">💬 WhatsApp</a>
              <span className="home-contact__detail">📍 Concord Tower, Dubai Media City</span>
            </div>
          </div>
          <form className="home-contact__form" id="contactForm">
            <div className="form-group"><input type="text" name="name" placeholder="Your name" required /></div>
            <div className="form-group"><input type="tel" name="phone" placeholder="Phone / WhatsApp" required /></div>
            <div className="form-group"><input type="email" name="email" placeholder="Work email" /></div>
            <div className="form-group"><input type="text" name="company" placeholder="Company name" /></div>
            <div className="form-group">
              <select name="service" defaultValue="">
                <option value="" disabled>Service needed</option>
                <option>IT AMC / Managed Services</option>
                <option>Cybersecurity</option>
                <option>Cloud / Microsoft 365</option>
                <option>Networking</option>
                <option>Data Recovery</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group"><textarea name="message" rows={3} placeholder="Tell us briefly about your setup or issue" /></div>
            <button type="submit" className="btn btn--primary btn--full btn--lg">Send via WhatsApp</button>
            <p className="home-contact__form-note">We typically reply within 15 minutes during working hours.</p>
          </form>
        </div>
      </section>
    </>
  );
}
