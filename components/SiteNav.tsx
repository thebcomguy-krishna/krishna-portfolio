'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [ ['About','#about'], ['Experience','#experience'], ['Projects','#projects'], ['Beyond work','#beyond'], ['Contact','#contact'] ];
export default function SiteNav() {
  const [open,setOpen] = useState(false);
  return <header className="site-header"><div className="nav-wrap">
    <Link href="/" className="wordmark" onClick={()=>setOpen(false)}>KA<span>.</span></Link>
    <nav className="desktop-nav">{links.map(([label,href])=><a key={label} href={href}>{label}</a>)}</nav>
    <a className="nav-cta" href="mailto:krishnagarwalprof@gmail.com">Let&apos;s talk <ArrowUpRight size={14}/></a>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>{open&&<nav className="mobile-nav">{links.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav>}</header>
}
