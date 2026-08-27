import React from "react";

/**
 * "Selskapene våre" — the portfolio logo wall. Logos sit on a beige band at a
 * common optical width, never in boxes.
 */
export function CompanyGrid({ companies = [], columns = 3, background = "var(--surface-beige)", style, ...rest }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns},1fr)`,
        rowGap: 96,
        columnGap: 40,
        padding: "24px 142px",
        background,
        ...style,
      }}
      {...rest}
    >
      {companies.map((c) => (
        <div key={c.name} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 94 }}>
          <img src={c.logo} alt={c.name} style={{ maxWidth: 201, maxHeight: 94, objectFit: "contain" }} />
        </div>
      ))}
    </div>
  );
}
