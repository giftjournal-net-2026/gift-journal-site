import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How GiftJournal handles affiliate relationships and commercial recommendations.',
  alternates: { canonical: '/affiliate-disclosure' },
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="article">
      <div className="content-narrow">
        <span className="eyebrow">Transparency</span>
        <h1>Affiliate Disclosure</h1>
        <p className="lead">GiftJournal may earn a commission when you purchase a product through a qualifying link on our site.</p>
        <section>
          <h2>How recommendations work</h2>
          <p>We aim to recommend products because they fit the guide and the recipient, not simply because a retailer offers a commission. Commercial product information should be checked against the retailer before publication.</p>
        </section>
        <section>
          <h2>What can change</h2>
          <p>Prices, availability, delivery dates, promotions and retailer policies can change. Always confirm the final details on the retailer&apos;s website before purchasing.</p>
        </section>
        <section>
          <h2>Our approach to claims</h2>
          <p>We do not publish fabricated prices, ratings, reviews, availability or product experiences. Where a product has not been independently tested by GiftJournal, we will not imply that it has been.</p>
        </section>
      </div>
    </article>
  );
}
