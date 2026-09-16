export type GuideContent = {
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
};

const evergreen: Record<string, GuideContent> = {
  'gifts-for-women': {
    intro: 'The best gifts for women feel considered rather than complicated. Start with her routines, interests and the little luxuries she enjoys, then narrow the search to something useful, beautiful or genuinely personal.',
    sections: [
      { heading: 'Start with her everyday life', paragraphs: ['Think about what she reaches for every day, how she spends her free time and what she has mentioned wanting to try. Those clues usually produce better ideas than shopping from a generic list.'] },
      { heading: 'Gift directions worth exploring', paragraphs: ['Self-care, style, home, hobbies, food, travel and practical upgrades can all make strong starting points. Choose the direction that best matches her personality and current interests.'], bullets: ['Something that improves an everyday routine', 'A small luxury she would enjoy but may not buy herself', 'A hobby-related gift that shows you know what she likes', 'A personalized or sentimental option when the relationship calls for it'] },
      { heading: 'Before you buy', paragraphs: ['Check dimensions, materials, compatibility, delivery timing, return terms and the retailer’s current product information before purchasing.'] }
    ],
    faqs: [
      { question: 'What makes a good gift for a woman?', answer: 'A good gift reflects the recipient rather than a stereotype. Her interests, habits, style and the reason you are giving the gift are the most useful clues.' },
      { question: 'How do I choose when I do not know her preferences well?', answer: 'Favor broadly useful, well-designed items or experiences and avoid highly personal sizing, fragrance or style choices unless you know what she prefers.' }
    ]
  },
  'gifts-for-men': {
    intro: 'Great gifts for men do not have to be complicated. The strongest choices usually connect to a hobby, routine, personal interest or a small upgrade he will actually use.',
    sections: [
      { heading: 'Shop around his interests', paragraphs: ['Start with the activities he already enjoys: cooking, fitness, travel, technology, outdoors, coffee, style, reading or relaxing at home.'] },
      { heading: 'Useful can still feel special', paragraphs: ['Look for thoughtful upgrades rather than novelty for novelty’s sake. A well-chosen everyday item can feel more personal when it solves a real problem or fits naturally into his routine.'], bullets: ['Hobby and interest-based gifts', 'Everyday upgrades', 'Travel and organization ideas', 'Relaxation and home gifts'] },
      { heading: 'Keep the final choice practical', paragraphs: ['Confirm compatibility, sizing, materials, delivery timing and return policies before ordering.'] }
    ],
    faqs: [
      { question: 'What are safe gift categories for men?', answer: 'Hobby-related gifts, useful everyday upgrades, travel accessories, home comforts and items connected to an established interest are reliable starting points.' },
      { question: 'How can I make a practical gift feel more personal?', answer: 'Choose something that clearly connects to his routine or interest, and consider presentation or a short handwritten note.' }
    ]
  },
  'gifts-for-wife': {
    intro: 'A memorable gift for your wife is usually less about price and more about showing that you notice her. Think about her current interests, routines and the moments you share together.',
    sections: [
      { heading: 'Think about what she would choose for herself', paragraphs: ['Notice what she has been enjoying lately and what she keeps postponing. A gift can be a useful upgrade, a personal treat or something that creates time together.'] },
      { heading: 'Choose meaning over pressure', paragraphs: ['For anniversaries and milestones, a sentimental or experience-led idea can work especially well. For everyday occasions, useful little luxuries may feel more natural.'] },
      { heading: 'A simple final check', paragraphs: ['Ask yourself whether the gift feels connected to her, rather than simply connected to the occasion. That final test can eliminate many generic options.'] }
    ],
    faqs: [
      { question: 'What is a thoughtful gift for a wife?', answer: 'Look for something that reflects her interests, a shared memory, a current need or a small luxury she would genuinely enjoy.' },
      { question: 'Should a gift for a wife be romantic?', answer: 'It can be, but it does not have to be. Thoughtfulness comes from relevance and attention to her preferences.' }
    ]
  },
  'gifts-for-husband': {
    intro: 'The easiest way to choose a gift for your husband is to start with what he actually does, not with a generic list of gifts for men.',
    sections: [
      { heading: 'Use his routines as clues', paragraphs: ['Look at his hobbies, weekend habits, work setup, travel routines and the things he repeatedly uses. A thoughtful upgrade can be more successful than a novelty item.'] },
      { heading: 'Make it personal without overthinking it', paragraphs: ['A gift connected to a shared experience or a long-standing interest can feel meaningful without being overly sentimental.'] },
      { heading: 'Check the practical details', paragraphs: ['For electronics, accessories and equipment, verify compatibility. For clothing and wearable items, check sizing and return terms.'] }
    ],
    faqs: [
      { question: 'What makes a good husband gift?', answer: 'Choose something that connects to his interests, routines or a shared memory and that he is likely to use or enjoy.' },
      { question: 'What if he buys everything himself?', answer: 'Consider an experience, a personalized item or a thoughtful upgrade that he would appreciate but has not prioritized.' }
    ]
  },
  'gifts-for-girlfriend': {
    intro: 'Gifts for a girlfriend are strongest when they feel specific to the relationship. Use what you know about her interests, style, routines and shared memories as your starting point.',
    sections: [
      { heading: 'Notice the small clues', paragraphs: ['Pay attention to things she has admired, mentioned, saved or enjoyed recently. Those details can turn a broad search into a much more personal choice.'] },
      { heading: 'Match the gift to the relationship', paragraphs: ['A new relationship may call for something light and thoughtful, while a long-term relationship can support a more sentimental or personalized choice.'] },
      { heading: 'Presentation matters', paragraphs: ['A simple gift can feel much more considered with thoughtful wrapping and a short note that explains why you chose it.'] }
    ],
    faqs: [
      { question: 'What is a thoughtful gift for a girlfriend?', answer: 'Choose something connected to her interests, a shared memory or a small luxury that suits her personality.' },
      { question: 'How do I avoid giving a generic romantic gift?', answer: 'Use specific clues about her preferences and choose the category before choosing the product.' }
    ]
  },
  'gifts-for-boyfriend': {
    intro: 'A good gift for a boyfriend should feel like it was chosen for him. Start with his hobbies, routines and interests, then look for something useful, enjoyable or memorable.',
    sections: [
      { heading: 'Start with what he already enjoys', paragraphs: ['Gaming, fitness, cooking, travel, music, technology, coffee, outdoors and personal style can all provide useful directions when they match his real interests.'] },
      { heading: 'Choose an upgrade or a new experience', paragraphs: ['If he already owns the basics, look for an improved version of something he uses or choose an experience you can enjoy together.'] },
      { heading: 'Avoid guessing on technical details', paragraphs: ['For technology and equipment, verify model compatibility and current specifications before purchasing.'] }
    ],
    faqs: [
      { question: 'What makes a boyfriend gift feel personal?', answer: 'A strong gift reflects something he actually likes or a memory you share rather than relying only on a generic romantic theme.' },
      { question: 'What if he is difficult to shop for?', answer: 'Use his existing hobbies and routines as clues, or choose a shared experience when products are hard to narrow down.' }
    ]
  },
  'gifts-for-sister': {
    intro: 'Whether your sister loves beauty, books, travel, home comforts or a particular hobby, the best gift starts with what makes her different from everyone else.',
    sections: [
      { heading: 'Shop for her personality', paragraphs: ['Think about her current interests and the things she reaches for most. A gift that fits her life will usually beat something chosen only because it is popular.'] },
      { heading: 'Consider useful treats', paragraphs: ['Small upgrades, personalized details and everyday luxuries can make excellent sister gifts without needing to be extravagant.'] },
      { heading: 'When in doubt, make it shared', paragraphs: ['An activity, meal or experience can be a memorable option when you want the gift itself to create another good memory.'] }
    ],
    faqs: [
      { question: 'What is a thoughtful gift for a sister?', answer: 'Choose something that matches her interests, daily routines or a shared memory, with personalization when it feels natural.' },
      { question: 'Are experience gifts good for sisters?', answer: 'Yes. Shared experiences can be especially meaningful when you want the gift to become a memory rather than another object.' }
    ]
  },
  'gifts-for-brother': {
    intro: 'The best gifts for a brother are usually grounded in what he actually enjoys. Hobbies, practical routines and long-running interests are your best clues.',
    sections: [
      { heading: 'Follow the hobby', paragraphs: ['Start with the activities he spends time and money on already. A carefully chosen accessory or upgrade can be more useful than an unrelated novelty.'] },
      { heading: 'Useful does not mean boring', paragraphs: ['A well-designed everyday item can be a great gift when it solves a small problem or improves something he already does.'] },
      { heading: 'Keep compatibility in mind', paragraphs: ['For equipment, electronics and accessories, confirm models, sizes and compatibility before buying.'] }
    ],
    faqs: [
      { question: 'What should I buy for a brother who has everything?', answer: 'Consider an experience, a personalized item or an upgrade connected to an established hobby or routine.' },
      { question: 'How can I choose a gift without knowing his style?', answer: 'Focus on function and established interests rather than highly style-dependent items.' }
    ]
  },
  'gifts-for-best-friend': {
    intro: 'A great best-friend gift can be funny, useful, sentimental or simply something that says you know them well. Shared memories and inside knowledge are your advantage.',
    sections: [
      { heading: 'Use your shared history', paragraphs: ['Think about trips, jokes, favorite places, hobbies and conversations you have had. These details can lead to ideas that feel impossible to make generic.'] },
      { heading: 'Pick the feeling first', paragraphs: ['Decide whether you want the gift to feel useful, playful, nostalgic, relaxing or celebratory. Then choose the category and product.'] },
      { heading: 'Do not underestimate a small gesture', paragraphs: ['A modest gift with a personal note can be more memorable than an expensive item with no connection to the friendship.'] }
    ],
    faqs: [
      { question: 'What makes a best-friend gift special?', answer: 'Personal context is the key. Shared memories, inside jokes and known interests can make even a simple gift feel unique.' },
      { question: 'Should best-friend gifts be expensive?', answer: 'No. Relevance and thoughtfulness matter more than a high price.' }
    ]
  },
  'gifts-for-coworkers': {
    intro: 'Coworker gifts work best when they are useful, tasteful and appropriate for the relationship and workplace. When in doubt, choose broadly appealing items rather than highly personal ones.',
    sections: [
      { heading: 'Keep workplace context in mind', paragraphs: ['Consider company culture, your relationship with the recipient and any workplace gift policies before choosing a gift.'] },
      { heading: 'Useful and easy to appreciate', paragraphs: ['Desk accessories, coffee and tea items, food gifts, notebooks and small home or lifestyle items can provide useful starting points.'] },
      { heading: 'For group gifting', paragraphs: ['Set a clear budget and choose something easy to distribute or enjoy. Avoid assumptions about personal tastes, sizes or sensitive preferences.'] }
    ],
    faqs: [
      { question: 'What is a safe coworker gift?', answer: 'Useful, tasteful and broadly appealing items are generally easier choices than highly personal gifts.' },
      { question: 'Should I check company policy?', answer: 'Yes. Some workplaces have limits or rules around gifts, especially between managers and direct reports.' }
    ]
  },
  'birthday-gift-ideas': {
    intro: 'Birthday shopping becomes easier when you start with the person, their interests and your budget. Use the occasion as a filter, not as the only source of inspiration.',
    sections: [
      { heading: 'Choose the recipient before the product', paragraphs: ['A birthday gift for a parent, partner, friend or coworker will naturally have different expectations. Define the relationship first.'] },
      { heading: 'Use a budget deliberately', paragraphs: ['Set your comfortable budget before browsing. Then compare ideas within that range rather than letting individual products reset your expectations.'] },
      { heading: 'Make the moment count', paragraphs: ['Presentation, timing and a personal message can make an ordinary gift feel much more intentional.'] }
    ],
    faqs: [
      { question: 'How do I choose a birthday gift?', answer: 'Start with the recipient, then narrow by interests, relationship, occasion and budget before comparing specific products.' },
      { question: 'What if I need a last-minute birthday gift?', answer: 'Prioritize options with clear delivery information or readily available local pickup, and verify availability before purchasing.' }
    ]
  },
  'anniversary-gifts': {
    intro: 'Anniversary gifts are an opportunity to celebrate the relationship itself. Shared memories, meaningful milestones and things you can enjoy together are useful starting points.',
    sections: [
      { heading: 'Start with your story', paragraphs: ['Think about an important place, date, trip, hobby or moment you share. Personal context can guide the entire gift search.'] },
      { heading: 'Choose the right level of sentiment', paragraphs: ['Some couples prefer practical gifts, while others enjoy keepsakes or experiences. Match the gift to your relationship rather than following a rule blindly.'] },
      { heading: 'Plan the presentation', paragraphs: ['A handwritten note, thoughtful wrapping or a planned moment around the gift can add meaning without adding unnecessary cost.'] }
    ],
    faqs: [
      { question: 'What makes a good anniversary gift?', answer: 'A good anniversary gift connects to your relationship, shared memories, interests or the experience you want to create together.' },
      { question: 'Are experience gifts good anniversary gifts?', answer: 'They can be excellent when the experience matches both people and gives you time to enjoy something together.' }
    ]
  }
};

const christmas: Record<string, GuideContent> = {
  'christmas-gifts': {
    intro: 'Christmas shopping is easier when you organize ideas by recipient, budget and the kind of gift you want to give. This guide helps you narrow the search before comparing products.',
    sections: [
      { heading: 'Build your Christmas list first', paragraphs: ['Group recipients by relationship and note a comfortable budget for each. This prevents one difficult-to-shop-for person from taking over the entire shopping plan.'] },
      { heading: 'Choose a gift direction', paragraphs: ['Use interests, routines, experiences and useful upgrades as your starting points. For larger lists, repeatable gift categories can also save time.'] },
      { heading: 'Check the details before ordering', paragraphs: ['Christmas delivery deadlines can change quickly. Verify current delivery dates, stock, returns and the seller’s information before purchasing.'] }
    ],
    faqs: [
      { question: 'How early should I shop for Christmas gifts?', answer: 'Earlier is generally safer, especially for personalized items, international delivery or gifts that may sell out. Always check the current delivery estimate.' },
      { question: 'How do I shop for many people efficiently?', answer: 'Create a recipient list with budgets, choose a few gift categories and compare products within each category instead of browsing without a plan.' }
    ]
  },
  'christmas-gifts-for-her': {
    intro: 'Christmas gifts for her should begin with the individual woman you are shopping for. Her interests, routines and personal style are more useful than a generic holiday checklist.',
    sections: [
      { heading: 'Think beyond generic Christmas themes', paragraphs: ['Start with hobbies, home life, self-care, style, travel, food or other interests she already enjoys.'] },
      { heading: 'Choose a gift she will use after Christmas', paragraphs: ['The most useful choices often fit naturally into her routine rather than being tied only to the holiday.'] },
      { heading: 'Check timing and returns', paragraphs: ['Verify delivery estimates, personalization lead times and return policies before placing an order.'] }
    ],
    faqs: [
      { question: 'What makes a Christmas gift for her thoughtful?', answer: 'Relevance is the strongest signal. Choose something connected to her interests, routine, style or a shared memory.' },
      { question: 'What if she is difficult to shop for?', answer: 'Look for a small luxury, a hobby-related gift, an experience or a personalized option based on something you know she values.' }
    ]
  },
  'christmas-gifts-for-him': {
    intro: 'Christmas gifts for him become easier when you shop around real interests and routines. Hobbies, useful upgrades and shared experiences can all provide strong directions.',
    sections: [
      { heading: 'Start with his interests', paragraphs: ['Consider hobbies, fitness, cooking, travel, technology, outdoors, music, coffee or other established interests.'] },
      { heading: 'Prefer useful upgrades', paragraphs: ['If he already owns the basics, look for a better version of something he uses or an accessory that fits his existing routine.'] },
      { heading: 'Avoid technical guesses', paragraphs: ['For electronics and equipment, verify model compatibility, current specifications and return terms.'] }
    ],
    faqs: [
      { question: 'What are good Christmas gift categories for men?', answer: 'Hobby-related gifts, everyday upgrades, travel accessories, home comforts and experiences are useful starting categories.' },
      { question: 'What if he has everything?', answer: 'Consider personalization, an experience or a thoughtful upgrade connected to something he already enjoys.' }
    ]
  },
  'christmas-gifts-for-mom': {
    intro: 'Christmas gifts for Mom can be practical, sentimental, relaxing or simply fun. The strongest choices usually reflect what she enjoys now rather than only her role in the family.',
    sections: [
      { heading: 'Shop for Mom as a person', paragraphs: ['Think about her hobbies, routines, favorite ways to relax and things she has been interested in lately.'] },
      { heading: 'Personal beats predictable', paragraphs: ['A personalized detail, shared memory or gift connected to an actual interest can make a familiar category feel more meaningful.'] },
      { heading: 'Give yourself time', paragraphs: ['Personalized gifts and items with seasonal delivery demand may need extra lead time, so check the current delivery information before ordering.'] }
    ],
    faqs: [
      { question: 'What makes a Christmas gift for Mom thoughtful?', answer: 'Choose something connected to her interests, routines, memories or a small luxury she would genuinely enjoy.' },
      { question: 'Should I choose something sentimental?', answer: 'If sentiment suits your relationship, yes. But a useful gift can be equally thoughtful when it reflects what she actually needs or enjoys.' }
    ]
  },
  'christmas-gifts-for-dad': {
    intro: 'Christmas gifts for Dad are easier to choose when you focus on what he actually does and enjoys. Practical upgrades and hobby-related ideas are often strong starting points.',
    sections: [
      { heading: 'Follow his routine', paragraphs: ['Look at his hobbies, weekend activities, travel habits, home projects and the everyday items he uses repeatedly.'] },
      { heading: 'Upgrade something he already likes', paragraphs: ['An improved tool, accessory or comfort item can feel thoughtful because it connects to something already part of his life.'] },
      { heading: 'Check specifications', paragraphs: ['For equipment, tools and technology, confirm compatibility and current specifications before purchasing.'] }
    ],
    faqs: [
      { question: 'What is a good Christmas gift for Dad?', answer: 'A hobby-related gift, useful upgrade, experience or personalized item can work well when it matches his actual interests.' },
      { question: 'What if Dad buys everything himself?', answer: 'Look for experiences, personalization or a small upgrade that adds convenience or enjoyment to something he already does.' }
    ]
  },
  'christmas-gifts-for-someone-who-has-everything': {
    intro: 'Shopping for someone who seems to have everything calls for a different strategy. Instead of searching for another obvious product, look for personal meaning, experiences, useful upgrades or something they would not think to buy themselves.',
    sections: [
      { heading: 'Change the question', paragraphs: ['Rather than asking what they do not own, ask what they enjoy, what they value and what could make an existing routine better.'] },
      { heading: 'Consider experiences and personalization', paragraphs: ['Experiences, custom details and memory-based gifts can feel more distinctive than another standard product.'] },
      { heading: 'Look for the small gap', paragraphs: ['A niche accessory, a useful upgrade or a beautifully made version of something they already use can be surprisingly effective.'] }
    ],
    faqs: [
      { question: 'What do you buy for someone who has everything?', answer: 'Consider an experience, personalized gift, thoughtful upgrade or something connected to a niche interest rather than another obvious item.' },
      { question: 'Are personalized gifts a good option?', answer: 'They can be, particularly when the personalization has a genuine connection to the recipient.' }
    ]
  },
  'christmas-gifts-under-50': {
    intro: 'A $50 budget can still produce thoughtful Christmas gifts. The key is to choose a clear category, compare quality and avoid letting the price alone determine the perceived value.',
    sections: [
      { heading: 'Make the budget work harder', paragraphs: ['Look for useful details, good materials, attractive presentation and products that solve a small everyday problem.'] },
      { heading: 'Shop by recipient first', paragraphs: ['Start with the person and then apply the $50 ceiling. This produces more relevant ideas than browsing every inexpensive product category.'] },
      { heading: 'Verify the final price', paragraphs: ['Product prices, promotions, shipping and taxes can change. Always confirm the current total at the retailer before purchasing.'] }
    ],
    faqs: [
      { question: 'Can you find a good Christmas gift under $50?', answer: 'Yes. A thoughtful choice does not require a high price; relevance, usefulness and presentation often matter more.' },
      { question: 'Does under $50 include shipping?', answer: 'Not necessarily. Check the retailer’s current price, shipping and tax information before treating a product as within budget.' }
    ]
  },
  'unique-christmas-gifts': {
    intro: 'Unique Christmas gifts do not have to be strange or impractical. The best unusual gifts often come from niche interests, personalization, experiences or a fresh take on something useful.',
    sections: [
      { heading: 'Look outside the obvious categories', paragraphs: ['Start with a recipient’s less obvious interests, collections, routines or curiosities. Those details can reveal better options than broad gift lists.'] },
      { heading: 'Unexpected does not mean unusable', paragraphs: ['Aim for something distinctive that still has a clear reason to exist in the recipient’s life.'] },
      { heading: 'Check the details carefully', paragraphs: ['Niche and personalized products can have different delivery times and return policies, so verify those details before ordering.'] }
    ],
    faqs: [
      { question: 'What makes a Christmas gift unique?', answer: 'A strong unique gift feels specific to the recipient through an unusual interest, personalization, experience or distinctive design.' },
      { question: 'Are unique gifts always expensive?', answer: 'No. Originality can come from relevance and presentation rather than price.' }
    ]
  },
  'personalized-christmas-gifts': {
    intro: 'Personalized Christmas gifts can feel especially thoughtful when the customization has meaning. The goal is not simply adding a name; it is choosing something that connects the recipient to the gift.',
    sections: [
      { heading: 'Choose the right kind of personalization', paragraphs: ['Names, dates, initials, photographs and custom messages can all work, but the best choice depends on the relationship and the item.'] },
      { heading: 'Order earlier than usual', paragraphs: ['Personalized products may require additional production time. Check the current processing and delivery estimate before ordering.'] },
      { heading: 'Double-check every detail', paragraphs: ['Review spelling, dates, initials, sizing and personalization previews carefully before submitting the order.'] }
    ],
    faqs: [
      { question: 'Are personalized Christmas gifts worth it?', answer: 'They can be especially meaningful when the customization has a genuine connection to the recipient or your shared history.' },
      { question: 'How early should I order a personalized gift?', answer: 'Check the current production and delivery estimate and allow extra time for seasonal demand.' }
    ]
  }
};

const budgetFallback: GuideContent = {
  intro: 'A thoughtful gift starts with the person, occasion and feeling you want the gift to create. Use this guide to narrow the direction before comparing individual products.',
  sections: [
    { heading: 'Start with the recipient', paragraphs: ['Think about what the person enjoys, uses often and has mentioned recently. These clues are more reliable than generic popularity.'] },
    { heading: 'Choose a clear direction', paragraphs: ['Narrow the search to interests, routines, experiences or useful upgrades so you can compare options meaningfully.'] },
    { heading: 'Verify before purchasing', paragraphs: ['Check the retailer’s current product details, price, availability, delivery estimate and return policy before ordering.'] }
  ],
  faqs: [
    { question: 'How should I choose a thoughtful gift?', answer: 'Start with the recipient and narrow by interests, occasion, relationship and budget before comparing products.' },
    { question: 'What should I verify before buying online?', answer: 'Check current price, availability, delivery timing, product specifications, seller information and return terms.' }
  ]
};

export function getGuideContent(slug: string): GuideContent {
  return evergreen[slug] ?? christmas[slug] ?? budgetFallback;
}
