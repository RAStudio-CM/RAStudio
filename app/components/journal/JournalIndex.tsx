"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { JournalEntry } from "@/content/journal";

export default function JournalIndex({ entries }: { entries: JournalEntry[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const value = query.trim().toLocaleLowerCase("es");
    if (!value) return entries;
    return entries.filter((entry) => [entry.title, entry.deck, entry.category, entry.projectTitle, ...entry.keywords].filter(Boolean).join(" ").toLocaleLowerCase("es").includes(value));
  }, [entries, query]);

  return <>
    <div className="journalSearch">
      <label htmlFor="journal-search">Buscar por idea, material o proyecto</label>
      <div><input id="journal-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Agua, detalle, visualización…" /><span>{String(filtered.length).padStart(2, "0")}</span></div>
    </div>
    <section className="journalGrid" aria-live="polite">
      {filtered.map((entry) => <Link href={`/journal/${entry.slug}`} className="journalCard" key={entry.slug}>
        <div className="journalCardMedia"><Image src={entry.cover} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" className="cover" /></div>
        <div className="journalCardMeta"><span>{entry.number} · {entry.category}</span><span>{entry.projectTitle || "RAStudio"}</span></div>
        <h2>{entry.title}</h2><p>{entry.deck}</p>
      </Link>)}
      {filtered.length === 0 && <p className="journalEmpty">No encontramos publicaciones con esa búsqueda.</p>}
    </section>
  </>;
}
