import { useState } from 'react'
import { Header } from './components/Header'
import { Footer, SectionHeading } from './components/SiteChrome'
import { impactStats, organization, programs, values } from './data/content'

function Button({ children, href, light = false }: { children: React.ReactNode; href: string; light?: boolean }) {
  return <a className={light ? 'button button-light' : 'button'} href={href}>{children}</a>
}

function HomePage() {
  return <>
    <Header />
    <main>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">Child support · Community action</span>
          <h1 id="hero-title">A brighter start<br /><em>for every child.</em></h1>
          <p className="hero-intro">We put care into action — supporting education, building confidence, and helping children grow into the nation builders they can be.</p>
          <div className="hero-actions"><Button href="/donate">Support the work</Button><a className="text-link" href="#programs">See what we do</a></div>
          <div className="hero-footnote">Rooted in service. Measured in transformed lives.</div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src="/images/banner-1.jpg" alt="Children sharing a joyful moment together" /></div>
          <div className="hero-note"><span>Giving smiles,<br /><strong>reigniting hope.</strong></span></div>
        </div>
      </section>

      <section className="trust-strip"><div className="shell trust-inner"><span className="eyebrow">Our promise</span><p>“To be a platform of hope to the less privileged child, putting smiles on their faces and equipping them to become nation builders.”</p><span className="rule" /></div></section>

      <section className="about-section shell" id="about">
        <div className="about-image"><img src="/images/child-1.jpg" alt="Child participating in a SmileNation activity" /><span className="image-caption">Hope looks like showing up.</span></div>
        <div className="about-copy"><SectionHeading eyebrow="Who we are" title="Small acts. Lasting change." intro={organization.about} /><a className="arrow-link" href="/approach">Our approach</a><div className="values"><span className="eyebrow">We are guided by</span><div className="value-list">{values.map((value) => <span key={value}>{value}</span>)}</div></div></div>
      </section>

      <section className="programs-section" id="programs"><div className="shell"><SectionHeading eyebrow="Our work" title="Where care becomes action." intro="Our programmes meet children where they are — then create room for them to grow." /><div className="program-grid">{programs.map((program) => <article className="program-card" key={program.number}><div className="program-image"><img src={program.image} alt="" /><span>{program.number}</span></div><div className="program-content"><span className="eyebrow">{program.location}</span><h3>{program.title}</h3><p>{program.description}</p><a className="arrow-link" href={program.href}>Explore programme</a></div></article>)}</div></div></section>

      <section className="impact-section shell" id="impact"><div className="impact-intro"><SectionHeading eyebrow="The bigger picture" title="Because potential is everywhere." intro="A child’s future can change with the right support at the right time. We work alongside communities to make that support real." /><Button href="/donate">Join the movement</Button></div><div className="impact-visual"><img src="/images/child-3.jpg" alt="Children smiling outdoors" /><div className="impact-stats">{impactStats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div></section>

      <section className="story-section"><div className="shell story-grid"><div className="story-quote"><blockquote>“Our result is measured by the lives that are transformed.”</blockquote><span>— SmileNation Child Support Initiative</span></div><div className="story-image"><img src="/images/reach-5.jpg" alt="SmileNation volunteers connecting with children" /></div></div></section>

      <section className="contact-section shell" id="contact"><div><SectionHeading eyebrow="Let’s connect" title="Ready to help hope travel further?" intro="Reach out for collaborations, volunteering, or to find a meaningful way to support the work." /><div className="contact-actions"><a className="contact-line" href={`mailto:${organization.email[0]}`}>{organization.email[0]}</a><a className="contact-line" href={`tel:${organization.phones[0].replaceAll(' ', '')}`}>{organization.phones[0]}</a></div></div><div className="contact-card"><h3>Bring your own kind of good.</h3><p>Whether you give time, resources, or a platform, there is a place for you in this work.</p><Button href="/donate">Get involved</Button></div></section>
    </main>
    <Footer />
  </>
}

function DonatePage() {
  const [copied, setCopied] = useState(false)
  const copyAccount = async () => { await navigator.clipboard?.writeText('0125472506'); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  return <><Header /><main className="donate-page"><section className="donate-hero shell"><div><span className="eyebrow">Your support matters</span><h1>Give a child<br /><em>more to smile about.</em></h1><p>Your generosity helps SmileNation provide basic needs, educational support, and empowering opportunities for children.</p><Button href={organization.donateUrl}>Donate online</Button></div><div className="donate-hero-image"><img src="/images/support.png" alt="A child smiling with support from the community" /><span>“Every child deserves a smile. Be their reason to smile.”</span></div></section><section className="support-options shell"><SectionHeading eyebrow="Three ways to help" title="Choose your way in." /><div className="support-grid"><article className="support-option featured"><span className="option-number">01</span><h2>Donate online</h2><p>Contribute instantly and securely through our online donation portal.</p><a className="button" href={organization.donateUrl} target="_blank" rel="noreferrer">Donate now</a></article><article className="support-option"><span className="option-number">02</span><h2>Bank transfer</h2><p>Transfer directly to our account and help keep the work moving.</p><div className="bank-details"><span>Account number</span><strong>0125472506</strong><span>Bank</span><strong>Wema Bank</strong><span>Account name</span><strong>Smilenation Initiative</strong></div><button className="copy-button" onClick={copyAccount}>{copied ? 'Copied' : 'Copy account number'}</button></article><article className="support-option"><span className="option-number">03</span><h2>Volunteer with us</h2><p>Bring your time, skills, and energy. Join a community that chooses to show up.</p><a className="arrow-link" href={organization.volunteerUrl} target="_blank" rel="noreferrer">Join the volunteer team</a></article></div></section><section className="donate-bottom"><div className="shell donate-bottom-inner"><div><span className="eyebrow">A note from us</span><h2>Thank you for choosing to make room for hope.</h2></div><div className="donate-bottom-copy"><p>Every gift, conversation, and hour volunteered helps a child feel seen, supported, and ready for what comes next.</p><a className="text-link light-link" href="/#contact">Have a question?</a></div></div></section></main><Footer /></>
}

function ApproachPage() {
  return <><Header /><main className="inner-page"><section className="inner-hero shell"><div><span className="eyebrow">How we work</span><h1>Care that becomes <em>capability.</em></h1><p>SmileNation brings practical support, education, and community partnership together so children are not only cared for today, but equipped for tomorrow.</p><Button href="/donate">Support our approach</Button></div><img src="/images/child-2.jpg" alt="A child smiling during a SmileNation activity" /></section><section className="approach-grid shell"><SectionHeading eyebrow="Our approach" title="Show up. Listen well. Build forward." intro={organization.mission} /><div className="approach-points"><article><span>01</span><h2>Start with dignity</h2><p>We lead with respect, listening to children and communities instead of defining them by what they lack.</p></article><article><span>02</span><h2>Make support practical</h2><p>From relief items to education and skills, our work responds to real needs with tangible next steps.</p></article><article><span>03</span><h2>Grow local capacity</h2><p>We believe lasting change is shared work — one that equips people and strengthens the communities around children.</p></article></div></section><section className="inner-callout"><div className="shell"><span className="eyebrow">Our vision</span><h2>{organization.vision}</h2><a className="text-link light-link" href="/#programs">Explore our programmes</a></div></section></main><Footer /></>
}

function ProgramDetailPage({ slug }: { slug: string }) {
  const program = programs.find((item) => item.slug === slug) ?? programs[0]
  return <><Header /><main className="inner-page"><section className="program-detail-hero shell"><div><a className="back-link" href="/#programs">Back to our work</a><span className="eyebrow">Programme {program.number} · {program.location}</span><h1>{program.title}</h1><p>{program.detail}</p><Button href="/donate">Help this work grow</Button></div><img src={program.image} alt="" /></section><section className="program-gallery shell" aria-label={`${program.title} photo gallery`}><div className="gallery-heading"><span className="eyebrow">From the field</span><h2>{program.focus}</h2></div><div className="gallery-grid">{program.gallery.map((image, index) => <figure className={index === 0 ? 'gallery-image gallery-image-featured' : 'gallery-image'} key={image}><img src={image} alt={`${program.title} — moment ${index + 1}`} /></figure>)}</div></section><section className="program-detail-body shell"><div><SectionHeading eyebrow="What this looks like" title={program.outcome} /></div><div><p>{program.detail}</p><p>SmileNation’s work is powered by volunteers, partners, and supporters who believe children should have the chance to feel seen, supported, and ready for what comes next.</p><a className="arrow-link" href="/donate">Join this work</a></div></section><section className="inner-callout"><div className="shell"><span className="eyebrow">Keep hope moving</span><h2>There is a place for your kind of good.</h2><Button href="/donate" light>Get involved</Button></div></section></main><Footer /></>
}

export default function App() {
  const isDonate = window.location.pathname === '/donate' || window.location.pathname === '/donate/'
  const isApproach = window.location.pathname === '/approach' || window.location.pathname === '/approach/'
  const programMatch = window.location.pathname.match(/^\/programs\/([^/]+)\/?$/)
  if (isDonate) return <DonatePage />
  if (isApproach) return <ApproachPage />
  if (programMatch) return <ProgramDetailPage slug={programMatch[1]} />
  return <HomePage />
}
