// Intentional addition: no symbol named "Wordmark" exists in Aars_web.fig.
// Confirmed intentional; built from Navnetrekket — Vector.svg in Komponenter, plus the supplied Aars_logo_svart.svg.
import * as React from "react";

export interface WordmarkProps {
  height?: number;
  /** Any brand colour; the mark is masked, never recoloured by hand. */
  color?: string;
  /** Override the supplied logo file path. */
  src?: string;
  style?: React.CSSProperties;
}

/** Navnetrekket — the Aars wordmark, always rendered from the design file. */
export declare function Wordmark(props: WordmarkProps): JSX.Element;
