import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link href="/" className="nav__logo">
              <span className="nav__logo-icon">◆</span> AZIZI{' '}
              <span className="nav__logo-accent">TECHNOLOGIES</span>
            </Link>
            <p>
              IT support and managed services for Dubai businesses. AMC from
              AED 800/month · 2-hour on-site SLA · 200+ clients served.
            </p>
            <p className="footer__address">
              📍 Concord Tower, Dubai Media City
              <br />
              📍 IT Center Building, Bur Dubai (G 58, 21 21A St)
            </p>
            <p className="footer__address">
              <a href="tel:+971557530104">📞 055 753 0104</a>
              <br />
              <a href="mailto:info@azizitechnologies.ae">✉️ info@azizitechnologies.ae</a>
              <br />
              <a href="https://wa.me/971557530104" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </p>
          </div>

          <div className="footer__links">
            <h4>IT Services</h4>
            <ul>
              <li><Link href="/it-support-dubai/">IT Support Dubai</Link></li>
              <li><Link href="/it-amc-dubai/">IT AMC Contracts</Link></li>
              <li><Link href="/b2b-services/">Managed IT / B2B</Link></li>
              <li><Link href="/it-consulting/">IT Consulting</Link></li>
              <li><Link href="/it-security/">Cybersecurity</Link></li>
              <li><Link href="/computer-service/">Computer Service</Link></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Repair Services</h4>
            <ul>
              <li><Link href="/laptop-repair-dubai/">Laptop Repair</Link></li>
              <li><Link href="/macbook-repair-dubai/">MacBook Repair</Link></li>
              <li><Link href="/imac-repair-dubai/">iMac Repair</Link></li>
              <li><Link href="/macbook-screen-replacement-dubai/">MacBook Screen</Link></li>
              <li><Link href="/macbook-battery-replacement-dubai/">MacBook Battery</Link></li>
              <li><Link href="/phone-repair/">Phone Repair</Link></li>
              <li><Link href="/screen-repair/">Screen Repair</Link></li>
              <li><Link href="/electronics-repair/">Electronics Repair</Link></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Infrastructure</h4>
            <ul>
              <li><Link href="/wifi-support-dubai/">WiFi Support</Link></li>
              <li><Link href="/wifi-technician-dubai/">WiFi Technician</Link></li>
              <li><Link href="/networking/">Networking</Link></li>
              <li><Link href="/data-recovery-dubai/">Data Recovery</Link></li>
              <li><Link href="/macbook-ssd-upgrade/">MacBook SSD Upgrade</Link></li>
              <li><Link href="/mac-ssd-upgrade-dubai/">Mac SSD Upgrade</Link></li>
              <li><Link href="/microsoft-surface-repair-dubai/">Surface Repair</Link></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Buy &amp; Sell</h4>
            <ul>
              <li><Link href="/sell-iphone-dubai/">Sell iPhone Dubai</Link></li>
              <li><Link href="/sell-macbook-dubai/">Sell MacBook Dubai</Link></li>
              <li><Link href="/buy-sell/">Buy &amp; Sell Used</Link></li>
            </ul>
            <h4 style={{ marginTop: 20 }}>Company</h4>
            <ul>
              <li><Link href="/about-us/">About Us</Link></li>
              <li><Link href="/contact-us/">Contact</Link></li>
              <li><Link href="/reviews/">Reviews</Link></li>
              <li><Link href="/faqs/">FAQ</Link></li>
              <li><Link href="/posts/">Blog</Link></li>
              <li><Link href="/services/">All 862 Services</Link></li>
              <li><Link href="/bur-dubai/">Bur Dubai Branch</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} Azizi Technologies. All rights reserved.
            &nbsp;·&nbsp;
            <a href="tel:+971557530104">Call 055 753 0104</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
