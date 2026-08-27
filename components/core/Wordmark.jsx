import React from "react";

const RATIO = 1920 / 706.22;
const SRC = "/assets/logo/aars-wordmark-black.svg";

/**
 * Navnetrekket — the Aars wordmark. Always rendered from the supplied design
 * file (masked so it can take any brand colour); never redrawn.
 */
export function Wordmark({ height = 34, color = "var(--aars-oransje)", src, style, ...rest }) {
  const url = src || SRC;
  return (
    <span
      role="img"
      aria-label="Aars"
      style={{
        display: "inline-block",
        height,
        width: height * RATIO,
        backgroundColor: color,
        WebkitMaskImage: `url("${url}")`,
        maskImage: `url("${url}")`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        ...style,
      }}
      {...rest}
    />
  );
}
