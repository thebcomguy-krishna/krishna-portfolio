import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export type Project = { slug:string; number:string; title:string; category:string; summary:string; visual:string; detail:string; role:string; points:string[]; learning:string };
export default function ProjectCard({project}:{project:Project}) {
 return <Link className="project-card" href={`/projects/${project.slug}`}>
   <div className={`project-art ${project.visual}`}><span className="art-index">{project.number}</span><span className="art-word">{project.title}</span><span className="art-orbit"/></div>
   <div className="project-meta"><div><span className="eyebrow">{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p></div><span className="round-arrow"><ArrowUpRight size={18}/></span></div>
 </Link>
}
