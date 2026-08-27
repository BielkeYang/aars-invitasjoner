import React from "react";

const TONES = {
  dark: { line: "var(--aars-mork-gronn)", fillText: "var(--beige-50)" },
  light: { line: "var(--beige-50)", fillText: "var(--aars-mork-gronn)" },
  accent: { line: "var(--aars-oransje)", fillText: "var(--beige-25)" },
  white: { line: "var(--white)", fillText: "var(--aars-mork-gronn)" },
};

const SIZES = {
  desktop: { fontSize: 20, lineHeight: "42px", padHoriz: 20, minHeight: 46 },
  tablet: { fontSize: 18, lineHeight: "30px", padHoriz: 21, minHeight: 42 },
  mobile: { fontSize: 16, lineHeight: "26px", padHoriz: 20, minHeight: 46 },
};

/** Knapp — the Aars pill button. Outline by default, fills on hover/select. */
export function Button({
  children,
  tone = "dark",
  size = "desktop",
  selected = false,
  href,
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const t = TONES[tone] || TONES.dark;
  const s = SIZES[size] || SIZES.desktop;
  const active = (hover || selected) && !disabled;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    minHeight: s.minHeight,
    padding: `2px ${s.padHoriz}px`,
    fontFamily: "var(--font-core)",
    fontWeight: "var(--weight-regular)",
    fontSize: s.fontSize,
    lineHeight: s.lineHeight,
    textAlign: "center",
    whiteSpace: "nowrap",
    borderRadius: "var(--radius-pill)",
    border: "none",
    boxShadow: `inset 0 0 0 1px ${t.line}`,
    background: active ? t.line : "transparent",
    color: active ? t.fillText : t.line,
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.4 : 1,
    textDecoration: "none",
    transition: "background var(--duration-base) var(--ease-standard),color var(--duration-base) var(--ease-standard)",
    ...style,
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick,
  };
  if (href && !disabled) return <a href={href} style={base} {...handlers} {...rest}>{children}</a>;
  return <button type="button" style={base} disabled={disabled} {...handlers} {...rest}>{children}</button>;
}
