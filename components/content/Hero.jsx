import React from "react";
import { Button } from "../core/Button.jsx";

/**
 * Full-bleed hero: photograph under a warm scrim, centred beige headline,
 * outline button. The scrim keeps type legible over any image.
 */
export function Hero({
  image,
  headline,
  cta,
  ctaHref = "#",
  height = 766,
  align = "center",
  style,
  ...rest
}) {
  return (
    <section
      style={{
        position: "relative",
        height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        padding: "0 64px",
        boxSizing: "border-box",
        overflow: "hidden",
        background: image ? `url("${image}") center / cover no-repeat` : "var(--green-75)",
        fontFamily: "var(--font-core)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ position: "absolute", inset: 0, background: "var(--overlay-image)" }} />
      <h1
        style={{
          position: "relative",
          margin: 0,
          maxWidth: 1007,
          fontWeight: 400,
          fontSize: 48,
          lineHeight: "62px",
          textAlign: align,
          color: "var(--beige-50)",
        }}
      >
        {headline}
      </h1>
      {cta ? <Button tone="light" href={ctaHref} style={{ position: "relative" }}>{cta}</Button> : null}
    </section>
  );
}
