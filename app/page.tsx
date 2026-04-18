import type { Metadata } from 'next';
import Link from 'next/link';
import Icon, { type IconName } from '@/components/Icons';

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

const services: { href: string; title: string; desc: string; icon: IconName }[] = [
  { href: '/it-support-dubai/', title: 'IT Support Dubai', desc: 'On-site and remote troubleshooting for SMEs, free-zone businesses, and enterprise offices across all Emirates. From help-desk tickets to full-infrastructure recovery.', icon: 'support' },
  { href: '/it-amc-dubai/', title: 'IT AMC Contracts', desc: 'Annual maintenance from AED 800/month with 2-hour SLA, unlimited remote support, monthly on-site visits, patch management, and backup monitoring.', icon: 'amc' },
  { href: '/networking/', title: 'Networking & WiFi', desc: 'Office WiFi deployment, structured cabling, firewall configuration, VPN setup, and managed switch infrastructure for offices from 5 to 500 staff.', icon: 'network' },
  { href: '/it-security/', title: 'Cybersecurity', desc: 'Endpoint protection, EDR, firewall management, phishing simulation, vulnerability assessments, and ISO-27001 readiness.', icon: 'shield' },
  { href: '/data-recovery/', title: 'Data Recovery', desc: 'Hard drive, SSD, RAID, and cloud data recovery. Forensic-grade lab services plus logical-recovery for accidentally deleted files.', icon: 'database' },
  { href: '/b2b-services/', title: 'B2B Managed IT', desc: 'Fully managed IT departments for companies of 10–500 staff. Includes vCIO quarterly reviews, dedicated engineers, and priority escalation.', icon: 'building' },
];

const trustedIndustries = [
  'DIFC Financial Firms',
  'DMCC Traders',
  'Media City Agencies',
  'DHA Clinics',
  'DP World Logistics',
  'Internet City Tech',
  'JLT Professional',
  'Dubai South Cargo',
];

const pillars = [
  { title: '2-hour on-site response', desc: 'Certified engineers dispatched across all Emirates. Most AMC tickets resolved during the first site visit, with guaranteed response windows.' },
  { title: 'Transparent pricing', desc: 'Fixed AMC fees from AED 800/mo. No hidden charges, no surprise invoices, no per-hour overage bills. Quarterly billing available for enterprise.' },
  { title: '24/7 monitoring', desc: 'Proactive alerts catch disk failures, connectivity outages, and security events before they cause downtime. Monthly health reports included.' },
  { title: 'Free zone experts', desc: 'Deep experience with DMCC, Media City, DIFC, Internet City, JLT, TECOM, KIZAD, and mainland Dubai compliance requirements.' },
];

const industries = [
  { name: 'Finance & Brokerage', desc: 'Audit-compliant IT for DIFC regulated firms, SCA licensees, and exchanges. Secure trading networks, DLP, and 7-year data retention.' },
  { name: 'Legal & Professional', desc: 'Document management systems, secure client portals, e-discovery, and practice-management platform support for Dubai law firms.' },
  { name: 'Media & Creative', desc: 'High-throughput storage, colour-accurate displays, render farms, and Adobe/Apple workflow support for production houses in Media City.' },
  { name: 'Healthcare & Clinics', desc: 'HIPAA-aligned networks, EMR hosting, secure imaging transfer, and biometric access for DHA-licensed clinics.' },
  { name: 'Logistics & Shipping', desc: 'Warehouse WiFi, ruggedised device management, TMS/WMS integration, and Jebel Ali / DP World connectivity.' },
  { name: 'Hospitality & Retail', desc: 'POS support, guest WiFi, PCI-DSS compliance, CCTV integration, and multi-site IT for Dubai hotels and retail chains.' },
];

const process = [
  { step: '01', title: 'Free IT Assessment', desc: 'A senior engineer spends 60–90 minutes on-site (or remote) reviewing your current setup — servers, network, endpoints, backup, security posture. You receive a written report with a red/amber/green risk rating and prioritised recommendations. No obligation, no jargon, no sales pitch.' },
  { step: '02', title: 'Plan & Proposal', desc: 'Based on the assessment, we propose an AMC tier that fits your team size, risk tolerance, and budget. Every item is itemised: what’s included, what’s excluded, what’s billed separately. Typically within 3 working days.' },
  { step: '03', title: 'Onboarding (Week 1–2)', desc: 'We take over inventory, document your environment in our CMDB, deploy monitoring agents, standardise patch management, and migrate your help-desk channel. You keep using your existing tools during transition — zero disruption.' },
  { step: '04', title: 'Steady-State Operations', desc: 'Your team logs tickets via phone, WhatsApp, or portal. Remote requests answered in 15 minutes during working hours. On-site visits dispatched per SLA. Monthly health reports delivered the first Monday of every month.' },
  { step: '05', title: 'Quarterly Reviews', desc: 'Every three months we meet with your stakeholders — founders, CFO, ops lead — to review tickets, trends, budget, upcoming projects, and technology roadmap. No more surprises at renewal time.' },
];

const plans = [
  { name: 'Starter', price: 'AED 800', for: '1–10 staff', features: ['1 on-site visit/month', 'Unlimited remote support', '4-hour SLA', 'Patch management', 'Daily backup monitoring', 'Quarterly reports', 'Email support'], featured: false },
  { name: 'Pro', price: 'AED 2,500', for: '11–50 staff', features: ['Weekly on-site visits', '24/7 helpdesk access', '2-hour SLA', 'Backup & DR monitoring', 'M365 / Google Workspace admin', 'Monthly health reports', 'Priority escalation', 'Phishing simulation'], featured: true },
  { name: 'Enterprise', price: 'Custom', for: '50+ staff', features: ['Dedicated engineer on-site', 'vCIO quarterly reviews', '1-hour SLA (business hours)', 'Cybersecurity suite', 'ISO-27001 compliance support', 'Asset lifecycle management', '24/7/365 monitoring', 'Dedicated account manager'], featured: false },
];

const freeZones = [
  { name: 'Dubai Media City', desc: 'Our main office is in Concord Tower, Media City — sub-30-minute on-site dispatch to all adjacent free zones.' },
  { name: 'DMCC & JLT', desc: 'Regular visits to Almas Tower, HDS Business Centre, Cluster offices, and all DMCC retail units.' },
  { name: 'DIFC', desc: 'Regulated firms receive audit-compliant IT with DFSA-aligned controls, data residency, and documented change management.' },
  { name: 'Internet City', desc: 'Technology tenants supported with high-density WiFi, enterprise firewalls, and multi-gigabit fibre connections.' },
  { name: 'TECOM (D3, DPC)', desc: 'Creative-industry clients in Design District and Production City get render-farm-grade connectivity and Mac-first support.' },
  { name: 'Dubai South & JAFZA', desc: 'Warehouse, logistics, and aviation-adjacent businesses served from our Bur Dubai office with same-day response.' },
];

const caseStudies = [
  { title: '35-person DIFC law firm — ransomware remediation', desc: 'Client was hit by ransomware on a Friday evening. We received the call at 7 PM, had an engineer on-site by 8 PM, isolated infected machines, validated offline backups, and began restoration overnight. By Monday morning, 90% of data was restored from immutable Veeam backups. Total downtime: 48 hours. Root-cause analysis identified a phished user; we then deployed managed EDR and ran phishing simulation training. Eighteen months later, zero repeat incidents.' },
  { title: '180-staff Media City creative agency — full infrastructure rebuild', desc: 'Inherited a tangled network with 40+ WiFi dead zones, no documented asset inventory, 12 different antivirus products across the fleet, and no working backup for their Adobe file servers. Over 90 days we replaced the WiFi with Ubiquiti UniFi (single SSID, seamless roaming), standardised on Microsoft Defender for Business, deployed Synology backup to cloud, migrated 180 users to M365 from a legacy Exchange 2016 server, and documented everything in a CMDB. Helpdesk ticket volume dropped 60% in the first quarter.' },
  { title: '50-branch retail chain — 24/7 POS support across UAE', desc: 'F&B client with 50 outlets needed sub-1-hour POS recovery when registers went down. We built a distributed support model with remote-first diagnostics, bonded SIM-fallback routers at each site, centralised Cloudflare access for store WiFi, and same-day hardware swap from our Bur Dubai spares pool. Uptime improved from 94% to 99.4% within the first year; average incident-to-resolution time dropped from 4 hours to 38 minutes.' },
  { title: '12-person healthcare clinic — DHA-compliant cloud migration', desc: 'DHA-licensed clinic on legacy on-premises server nearing end-of-life. We migrated their EMR (Insta HMS) to a hosted instance, rebuilt network with firewall segmentation (clinical vs. admin vs. guest), deployed encrypted backup with off-site copies in compliance with DHA data retention rules, and replaced ageing workstations. Ongoing AMC covers quarterly compliance reviews and annual penetration testing.' },
];

const partners = [
  'Microsoft Cloud Solution Provider (CSP)',
  'Apple Authorised Service Provider network',
  'Sophos Platinum Partner',
  'Cisco Select Partner',
  'Fortinet Authorised Partner',
  'Ubiquiti Enterprise Partner',
  'Synology Silver Partner',
  'Dell Technologies Authorised Reseller',
  'HP Silver Partner',
  'Lenovo Authorised Reseller',
  'Veeam Silver Partner',
  'AWS Select Consulting Partner',
];

const compliance = [
  { title: 'UAE VAT & FTA reporting', desc: 'All accounting, POS, and invoicing systems we deploy support 5% VAT, FTA-compliant tax invoices, VAT return reporting, and 5-year record retention.' },
  { title: 'DHA health-data requirements', desc: 'For Dubai Health Authority licensed clinics and hospitals we implement network segmentation, encrypted EMR storage, and audit trails aligned to DHA information governance.' },
  { title: 'DIFC DFSA regulated firms', desc: 'We deliver IT controls documentation, access-review procedures, and incident response runbooks aligned with DFSA GEN module operational risk expectations.' },
  { title: 'ISO-27001 readiness', desc: 'Many of our enterprise clients pursue ISO-27001 certification. We provide the technical controls, documentation, and evidence that an internal or external audit requires.' },
  { title: 'SOC-2 Type I / II preparation', desc: 'For clients serving international customers we implement and document the trust services criteria (security, availability, confidentiality) needed for SOC-2 attestation.' },
  { title: 'PCI-DSS for cardholder data', desc: 'Retail and hospitality clients that process card payments get scoped, segmented networks with logging and monitoring aligned to PCI-DSS 4.0 requirements.' },
];

const faqs = [
  { q: 'How much does IT support in Dubai cost?', a: 'Our IT AMC plans start at AED 800 per month for businesses with up to 10 staff (Starter tier). The Pro tier at AED 2,500/month covers 11–50 staff with 24/7 helpdesk and weekly on-site visits. Enterprise plans for 50+ staff are quoted based on scope. Ad-hoc support (walk-in, per-visit, or emergency) starts from AED 300 per site visit. All prices exclude VAT unless stated.' },
  { q: 'What exactly is an IT AMC contract?', a: 'An IT Annual Maintenance Contract bundles proactive monitoring, patch management, unlimited remote support, on-site visits, backup monitoring, and SLA-backed response into a fixed monthly fee. It replaces the unpredictable costs of hourly break-fix support with a flat, budgetable price. Our contracts include a clear scope document, agreed SLAs, and monthly health reports so you always know what you’re getting. Most clients save 30–50% versus hourly consultants once total break-fix costs are added up.' },
  { q: 'Do you support Dubai free zones?', a: 'Yes — we serve DMCC, Dubai Media City, DIFC, Internet City, JLT, TECOM (Design District and Production City), KIZAD, Dubai South, and all mainland areas. Our office at Concord Tower in Media City puts most free zones within sub-30-minute dispatch range. We understand the specific compliance requirements of DIFC regulated firms, DHA clinics, and free-zone incorporated companies.' },
  { q: 'Can you manage Microsoft 365 and Google Workspace?', a: 'Yes. We are experienced with both platforms — licensing and procurement through our Microsoft Cloud Solution Provider relationship, tenant setup and configuration, mailbox and file migrations (including from on-prem Exchange and G Suite legacy), email security hardening (SPF, DKIM, DMARC), Teams and SharePoint configuration, Google Drive and Meet, and ongoing user admin. Many clients mix platforms — e.g. Google for email, Microsoft 365 for Office apps — and we handle that hybrid cleanly.' },
  { q: 'Do you offer cybersecurity services?', a: 'Yes. Our cybersecurity practice covers endpoint protection and EDR (we partner with Sophos, CrowdStrike, and Microsoft Defender for Business), firewall configuration and management (Fortinet, Sophos, Cisco, Meraki, Ubiquiti), vulnerability assessments, phishing simulation and awareness training, dark-web monitoring for your domain credentials, ISO-27001 and SOC-2 readiness, and incident response if you suspect a breach. We can operate as your full managed security provider or augment an existing CISO.' },
  { q: 'How quickly can you respond to an emergency?', a: 'Standard Starter AMC clients get a 4-hour on-site SLA during business hours. Pro tier is 2-hour, Enterprise is 1-hour. Remote response is 15 minutes for Pro and Enterprise. Critical incidents — server down, ransomware, office-wide outage — are treated as priority-1 and an engineer is dispatched immediately during working hours. After-hours on-call is included in Enterprise; Pro clients can add it for a nominal fee.' },
  { q: 'Do you provide hardware procurement and installation?', a: 'Yes. We source and supply laptops, desktops, servers, networking gear, printers, UPS systems, and accessories from our authorised distributor partners (Apple, Dell, HP, Lenovo, Cisco, Ubiquiti, Synology, and more). We handle the full lifecycle — quotation, delivery, unboxing, imaging, asset tagging, joining to domain/Intune, user setup, data migration from the old device, and secure disposal of decommissioned hardware.' },
  { q: 'Can you help with office relocations?', a: 'Absolutely. Office moves are one of our specialities. We handle site surveys, structured cabling design, WiFi planning, ISP coordination (Etisalat, du), move-day logistics, after-hours cutovers, post-move stabilisation, and punch-list resolution. Typical Dubai office move for a 50-person team: 4–6 weeks planning, 1 weekend for the physical cutover, 1 week of stabilisation. We’ve done moves ranging from 5-person startups to 350-person head offices.' },
  { q: 'What is included in a free IT assessment?', a: 'Our free IT assessment is a 60–90 minute session (on-site or remote) where a senior engineer reviews your server infrastructure, network topology, endpoint inventory, backup strategy, email security configuration, cybersecurity posture, and cloud subscriptions. You receive a written report with risk ratings (red/amber/green), prioritised recommendations, and indicative costs for any remediation work. There is no obligation to engage us afterward — the report is yours to keep.' },
  { q: 'Do you work with Apple / Mac environments?', a: 'Yes. We are one of the few Dubai IT companies with deep macOS expertise alongside Windows. Our team includes Apple Certified Support Professionals. We support Mac fleets with Jamf, Kandji, or Intune for Mac; handle macOS Sequoia, Ventura, and legacy versions; repair MacBook hardware (logic boards, screens, batteries, keyboards, trackpads); manage Time Machine and enterprise backup; and integrate Macs into mixed-platform Active Directory / Azure AD environments.' },
  { q: 'What happens if we want to leave?', a: 'AMC contracts are typically 12 months with 60 days notice to cancel. We commit to a documented off-boarding: all documentation, credentials, monitoring access, and configuration exports are handed over to you or your next provider. We don’t hold clients hostage — if we’re not performing, you should leave. This policy is why we retain 95%+ of clients year-over-year.' },
  { q: 'Do you provide 24/7 support?', a: 'Pro-tier clients get 24/7 monitoring with automated alerting, plus access to our 24/7 helpdesk portal. Enterprise-tier clients additionally get 24/7 human response with after-hours on-call engineers for critical incidents. Starter-tier is business hours only (Mon–Sat 9 AM – 6 PM). We can bolt on extended-hours support for any plan.' },
  { q: 'How do you handle data backup and disaster recovery?', a: 'Every AMC includes daily monitored backups — on-prem (Veeam, Synology), cloud (Azure Backup, Wasabi, Backblaze B2), and hybrid combinations. For each client we define an RPO (recovery point objective) and RTO (recovery time objective) based on their tolerance for data loss and downtime. We test restores quarterly for Pro clients and monthly for Enterprise. If disaster strikes, we’ve got documented DR runbooks ready to execute.' },
  { q: 'Can you help with VAT and FTA-compliant systems?', a: 'Yes. We have experience configuring, supporting, and integrating UAE VAT-compliant accounting systems (Xero, QuickBooks, Zoho Books, Tally, SAP Business One, Microsoft Dynamics 365 Business Central), point-of-sale systems (Lightspeed, Vend, Foodics), and FTA-mandated reporting tools. Our infrastructure work always considers 5-year record retention and audit-trail requirements.' },
  { q: 'Do you cover locations outside Dubai?', a: 'Yes. While our two offices are in Dubai (Media City and Bur Dubai), we serve clients across all seven Emirates — Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah. For Abu Dhabi and northern Emirates clients we either dispatch engineers from Dubai (with travel time built into SLA) or operate remote-first with a locally contracted break-fix partner for hardware-hands.' },
  { q: 'Are you an authorised Microsoft / Apple / Cisco partner?', a: 'We maintain partner relationships with Microsoft (CSP — Cloud Solution Provider), Cisco Select Partner, Fortinet, Sophos Platinum, Ubiquiti, Synology, and authorised reseller agreements with all major hardware manufacturers. Partner status means warranty work, preferential pricing, direct escalation to vendor support, and certified engineers on our team.' },
  { q: 'How do you handle user onboarding and offboarding?', a: 'For every new hire we provision accounts in your Microsoft 365 or Google Workspace tenant, assign appropriate licensing, configure MFA and conditional access, image a laptop with your standard software stack, deliver it to the new starter, and run a 30-minute walk-through. For leavers we disable accounts, revoke MFA tokens, archive mailboxes per your retention policy, wipe the returned device, rotate any shared credentials, and produce an offboarding checklist for HR. Both processes are documented SLAs in every AMC.' },
  { q: 'What is the difference between AMC and break-fix?', a: 'Break-fix means you call an IT company only when something is already broken, and pay hourly. It is reactive, unpredictable, and usually more expensive once problems accumulate. AMC (Annual Maintenance Contract) is proactive: we prevent issues through monitoring and patching, resolve routine requests at no marginal cost, and absorb most of the risk into a fixed monthly fee. After the first 6–12 months, AMC clients typically spend 30–50% less than they did on break-fix while experiencing far fewer incidents.' },
  { q: 'Do you sign NDAs and data processing agreements?', a: 'Yes. We execute mutual NDAs as standard before any sensitive engagement. For clients handling personal data we sign DPAs (Data Processing Agreements) aligned with UAE Personal Data Protection Law (Federal Decree-Law 45 of 2021) and, for clients with EU touchpoints, GDPR-aligned DPAs. Our standard contract templates are available for legal review before kick-off.' },
  { q: 'Can you provide references from current clients?', a: 'Yes. Once we’re into the proposal stage and you’d like to validate our claims, we share reference contacts from comparable clients — similar industry, similar size, similar scope. We always ask our reference clients for permission first and rotate which references we put forward to avoid burning any one client out.' },
  { q: 'What technology platforms do you support?', a: 'Windows 10/11, Windows Server 2016 through 2025, macOS (Sonoma, Sequoia, and earlier), Linux (Ubuntu, RHEL, Rocky), iOS/iPadOS, Android, ChromeOS. On the cloud side: Microsoft 365, Google Workspace, Azure, AWS, Google Cloud. Networking: Cisco, Meraki, Ubiquiti UniFi, Aruba, Ruckus, Fortinet, Sophos, WatchGuard. Storage: Synology, QNAP, Dell EMC, NetApp. Backup: Veeam, Acronis, Datto. EDR/Security: Microsoft Defender, Sophos, CrowdStrike, SentinelOne. Virtualisation: VMware ESXi, Hyper-V, Proxmox. MDM: Intune, Jamf, Kandji.' },
  { q: 'How does on-boarding work for an existing fleet?', a: 'First we run a discovery phase: we deploy RMM agents, document the environment, interview key stakeholders, and produce a baseline report within 2 weeks. Next we stabilise: we fix any critical red-flags (missing backups, unpatched servers, expired certificates). Then we optimise: standardise tooling, retire legacy systems, and document procedures. All of this runs in parallel with normal support — your team never loses helpdesk coverage during transition.' },
  { q: 'Can you support a fully remote or hybrid team?', a: 'Absolutely. Many of our clients have distributed teams. We deploy cloud-first Intune or Jamf Mobile Device Management so devices are manageable from anywhere, VPN or zero-trust access (Cloudflare Access, Microsoft Entra Private Access) for internal resources, and unified help-desk channels that don’t require a Dubai VPN connection. Users anywhere in the UAE — or travelling — get the same response as head-office staff.' },
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
          <div className="hero__badge">Trusted by 200+ Dubai Businesses Since 2008</div>
          <h1 className="hero__title">
            IT Support &amp; Managed Services
            <br />
            <span className="hero__title-accent">in Dubai</span>
          </h1>
          <p className="hero__sub">
            Professional IT support for Dubai businesses. AMC plans from AED 800 per month, 2-hour on-site response, 24/7 monitoring, managed cybersecurity, cloud migration, and Microsoft 365. One accountable partner for every IT need — from single helpdesk tickets to full enterprise infrastructure.
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
          <p className="hero__location">Concord Tower, Dubai Media City · Serving all seven Emirates</p>
        </div>
      </header>

      <section className="home-stats" aria-label="Impact">
        <div className="container">
          <div className="home-stats__grid">
            <div className="home-stats__cell">
              <div className="home-stats__num">200<span>+</span></div>
              <div className="home-stats__label">Active AMC clients across Dubai &amp; the UAE</div>
            </div>
            <div className="home-stats__cell">
              <div className="home-stats__num">17<span>+</span></div>
              <div className="home-stats__label">Years operating in Dubai — established 2008</div>
            </div>
            <div className="home-stats__cell">
              <div className="home-stats__num">95<span>%</span></div>
              <div className="home-stats__label">Client retention rate year on year</div>
            </div>
            <div className="home-stats__cell">
              <div className="home-stats__num">15<span>min</span></div>
              <div className="home-stats__label">Average remote response time, business hours</div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-trust" aria-label="Trusted by">
        <div className="container">
          <p className="home-trust__label">Trusted by leading businesses across Dubai</p>
          <div className="home-trust__strip">
            {trustedIndustries.map((t) => (
              <span key={t} className="home-trust__badge">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-intro" aria-labelledby="intro-heading">
        <div className="container home-intro__inner">
          <div className="home-intro__copy">
            <span className="section-header__eyebrow">About Azizi Technologies</span>
            <h2 id="intro-heading" className="home-intro__title">
              Dubai’s trusted IT support and managed services partner since 2008
            </h2>
            <p>
              Azizi Technologies is a Dubai-based <strong>IT support and managed services company</strong> delivering end-to-end technology operations for small and mid-sized businesses, free-zone entities, and enterprise offices across the United Arab Emirates. Since 2008 we have served more than 200 clients ranging from 5-person startups to 350-staff corporate head offices. Our two offices — in <strong>Concord Tower, Dubai Media City</strong>, and the IT Center Building in Bur Dubai — allow us to reach most of Dubai within 30 minutes and the broader UAE within 2 hours.
            </p>
            <p>
              We specialise in flat-fee <strong>IT AMC contracts in Dubai</strong>, starting from AED 800 per month. An AMC (Annual Maintenance Contract) replaces unpredictable break-fix invoices with a guaranteed monthly price, an agreed SLA, and a defined scope. Every AMC includes proactive monitoring, patch management, antivirus, backup supervision, unlimited remote support, and scheduled on-site visits. Larger plans add 24/7 helpdesk, weekly engineer visits, vCIO strategy sessions, dedicated account management, and ISO-27001 readiness work. The result: your IT becomes a budget line, not a risk line.
            </p>
            <p>
              Our engineering team covers the full stack of modern business IT. We manage Microsoft 365 and Google Workspace tenants, including licensing through our Microsoft Cloud Solution Provider partnership. We build and secure enterprise networks — structured cabling, WiFi 6 and 6E deployment, firewall configuration (Fortinet, Sophos, Cisco Meraki), VPN, VLAN segmentation, and site-to-site tunnels. We operate Windows Server, Linux, and macOS environments. We deploy Azure, AWS, and on-premises Synology/QNAP NAS platforms. We handle endpoint security, EDR rollouts, phishing simulation, SOC-2 audit prep, and incident response.
            </p>
            <p>
              Beyond technology, we are known for transparent business practices. Every proposal itemises what’s included and excluded. Every invoice matches the quoted price. We publish our AMC SLA times publicly. We don’t hide behind ticket systems or outsource our helpdesk to overseas call centres — you speak to the same engineers who know your environment. Our retention rate is over 95% year on year, which we believe is the clearest proof that this approach works. If you’re evaluating <strong>IT support companies in Dubai</strong> or looking for a change from your current provider, we’d welcome a free assessment to show you the difference.
            </p>
            <p>
              We work across every industry in Dubai — finance and DIFC-regulated firms, law firms and legal services, media and creative production houses in Media City, DHA-licensed healthcare clinics, logistics and shipping operations in Jebel Ali and Dubai South, hospitality chains, retail and F&amp;B, construction and contracting, educational institutions, and free-zone incorporated companies in DMCC, Internet City, TECOM, and JLT. Each industry has its own compliance and operational demands; our process is to understand those first, then design the technology around them — not the other way around.
            </p>
            <p>
              If you’re searching for <strong>IT services Dubai</strong>, <strong>IT support Dubai</strong>, <strong>managed IT Dubai</strong>, <strong>IT AMC Dubai</strong>, <strong>IT company Dubai</strong>, or any related term, you likely need the same thing: a competent, reliable local partner who picks up the phone, shows up on time, and charges what they quote. That’s what we’ve been doing for 200+ Dubai businesses for 17 years and counting. The best way to evaluate whether we’re the right fit is to book the free IT assessment below — it costs nothing, takes under 90 minutes, and leaves you with a written risk report you can use regardless of whether you engage us or not.
            </p>
            <p>
              Technology underpins every modern Dubai business. When it works invisibly, your team shipshape and productive; when it fails, the entire operation grinds to a halt within minutes. Email stops flowing. Sales teams can’t look up customer data. Designers lose hours of work to an unsaved Adobe crash. Warehouse scanners disconnect and pickers wait. Finance teams miss a VAT-return deadline because the accounting server rebooted in the middle of month-end. These are not hypothetical scenarios — we see them every week. The right IT partner is the one who prevents these problems quietly in the background and, when something does go wrong, responds fast enough that the business barely notices. That’s the standard we hold ourselves to, tracked rigorously against the SLA we commit to in every contract.
            </p>
          </div>
          <aside className="home-intro__highlights" aria-label="Quick facts">
            <h3 className="home-intro__highlights-title">Quick facts</h3>
            <ul>
              <li><strong>Established</strong> 2008 · 17+ years in Dubai IT</li>
              <li><strong>Clients</strong> 200+ active businesses</li>
              <li><strong>Engineers</strong> CompTIA, Microsoft, Cisco, Apple certified</li>
              <li><strong>Offices</strong> Media City + Bur Dubai</li>
              <li><strong>SLA</strong> 2-hour on-site, 15-minute remote</li>
              <li><strong>Coverage</strong> All 7 Emirates</li>
              <li><strong>Languages</strong> English, Arabic, Hindi, Urdu</li>
              <li><strong>Industries</strong> Finance, legal, media, healthcare, logistics</li>
              <li><strong>Retention</strong> 95%+ year on year</li>
              <li><strong>Billing</strong> AMC in AED, VAT inclusive available</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="home-services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">What We Do</span>
            <h2 id="services-heading" className="section-header__title">Complete IT services for Dubai businesses</h2>
            <p className="section-header__sub">Six focused service lines. 862 individual services. One contract, one invoice, one responsible partner. Each service line is delivered by specialists — not generalists — and coordinated through your dedicated account manager.</p>
          </div>
          <div className="bento">
            <Link href={services[0].href} className="bento__cell bento__cell--hero">
              <div className="bento__icon">
                <Icon name={services[0].icon} size={34} />
              </div>
              <div className="bento__tag">Most common</div>
              <h3 className="bento__title">{services[0].title}</h3>
              <p className="bento__desc">{services[0].desc}</p>
              <span className="bento__cta">Explore IT Support →</span>
              <div className="bento__shine" aria-hidden />
            </Link>
            <Link href={services[1].href} className="bento__cell bento__cell--accent">
              <div className="bento__icon">
                <Icon name={services[1].icon} size={28} />
              </div>
              <h3 className="bento__title">{services[1].title}</h3>
              <p className="bento__desc">From AED 800/month. SLA-backed, flat-fee IT maintenance that replaces break-fix bills.</p>
              <span className="bento__cta">See AMC plans →</span>
            </Link>
            <Link href={services[3].href} className="bento__cell">
              <div className="bento__icon">
                <Icon name={services[3].icon} size={26} />
              </div>
              <h3 className="bento__title">{services[3].title}</h3>
              <p className="bento__desc">EDR, firewall, phishing simulation, and ISO-27001 readiness for Dubai businesses.</p>
            </Link>
            <Link href={services[2].href} className="bento__cell">
              <div className="bento__icon">
                <Icon name={services[2].icon} size={26} />
              </div>
              <h3 className="bento__title">{services[2].title}</h3>
              <p className="bento__desc">WiFi, structured cabling, firewall, VPN — built for 5 to 500-staff offices.</p>
            </Link>
            <Link href={services[4].href} className="bento__cell">
              <div className="bento__icon">
                <Icon name={services[4].icon} size={26} />
              </div>
              <h3 className="bento__title">{services[4].title}</h3>
              <p className="bento__desc">Hard drive, SSD, RAID, and cloud data recovery — forensic-grade lab services.</p>
            </Link>
            <Link href={services[5].href} className="bento__cell bento__cell--wide">
              <div className="bento__icon">
                <Icon name={services[5].icon} size={28} />
              </div>
              <h3 className="bento__title">{services[5].title}</h3>
              <p className="bento__desc">Fully managed IT departments for companies of 10–500 staff. vCIO quarterly reviews, dedicated engineers, priority escalation.</p>
              <span className="bento__cta">Explore B2B →</span>
            </Link>
          </div>
          <div className="home-services__footer">
            <Link href="/services/" className="btn btn--outline">View all 862 services →</Link>
          </div>
        </div>
      </section>

      <section className="home-deep" aria-labelledby="deep-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Services in depth</span>
            <h2 id="deep-heading" className="section-header__title">What every AMC plan actually includes</h2>
            <p className="section-header__sub">Technology should be predictable. Here’s exactly what our clients get, day in and day out.</p>
          </div>

          <div className="home-deep__block">
            <h3>Proactive monitoring and patch management</h3>
            <p>
              Every Azizi AMC client gets 24/7 automated monitoring of their servers, workstations, network devices, and cloud services. Our RMM platform collects thousands of metrics — CPU, memory, disk space, service status, failed logins, patch levels, antivirus state, backup completion — and alerts our operations team the moment anything drifts outside its baseline. Patches for operating systems and common applications are reviewed weekly, tested on a pilot group, and rolled out in controlled waves so you never wake up to a broken fleet after a bad Microsoft update.
            </p>
          </div>

          <div className="home-deep__block">
            <h3>Unlimited remote help-desk support</h3>
            <p>
              Your team can contact us by phone, email, WhatsApp, or ticket portal during working hours (and 24/7 for Pro/Enterprise plans). Typical remote requests — password resets, printer issues, email configuration, VPN connections, software installations, file recovery — are resolved in minutes. We use secure remote-control tools (with user consent each session) and document every touch in your ticket history so nothing is forgotten and nothing is billed twice.
            </p>
          </div>

          <div className="home-deep__block">
            <h3>Scheduled on-site engineering</h3>
            <p>
              Remote support covers most issues, but some things need hands on hardware. Every AMC includes scheduled on-site visits — once a month for Starter, weekly for Pro, dedicated days for Enterprise. The engineer who visits is familiar with your environment, not a rotating stranger. On-site work covers cable management, printer servicing, physical server and network checks, user onboarding hardware setup, office moves, and anything else that requires a person in the room.
            </p>
          </div>

          <div className="home-deep__block">
            <h3>Backup and disaster recovery</h3>
            <p>
              Data loss is the number-one existential threat to a small business. Every AMC includes daily monitored backups — on-premises (Veeam, Synology, QNAP), cloud (Azure Backup, Wasabi, Backblaze B2), or hybrid. We define RPO and RTO targets with you, document the restore procedures, and test restores on a cadence (quarterly for Pro, monthly for Enterprise). If ransomware hits, we have offline, immutable backups ready to restore from.
            </p>
          </div>

          <div className="home-deep__block">
            <h3>Endpoint security and EDR</h3>
            <p>
              Traditional antivirus is no longer enough. Every Azizi workstation and server runs next-generation endpoint protection with behavioural analysis, anti-ransomware rollback, and EDR (Endpoint Detection and Response) telemetry. We partner with Sophos, Microsoft Defender for Business, and CrowdStrike, choosing the right platform for your scale and compliance needs. Suspicious activity is investigated by our security operations team, not ignored in a dashboard.
            </p>
          </div>

          <div className="home-deep__block">
            <h3>Microsoft 365 and Google Workspace administration</h3>
            <p>
              Cloud productivity is the backbone of modern work. We manage your M365 or Google Workspace tenant end-to-end — license procurement through our CSP relationship, user onboarding and offboarding, Teams/SharePoint/OneDrive/Intune policy configuration, DNS records for email deliverability (SPF, DKIM, DMARC), conditional access, MFA enforcement, and migration between platforms when business needs change. Most clients save money on licensing through our volume agreements.
            </p>
          </div>

          <div className="home-deep__block">
            <h3>Network operations</h3>
            <p>
              Your office network is the invisible infrastructure that everything depends on. We design, install, and maintain structured cabling, enterprise WiFi (Ubiquiti UniFi, Cisco Meraki, Aruba, Ruckus), layer-2/3 switching, next-gen firewalls, VPN concentrators, and ISP handoffs. We run regular WiFi heat-map surveys, document VLAN layouts, test failover, and monitor uplink performance. For Dubai offices with Etisalat or du fibre, we handle all provider coordination.
            </p>
          </div>

          <div className="home-deep__block">
            <h3>Hardware procurement and lifecycle</h3>
            <p>
              Buying IT gear in Dubai through retail channels usually means paying retail prices and handling warranties yourself. Azizi clients procure through our partner relationships with Apple, Dell, HP, Lenovo, Cisco, Ubiquiti, Synology, and major distributors. We handle quotation, delivery, unboxing, asset tagging, imaging, domain/Intune joining, data migration, and secure disposal when equipment is retired. Typical savings: 10–20% versus retail, plus zero administrative overhead for your team.
            </p>
          </div>
        </div>
      </section>

      <section className="home-industries" aria-labelledby="industries-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Industries we serve</span>
            <h2 id="industries-heading" className="section-header__title">Deep expertise across Dubai’s key business sectors</h2>
            <p className="section-header__sub">Every industry has its own compliance requirements, operational rhythm, and technology stack. We’ve built repeatable playbooks for each.</p>
          </div>
          <div className="home-industries__grid">
            {industries.map((i) => (
              <div key={i.name} className="home-industry">
                <h3 className="home-industry__name">{i.name}</h3>
                <p className="home-industry__desc">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-why" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Why Azizi</span>
            <h2 id="why-heading" className="section-header__title">Why 200+ Dubai businesses trust us with their IT</h2>
            <p className="section-header__sub">Four things our clients tell us matter most.</p>
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

      <section className="home-process" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Our process</span>
            <h2 id="process-heading" className="section-header__title">From first call to ongoing partnership</h2>
            <p className="section-header__sub">A repeatable five-step process every new client goes through. No surprises, no hidden scope, no drawn-out onboarding.</p>
          </div>
          <div className="home-process__list">
            {process.map((p) => (
              <div key={p.step} className="home-process__item">
                <div className="home-process__step">{p.step}</div>
                <div className="home-process__body">
                  <h3 className="home-process__title">{p.title}</h3>
                  <p className="home-process__desc">{p.desc}</p>
                </div>
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
            <p className="section-header__sub">Every plan includes unlimited remote support, patch management, and backup monitoring. Scale up or down as your team changes — no lock-in penalties.</p>
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
          <p className="home-plans__note">
            All prices in AED, exclusive of 5% VAT unless stated. Pricing assumes standard Dubai business-hours coverage (Mon–Sat, 9 AM – 6 PM). After-hours on-call, extended coverage to Sundays, and public-holiday response are available as add-ons on Starter and Pro, and included in Enterprise. Ad-hoc project work (office moves, migrations, major deployments) is quoted separately and does not consume AMC ticket allowances.
          </p>
        </div>
      </section>

      <section className="home-freezones" aria-labelledby="freezones-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Coverage</span>
            <h2 id="freezones-heading" className="section-header__title">Serving every major Dubai free zone and business district</h2>
            <p className="section-header__sub">Two offices, one unified dispatch team, and dedicated routes to every major business area in Dubai.</p>
          </div>
          <div className="home-freezones__grid">
            {freeZones.map((z) => (
              <div key={z.name} className="home-freezone">
                <div className="home-freezone__icon" aria-hidden>📍</div>
                <h3 className="home-freezone__name">{z.name}</h3>
                <p className="home-freezone__desc">{z.desc}</p>
              </div>
            ))}
          </div>
          <p className="home-freezones__note">
            We also cover Abu Dhabi (via Dubai-Abu Dhabi dispatch with 3-hour SLA), Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah through a combination of Dubai-dispatched engineers and contracted local partners for hands-on emergencies. Remote and cloud work is handled identically regardless of location.
          </p>
        </div>
      </section>

      <section className="home-cases" aria-labelledby="cases-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Client results</span>
            <h2 id="cases-heading" className="section-header__title">How we’ve helped Dubai businesses</h2>
            <p className="section-header__sub">Four real engagements that illustrate how we work in practice. Client names withheld for confidentiality; full references available on request.</p>
          </div>
          <div className="home-cases__list">
            {caseStudies.map((c, i) => (
              <article key={c.title} className={`home-case home-case--${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="home-case__visual" aria-hidden>
                  <div className="home-case__num">#{String(i + 1).padStart(2, '0')}</div>
                  <div className="home-case__accent" />
                </div>
                <div className="home-case__body">
                  <div className="home-case__label">Client outcome</div>
                  <h3 className="home-case__title">{c.title}</h3>
                  <p className="home-case__desc">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-compliance" aria-labelledby="compliance-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Compliance &amp; regulation</span>
            <h2 id="compliance-heading" className="section-header__title">Aligned with UAE regulation and international standards</h2>
            <p className="section-header__sub">We understand the frameworks Dubai businesses operate under and bake compliance into every engagement.</p>
          </div>
          <div className="home-compliance__grid">
            {compliance.map((c) => (
              <div key={c.title} className="home-compliance__card">
                <h3 className="home-compliance__title">{c.title}</h3>
                <p className="home-compliance__desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-partners" aria-labelledby="partners-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Technology partners</span>
            <h2 id="partners-heading" className="section-header__title">Certified, authorised, and experienced</h2>
            <p className="section-header__sub">We maintain formal partner relationships with the vendors whose technology we deploy. Partner status means preferential pricing, direct vendor escalation, and certified engineers on staff.</p>
          </div>
          <ul className="home-partners__list">
            {partners.map((p) => (
              <li key={p} className="home-partners__item">{p}</li>
            ))}
          </ul>
          <p className="home-partners__note">Our in-house engineers hold certifications across CompTIA (A+, Network+, Security+), Microsoft (MS-100, MS-500, AZ-104, AZ-305, SC-300), Cisco (CCNA, CCNP), Apple (ACSP, ACMT), Fortinet (NSE 4), and vendor-specific training for Sophos, Ubiquiti, Synology, and Veeam. Every engineer completes continuous education — we budget 40 hours per engineer per year for training and certification.</p>
        </div>
      </section>

      <section className="home-faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">FAQ</span>
            <h2 id="faq-heading" className="section-header__title">Common questions about IT support in Dubai</h2>
            <p className="section-header__sub">If your question isn’t covered here, call or WhatsApp us — we answer every enquiry personally.</p>
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

      <section className="home-emergency" aria-labelledby="emergency-heading">
        <div className="container">
          <div className="home-emergency__inner">
            <div className="home-emergency__icon" aria-hidden>🚨</div>
            <div className="home-emergency__copy">
              <span className="section-header__eyebrow">Emergency IT Support Dubai</span>
              <h2 id="emergency-heading" className="home-emergency__title">IT emergency right now? We dispatch within 30 minutes.</h2>
              <p>
                If your server is down, your network is offline, your email is compromised, or you suspect a cybersecurity incident, don’t waste time sending a ticket. <strong>Call 055 753 0104 directly</strong>. During business hours we answer personally within three rings and dispatch an engineer — most emergencies see an engineer on-site within 30 minutes in central Dubai, 60 minutes across greater Dubai, and 2 hours to Abu Dhabi or the northern Emirates. After hours, Enterprise-tier clients have a direct on-call line; Pro-tier clients can add after-hours coverage to their plan for a nominal monthly fee.
              </p>
              <p>
                Typical emergencies we handle daily: server crashes and boot failures, ransomware and malware outbreaks, network-wide connectivity loss, Microsoft 365 tenant lockouts, domain controller failures, critical hardware failures (RAID degradation, disk crashes, power supply failures), office-wide WiFi collapse, email account takeovers, data loss from accidental deletion or hardware failure, and ISP outages requiring rapid failover. Our emergency rate card is transparent — AED 500 per site visit for non-AMC clients, included for AMC clients, with clear hourly rates for extended work.
              </p>
              <div className="home-emergency__actions">
                <a href="tel:+971557530104" className="btn btn--primary btn--lg">📞 Emergency: 055 753 0104</a>
                <a href="https://wa.me/971557530104" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">💬 WhatsApp Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-local" aria-labelledby="local-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Local advantage</span>
            <h2 id="local-heading" className="section-header__title">Why local Dubai IT support beats offshore helpdesks</h2>
          </div>
          <div className="home-local__copy">
            <p>
              Many Dubai businesses have tried offshore IT providers — call centres in India, the Philippines, or Europe — and discovered the hidden costs: time-zone gaps mean your 10 AM issue gets picked up at 3 PM, language and cultural barriers add friction, and when hardware actually breaks, nobody is physically available to help. Local Dubai IT support eliminates these frictions. An engineer who speaks your business language, works your hours, can walk into your office within two hours, and understands the specific infrastructure providers (Etisalat, du, Virgin Mobile UAE), the free-zone ecosystem, and the regulatory environment you operate in is worth many multiples of the per-hour rate difference.
            </p>
            <p>
              Azizi Technologies has spent 17 years building relationships with the local providers your business depends on. We know which Etisalat account manager to call when a fibre line is down. We have spares on the shelves of our Bur Dubai office so a failed router or switch can be swapped same-day without waiting for a Jebel Ali customs clearance. Our engineers carry Mobile Health certificates for healthcare clients and DIFC security passes for financial clients. We speak English, Arabic, Hindi, and Urdu — covering the working languages of virtually every Dubai business. Most importantly, we’re local people you can meet, shake hands with, and build trust with over time. That’s a level of service offshore providers structurally cannot match.
            </p>
          </div>
        </div>
      </section>

      <section className="home-contact" id="contact" aria-labelledby="contact-heading">
        <div className="container home-contact__inner">
          <div className="home-contact__copy">
            <h2 id="contact-heading" className="home-contact__title">Get a Free IT Assessment</h2>
            <p className="home-contact__sub">
              We’ll review your current setup, flag risks, and propose a plan — no obligation, no jargon, no sales pressure. Most assessments complete in under 90 minutes and the written report is yours to keep whether you engage us or not.
            </p>
            <div className="home-contact__details">
              <a href="tel:+971557530104" className="home-contact__detail">📞 055 753 0104</a>
              <a href="mailto:info@azizitechnologies.ae" className="home-contact__detail">✉️ info@azizitechnologies.ae</a>
              <a href="https://wa.me/971557530104" target="_blank" rel="noopener noreferrer" className="home-contact__detail">💬 WhatsApp</a>
              <span className="home-contact__detail">📍 Concord Tower, Dubai Media City</span>
              <span className="home-contact__detail">📍 IT Center Building, Bur Dubai</span>
              <span className="home-contact__detail">🕐 Mon–Sat 9 AM – 6 PM</span>
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
                <option>Office Move / Setup</option>
                <option>Hardware Procurement</option>
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
