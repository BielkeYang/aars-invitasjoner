// Intentional addition: no symbol named "Hero" exists in Aars_web.fig.
// Confirmed intentional; built from the hero block of Aars_Forsiden.v.2_Desktop-1440 and Aars_Om-Aars.v.1_Desktop-1440.
import * as React from "react";

export interface HeroProps {
  image?: string;
  headline?: React.ReactNode;
  cta?: string;
  ctaHref?: string;
  height?: number;
  align?: "left" | "center";
  style?: React.CSSProperties;
}

/**
 * Full-bleed hero: photograph, warm scrim, centred beige headline.
 */
export declare function Hero(props: HeroProps): JSX.Element;
