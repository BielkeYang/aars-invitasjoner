import React from "react";
import { Arrow } from "../core/Arrow.jsx";

const RULE = "rgba(255,255,255,0.65)";

function Group({ heading, children, ruleWidth = 100 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <div style={{ fontSize: 20, lineHeight: "30px", color: "var(--white)", opacity: 0.65 }}>{heading}</div>
        <div style={{ width: ruleWidth, height: 1, background: RULE, marginTop: 15 }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>{children}</div>
    </div>
  );
}

function FootLink({ children, color = "var(--white)", external = false }) {
  return (
    <a href="#" style={{ display: "inline-flex", alignItems: "baseline", gap: 3, alignSelf: "flex-start", fontSize: 16, lineHeight: "26px", color, textDecoration: "none", borderBottom: `1px solid ${RULE}` }}>
      {children}
      {external ? <span aria-hidden="true" style={{ fontSize: 9 }}>↗</span> : null}
    </a>
  );
}

/**
 * Footer — dark green band closing every Aars page. Three breakpoints;
 * an optional newsletter field matches the "Nyhetsbrev" variant in the kit.
 */
export function Footer({
  breakpoint = "desktop",
  address = ["Bygdøy Allé 4, 0257 Oslo", "Postboks 2511 Solli, 0202 Oslo"],
  email = "info@aars.no",
  practical = ["Ledige stillinger", "LinkedIn", "Personvern"],
  showNewsletter = false,
  language = "ENG",
  onTop,
  style,
  ...rest
}) {
  const gutter = breakpoint === "desktop" ? 64 : breakpoint === "tablet" ? 61 : 19;
  const stacked = breakpoint === "mobile";
  return (
    <footer
      style={{
        position: "relative",
        boxSizing: "border-box",
        width: "100%",
        background: "var(--surface-dark)",
        color: "var(--white)",
        fontFamily: "var(--font-core)",
        padding: stacked ? `40px ${gutter}px 56px` : `40px ${gutter}px 51px`,
        ...style,
      }}
      {...rest}
    >
      <div style={{ fontSize: breakpoint === "desktop" ? 34 : 28, lineHeight: breakpoint === "desktop" ? "44px" : "38px", color: "var(--white)" }}>Aars</div>
      <div
        style={{
          display: stacked ? "flex" : "grid",
          flexDirection: "column",
          gridTemplateColumns: breakpoint === "desktop" ? "348px 232px auto" : "290px auto",
          gap: stacked ? 36 : 0,
          marginTop: breakpoint === "desktop" ? 40 : 36,
        }}
      >
        <Group heading="Kontaktinfo">
          {address.map((line) => (
            <span key={line} style={{ fontSize: 16, lineHeight: "26px", color: "var(--white)" }}>{line}</span>
          ))}
          <FootLink>{email}</FootLink>
        </Group>
        <Group heading="Praktisk" ruleWidth={70}>
          {practical.map((p) => <FootLink key={p}>{p}</FootLink>)}
        </Group>
        <div style={{ display: "flex", flexDirection: "column", gap: 40, alignItems: "flex-start" }}>
          <a href="#" style={{ display: "inline-flex", alignItems: "baseline", gap: 3, fontSize: 20, lineHeight: "26px", color: "var(--text-on-dark-muted)", textDecoration: "none", borderBottom: `1px solid ${RULE}` }}>
            Møllersamlingen<span aria-hidden="true" style={{ fontSize: 10 }}>↗</span>
          </a>
          {showNewsletter ? (
            <div style={{ width: 268 }}>
              <div style={{ fontSize: 16, lineHeight: "24px", color: "var(--white)", opacity: 0.65 }}>Din epost</div>
              <div style={{ height: 1, background: RULE, marginTop: 10 }} />
            </div>
          ) : null}
          <span style={{ fontSize: 16, lineHeight: "24px", color: "var(--beige-75)" }}>{language}</span>
        </div>
      </div>
      {breakpoint === "desktop" ? (
        <button
          type="button"
          onClick={onTop}
          aria-label="Til toppen"
          style={{ position: "absolute", right: gutter + 20, bottom: 60, background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          <Arrow direction="up" size={19} color="var(--white)" />
        </button>
      ) : null}
    </footer>
  );
}
