import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { giftGuides, getGuide } from '@/data/gifts';
import { getGuideContent } from '@/data/guideContent';
import { GiftCard } from '@/components/GiftCard';
import { ProductRecommendations } from '@/components/affiliate/ProductRecommendations';
import { getProductsForGuide } from '@/data/products';

export function generateStaticParams() {
  return giftGuides.map((g) => ({ slug: g.slug.split('/') }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const g = getGuide((await params).slug.join('/'));
  if (!g) return {};

  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: `/${g.slug}` },
    openGraph: {
      title: g.title,
      description: g.description,
      images: [{ url: `/images/${g.image}`, width: 1920, height: 1080, alt: g.title }],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const g = getGuide((await params).slug.join('/'));
  if (!g) notFound();

  const content = getGuideContent(g.slug);
  const products = getProductsForGuide(g.slug);
  const related = giftGuides
    .filter((x) => x.slug !== g.slug && x.category === g.category)
    .slice(0, 4);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: g.category, href: g.category === 'Christmas' ? '/christmas-gifts' : '/gifts-for-women' },
    { label: g.title, href: `/${g.slug}` },
  ];

  return (
    <article>
      <nav className="breadcrumbs container" aria-label="Breadcrumb">
        {breadcrumbs.map((item, index) => (
          <span key={item.href}>
            {index > 0 && <span aria-hidden="true"> / </span>}
            {index === breadcrumbs.length - 1 ? (
              <span>{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </span>
        ))}
      </nav>

      <section className="guide-hero">
        <div className="container">
          <div className="guide-hero-image">
            <Image
              src={`/images/${g.image}`}
              alt={g.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1180px"
            />
          </div>
          <div className="guide-overlay">
            <span className="eyebrow">{g.category} Gift Guide</span>
            <h1>{g.title}</h1>
            <p>{g.description}</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-narrow">
          <p className="lead">{content.intro}</p>

          <div className="quick-nav">
            <strong>On this guide</strong>
            <div>
              {content.sections.map((section) => (
                <a key={section.heading} href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  {section.heading}
                </a>
              ))}
              <a href="#faq">FAQs</a>
            </div>
          </div>

          {content.sections.map((section) => (
            <section key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          ))}

          <ProductRecommendations products={products} heading={`Recommended gifts for ${g.title.replace(/^Gifts? for /, '').replace(/^Christmas Gifts for /, '')}`} />

          <section className="affiliate-ready">
            <span className="eyebrow">Shopping note</span>
            <h2>When you are ready to compare products</h2>
            <p>
              GiftJournal will add product recommendations only when the product, retailer,
              destination link and important commercial details can be verified. Prices and
              availability can change, so always confirm the final details at the retailer before buying.
            </p>
          </section>

          <section id="faq" className="faq">
            <span className="eyebrow">Questions</span>
            <h2>Frequently asked questions</h2>
            {content.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="disclosure">
            GiftJournal may earn a commission from qualifying purchases. Commercial product
            recommendations are added only after product, merchant and link verification.
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Keep exploring</span>
              <h2>Related gift guides</h2>
            </div>
            <div className="guide-grid">
              {related.map((x) => <GiftCard key={x.slug} guide={x} />)}
            </div>
          </div>
        </section>
      )}

      <div className="container back">
        <Link href="/">← Back to GiftJournal</Link>
      </div>
    </article>
  );
}
