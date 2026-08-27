import React from "react";

/**
 * Seksjonstittel — the centred section heading. Orange on light surfaces,
 * beige on dark. Orange is used strategically: headings and the wordmark.
 */
export function SectionHeading({
  children,
  tone = "accent",
  level = "h1",
  align = "center",
  style,
  ...rest
}) {
  const Tag = level;
  const color =
    tone === "light" ? "var(--beige-50)"
    : tone === "dark" ? "var(--aars-mork-gronn)"
    : tone === "white" ? "var(--white)"
    : "var(--aars-oransje)";
  const metrics =
    level === "h1" ? { fontSize: "var(--type-h1-size)", lineHeight: "var(--type-h1-lh)" }
    : level === "h2" ? { fontSize: "var(--type-h2-size)", lineHeight: "var(--type-h2-lh)" }
    : level === "h3" ? { fontSize: "var(--type-h3-size)", lineHeight: "var(--type-h3-lh)" }
    : { fontSize: "var(--type-h4-size)", lineHeight: "var(--type-h4-lh)" };
  return (
    <Tag style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: 400, textAlign: align, color, ...metrics, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
