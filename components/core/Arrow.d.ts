// Intentional addition: no symbol named "Arrow" exists in Aars_web.fig.
// Confirmed intentional; built from "Piler" in Komponenter — the eight arrow glyphs.
import * as React from "react";

export type ArrowDirection = "up" | "right" | "down" | "left" | "up-left" | "up-right" | "down-left" | "down-right";

export interface ArrowProps {
  direction?: ArrowDirection;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

/** Pil — the only icon family in the identity: eight outlined arrow glyphs. */
export declare function Arrow(props: ArrowProps): JSX.Element;
