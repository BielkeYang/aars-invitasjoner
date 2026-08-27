// Intentional addition: no symbol named "Footer" exists in Aars_web.fig.
// Confirmed intentional; built from "Footer – Desktop / Tablet / Mobil" and Group 757.
import * as React from "react";

export interface FooterProps {
  breakpoint?: "desktop" | "tablet" | "mobile";
  address?: string[];
  email?: string;
  practical?: string[];
  /** Shows the "Din epost" newsletter field (Group 757 variant). */
  showNewsletter?: boolean;
  language?: string;
  onTop?: () => void;
  style?: React.CSSProperties;
}

/**
 * Footer — the dark green band that closes every Aars page.
 */
export declare function Footer(props: FooterProps): JSX.Element;
