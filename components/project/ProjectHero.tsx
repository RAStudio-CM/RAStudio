import Image from "next/image";

type Props = { title: string; image: string; captionNumber?: string };

export default function ProjectHero({ title, image, captionNumber = "01" }: Props) {
  return <section className="projectHero editorialHero">
    <Image src={image} alt={title} fill priority sizes="100vw" className="cover" />
    <div className="projectHeroCaption"><span>{captionNumber}</span><span>{title}</span></div>
  </section>;
}
