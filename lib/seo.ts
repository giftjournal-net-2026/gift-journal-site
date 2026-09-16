export const siteUrl = 'https://giftjournal.net';
export const siteName = 'GiftJournal';
export function absoluteUrl(path:string){ return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`; }
