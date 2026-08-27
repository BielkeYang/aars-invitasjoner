// Intentional addition: no symbol named "CookieBanner" exists in Aars_web.fig.
// Confirmed intentional; built from Aars_Cookiebanner_Desktop / Aars_Cookiebanner_Mobil.
import * as React from "react";

export interface CookieBannerProps {
  text?: string;
  acceptLabel?: string;
  onAccept?: () => void;
  style?: React.CSSProperties;
}

/** Cookiebanner — dark green bar, caption copy, single orange "Godta" button. */
export declare function CookieBanner(props: CookieBannerProps): JSX.Element;
