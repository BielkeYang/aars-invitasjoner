const { Hero, StatGrid, SectionHeading, ArticleCard, FeatureSplit, CompanyGrid, Button } = window.AarsDesignSystem_80df3d;

function Forsiden({ go }) {
  const d = window.AarsData;
  return (
    <div>
      <Hero
        image="../../assets/images/hero-forsiden.jpg"
        headline="I over 85 år har vi skapt arbeidsplasser og bidratt til å løse samfunnsutfordringer gjennom aktivt eierskap."
        cta="Les mer om Aars"
        ctaHref="#om-aars"
      />
      <StatGrid heading="Kort om Aars" items={d.stats} />
      <section style={{ background: "var(--surface-cream)", padding: "144px 64px" }}>
        <SectionHeading>Aktuelt</SectionHeading>
        <div style={{ display: "flex", gap: 79, justifyContent: "center", marginTop: 108 }}>
          {d.articles.slice(0, 3).map((a) => (
            <ArticleCard key={a.title} {...a} href="#artikkel" />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 96 }}>
          <Button onClick={() => go("aktuelt")}>Se flere saker</Button>
        </div>
      </section>
      <FeatureSplit
        image="../../assets/images/portrett-familien.png"
        title="Familien"
        body="Mye har skjedd med våre virksomheter siden Harald Aars Møller etablerte Strømmen Auto i 1936. Det samme kan sies om eierskapet."
        cta="Les mer om familien"
      />
      <FeatureSplit
        imageSide="right"
        image="../../assets/images/mote-generasjon.jpg"
        title="Hold din sti ren"
        body="Våre grunnverdier og høye etisk standard skal bringe oss videre – også på en måte som vi kan stå inne for og være stolte av."
        cta="Les mer om våre grunnverdier"
      />
      <FeatureSplit
        image="../../assets/images/mollersamlingen-utstilling.jpg"
        title="Møllersamlingen"
        body="Utforsk den store Møllersamlingen som består av en rekker fotografier fra 1800-tallet og frem til i dag"
        cta="Besøk Møllersamlingen ↗"
      />
      <section style={{ background: "var(--surface-beige)", padding: "144px 0 120px" }}>
        <SectionHeading>Selskapene våre</SectionHeading>
        <div style={{ marginTop: 108 }}>
          <CompanyGrid companies={d.companies} background="transparent" />
        </div>
      </section>
    </div>
  );
}
window.Forsiden = Forsiden;
