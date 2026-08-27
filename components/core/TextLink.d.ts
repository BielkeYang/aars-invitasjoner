// Intentional addition: no symbol named "TextLink" exists in Aars_web.fig.
// Confirmed intentional; built from "Lenker – Desktop / Tablet / Mobil" in Komponenter (the "Les mer" pattern).
import * as React from "react";

export interface TextLinkProps {
  children?: React.ReactNode;
  href?: string;
  tone?: "dark" | "light" | "muted" | "accent";
  size?: "body" | "caption" | "menu-header" | "large";
  /** Appends the ↗ glyph for off-site links. */
  external?: boolean;
  style?: React.CSSProperties;
}

/** Lenke — serif label with a hairline rule under its full width. */
export declare function TextLink(props: TextLinkProps): JSX.Element;
