import React from "react";
import { Wordmark } from "../core/Wordmark.jsx";

const WIDTHS = { desktop: 1306, tablet: 628, mobile: 334 };

function Burger({ color }) {
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", justifyContent: "space-between", width: 21, height: 16.789 }}>
      {[0, 1, 2].map((i) => <span key={i} style={{ display: "block", height: 1, background: color }} />)}
    </span>
  );
}

/**
 * Meny — the Aars site header. One bar, three breakpoints, two tones.
 * Desktop carries inline links; tablet and mobile collapse to the burger.
 */
export function Menu({
  breakpoint = "desktop",
  tone = "light",
  links = ["Om Aars"],
  menuLabel = "Meny",
  onMenuClick,
  wordmarkColor,
  style,
  ...rest
}) {
  const color =
    tone === "dark" ? "var(--aars-mork-gronn)"
    : tone === "accent" ? "var(--aars-oransje)"
    : "var(--white)";
  const mark = wordmarkColor || color;
  const compact = breakpoint !== "desktop";
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        width: WIDTHS[breakpoint] || WIDTHS.desktop,
        maxWidth: "100%",
        fontFamily: "var(--font-core)",
        ...style,
      }}
      {...rest}
    >
      <a href="#" style={{ display: "inline-flex", border: "none", textDecoration: "none" }} aria-label="Aars">
        <Wordmark height={compact ? 24 : 33} color={mark} />
      </a>
      <span style={{ display: "flex", alignItems: "center", gap: compact ? 0 : 28 }}>
        {compact ? null : links.map((l) => (
          <a key={l} href="#" style={{ fontSize: 20, lineHeight: "30px", color, textDecoration: "none", border: "none" }}>{l}</a>
        ))}
        {compact ? null : <span style={{ fontSize: 20, lineHeight: "30px", color }}>{menuLabel}</span>}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label={menuLabel}
          style={{ display: "inline-flex", alignItems: "center", background: "none", border: "none", padding: 0, marginLeft: compact ? 0 : 14, cursor: "pointer" }}
        >
          <Burger color={color} />
        </button>
      </span>
    </nav>
  );
}
