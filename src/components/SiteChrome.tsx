import { organization } from '../data/content'

export function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className={light ? 'section-heading light' : 'section-heading'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="SmileNation" />
          <p>{organization.tagline}</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Explore</span>
          <a href="/#about">About us</a>
          <a href="/#programs">Our work</a>
          <a href="/#impact">Impact</a>
          <a href="/donate">Get involved</a>
        </div>
        <div className="footer-column footer-contact">
          <span className="footer-label">Say hello</span>
          <a href={`mailto:${organization.email[0]}`}>{organization.email[0]}</a>
          <a href={`tel:${organization.phones[0].replaceAll(' ', '')}`}>{organization.phones[0]}</a>
          <div className="social-row">
            <a href={organization.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={organization.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={organization.socials.twitter} target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
        <div className="footer-cta">
          <span className="footer-label">Make room for hope.</span>
          <h3>Every child deserves a reason to smile.</h3>
          <a className="button button-light" href="/donate">Support SmileNation</a>
        </div>
      </div>
      <div className="footer-bottom shell"><span>© {new Date().getFullYear()} SmileNation Child Support Initiative</span><span>Built for brighter futures.</span></div>
    </footer>
  )
}
