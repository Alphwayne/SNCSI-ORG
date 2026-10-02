import { useState } from 'react'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Our work', href: '/#programs' },
  { label: 'Impact', href: '/#impact' },
  { label: 'Contact', href: '/#contact' }
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="SmileNation home" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="SmileNation" />
        </a>
        <nav id="primary-navigation" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="nav-mobile-cta" href="/donate" onClick={() => setOpen(false)}>Support the work</a>
        </nav>
        <div className="header-actions">
          <a className="text-link desktop-only" href="/donate">Get involved</a>
          <a className="button button-small desktop-only" href="/donate">Donate</a>
          <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  )
}
