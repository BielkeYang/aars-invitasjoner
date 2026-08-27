// Intentional addition: no symbol named "FeatureSplit" exists in Aars_web.fig.
// Confirmed intentional; built from the Familien / Hold din sti ren / Møllersamlingen half-and-half sections.
import * as React from "react";

export interface FeatureSplitProps {
  image?: string;
  title?: string;
  body?: string;
  cta?: string;
  ctaHref?: string;
  imageSide?: "left" | "right";
  background?: string;
  height?: number;
  style?: React.CSSProperties;
}

/** Halv-halv seksjon — full-bleed photo beside a short text block. */
export declare function FeatureSplit(props: FeatureSplitProps): JSX.Element;
