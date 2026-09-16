import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getSeasonalGuide, seasonalGuides } from '@/data/seasonal';

export function generateStaticParams() {
  return seasonalGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const guide = getSeasonalGuide((await params).slug);
  if (!guide) return {};
  return { title: `${guide.name} | GiftJournal`, description: guide.description, alternates: { canonical: `/seasonal/${guide.slug}` } };
}

export default async function SeasonalPage({ params }: { params: Promise<{ slug: string }> }) {
  const guide = getSeasonalGuide((await params).slug);
  if (!guide) return null;
  const related = seasonalGuides.filter((item) => item.slug !== guide.slug).slice(0, 3);

  return (
    <main>
      <div className="container breadcrumbs"><Link href="/">Home</Link> / <Link href="/seasonal">Seasonal</Link> / <span>{guide.shortName}</span></div>
      <section className={`seasonal-hero season-${guide.accent}`}>
        <div className="container seasonal-hero-grid">
          <div>
            <span className="eyebrow">{guide.date}</span>
            <h1>{guide.name}</h1>
            <p>{guide.description}</p>
          </div>
          {guide.image ? <div className="seasonal-hero-image"><Image src={`/images/${guide.image}`} alt={guide.name} fill priority sizes="(max-width: 850px) 100vw, 50vw" /></div> : <div className="seasonal-art" aria-hidden="true"><span>{guide.shortName}</span></div>}
        </div>
      </section>
      <section className="content-section"><div className="content-narrow">
        <p className="lead">{guide.intro}</p>
        <h2>What to shop for</h2>
        <ul>{guide.ideas.map((idea) => <li key={idea}>{idea}</li>)}</ul>
        <div className="affiliate-ready"><span className="eyebrow">Coming soon</span><h2>Curated recommendations</h2><p>Verified product picks, retailer links and budget-friendly options will be added to this guide as each seasonal shopping window approaches.</p></div>
        <div className="disclosure">GiftJournal may earn a commission from qualifying purchases. Commercial recommendations are added only after product, merchant and link verification.</div>
      </div></section>
      <section className="section soft"><div className="container"><div className="section-head"><span className="eyebrow">Plan ahead</span><h2>More seasonal guides</h2></div><div className="seasonal-mini-grid">{related.map((item) => <Link href={`/seasonal/${item.slug}`} key={item.slug}><strong>{item.name}</strong><span>{item.date}</span></Link>)}</div></div></section>
    </main>
  );
}
