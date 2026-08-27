const { TextLink, SectionHeading, EmailField, Button } = window.AarsDesignSystem_80df3d;

function Block({ heading, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontSize: 22, lineHeight: "32px", color: "var(--aars-mork-gronn)" }}>{heading}</div>
      <div style={{ width: 100, height: 1, background: "var(--aars-mork-gronn)" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8, fontSize: 20, lineHeight: "30px", color: "var(--aars-mork-gronn)" }}>{children}</div>
    </div>
  );
}

function Kontakt() {
  const d = window.AarsData;
  return (
    <div style={{ background: "var(--surface-page)" }}>
      <div style={{ padding: "144px 64px 0", textAlign: "center" }}>
        <SectionHeading>Kontakt</SectionHeading>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 64, padding: "96px 64px 0" }}>
        <Block heading="Besøk oss"><span>Bygdøy Allé 4, 0257 Oslo</span></Block>
        <Block heading="Send oss post"><span>Postboks 2511 Solli, 0202 Oslo</span></Block>
        <Block heading="Send oss en e-post"><TextLink href="mailto:info@aars.no">info@aars.no</TextLink></Block>
        <Block heading="Presse"><TextLink href="mailto:presse@aars.no">presse@aars.no</TextLink></Block>
        <Block heading="Logo og pressefiler"><TextLink>Last ned her</TextLink></Block>
        <Block heading="Ring oss"><span>+47 24 03 33 00</span></Block>
      </div>
      <section style={{ padding: "144px 64px 120px" }}>
        <SectionHeading level="h2" tone="dark" align="left">Våre ansatte</SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", columnGap: 64, rowGap: 72, marginTop: 64 }}>
          {d.people.map((p, i) => (
            <div key={i}>
              <div style={{ width: "100%", aspectRatio: "4 / 5", background: `url("${p.photo}") center / cover no-repeat`, filter: "grayscale(1)" }} />
              <div style={{ marginTop: 24, fontSize: 28, lineHeight: "42px", color: "var(--aars-mork-gronn)" }}>{p.name}</div>
              <div style={{ fontSize: 16, lineHeight: "26px", color: "var(--green-75)" }}>{p.role}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: "var(--surface-beige)", padding: "96px 64px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 64 }}>
        <div>
          <SectionHeading level="h3" tone="dark" align="left">Nyhetsbrev</SectionHeading>
          <p style={{ margin: "16px 0 0", maxWidth: 480, fontSize: 20, lineHeight: "30px", color: "var(--aars-mork-gronn)" }}>Få våre saker og rapporter i innboksen.</p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 24 }}>
          <EmailField tone="light" />
          <Button>Meld meg på</Button>
        </div>
      </section>
    </div>
  );
}
window.Kontakt = Kontakt;
