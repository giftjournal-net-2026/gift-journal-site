import Image from 'next/image';
import Link from 'next/link';
export function Header(){return <header className="site-header"><div className="container nav"><Link href="/" aria-label="GiftJournal home"><Image src="/brand/logo.png" alt="GiftJournal" width={168} height={48} priority /></Link><nav><Link href="/gifts-for-women">For Women</Link><Link href="/gifts-for-men">For Men</Link><Link href="/christmas-gifts">Christmas</Link><Link href="/birthday-gift-ideas">Birthday</Link></nav></div></header>}
