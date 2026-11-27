import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  visual: string;
  logo?: string;
  logoShape?: 'rounded' | 'circle' | 'crest';
  detail: string;
  role: string;
  points: string[];
  learning: string;
};

export function ProjectArtwork({
  project,
  className = '',
  sizes = '140px',
}: {
  project: Project;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`project-art ${project.visual} ${className}`.trim()}>
      <span className="art-index">{project.number}</span>
      {project.logo ? (
        <div
          className={`art-logo-wrap ${
            project.logoShape === 'circle'
              ? 'art-logo-circle'
              : project.logoShape === 'crest'
                ? 'art-logo-crest'
                : ''
          }`.trim()}
        >
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            fill
            sizes={sizes}
            className="art-logo-img"
          />
        </div>
      ) : (
        <span className="art-word">{project.title}</span>
      )}
      <span className="art-orbit" />
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-card" href={`/projects/${project.slug}`}>
      <ProjectArtwork project={project} />
      <div className="project-meta">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
        <span className="round-arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}
