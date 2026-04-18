'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const servicesMenu = [
  { heading: 'IT Services', links: [
    { href: '/it-support-dubai/', label: 'IT Support Dubai' },
    { href: '/it-amc-dubai/', label: 'IT AMC Contracts' },
    { href: '/b2b-services/', label: 'B2B / Managed IT' },
    { href: '/it-consulting/', label: 'IT Consulting' },
    { href: '/it-security/', label: 'Cybersecurity' },
    { href: '/computer-service/', label: 'Computer Service' },
  ]},
  { heading: 'Computer Repair', links: [
    { href: '/computer-repair/', label: 'Computer Repair' },
    { href: '/computer-repair-services-dubai/', label: 'Computer Repair Dubai' },
    { href: '/laptop-repair-dubai/', label: 'Laptop Repair' },
    { href: '/imac-repair-dubai/', label: 'iMac Repair' },
    { href: '/macbook-repair-dubai/', label: 'MacBook Repair' },
    { href: '/microsoft-surface-repair-dubai/', label: 'Surface Repair' },
  ]},
  { heading: 'MacBook', links: [
    { href: '/macbook-screen-replacement-dubai/', label: 'Screen Replacement' },
    { href: '/macbook-battery-replacement-dubai/', label: 'Battery Replacement' },
    { href: '/macbook-keyboard-replacement-dubai/', label: 'Keyboard Replacement' },
    { href: '/macbook-logic-board-repair/', label: 'Logic Board Repair' },
    { href: '/macbook-ssd-upgrade/', label: 'MacBook SSD Upgrade' },
    { href: '/mac-ssd-upgrade-dubai/', label: 'Mac SSD Upgrade' },
  ]},
  { heading: 'Phones / Electronics', links: [
    { href: '/phone-repair/', label: 'Phone Repair' },
    { href: '/screen-repair/', label: 'Screen Repair' },
    { href: '/electronics-repair/', label: 'Electronics Repair' },
  ]},
  { heading: 'Network / Data', links: [
    { href: '/networking/', label: 'Networking' },
    { href: '/wifi-support-dubai/', label: 'WiFi Support' },
    { href: '/wifi-technician-dubai/', label: 'WiFi Technician' },
    { href: '/data-recovery/', label: 'Data Recovery' },
    { href: '/data-recovery-dubai/', label: 'Data Recovery Dubai' },
  ]},
  { heading: 'Buy & Sell · Company', links: [
    { href: '/buy-sell/', label: 'Buy & Sell Used' },
    { href: '/sell-iphone-dubai/', label: 'Sell iPhone' },
    { href: '/sell-macbook-dubai/', label: 'Sell MacBook' },
    { href: '/about-us/', label: 'About Us' },
    { href: '/contact-us/', label: 'Contact' },
    { href: '/reviews/', label: 'Reviews' },
    { href: '/faqs/', label: 'FAQ' },
    { href: '/bur-dubai/', label: 'Bur Dubai Branch' },
    { href: '/faq-bur-dubai/', label: 'FAQ Bur Dubai' },
    { href: '/posts/', label: 'Blog (90+ posts)' },
  ]},
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.hdr-services')) setServicesOpen(false);
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`hdr ${scrolled ? 'hdr--scrolled' : ''}`}>
      {/* Top utility bar */}
      <div className="hdr__top">
        <div className="hdr__top-inner">
          <div className="hdr__top-group">
            <a href="tel:+971557530104" className="hdr__top-item">
              <span aria-hidden>📞</span> 055 753 0104
            </a>
            <a href="mailto:info@azizitechnologies.ae" className="hdr__top-item">
              <span aria-hidden>✉️</span> info@azizitechnologies.ae
            </a>
          </div>
          <div className="hdr__top-group">
            <span className="hdr__top-item hdr__top-item--muted">🕐 Mon–Sat 9 AM – 6 PM</span>
            <a href="https://wa.me/971557530104" target="_blank" rel="noopener noreferrer" className="hdr__top-item">
              <span aria-hidden>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="hdr__main" aria-label="Main">
        <div className="hdr__main-inner">
          <Link href="/" className="hdr__logo" onClick={() => setMobileOpen(false)}>
            <span className="hdr__logo-mark" aria-hidden>◆</span>
            <span className="hdr__logo-text">
              AZIZI<span className="hdr__logo-accent"> TECHNOLOGIES</span>
            </span>
          </Link>

          <button
            className={`hdr__burger ${mobileOpen ? 'hdr__burger--open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>

          <div className={`hdr__menu ${mobileOpen ? 'hdr__menu--open' : ''}`}>
            <Link href="/" className="hdr__link" onClick={() => setMobileOpen(false)}>Home</Link>

            <div className="hdr-services">
              <button
                className="hdr__link hdr__link--with-caret"
                aria-expanded={servicesOpen}
                onClick={(e) => { e.stopPropagation(); setServicesOpen((v) => !v); }}
              >
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`hdr-services__panel ${servicesOpen ? 'hdr-services__panel--open' : ''}`}>
                <div className="hdr-services__footer">
                  <span>Browse every service — both the new category pages and the dedicated Dubai service pages.</span>
                  <Link href="/services/" className="hdr-services__footer-cta" onClick={() => { setServicesOpen(false); setMobileOpen(false); }}>
                    View all 862 services →
                  </Link>
                </div>
                <div className="hdr-services__inner">
                  {servicesMenu.map((col) => (
                    <div key={col.heading} className="hdr-services__col">
                      <div className="hdr-services__heading">{col.heading}</div>
                      <ul>
                        {col.links.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              onClick={() => { setServicesOpen(false); setMobileOpen(false); }}
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/posts/" className="hdr__link" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/about-us/" className="hdr__link" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact-us/" className="hdr__link" onClick={() => setMobileOpen(false)}>Contact</Link>

            <div className="hdr__cta-group">
              <a href="tel:+971557530104" className="hdr__phone-cta">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                055 753 0104
              </a>
              <Link href="/contact-us/#contact" className="hdr__primary-cta" onClick={() => setMobileOpen(false)}>
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && <div className="hdr__backdrop" onClick={() => setMobileOpen(false)} aria-hidden />}
    </header>
  );
}
