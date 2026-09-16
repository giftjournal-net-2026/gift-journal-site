import type { GiftProduct } from '@/data/products';
import { ProductCard } from './ProductCard';

export function ProductRecommendations({
  products,
  heading = 'Our gift picks',
  intro = 'We compare products only after checking the retailer, product details and destination link.',
}: {
  products: GiftProduct[];
  heading?: string;
  intro?: string;
}) {
  if (!products.length) return null;

  return (
    <section className="product-section" aria-labelledby="product-picks-heading">
      <span className="eyebrow">Editor’s picks</span>
      <h2 id="product-picks-heading">{heading}</h2>
      <p>{intro}</p>
      <div className="product-grid">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      <p className="product-disclosure">
        GiftJournal may earn a commission when you buy through qualifying links. Prices and availability can change;
        check the retailer before purchasing.
      </p>
    </section>
  );
}
