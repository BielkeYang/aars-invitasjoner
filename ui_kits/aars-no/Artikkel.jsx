const { TextLink, ArticleCard, SectionHeading } = window.AarsDesignSystem_80df3d;

function Artikkel() {
  const d = window.AarsData;
  return (
    <div style={{ background: "var(--surface-page)" }}>
      <div style={{ height: 560, background: 'url("../../assets/images/artikkel-generasjonsskifte.png") center 20% / cover no-repeat' }} />
      <article style={{ maxWidth: 776, margin: "0 auto", padding: "96px 0 144px" }}>
        <div style={{ fontSize: 16, lineHeight: "26px", color: "var(--green-75)" }}>Aktuelt · Foto: Møllersamlingen</div>
        <h1 style={{ margin: "24px 0 0", fontWeight: 400, fontSize: 62, lineHeight: "74px", color: "var(--aars-mork-gronn)" }}>Generasjonsskifte og rollebytte</h1>
        <p style={{ margin: "40px 0 0", fontSize: 28, lineHeight: "42px", color: "var(--aars-mork-gronn)" }}>
          Ny styreleder i Aars og Møller Mobility Group. Det er i dag 3. og 4. generasjon som representerer familien gjennom ledelse og styreverv.
        </p>
        <p style={{ margin: "48px 0 0", fontSize: 20, lineHeight: "30px", color: "var(--aars-mork-gronn)" }}>
          I Aars har vi stått i nye tider i fire generasjoner, gjennom nesten hundre år. Nye tider byr på nye muligheter som vi må gripe for å lykkes. Den holdningen har fulgt oss siden 1930-årene, da Harald Aars Møller revolusjonerte norsk bilindustri, og den gjelder fortsatt.
        </p>
        <p style={{ margin: "30px 0 0", fontSize: 20, lineHeight: "30px", color: "var(--aars-mork-gronn)" }}>
          Slik vil vi også utøve vårt eierskap. For å være eier er ikke bare å eie. Det er å ville noe. Det handler om å legge til rette for kommersiell vekst som skaper positive ringvirkninger for samfunnet, og enkeltmennesker.
        </p>
        <div style={{ margin: "48px 0 0", padding: "40px 0", borderTop: "1px solid var(--beige-100)", borderBottom: "1px solid var(--beige-100)" }}>
          <p style={{ margin: 0, fontSize: 34, lineHeight: "44px", color: "var(--aars-oransje)" }}>«Vi tror ikke på å standardisere, men heller på å heve standarden der det er mulig.»</p>
        </div>
        <div style={{ marginTop: 48 }}><TextLink>Tilbake til Aktuelt</TextLink></div>
      </article>
      <div style={{ background: "var(--surface-cream)", padding: "120px 64px" }}>
        <SectionHeading level="h3" tone="dark">Flere saker</SectionHeading>
        <div style={{ display: "flex", gap: 79, justifyContent: "center", marginTop: 72 }}>
          {d.articles.slice(1, 4).map((a) => <ArticleCard key={a.title} {...a} />)}
        </div>
      </div>
    </div>
  );
}
window.Artikkel = Artikkel;
