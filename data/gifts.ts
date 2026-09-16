export type GiftGuide = { slug: string; title: string; description: string; image: string; category: 'Christmas' | 'Evergreen'; };

export const giftGuides: GiftGuide[] = [
  ['christmas-gifts','Christmas Gifts','Thoughtful Christmas gift ideas for every kind of recipient.','christmas-gifts.jpg','Christmas'],
  ['christmas-gifts-for-her','Christmas Gifts for Her','Elegant and thoughtful Christmas gift inspiration for women.','christmas-gifts-for-her.jpg','Christmas'],
  ['christmas-gifts-for-him','Christmas Gifts for Him','Refined Christmas gift inspiration for men with different tastes and interests.','christmas-gifts-for-him.jpg','Christmas'],
  ['christmas-gifts-for-mom','Christmas Gifts for Mom','Warm, personal and useful Christmas gift ideas for Mom.','christmas-gifts-for-mom.jpg','Christmas'],
  ['christmas-gifts-for-dad','Christmas Gifts for Dad','Practical and premium Christmas gift inspiration for Dad.','christmas-gifts-for-dad.jpg','Christmas'],
  ['christmas-gifts-for-someone-who-has-everything','Christmas Gifts for Someone Who Has Everything','Unusual, memorable and conversation-starting Christmas gift ideas.','christmas-gifts-for-someone-who-has-everything.jpg','Christmas'],
  ['christmas-gifts-under-50','Christmas Gifts Under $50','Great-looking Christmas gift ideas for a modest budget.','christmas-gifts-under-50.jpg','Christmas'],
  ['unique-christmas-gifts','Unique Christmas Gifts','Unexpected Christmas gifts for people who are hard to shop for.','unique-christmas-gifts.jpg','Christmas'],
  ['personalized-christmas-gifts','Personalized Christmas Gifts','Personal touches that can make a Christmas gift feel more meaningful.','personalized-christmas-gift.jpg','Christmas'],
  ['gifts-for-women','Gifts for Women','A practical, stylish guide to choosing gifts women will genuinely enjoy.','gifts-for-women.jpg','Evergreen'],
  ['gifts-for-men','Gifts for Men','Gift inspiration for men across hobbies, lifestyle and everyday interests.','gifts-for-men.jpg','Evergreen'],
  ['gifts-for-wife','Gifts for Wife','Thoughtful gift inspiration for celebrating your wife.','gifts-for-wife.jpg','Evergreen'],
  ['gifts-for-husband','Gifts for Husband','Useful, personal and refined gift ideas for your husband.','gifts-for-husband.jpg','Evergreen'],
  ['gifts-for-girlfriend','Gifts for Girlfriend','Romantic and thoughtful gift inspiration for your girlfriend.','gifts-for-girlfriend.jpg','Evergreen'],
  ['gifts-for-boyfriend','Gifts for Boyfriend','Gift ideas for a boyfriend that feel personal without being predictable.','gifts-for-boyfriend.jpg','Evergreen'],
  ['gifts-for-sister','Gifts for Sister','Fun, useful and meaningful gifts for your sister.','gifts-for-sister.jpg','Evergreen'],
  ['gifts-for-brother','Gifts for Brother','Gift inspiration for brothers with different personalities and interests.','gifts-for-brother.jpg','Evergreen'],
  ['gifts-for-best-friend','Gifts for Best Friend','Warm and memorable gift ideas for your closest friend.','gifts-for-best-friend.jpg','Evergreen'],
  ['gifts-for-coworkers','Gifts for Coworkers','Tasteful gift ideas that work well for colleagues and office settings.','gifts-for-coworkers.jpg','Evergreen'],
  ['birthday-gift-ideas','Birthday Gift Ideas','A practical collection of birthday gift inspiration for different people and budgets.','birthday-gifts-ideas.jpg','Evergreen'],
  ['anniversary-gifts','Anniversary Gifts','Elegant anniversary gift inspiration for meaningful celebrations.','anniversary-gifts.jpg','Evergreen']
].map(([slug,title,description,image,category]) => ({slug,title,description,image,category: category as GiftGuide['category']}));

export function getGuide(slug: string) { return giftGuides.find((guide) => guide.slug === slug); }
