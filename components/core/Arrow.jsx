import React from "react";

/* Path data transcribed verbatim from the "Piler" set in the Figma file.
   The eight arrows are two outlined glyphs rotated in 90° steps. */
const ORTHO = {
  box: "0 0 18.752 18.784",
  d: "M 0 9.376 L 1.6 10.976 L 8.32 4.192 L 8.256 7.904 L 8.256 18.784 L 10.528 18.784 L 10.528 7.904 L 10.464 4.224 L 17.152 10.976 L 18.752 9.376 L 9.376 0 L 0 9.376 Z",
};
const DIAG = {
  box: "0 0 56 55",
  d: "M 52.818 55 L 52.818 46.145 L 14.764 46.27 L 25.455 36.293 L 56 6.236 L 49.636 0 L 19.091 30.057 L 8.909 40.283 L 9.036 3.243 L 0 3.243 L 0 55 L 52.818 55 Z",
};

const DIRECTIONS = {
  up: { glyph: ORTHO, rotate: 0 },
  right: { glyph: ORTHO, rotate: 90 },
  down: { glyph: ORTHO, rotate: 180 },
  left: { glyph: ORTHO, rotate: 270 },
  "down-left": { glyph: DIAG, rotate: 0 },
  "up-left": { glyph: DIAG, rotate: 90 },
  "up-right": { glyph: DIAG, rotate: 180 },
  "down-right": { glyph: DIAG, rotate: 270 },
};

/** Pil — the only icon family in the Aars identity. Eight directions. */
export function Arrow({ direction = "up-right", size = 20, color = "currentColor", style, ...rest }) {
  const cfg = DIRECTIONS[direction] || DIRECTIONS["up-right"];
  return (
    <svg
      viewBox={cfg.glyph.box}
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      style={{ display: "block", transform: `rotate(${cfg.rotate}deg)`, ...style }}
      {...rest}
    >
      <path d={cfg.glyph.d} fillRule="nonzero" />
    </svg>
  );
}
