import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Instagram, Linkedin, Mail, Download, ExternalLink, Trophy, Mic2, MapPin } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import ProjectCard, { Project } from '@/components/ProjectCard';

export const projects: Project[] = [
  {
    slug: 'argus',
    number: '01',
    title: 'Argus',
    category: 'Founder’s office · Startup operations',
    summary: 'Working across customer acquisition, planning and the day-to-day needs of an early-stage team.',
    visual: 'art-argus',
    logo: '/images/argus.jpg',
    logoShape: 'rounded',
    detail: 'A founder’s office role gave me a close view of how an early-stage company moves from plans to execution. I supported customer acquisition and helped with the planning and coordination needed to keep work moving.',
    role: 'Founder’s Office Intern',
    points: ['Supported customer acquisition activities.', 'Helped with planning and execution across workstreams.', 'Worked closely with the founding team on operational priorities.'],
    learning: 'The experience helped me understand the pace, ambiguity and breadth of work involved in a founder’s office.'
  },
  {
    slug: 'saturn-labs',
    number: '02',
    title: 'Saturn Labs',
    category: 'Data collection · Community & operations',
    summary: 'Helping source real-world activity recordings, first through businesses in India and later across international markets.',
    visual: 'art-saturn',
    logo: '/images/saturn-labs.jpg',
    logoShape: 'rounded',
    detail: 'Saturn Labs is a data collection company. I supported its data collection work by recruiting businesses and participants to record everyday tasks using wearable cameras. The work evolved from local business outreach in India to participant outreach across the US, UK and Europe.',
    role: 'Community & Operations',
    points: ['Approached business owners in India and explained the data collection programme.', 'Persuaded businesses to let workers wear cameras while carrying out their regular tasks.', 'As the programme expanded, conducted calls with people in the US, UK and Europe to explain the recording process and recruit participants.', 'Helped build and coordinate a distributed community of 200+ gig workers.'],
    learning: 'I learned how to communicate a new concept, build trust with different audiences and support operations across geographies.'
  },
  {
    slug: 'shyam-bazaar',
    number: '03',
    title: 'Shyam Bazaar',
    category: 'Family business · Retail',
    summary: 'Learning business from the inside while helping manage a family-owned clothing shop.',
    visual: 'art-shyam',
    logo: '/images/shyam-bazaar.jpg',
    logoShape: 'circle',
    detail: 'Shyam Bazaar is a clothing shop started by my father. I help with its management and get involved in the practical decisions that keep a retail business running.',
    role: 'Business operations & marketing',
    points: ['Support day-to-day management and accounting.', 'Contribute to marketing and promotional planning.', 'Help develop offers to encourage customer engagement.', 'Introduced a loyalty card initiative that received a positive response and brought back repeat customers.'],
    learning: 'This has been a hands-on way to understand customer behaviour, retail operations and the value of building long-term customer relationships.'
  },
  {
    slug: 'college-stall',
    number: '04',
    title: 'College Stall',
    category: 'Entrepreneurial experiment',
    summary: 'A small campus venture that generated ₹8,000 in revenue.',
    visual: 'art-stall',
    logo: '/images/college-stall.png',
    logoShape: 'crest',
    detail: 'I set up a game stall at a college event as a small entrepreneurial experiment. It gave me a chance to test an idea in a real setting and see what it takes to attract participants and generate revenue.',
    role: 'Initiator & operator',
    points: ['Set up and operated a game stall at a college event.', 'Generated ₹8,000 in revenue.', 'Got practical exposure to running a small on-ground activity.'],
    learning: 'A simple idea becomes a real business exercise when you have to execute it, engage customers and make the numbers work.'
  },
  {
    slug: 'content-creation',
    number: '05',
    title: 'Content Creation',
    category: 'Business · Finance · Learning in public',
    summary: 'Exploring how to communicate ideas around business and finance through content.',
    visual: 'art-content',
    logo: '/images/content-creation.png',
    logoShape: 'rounded',
    detail: 'I have been experimenting with creating content around business and finance. It is an ongoing learning process and a way to explore ideas, practise communication and share what I find interesting.',
    role: 'Independent creator',
    points: ['Explore topics across business and finance.', 'Experiment with formats and ways to explain ideas.', 'Learn by researching, creating and publishing.'],
    learning: 'Content creation has encouraged me to become more curious, communicate more clearly and learn in public.'
  }
];

function SectionHeading({ index, title, sub }: { index: string; title: string; sub?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{index} / {sub || 'THE PORTFOLIO'}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability-line">
              <span className="status-dot" /> PERSONAL PORTFOLIO <span className="line" />
            </div>
            <p className="hero-kicker">HELLO, I&apos;M KRISHNA AGARWAL.</p>
            <h1>
              Exploring business.<br />
              Understanding startups.<br />
              <em>Building towards something bigger.</em>
            </h1>
            <p className="hero-description">
              A student interested in entrepreneurship, the way businesses work, and the people who build them.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#projects">
                Explore my work <ArrowDown size={16} />
              </a>
              <a className="text-link" href="/documents/krishna-agarwal-resume.pdf" target="_blank">
                Download resume <Download size={15} />
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/krishnagarwall/" target="_blank" rel="noreferrer">
                <Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} />
              </a>
              <a href="https://www.instagram.com/krishnagarwa1/" target="_blank" rel="noreferrer">
                <Instagram size={15} /> Instagram <ArrowUpRight size={12} />
              </a>
              <a href="mailto:krishnagarwalprof@gmail.com">
                <Mail size={15} /> Email <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="image-frame">
              <Image
                src="/images/profile.jpg"
                alt="Krishna Agarwal outdoors in a dark shirt and tie"
                fill
                priority
                sizes="(max-width: 800px) 90vw, 42vw"
                className="hero-image"
              />
            </div>
            <div className="image-note">
              <span>01 — THE PERSON</span>
              <span><MapPin size={12} /> Bengaluru, India</span>
            </div>
            <div className="hero-image-caption">
              Curious by nature.<br />Learning by doing.
            </div>
          </div>
        </section>

        <div className="ticker">
          <div>
            ENTREPRENEURSHIP <i>✳</i> BUSINESS OPERATIONS <i>✳</i> STARTUPS <i>✳</i> LEARNING BY DOING <i>✳</i> ENTREPRENEURSHIP <i>✳</i> BUSINESS OPERATIONS <i>✳</i>
          </div>
        </div>

        <section className="section container" id="about">
          <SectionHeading index="01" title="A little about me" sub="THE PERSON BEHIND THE WORK" />
          <div className="about-grid">
            <p className="about-lead">
              I’m interested in what makes businesses work — from the first customer conversation to the systems that help a company grow.
            </p>
            <div className="about-body">
              <p>
                I’m Krishna, based in Bengaluru. I’m studying Digital Business & Entrepreneurship at IIM Bangalore alongside a B.Com at Mount Carmel College.
              </p>
              <p>
                My experiences so far have taken me through startup operations, community building, customer acquisition and a family retail business. I enjoy being close to the work, figuring things out and learning from people who build.
              </p>
              <p>I’m still early in the journey, and that’s exactly what makes it exciting.</p>
              <div className="education-list">
                <div>
                  <span>2026 — 2029</span>
                  <strong>IIM Bangalore</strong>
                  <small>BBA · Digital Business & Entrepreneurship</small>
                </div>
                <div>
                  <span>2025 — 2028</span>
                  <strong>Mount Carmel College</strong>
                  <small>Bachelor of Commerce</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="experience">
          <div className="container">
            <SectionHeading index="02" title="Where I’ve been learning" sub="EXPERIENCE & LEADERSHIP" />
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-date">JUL 2026 — AUG 2026</div>
                <div className="timeline-main">
                  <div className="timeline-top">
                    <div className="timeline-brand">
                      <Image
                        src="/images/argus.jpg"
                        alt="Argus logo"
                        width={34}
                        height={34}
                        className="timeline-logo"
                      />
                      <h3>Argus</h3>
                    </div>
                    <span>Founder’s Office Intern</span>
                  </div>
                  <p>Supported customer acquisition, planning and execution while working closely with the founding team.</p>
                  <small>Startup operations · Customer acquisition</small>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">FEB 2026 — JUL 2026</div>
                <div className="timeline-main">
                  <div className="timeline-top">
                    <div className="timeline-brand">
                      <Image
                        src="/images/saturn-labs.jpg"
                        alt="Saturn Labs logo"
                        width={34}
                        height={34}
                        className="timeline-logo"
                      />
                      <h3>Saturn Labs</h3>
                    </div>
                    <span>Community & Operations</span>
                  </div>
                  <p>Helped recruit businesses and participants for real-world data collection, supporting the programme’s expansion from India to the US, UK and Europe.</p>
                  <small>Data collection · Outreach · Community building</small>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">APR 2024 — MAY 2024</div>
                <div className="timeline-main">
                  <div className="timeline-top">
                    <h3>Masters Buddy</h3>
                    <span>Marketing Manager & Specialist</span>
                  </div>
                  <p>Conducted market research and competitive analysis, and prepared reports to support business decisions.</p>
                  <small>Market research · Reporting</small>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">2026 — PRESENT</div>
                <div className="timeline-main">
                  <div className="timeline-top">
                    <h3>Entrepreneurship Cell</h3>
                    <span>Head · Mount Carmel College</span>
                  </div>
                  <p>Contribute to ideation and planning for club initiatives and support on-ground event coordination.</p>
                  <small>Leadership · Event coordination</small>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">2026 — PRESENT</div>
                <div className="timeline-main">
                  <div className="timeline-top">
                    <h3>Toastmasters Association</h3>
                    <span>Secretary</span>
                  </div>
                  <p>Maintain club documentation and records, and participate in weekly meetings to strengthen communication and public speaking.</p>
                  <small>Communication · Club leadership</small>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionHeading index="03" title="Things I’ve worked on" sub="SELECTED PROJECTS & INITIATIVES" />
          <div className="section-intro">
            <p>A few experiences that have shaped how I think about customers, operations and building things.</p>
            <span>05 SELECTED STORIES</span>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        <section className="section section-muted" id="achievements">
          <div className="container">
            <SectionHeading index="04" title="A few milestones" sub="ACHIEVEMENTS" />
            <div
              className="achievement-grid"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
            >
              <article className="achievement-card featured-achievement">
                <div className="achievement-icon"><Trophy size={21} /></div>
                <span className="eyebrow">INTERNAL HACKATHON · 2026</span>
                <h3>Smart India Hackathon</h3>
                <p>Winner — Internal Smart India Hackathon organized by Mount Carmel University.</p>
                <Image
                  src="/images/sih-winner.jpg"
                  alt="Smart India Hackathon winner"
                  width={4096}
                  height={3072}
                  className="photo-slot"
                />
              </article>

              <article className="achievement-card featured-achievement">
                <div className="achievement-icon"><Mic2 size={21} /></div>
                <span className="eyebrow">LEADERSHIP & COMMUNICATION</span>
                <h3>Toastmasters Association</h3>
                <p>Serving as Secretary and actively participating in weekly club meetings.</p>
                <Image
                  src="/images/toastmasters.jpg"
                  alt="Toastmasters Association"
                  width={1167}
                  height={531}
                  className="photo-slot"
                />
              </article>
            </div>
          </div>
        </section>

        <section className="section container" id="beyond">
          <SectionHeading index="05" title="Outside the work" sub="BEYOND THE PORTFOLIO" />
          <div className="beyond-grid">
            <div className="beyond-note">
              <span className="eyebrow">CURIOSITIES & INTERESTS</span>
              <h3>There’s more to me than a list of roles.</h3>
              <p>Business and finance content, badminton, public speaking and the everyday observations that turn into new questions.</p>
            </div>
            <div className="interest-list">
              <div>
                <span>01</span>
                <strong>Business & finance</strong>
                <small>Ideas, companies and how markets move.</small>
              </div>
              <div>
                <span>02</span>
                <strong>Badminton</strong>
                <small>A sport that keeps me competitive.</small>
              </div>
              <div>
                <span>03</span>
                <strong>Public speaking</strong>
                <small>Learning to communicate with clarity.</small>
              </div>
              <div>
                <span>04</span>
                <strong>Content creation</strong>
                <small>Exploring and sharing what I learn.</small>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <span className="eyebrow">06 / GET IN TOUCH</span>
            <h2>Have something<br /><em>interesting in mind?</em></h2>
            <p>I’m always glad to connect with people who are curious about businesses, startups and new ideas.</p>
            <a className="button button-light" href="mailto:krishnagarwalprof@gmail.com">
              Say hello <ArrowUpRight size={16} />
            </a>
            <div className="contact-links">
              <a href="mailto:krishnagarwalprof@gmail.com"><Mail size={15} /> Email</a>
              <a href="https://www.linkedin.com/in/krishnagarwall/" target="_blank" rel="noreferrer">
                <Linkedin size={15} /> LinkedIn <ExternalLink size={12} />
              </a>
              <a href="https://www.instagram.com/krishnagarwa1/" target="_blank" rel="noreferrer">
                <Instagram size={15} /> Instagram <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <LinkBrand />
          <span>Designed with curiosity. © {new Date().getFullYear()} Krishna Agarwal.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

function LinkBrand() {
  return <a href="#home" className="wordmark">KA<span>.</span></a>;
}