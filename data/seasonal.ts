export type SeasonalGuide = {
  slug: string;
  name: string;
  shortName: string;
  date: string;
  month: string;
  description: string;
  intro: string;
  accent: string;
  image?: string;
  priority: 'high' | 'medium';
  ideas: string[];
};

export const seasonalGuides: SeasonalGuide[] = [
  {
    slug: 'halloween', name: 'Halloween Gifts', shortName: 'Halloween', date: 'October 31, 2026', month: 'October',
    description: 'Fun, clever and memorable Halloween gift ideas for parties, hosts, friends and family.',
    intro: 'Halloween is a great opportunity for playful gifting. We focus on useful, shareable and personality-driven ideas rather than disposable novelty items.',
    accent: 'spooky', priority: 'high', ideas: ['Halloween host gifts', 'Halloween party gifts', 'Gifts for Halloween lovers', 'Halloween gifts for kids and adults'],
  },
  {
    slug: 'thanksgiving', name: 'Thanksgiving Gifts', shortName: 'Thanksgiving', date: 'November 26, 2026', month: 'November',
    description: 'Thoughtful Thanksgiving host, hostess and Friendsgiving gift ideas for the people welcoming you to the table.',
    intro: 'Thanksgiving gifting is often about appreciation. Our guides will focus on host-friendly gifts that feel thoughtful without adding work for the person hosting.',
    accent: 'harvest', priority: 'high', ideas: ['Thanksgiving host gifts', 'Friendsgiving gifts', 'Gifts for family', 'Thanksgiving table and entertaining gifts'],
  },
  {
    slug: 'christmas', name: 'Christmas Gifts', shortName: 'Christmas', date: 'December 25, 2026', month: 'December',
    description: 'Christmas gift ideas for everyone on your list, from thoughtful budget picks to memorable splurges.',
    intro: 'Christmas is our biggest seasonal gift-shopping hub, connecting recipient guides, budget guides, personalized ideas and last-minute shopping advice.',
    accent: 'evergreen', image: 'christmas-gifts.jpg', priority: 'high', ideas: ['Gifts for her and him', 'Gifts for family', 'Gifts under $50', 'Personalized and unique gifts'],
  },
  {
    slug: 'new-year', name: 'New Year Gifts', shortName: 'New Year', date: 'December 31, 2026', month: 'December',
    description: 'Fresh New Year gift ideas for hosts, friends, couples and anyone starting a new chapter.',
    intro: 'New Year gifting can be celebratory, practical or personal. We will focus on gifts that fit dinners, parties, fresh starts and thoughtful resolutions.',
    accent: 'midnight', priority: 'medium', ideas: ['New Year host gifts', 'Celebration gifts', 'Fresh-start gifts', 'Gifts for New Year gatherings'],
  },
  {
    slug: 'valentines-day', name: "Valentine's Day Gifts", shortName: "Valentine's Day", date: 'February 14, 2027', month: 'February',
    description: 'Romantic and thoughtful Valentine’s Day gifts for wives, husbands, girlfriends, boyfriends and couples.',
    intro: 'Valentine’s gifting works best when it feels personal. We will organize ideas by relationship, budget and the kind of memory the gift can create.',
    accent: 'rose', priority: 'high', ideas: ['Gifts for wife', 'Gifts for husband', 'Gifts for girlfriend', 'Gifts for boyfriend'],
  },
  {
    slug: 'mothers-day', name: "Mother's Day Gifts", shortName: "Mother's Day", date: 'May 9, 2027', month: 'May',
    description: 'Meaningful Mother’s Day gift ideas for moms, grandmothers, mothers-in-law and new moms.',
    intro: 'Mother’s Day is about appreciation and personal connection. We will build practical, sentimental and personalized gift guides for different kinds of moms.',
    accent: 'blossom', priority: 'high', ideas: ['Gifts for mom', 'Gifts for grandma', 'Gifts for mother-in-law', 'Gifts for new moms'],
  },
  {
    slug: 'fathers-day', name: "Father's Day Gifts", shortName: "Father's Day", date: 'June 20, 2027', month: 'June',
    description: 'Useful and memorable Father’s Day gifts for dads, grandfathers, husbands and new fathers.',
    intro: 'The best Father’s Day gifts balance usefulness with personality. We will organize ideas around hobbies, lifestyles, budgets and relationships.',
    accent: 'blue', priority: 'high', ideas: ['Gifts for dad', 'Gifts for grandpa', 'Gifts for husband', 'Gifts for new dads'],
  },
];

export function getSeasonalGuide(slug: string) {
  return seasonalGuides.find((guide) => guide.slug === slug);
}
