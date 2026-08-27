const { SectionHeading, ArticleCard, Button, TextLink } = window.AarsDesignSystem_80df3d;

function Aktuelt() {
  const d = window.AarsData;
  const grid = d.articles.concat(d.articles).slice(0, 6);
  return (
    <div style={{ background: "var(--surface-cream)" }}>
      <div style={{ padding: "144px 64px 0", textAlign: "center" }}>
        <SectionHeading>Aktuelt</SectionHeading>
        <p style={{ margin: "24px auto 0", maxWidth: 620, fontSize: 20, lineHeight: "30px", color: "var(--aars-mork-gronn)" }}>Les våre mest aktuelle saker</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,384px)", justifyContent: "center", columnGap: 79, rowGap: 96, padding: "96px 64px 0" }}>
        {grid.map((a, i) => <ArticleCard key={i} {...a} href="#artikkel" />)}
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding: "96px 0 144px" }}>
        <Button>Last flere saker</Button>
      </div>
      <div style={{ background: "var(--surface-beige)", padding: "96px 64px" }}>
        <SectionHeading level="h3" tone="dark" align="left">Last ned våre rapporter her</SectionHeading>
        <div style={{ display: "flex", gap: 64, marginTop: 40 }}>
          {["Investerings-rapport", "Bærekrafts-rapport"].map((r) => (
            <div key={r} style={{ width: 383, padding: 32, borderRadius: "var(--radius-card)", background: "var(--surface-card)", boxSizing: "border-box" }}>
              <div style={{ fontSize: 28, lineHeight: "42px", color: "var(--aars-mork-gronn)" }}>{r}</div>
              <div style={{ marginTop: 24 }}><TextLink>Last ned PDF</TextLink></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.Aktuelt = Aktuelt;
