import React from "react";

/**
 * "Kort om Aars" — key figures on the dark green band, orange numerals in a
 * hairline grid. Pass 6 items for the canonical 3×2 arrangement.
 */
export function StatGrid({
  heading = "Kort om Aars",
  items = [],
  columns = 3,
  style,
  ...rest
}) {
  const rule = "rgba(255,255,255,0.65)";
  return (
    <section style={{ background: "var(--surface-dark)", fontFamily: "var(--font-core)", padding: "56px 64px 72px", ...style }} {...rest}>
      {heading ? (
        <h2 style={{ margin: "0 0 44px", fontWeight: 400, fontSize: 34, lineHeight: "44px", textAlign: "center", color: "var(--white)" }}>{heading}</h2>
      ) : null}
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns},1fr)` }}>
        {items.map((item, i) => {
          const row = Math.floor(i / columns);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 152,
                padding: "24px 16px",
                textAlign: "center",
                fontSize: 34,
                lineHeight: "44px",
                color: "var(--aars-oransje)",
                whiteSpace: "pre-line",
                borderLeft: i % columns === 0 ? "none" : `1px solid ${rule}`,
                borderTop: row === 0 ? "none" : `1px solid ${rule}`,
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
}
