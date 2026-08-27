import React from "react";
import { Button } from "../core/Button.jsx";

/**
 * Halv-halv seksjon — a full-bleed photograph on one half, a short text block
 * on the other. Alternate `imageSide` down the page for rhythm.
 */
export function FeatureSplit({
  image,
  title,
  body,
  cta,
  ctaHref = "#",
  imageSide = "left",
  background = "var(--surface-page)",
  height = 560,
  style,
  ...rest
}) {
  const media = (
    <div style={{ background: image ? `url("${image}") center / cover no-repeat` : "var(--green-25)" }} />
  );
  const text = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24, padding: "0 96px", justifyContent: "center" }}>
      <h2 style={{ margin: 0, fontWeight: 400, fontSize: 34, lineHeight: "44px", color: "var(--aars-mork-gronn)" }}>{title}</h2>
      <p style={{ margin: 0, maxWidth: 430, fontSize: 20, lineHeight: "30px", color: "var(--aars-mork-gronn)" }}>{body}</p>
      {cta ? <Button href={ctaHref} style={{ marginTop: 8 }}>{cta}</Button> : null}
    </div>
  );
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: height,
        background,
        fontFamily: "var(--font-core)",
        ...style,
      }}
      {...rest}
    >
      {imageSide === "left" ? media : text}
      {imageSide === "left" ? text : media}
    </section>
  );
}
