// Intentional addition: no symbol named "SectionHeading" exists in Aars_web.fig.
// Confirmed intentional; built from the "Aktuelt" / "Selskapene våre" / "Kort om Aars" headings and the H1–H4 Textstyles spec.
import * as React from "react";

export interface SectionHeadingProps {
  children?: React.ReactNode;
  tone?: "accent" | "dark" | "light" | "white";
  level?: "h1" | "h2" | "h3" | "h4";
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
}

/** Seksjonstittel — centred section heading, orange by default. */
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
