type Fact = [label: string, value: string];

export default function ProjectFacts({ facts }: { facts: Fact[] }) {
  return <section className="projectData" id="informacion">
    <div className="projectDataIntro">
      <p className="eyebrow">Ficha del proyecto</p>
      <h2>Información</h2>
    </div>
    <div className="projectDataGrid">
      {facts.map(([label, value]) => <div key={label}><span>{label}</span><p>{value}</p></div>)}
    </div>
  </section>;
}
