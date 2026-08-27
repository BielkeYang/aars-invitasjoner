import React from "react";

/**
 * Takeover-menyen — a dark green panel that slides in from the right over a
 * beige-multiplied page. Links at 24/34; ENG pinned bottom right.
 */
export function MenuOverlay({
  open = true,
  items = ["Om Aars", "Aktuelt", "Forretningsområder", "Kontakt oss"],
  activeItem,
  onSelect,
  onClose,
  language = "ENG",
  width = 528,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: open ? "auto" : "none",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--aars-beige)",
          opacity: open ? 0.2 : 0,
          mixBlendMode: "multiply",
          transition: "opacity var(--duration-slow) var(--ease-standard)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width,
          maxWidth: "100%",
          background: "var(--surface-dark)",
          transform: open ? "translateX(0)" : `translateX(${width}px)`,
          transition: "transform var(--duration-slow) var(--ease-standard)",
          fontFamily: "var(--font-core)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Lukk"
          style={{ position: "absolute", top: 61, right: 66, width: 27, height: 26, background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          <span style={{ position: "absolute", left: 0, top: 12.5, width: 27, height: 1, background: "var(--white)", transform: "rotate(45deg)" }} />
          <span style={{ position: "absolute", left: 0, top: 12.5, width: 27, height: 1, background: "var(--white)", transform: "rotate(-45deg)" }} />
        </button>
        <div style={{ position: "absolute", left: 80, top: 64, display: "flex", flexDirection: "column" }}>
          {items.map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => { e.preventDefault(); onSelect && onSelect(item); }}
              style={{
                fontSize: 24,
                lineHeight: "34px",
                color: activeItem === item ? "var(--aars-oransje)" : "var(--beige-25)",
                textDecoration: "none",
                border: "none",
              }}
            >
              {item}
            </a>
          ))}
        </div>
        <span style={{ position: "absolute", right: 64, bottom: 70, fontSize: 16, lineHeight: "24px", color: "var(--beige-75)" }}>{language}</span>
      </div>
    </div>
  );
}
