import React from "react";
import { TextLink } from "../core/TextLink.jsx";

/**
 * Aktuelt-kort — an editorial teaser: 384-wide image, kicker, title, "Les mer".
 */
export function ArticleCard({
  image,
  kicker,
  title,
  linkLabel = "Les mer",
  href = "#",
  width = 384,
  style,
  ...rest
}) {
  return (
    <article style={{ display: "flex", flexDirection: "column", width, maxWidth: "100%", fontFamily: "var(--font-core)", ...style }} {...rest}>
      <div
        style={{
          width: "100%",
          aspectRatio: "384 / 251",
          background: image ? `url("${image}") center / cover no-repeat` : "var(--green-25)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 40 }}>
        {kicker ? <div style={{ fontSize: 20, lineHeight: "30px", color: "var(--aars-mork-gronn)" }}>{kicker}</div> : null}
        <h3 style={{ margin: 0, fontWeight: 400, fontSize: 28, lineHeight: "42px", color: "var(--aars-mork-gronn)" }}>{title}</h3>
        <TextLink href={href} style={{ alignSelf: "flex-start", marginTop: 6 }}>{linkLabel}</TextLink>
      </div>
    </article>
  );
}
