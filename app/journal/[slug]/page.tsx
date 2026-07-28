import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journalBySlug, journalEntries } from "@/content/journal";

export function generateStaticParams() { return journalEntries.map((entry) => ({ slug: entry.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const entry = journalBySlug[slug];
  if (!entry) return {};
  return { title: entry.title, description: entry.deck, openGraph: { title: entry.title, description: entry.deck, images: [entry.cover] } };
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const entry = journalBySlug[slug];
  if (!entry) notFound();
  const index = journalEntries.findIndex((item) => item.slug === slug);
  const next = journalEntries[(index + 1) % journalEntries.length];
  return <main className="journalArticle">
    <header className="articleHero"><div><p className="eyebrow">{entry.number} · {entry.category}</p><span>{entry.projectTitle || "RAStudio"}</span></div><h1>{entry.title}</h1><p>{entry.deck}</p></header>
    <div className="articleCover"><Image src={entry.cover} alt={entry.title} fill priority sizes="100vw" className="cover" /></div>
    <article className="articleBody">{entry.blocks.map((block, i) => {
      if (block.type === "text") return <section className="articleText" key={i}>{block.heading && <h2>{block.heading}</h2>}<p>{block.body}</p></section>;
      if (block.type === "quote") return <blockquote key={i}>{block.body}</blockquote>;
      return <figure className={block.layout === "portrait" ? "articleImage portrait" : "articleImage"} key={i}><div><Image src={block.src} alt={block.alt} fill sizes="100vw" className={block.layout === "portrait" ? "contain" : "cover"} /></div>{block.caption && <figcaption>{block.caption}</figcaption>}</figure>;
    })}</article>
    {entry.projectSlug && <section className="articleProject"><p className="eyebrow">Proyecto relacionado</p><Link href={`/proyectos/${entry.projectSlug}`}><span>{entry.projectTitle}</span><b>Ver proyecto ↗</b></Link></section>}
    <section className="articleNext"><p className="eyebrow">Siguiente publicación</p><Link href={`/journal/${next.slug}`}><span>{next.category}</span><h2>{next.title}</h2><b>↗</b></Link></section>
  </main>;
}
