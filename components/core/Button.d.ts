// Intentional addition: no symbol named "Button" exists in Aars_web.fig.
// Confirmed intentional; built from "Knapper – Desktop / Tablet / Mobil" in Komponenter (Normal + Hover/select).
import * as React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  /** Border/label colour context. */
  tone?: "dark" | "light" | "accent" | "white";
  /** Breakpoint metrics: 20/42, 18/30, 16/26. */
  size?: "desktop" | "tablet" | "mobile";
  /** Renders the filled (hover/select) state permanently. */
  selected?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/**
 * Knapp — the Aars pill button: hairline outline that fills on hover/select.
 */
export declare function Button(props: ButtonProps): JSX.Element;
