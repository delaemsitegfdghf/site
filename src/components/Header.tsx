import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
export const navLinks = [['Ana Sayfa', '#anasayfa'], ['Koleksiyonlar', '#koleksiyonlar'], ['Ürünler', '#urunler'], ['Hakkımızda', '#hakkimizda']]
export function Logo() { return <a className="logo" href="#anasayfa" aria-label="İnegöl Mobilya ana sayfa">inegöl<span>MOBİLYA</span></a> }
export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const scroll = () => setScrolled(window.scrollY > 20); scroll(); window.addEventListener('scroll', scroll, { passive: true }); return () => window.removeEventListener('scroll', scroll) }, [])
  useEffect(() => { if (!open) return; const escape = (e: KeyboardEvent) => { if(e.key === 'Escape') {setOpen(false); document.getElementById('menu-toggle')?.focus()} }; window.addEventListener('keydown', escape); return () => window.removeEventListener('keydown', escape) }, [open])
  return <header className={`header ${scrolled ? 'scrolled' : ''}`}><div className="header-inner"><Logo/><nav className="desktop-nav" aria-label="Ana menü">{navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><a className="header-cta" href="#koleksiyonlar">Koleksiyonu Keşfet <ArrowUpRight size={16}/></a><button id="menu-toggle" className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div><nav id="mobile-menu" className="mobile-nav" hidden={!open} aria-label="Mobil menü">{navLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18}/></a>)}</nav></header>
}
