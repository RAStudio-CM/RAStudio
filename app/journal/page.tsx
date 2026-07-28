import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalIndex from "../components/journal/JournalIndex";
import { journalEntries, notes } from "@/content/journal";

export const metadata: Metadata = { title: "Journal", description: "Ideas, investigación, procesos y notas del estudio RAStudio." };

export default function JournalPage() {
  const featured = journalEntries.filter((entry) => entry.featured);
  return <main className="journalPage">
    <section className="journalHero">
      <p className="eyebrow">RAStudio · Journal</p>
      <h1>Thoughts,<br />projects, research<br />and <em>process.</em></h1>
      <p>Un cuaderno abierto sobre las decisiones, herramientas e investigaciones que construyen nuestra arquitectura.</p>
    </section>

    <section className="journalFeatured">
      <div className="journalSectionHead"><p className="eyebrow">Featured · 2026</p><span>Ideas que atraviesan el estudio</span></div>
      {featured.map((entry, index) => <Link href={`/journal/${entry.slug}`} className="journalFeature" key={entry.slug}>
        <div className="journalFeatureMedia"><Image src={entry.cover} alt="" fill sizes="100vw" className="cover" /></div>
        <div className="journalFeatureCopy"><span>{String(index + 1).padStart(2, "0")} · {entry.category}</span><h2>{entry.title}</h2><p>{entry.deck}</p><b>Leer publicación ↗</b></div>
      </Link>)}
    </section>

    <section className="journalArchive">
      <div className="journalSectionHead"><p className="eyebrow">Archive</p><span>Buscar por ideas, no solamente por nombres</span></div>
      <JournalIndex entries={journalEntries} />
    </section>

    <section className="notesSection">
      <div className="journalSectionHead"><p className="eyebrow">Notes</p><span>Observaciones breves del proceso</span></div>
      <div className="notesGrid">{notes.map((note) => <article key={note.number}><span>{note.number} · {note.tag}</span><h2>{note.title}</h2><p>{note.body}</p></article>)}</div>
    </section>
  </main>;
}
