import Link from 'next/link';
import type { Metadata } from 'next';
import { seasonalGuides } from '@/data/seasonal';

export const metadata: Metadata = {
  title: 'Seasonal Gift Guides | GiftJournal',
  description: 'GiftJournal seasonal gift guides for Halloween, Thanksgiving, Christmas, Valentine’s Day, Mother’s Day and Father’s Day.',
  alternates: { canonical: '/seasonal' },
};

export default function SeasonalIndex() {
  return (
    <main>
      <section className="seasonal-intro">
        <div className="container">
          <span className="eyebrow">Shop the moment</span>
          <h1>Seasonal gift guides</h1>
          <p>Timely gift inspiration for the holidays and celebrations people actually shop for.</p>
        </div>
      </section>
      <section className="section">
        <div className="container seasonal-grid">
          {seasonalGuides.map((guide) => (
            <Link className={`season-card season-${guide.accent}`} href={`/seasonal/${guide.slug}`} key={guide.slug}>
              <div className="season-card-top"><span>{guide.month}</span><span>{guide.date}</span></div>
              <div><span className="eyebrow">{guide.priority === 'high' ? 'Featured season' : 'Seasonal guide'}</span><h2>{guide.name}</h2><p>{guide.description}</p></div>
              <strong>Explore guide →</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
