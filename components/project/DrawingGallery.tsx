import Image from "next/image";

type Props = { title: string; drawing: string; download?: string };

export default function DrawingGallery({ title, drawing, download }: Props) {
  return <section className="drawingSection editorialDrawing" id="documento">
    <div className="drawingLabel">
      <p className="eyebrow">03 · Documento</p>
      <span>El proyecto se verifica a través del dibujo.</span>
    </div>
    <div className="drawingMedia">
      <Image src={drawing} alt={`Dibujo técnico de ${title}`} fill sizes="100vw" className="contain" />
    </div>
    {download && <a href={download} target="_blank" rel="noreferrer">Abrir plano completo ↗</a>}
  </section>;
}
