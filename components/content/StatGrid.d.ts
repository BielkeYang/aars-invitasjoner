// Intentional addition: no symbol named "StatGrid" exists in Aars_web.fig.
// Confirmed intentional; built from the "Kort om Aars" key-figure band on the front page.
import * as React from "react";

export interface StatGridProps {
  heading?: string;
  /** Short strings; \n splits the value from its label. */
  items?: string[];
  columns?: number;
  style?: React.CSSProperties;
}

/** "Kort om Aars" — key figures in orange on the dark green band. */
export declare function StatGrid(props: StatGridProps): JSX.Element;
