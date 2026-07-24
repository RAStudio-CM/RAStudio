import Image from "next/image";
import type { ProjectImage } from "@/content/projects";

export default function ProjectGallery({ title, images }: { title: string; images: ProjectImage[] }) {
  return <section className="projectGallery editorialGallery projectSequence" id="galeria">
    {images.map((image, index) => <figure className={image.layout || "half"} key={`${image.src}-${index}`}>
      <Image src={image.src} alt={`${title}, imagen ${index + 1}`} fill sizes={image.layout === "full" ? "100vw" : "50vw"} className="cover" />
      <figcaption>{image.caption || `${String(index + 1).padStart(2, "0")} · ${title}`}</figcaption>
    </figure>)}
  </section>;
}
