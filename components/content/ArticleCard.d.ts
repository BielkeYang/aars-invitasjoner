// Intentional addition: no symbol named "ArticleCard" exists in Aars_web.fig.
// Confirmed intentional; built from Aktuelt grid cards in Aars_Forsiden.v.2 and Aars_Aktuelt_Desktop-1440.
import * as React from "react";

export interface ArticleCardProps {
  image?: string;
  kicker?: string;
  title?: string;
  linkLabel?: string;
  href?: string;
  width?: number;
  style?: React.CSSProperties;
}

/**
 * Aktuelt-kort — editorial teaser: image, kicker, title, "Les mer".
 */
export declare function ArticleCard(props: ArticleCardProps): JSX.Element;
