// Intentional addition: no symbol named "EmailField" exists in Aars_web.fig.
// Confirmed intentional; built from the "Din epost" newsletter field inside Group 757.
import * as React from "react";

export interface EmailFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tone?: "dark" | "light";
  width?: number;
  style?: React.CSSProperties;
}

/** Nyhetsbrev-felt — a label and a hairline; the only input in the kit. */
export declare function EmailField(props: EmailFieldProps): JSX.Element;
