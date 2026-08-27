// Intentional addition: no symbol named "MenuOverlay" exists in Aars_web.fig.
// Confirmed intentional; built from Aars_Forsiden_Takeover_Meny_Overlay_Desktop-1440.
import * as React from "react";

export interface MenuOverlayProps {
  open?: boolean;
  items?: string[];
  activeItem?: string;
  onSelect?: (item: string) => void;
  onClose?: () => void;
  language?: string;
  width?: number;
  style?: React.CSSProperties;
}

/** Takeover-menyen — dark green panel over a beige-multiplied page. */
export declare function MenuOverlay(props: MenuOverlayProps): JSX.Element;
