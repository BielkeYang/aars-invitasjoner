const { SectionHeading, CompanyGrid, Button } = window.AarsDesignSystem_80df3d;

function PageHero({ image, title }) {
  return (
    <div style={{ position: "relative", height: 421, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: `url("${image}") center / cover no-repeat` }}>
      <div style={{ position: "absolute", inset: 0, background: "var(--overlay-image)" }} />
      <h1 style={{ position: "relative", margin: 0, fontWeight: 400, fontSize: 62, lineHeight: "74px", color: "var(--white)" }}>{title}</h1>
    </div>
  );
}

function OmAars() {
  const d = window.AarsData;
  return (
    <div>
      <PageHero image="../../assets/images/hero-om-aars.jpg" title="Om Aars" />
      <div style={{ padding: "119px 332px 144px", background: "var(--surface-page)" }}>
        <p style={{ margin: 0, fontSize: 28, lineHeight: "42px", color: "var(--aars-mork-gronn)" }}>
          I over 80 år har Møller-familien spilt en sentral rolle i Norges samfunnsutvikling. I dag er familiens eierskap og virke samlet i familie- og holdingselskapet Aars. Selskapets navn går tilbake til Harald Aars Møller som grunnla det som i dag er Møller Mobility Group. Det er i dag 3. og 4. generasjon som utgjør de aktive eierne.
        </p>
      </div>
      <div style={{ background: "var(--surface-dark)", padding: "96px 64px 120px", textAlign: "center" }}>
        <SectionHeading tone="light" level="h2" style={{ maxWidth: 616, margin: "0 auto" }}>Møllersamlingen</SectionHeading>
        <p style={{ maxWidth: 616, margin: "32px auto 0", fontSize: 20, lineHeight: "30px", color: "var(--beige-50)" }}>
          En av Nordens største samlinger av fotografi og kjøretøy, bygget opp gjennom fire generasjoner.
        </p>
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
          <Button tone="light">Besøk Møllersamlingen</Button>
        </div>
      </div>
      <section style={{ background: "var(--surface-page)", padding: "144px 0 120px" }}>
        <SectionHeading>Selskapene våre</SectionHeading>
        <div style={{ marginTop: 108 }}>
          <CompanyGrid companies={d.companies} background="transparent" />
        </div>
      </section>
    </div>
  );
}
window.OmAars = OmAars;
window.PageHero = PageHero;
