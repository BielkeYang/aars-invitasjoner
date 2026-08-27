// Intentional addition: no symbol named "CompanyGrid" exists in Aars_web.fig.
// Confirmed intentional; built from the "Selskapene våre" logo wall in Aars_Om-Aars.v.1 and Aars_Forsiden.v.2.
import * as React from "react";

export interface Company { name: string; logo: string }

export interface CompanyGridProps {
  companies?: Company[];
  columns?: number;
  background?: string;
  style?: React.CSSProperties;
}

/** "Selskapene våre" — the portfolio logo wall on a beige band. */
export declare function CompanyGrid(props: CompanyGridProps): JSX.Element;
