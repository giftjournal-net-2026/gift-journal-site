import { articles } from '@/data/articles';
import { ArticleCard } from '@/components/ArticleCard';
export default function Blog(){return <section className="section"><div className="container"><div className="section-head"><span className="eyebrow">The Journal</span><h1>Gift advice worth keeping.</h1><p className="lead">Practical ideas for choosing thoughtful gifts without the guesswork.</p></div><div className="article-grid">{articles.map(a=><ArticleCard key={a.slug} article={a}/>)}</div></div></section>}
