import { useEffect, useState } from 'react'
import type { Filter, Product } from './data/products'
import Header from './components/Header'
import Hero from './components/Hero'
import Collections from './components/Collections'
import ProductGrid from './components/ProductGrid'
import ProductModal from './components/ProductModal'
import InspirationGallery from './components/InspirationGallery'
import About from './components/About'
import Footer from './components/Footer'
export default function App(){
 const [filter,setFilter]=useState<Filter>('all')
 const [selected,setSelected]=useState<Product|null>(null)
 useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));return()=>observer.disconnect()},[])
 const selectCollection=(id:Filter)=>{setFilter(id);document.getElementById('urunler')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}
 return <><a className="skip-link" href="#main">İçeriğe geç</a><Header/><main id="main"><Hero/><div className="manifesto"><span>DOĞADAN İLHAM ALAN</span><span className="manifesto-title">Sade tasarımlar. <em>Anlamlı yaşamlar.</em></span><span>SİZE AİT ALANLAR</span></div><Collections onSelect={selectCollection}/><ProductGrid filter={filter} setFilter={setFilter} onOpen={setSelected}/><InspirationGallery/><About/></main><Footer/><ProductModal product={selected} onClose={()=>setSelected(null)}/></>
}
