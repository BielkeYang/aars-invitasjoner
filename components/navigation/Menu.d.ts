// Intentional addition: no symbol named "Menu" exists in Aars_web.fig.
// Confirmed intentional; built from "Meny – Desktop / Tablet / Mobil" Pos and Neg (Group 1059, Group 1060, Group 989, Group 990, Meny – Tablet Pos, Meny – Tablet Neg).
import * as React from "react";

export interface MenuProps {
  breakpoint?: "desktop" | "tablet" | "mobile";
  /** light = over photography or dark green; dark = over beige/white; accent = orange wordmark. */
  tone?: "light" | "dark" | "accent";
  links?: string[];
  menuLabel?: string;
  onMenuClick?: () => void;
  wordmarkColor?: string;
  style?: React.CSSProperties;
}

/**
 * Meny — the site header bar.
 */
export declare function Menu(props: MenuProps): JSX.Element;
