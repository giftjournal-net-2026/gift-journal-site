import Link from 'next/link'; import type {Article} from '@/data/articles';
export function ArticleCard({article}:{article:Article}){return <Link className="article-card" href={`/blog/${article.slug}`}><span>{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><b>Read article →</b></Link>}
