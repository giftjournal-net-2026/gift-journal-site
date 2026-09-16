/**
 * Verified product data for commercial GiftJournal content.
 *
 * IMPORTANT:
 * - productUrl values are normal retailer URLs until GiftJournal has an approved
 *   affiliate relationship and tracking IDs.
 * - Prices/reviews are snapshots checked during editorial research and can change.
 * - Never invent affiliate URLs, prices, ratings, review counts, or availability.
 */
export type GiftProduct = {
  id: string;
  name: string;
  description: string;
  image?: string;
  retailer: string;
  productUrl: string;
  affiliateUrl?: string;
  price?: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  bestFor?: string;
  priceCheckedOn?: string;
};

export const giftProducts: GiftProduct[] = [
  {
    id: 'ug-garden-ghosts',
    name: 'Garden Ghosts — Set of 3',
    description: 'Hand-carved natural-stone ghost sculptures made by independent makers in New Hampshire.',
    retailer: 'Uncommon Goods',
    productUrl: 'https://www.uncommongoods.com/product/garden-ghosts-set-of-3',
    price: '$48',
    rating: 4.78,
    reviewCount: 40,
    badge: 'Best for hosts',
    bestFor: 'best-halloween-gifts-2026',
    priceCheckedOn: '2026-09-15',
  },
  {
    id: 'ug-horror-movies-chart',
    name: '100 Horror Movies Scratch-Off Chart',
    description: 'An interactive poster for movie fans who want to work through a century of horror favorites.',
    retailer: 'Uncommon Goods',
    productUrl: 'https://www.uncommongoods.com/product/100-horror-movies-scratch-off-chart',
    price: '$25',
    rating: 4.71,
    reviewCount: 7,
    badge: 'Best for movie fans',
    bestFor: 'best-halloween-gifts-2026',
    priceCheckedOn: '2026-09-15',
  },
  {
    id: 'ug-cocktails-crypt',
    name: 'Cocktails from the Crypt: Horror Film Libations',
    description: 'A horror-movie cocktail book with 60 themed recipes, film pairings, trivia and mocktail options.',
    retailer: 'Uncommon Goods',
    productUrl: 'https://www.uncommongoods.com/product/cocktails-from-the-crypt-horror-film-libations',
    price: '$24',
    rating: 5,
    reviewCount: 3,
    badge: 'Best for adults',
    bestFor: 'best-halloween-gifts-2026',
    priceCheckedOn: '2026-09-15',
  },
  {
    id: 'ug-death-for-dinner',
    name: 'Death for Dinner Horror Movie Cookbook',
    description: 'A horror-inspired cookbook with 60 plant-based comfort-food recipes and movie-themed twists.',
    retailer: 'Uncommon Goods',
    productUrl: 'https://www.uncommongoods.com/product/death-for-dinner-horror-movie-cookbook',
    price: '$25',
    badge: 'Best for foodies',
    bestFor: 'best-halloween-gifts-2026',
    priceCheckedOn: '2026-09-15',
  },
  {
    id: 'ug-frights-at-night',
    name: 'Frights to Tell at Night Scary Story Collection',
    description: 'Two illustrated horror anthologies for brave young readers ages 8–12, with different fright levels.',
    retailer: 'Uncommon Goods',
    productUrl: 'https://www.uncommongoods.com/product/frights-to-tell-at-night-scary-story-collection',
    price: '$25',
    badge: 'Best for young readers',
    bestFor: 'best-halloween-gifts-2026',
    priceCheckedOn: '2026-09-15',
  },
  {
    id: 'ug-bat-on-branch',
    name: 'Bat on a Branch',
    description: 'A handcrafted steel bat sculpture designed as a distinctive outdoor or garden decoration.',
    retailer: 'Uncommon Goods',
    productUrl: 'https://www.uncommongoods.com/product/bat-on-a-branch',
    price: '$50',
    rating: 4.9,
    reviewCount: 130,
    badge: 'Most distinctive',
    bestFor: 'best-halloween-gifts-2026',
    priceCheckedOn: '2026-09-15',
  },
  {
    id: 'ug-tarot-necklace',
    name: 'Tiny Tarot Deck Necklace',
    description: 'A brass necklace containing 22 miniature Major Arcana cards, designed for tarot fans.',
    retailer: 'Uncommon Goods',
    productUrl: 'https://www.uncommongoods.com/product/tiny-tarot-deck-necklace',
    price: '$60',
    rating: 4.62,
    reviewCount: 77,
    badge: 'Best for tarot fans',
    bestFor: 'best-halloween-gifts-2026',
    priceCheckedOn: '2026-09-15',
  },
  {
    id: 'ug-scare-mail',
    name: 'Scare Mail: 24 Letter Horror Subscription',
    description: 'A year-long horror mystery delivered through 24 handcrafted letters and eerie extras.',
    retailer: 'Uncommon Goods',
    productUrl: 'https://www.uncommongoods.com/product/scare-mail-24-letter-horror-subscription',
    price: '$125',
    badge: 'Best splurge',
    bestFor: 'best-halloween-gifts-2026',
    priceCheckedOn: '2026-09-15',
  },
];

export function getProductsForGuide(slug: string): GiftProduct[] {
  return giftProducts.filter((product) => product.bestFor === slug);
}
