import Link from 'next/link';
import type { GiftProduct } from '@/data/products';

export function ProductCard({ product }: { product: GiftProduct }) {
  const destination = product.affiliateUrl || product.productUrl;

  return (
    <article className="product-card">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <div className="product-card-copy">
        <span className="eyebrow">{product.retailer}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="product-card-meta">
        {product.price && <strong>{product.price}</strong>}
        {typeof product.rating === 'number' && (
          <span aria-label={`Rated ${product.rating} out of 5`}>
            ★ {product.rating.toFixed(1)}{product.reviewCount ? ` (${product.reviewCount.toLocaleString()})` : ''}
          </span>
        )}
        <Link href={destination} target="_blank" rel={`${product.affiliateUrl ? "sponsored nofollow " : ""}noopener`}>
          View product →
        </Link>
      </div>
    </article>
  );
}
