import React from "react";

/**
 * Aars text link ("Lenker"): brand serif with a hairline rule directly under
 * the full width of the label. Used for "Les mer", footer links, list links.
 */
export function TextLink({
  children,
  href = "#",
  tone = "dark",
  size = "body",
  external = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color =
    tone === "light" ? "var(--beige-50)"
    : tone === "muted" ? "var(--text-on-dark-muted)"
    : tone === "accent" ? "var(--aars-oransje)"
    : "var(--aars-mork-gronn)";
  const metrics =
    size === "caption" ? { fontSize: 16, lineHeight: "26px" }
    : size === "menu-header" ? { fontSize: 22, lineHeight: "32px" }
    : size === "large" ? { fontSize: 24, lineHeight: "34px" }
    : { fontSize: 20, lineHeight: "30px" };
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 3,
        fontFamily: "var(--font-core)",
        fontWeight: "var(--weight-regular)",
        color,
        textDecoration: "none",
        borderBottom: `1px solid ${color}`,
        paddingBottom: 0,
        opacity: hover ? 0.65 : 1,
        transition: "opacity var(--duration-base) var(--ease-standard)",
        ...metrics,
        ...style,
      }}
      {...rest}
    >
      {children}
      {external ? <span aria-hidden="true" style={{ fontSize: "0.5em", lineHeight: 1 }}>↗</span> : null}
    </a>
  );
}
