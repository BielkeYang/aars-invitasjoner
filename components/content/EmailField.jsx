import React from "react";

/**
 * Nyhetsbrev — the underlined input used in the footer newsletter variant.
 * Fields in this identity are a label and a hairline, nothing more.
 */
export function EmailField({
  placeholder = "Din epost",
  value,
  onChange,
  tone = "dark",
  width = 268,
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  const color = onDark ? "var(--white)" : "var(--aars-mork-gronn)";
  const rule = onDark ? "rgba(255,255,255,0.65)" : "var(--aars-mork-gronn)";
  return (
    <label style={{ display: "block", width, maxWidth: "100%", ...style }}>
      <input
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "0 0 10px",
          fontFamily: "var(--font-core)",
          fontSize: 16,
          lineHeight: "24px",
          color,
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${rule}`,
          outline: "none",
        }}
        {...rest}
      />
    </label>
  );
}
