'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type MenuColumn = {
  heading: string;
  links: { href: string; label: string; count?: number }[];
};

const COLUMNS: MenuColumn[] = [
  {
    heading: 'IT & Business',
    links: [
      { href: '/', label: 'IT Support & Services', count: 94 },
      { href: '/b2b-services/', label: 'B2B IT Services', count: 58 },
      { href: '/it-consulting/', label: 'IT Consulting', count: 62 },
    ],
  },
  {
    heading: 'Repair',
    links: [
      { href: '/computer-repair/', label: 'Computer Repair', count: 88 },
      { href: '/phone-repair/', label: 'Phone Repair', count: 64 },
      { href: '/screen-repair/', label: 'Screen Repair', count: 68 },
      { href: '/electronics-repair/', label: 'Electronics Repair', count: 58 },
    ],
  },
  {
    heading: 'Service & Infra',
    links: [
      { href: '/computer-service/', label: 'Computer Service', count: 82 },
      { href: '/networking/', label: 'Networking', count: 78 },
      { href: '/it-security/', label: 'IT Security', count: 76 },
    ],
  },
  {
    heading: 'Data & Assets',
    links: [
      { href: '/data-recovery/', label: 'Data Recovery', count: 72 },
      { href: '/buy-sell/', label: 'Buy & Sell', count: 62 },
    ],
  },
];

export default function MegaMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById('nav');
      if (!nav) return;
      if (window.scrollY > 50) nav.classList.add('nav--scrolled');
      else nav.classList.remove('nav--scrolled');
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mega')) setServicesOpen(false);
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  return (
    <nav className="nav" id="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo" onClick={() => setMobileOpen(false)}>
          <span className="nav__logo-icon">◆</span>
          AZIZI <span className="nav__logo-accent">TECHNOLOGIES</span>
        </Link>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav__links ${mobileOpen ? 'nav__links--open' : ''}`}>
          <li className="mega">
            <button
              className="nav__dropdown-btn"
              aria-expanded={servicesOpen}
              onClick={(e) => {
                e.stopPropagation();
                setServicesOpen((v) => !v);
              }}
            >
              Services <span className="nav__caret">▾</span>
            </button>
            <div className={`mega__panel ${servicesOpen ? 'mega__panel--open' : ''}`}>
              <div className="mega__inner">
                <div className="mega__head">
                  <div className="mega__title">862 Services Across 12 Categories</div>
                  <Link
                    href="/services/"
                    className="mega__view-all"
                    onClick={() => {
                      setServicesOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    View All →
                  </Link>
                </div>
                <div className="mega__grid">
                  {COLUMNS.map((col) => (
                    <div className="mega__col" key={col.heading}>
                      <div className="mega__col-heading">{col.heading}</div>
                      <ul className="mega__col-list">
                        {col.links.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              onClick={() => {
                                setServicesOpen(false);
                                setMobileOpen(false);
                              }}
                            >
                              <span className="mega__link-name">{l.label}</span>
                              {l.count && (
                                <span className="mega__link-count">{l.count}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mega__footer">
                  <Link
                    href="/bur-dubai/"
                    className="mega__location"
                    onClick={() => {
                      setServicesOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    📍 Bur Dubai Location
                  </Link>
                  <Link
                    href="/faq-bur-dubai/"
                    className="mega__location"
                    onClick={() => {
                      setServicesOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    ❓ FAQ (25 Q&As)
                  </Link>
                  <Link
                    href="/posts/"
                    className="mega__location"
                    onClick={() => {
                      setServicesOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    📰 GBP Posts (144)
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="/posts/" onClick={() => setMobileOpen(false)}>
              Posts
            </Link>
          </li>
          <li>
            <Link href="/faq-bur-dubai/" onClick={() => setMobileOpen(false)}>
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <a href="tel:+971557530104" className="nav__cta">
              055 753 0104
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
