import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Krishna Agarwal — Business, Startups & Entrepreneurship',
  description: 'Exploring business. Understanding startups. Building towards something bigger. The portfolio of Krishna Agarwal.',
  metadataBase: new URL('https://example.com'),
  openGraph: { title: 'Krishna Agarwal', description: 'Exploring business. Understanding startups. Building towards something bigger.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
