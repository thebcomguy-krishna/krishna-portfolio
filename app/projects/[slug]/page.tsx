import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import { projects } from '@/app/page';

export function generateStaticParams(){ return projects.map(p=>({slug:p.slug})); }
export default async function ProjectPage({params}:{params:{slug:string}}) {
 const {slug}=params; const project=projects.find(p=>p.slug===slug); if(!project) notFound();
 return <><SiteNav/><main className="project-detail container"><Link href="/#projects" className="back-link"><ArrowLeft size={15}/> Back to selected work</Link><div className="detail-heading"><span className="eyebrow">PROJECT {project.number} / {project.category}</span><h1>{project.title}</h1><p>{project.summary}</p></div><div className={`detail-art project-art ${project.visual}`}><span className="art-index">{project.number}</span><span className="art-word">{project.title}</span><span className="art-orbit"/></div><div className="detail-content"><div className="detail-sidebar"><span className="eyebrow">MY ROLE</span><strong>{project.role}</strong><span className="eyebrow detail-label">OVERVIEW</span><p>{project.detail}</p></div><div className="detail-main"><span className="eyebrow">WHAT I WORKED ON</span><ul>{project.points.map(point=><li key={point}>{point}</li>)}</ul><div className="learning-card"><span className="eyebrow">WHAT I TOOK AWAY</span><p>{project.learning}</p></div><Link href="/#contact" className="text-link">Have a question about this experience? <ArrowUpRight size={15}/></Link></div></div><div className="detail-next"><span className="eyebrow">MORE SELECTED WORK</span><div>{projects.filter(p=>p.slug!==slug).slice(0,3).map(p=><Link key={p.slug} href={`/projects/${p.slug}`}>{p.title}<ArrowUpRight size={15}/></Link>)}</div></div></main><footer className="site-footer"><div className="container footer-inner"><Link href="/" className="wordmark">KA<span>.</span></Link><span>© {new Date().getFullYear()} Krishna Agarwal.</span><Link href="/#home">Back to home ↑</Link></div></footer></>;
}
