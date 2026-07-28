import Image from "next/image";
import Link from "next/link";
import type { JournalEntry } from "@/content/journal";

export default function RelatedJournal({ entries }: { entries: JournalEntry[] }) {
  if (!entries.length) return null;
  return <section className="relatedJournal">
    <div className="relatedJournalHead"><p className="eyebrow">Journal relacionado</p><Link href="/journal">Ver Journal ↗</Link></div>
    <div className="relatedJournalGrid">{entries.map((entry) => <Link href={`/journal/${entry.slug}`} key={entry.slug}>
      <div><Image src={entry.cover} alt="" fill sizes="50vw" className="cover" /></div><span>{entry.category}</span><h2>{entry.title}</h2>
    </Link>)}</div>
  </section>;
}
