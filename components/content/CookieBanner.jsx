import React from "react";
import { Button } from "../core/Button.jsx";

/**
 * Cookiebanner — dark green bar pinned to the bottom of the viewport, caption
 * copy left, single orange-outline "Godta" button right.
 */
export function CookieBanner({
  text = "Vi bruker ulike verktøy som informasjonskapsler, for å samle inn data om hvordan besøkende samhandler med nettstedet vårt. Ved å klikke på Godta, godtar du bruken av disse verktøyene.",
  acceptLabel = "Godta",
  onAccept,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 64,
        padding: "40px 64px",
        background: "var(--surface-dark)",
        fontFamily: "var(--font-core)",
        ...style,
      }}
      {...rest}
    >
      <p style={{ margin: 0, maxWidth: 732, fontSize: 16, lineHeight: "24px", color: "var(--beige-25)" }}>{text}</p>
      <Button tone="accent" onClick={onAccept} style={{ minWidth: 156 }}>{acceptLabel}</Button>
    </div>
  );
}
