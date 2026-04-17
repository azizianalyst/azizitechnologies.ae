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
              862 IT services across 12 categories. Two Dubai locations — Concord
              Tower, Media City + IT Center, Bur Dubai.
            </p>
            <p className="footer__address">
              Concord Tower, Dubai Media City
              <br />
              IT Center Building, Bur Dubai (G 58, 21 21A St)
            </p>
          </div>

          <div className="footer__links">
            <h4>IT &amp; Business</h4>
            <ul>
              <li><Link href="/">IT Support (94)</Link></li>
              <li><Link href="/b2b-services/">B2B IT Services (58)</Link></li>
              <li><Link href="/it-consulting/">IT Consulting (62)</Link></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Repair</h4>
            <ul>
              <li><Link href="/computer-repair/">Computer Repair (88)</Link></li>
              <li><Link href="/phone-repair/">Phone Repair (64)</Link></li>
              <li><Link href="/screen-repair/">Screen Repair (68)</Link></li>
              <li><Link href="/electronics-repair/">Electronics (58)</Link></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Service &amp; Infra</h4>
            <ul>
              <li><Link href="/computer-service/">Computer Service (82)</Link></li>
              <li><Link href="/networking/">Networking (78)</Link></li>
              <li><Link href="/it-security/">IT Security (76)</Link></li>
              <li><Link href="/data-recovery/">Data Recovery (72)</Link></li>
              <li><Link href="/buy-sell/">Buy &amp; Sell (62)</Link></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/services/">All 862 Services</Link></li>
              <li><Link href="/bur-dubai/">Bur Dubai</Link></li>
              <li><Link href="/faq-bur-dubai/">FAQ (25 Q&amp;As)</Link></li>
              <li><Link href="/posts/">GBP Posts (144)</Link></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+971557530104">055 753 0104</a></li>
              <li>
                <a href="mailto:info@azizitechnologies.ae">
                  info@azizitechnologies.ae
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971557530104"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 Azizi Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
