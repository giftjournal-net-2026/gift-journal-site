/**
 * Commercial content roadmap. This is planning data, not published product claims.
 * Product recommendations remain empty until retailer/program details are verified.
 */
export type CommercialBrief = {
  slug: string;
  title: string;
  intent: 'commercial' | 'transactional' | 'seasonal-commercial';
  priority: 'now' | 'next' | 'later';
  season?: string;
  audience: string;
  productSlots: number;
  suggestedAngles: string[];
};

export const commercialBriefs: CommercialBrief[] = [
  { slug:'best-halloween-gifts', title:'Best Halloween Gifts', intent:'seasonal-commercial', priority:'now', season:'Halloween', audience:'US shoppers looking for Halloween gifts, hosts and party-friendly presents', productSlots:10, suggestedAngles:['Best overall','Host gifts','Gifts under $25','Fun gifts for adults'] },
  { slug:'thanksgiving-host-gifts', title:'Best Thanksgiving Host Gifts', intent:'seasonal-commercial', priority:'now', season:'Thanksgiving', audience:'US shoppers visiting or hosting Thanksgiving', productSlots:10, suggestedAngles:['Best overall','Useful host gifts','Gifts under $25','Last-minute ideas'] },
  { slug:'black-friday-gift-ideas', title:'Black Friday Gift Ideas', intent:'transactional', priority:'now', season:'Black Friday', audience:'US shoppers actively comparing holiday purchases', productSlots:12, suggestedAngles:['Best deals to watch','Gifts under $50','Popular categories','Early-buy opportunities'] },
  { slug:'best-christmas-gifts-for-women', title:'Best Christmas Gifts for Women', intent:'commercial', priority:'now', season:'Christmas', audience:'US shoppers buying Christmas gifts for women', productSlots:12, suggestedAngles:['Best overall','Personalized','Under $50','Luxury','Practical'] },
  { slug:'best-christmas-gifts-for-men', title:'Best Christmas Gifts for Men', intent:'commercial', priority:'now', season:'Christmas', audience:'US shoppers buying Christmas gifts for men', productSlots:12, suggestedAngles:['Best overall','Tech','Hobby','Under $50','Premium'] },
  { slug:'christmas-gifts-under-50', title:'Best Christmas Gifts Under $50', intent:'commercial', priority:'now', season:'Christmas', audience:'Budget-conscious holiday shoppers', productSlots:15, suggestedAngles:['Under $25','$25–$50','Best value','Stocking-friendly'] },
  { slug:'last-minute-christmas-gifts', title:'Last-Minute Christmas Gifts', intent:'transactional', priority:'now', season:'Christmas', audience:'Shoppers with urgent delivery or pickup needs', productSlots:10, suggestedAngles:['Fast delivery','Digital gifts','Pickup-friendly','Easy-to-wrap'] },
  { slug:'new-year-host-gifts', title:'New Year Host Gifts', intent:'seasonal-commercial', priority:'next', season:'New Year', audience:'US shoppers attending New Year celebrations', productSlots:8, suggestedAngles:['Host gifts','Party-friendly','Under $30','Useful after the celebration'] },
  { slug:'best-valentines-gifts-for-her', title:'Best Valentine’s Day Gifts for Her', intent:'seasonal-commercial', priority:'next', season:'Valentine’s Day', audience:'Shoppers buying for wives, girlfriends and partners', productSlots:12, suggestedAngles:['Romantic','Personalized','Under $50','Luxury','Experience-inspired'] },
  { slug:'best-mothers-day-gifts', title:'Best Mother’s Day Gifts', intent:'seasonal-commercial', priority:'next', season:'Mother’s Day', audience:'Shoppers buying for moms, grandmothers and mother figures', productSlots:12, suggestedAngles:['Best overall','Personalized','Self-care','Under $50','Premium'] },
];

export function getCommercialBrief(slug: string) {
  return commercialBriefs.find((brief) => brief.slug === slug);
}
