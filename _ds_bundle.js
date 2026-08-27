/* @ds-bundle: {"format":4,"namespace":"AarsDesignSystem_80df3d","components":[{"name":"ArticleCard","sourcePath":"components/content/ArticleCard.jsx"},{"name":"CompanyGrid","sourcePath":"components/content/CompanyGrid.jsx"},{"name":"CookieBanner","sourcePath":"components/content/CookieBanner.jsx"},{"name":"EmailField","sourcePath":"components/content/EmailField.jsx"},{"name":"FeatureSplit","sourcePath":"components/content/FeatureSplit.jsx"},{"name":"Hero","sourcePath":"components/content/Hero.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatGrid","sourcePath":"components/content/StatGrid.jsx"},{"name":"Arrow","sourcePath":"components/core/Arrow.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"MenuOverlay","sourcePath":"components/navigation/MenuOverlay.jsx"}],"sourceHashes":{"components/content/ArticleCard.jsx":"a54453c91d4b","components/content/CompanyGrid.jsx":"bfade6d90872","components/content/CookieBanner.jsx":"ce0126951a6f","components/content/EmailField.jsx":"bb23e1fde25d","components/content/FeatureSplit.jsx":"aeb49a58df2f","components/content/Hero.jsx":"de47b3e7af52","components/content/SectionHeading.jsx":"eec329154caa","components/content/StatGrid.jsx":"6d65a2e56d11","components/core/Arrow.jsx":"ccbe6b69ecaa","components/core/Button.jsx":"c4919c8bd13b","components/core/TextLink.jsx":"79ef74e2542e","components/core/Wordmark.jsx":"1d1e87278579","components/layout/Footer.jsx":"dc3d0ae1cf24","components/navigation/Menu.jsx":"f355588922bf","components/navigation/MenuOverlay.jsx":"6a78abded613","ui_kits/aars-no/Aktuelt.jsx":"de6f4ce0e827","ui_kits/aars-no/Artikkel.jsx":"9a069b2db24c","ui_kits/aars-no/Forsiden.jsx":"38071c97bfeb","ui_kits/aars-no/Kontakt.jsx":"8ecba74040d4","ui_kits/aars-no/OmAars.jsx":"9efdc916b284","ui_kits/aars-no/data.js":"438e2bdb1ec8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AarsDesignSystem_80df3d = window.AarsDesignSystem_80df3d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/CompanyGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * "Selskapene våre" — the portfolio logo wall. Logos sit on a beige band at a
 * common optical width, never in boxes.
 */
function CompanyGrid({
  companies = [],
  columns = 3,
  background = "var(--surface-beige)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns},1fr)`,
      rowGap: 96,
      columnGap: 40,
      padding: "24px 142px",
      background,
      ...style
    }
  }, rest), companies.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 94
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.logo,
    alt: c.name,
    style: {
      maxWidth: 201,
      maxHeight: 94,
      objectFit: "contain"
    }
  }))));
}
Object.assign(__ds_scope, { CompanyGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CompanyGrid.jsx", error: String((e && e.message) || e) }); }

// components/content/EmailField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nyhetsbrev — the underlined input used in the footer newsletter variant.
 * Fields in this identity are a label and a hairline, nothing more.
 */
function EmailField({
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
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      width,
      maxWidth: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "email",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
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
      outline: "none"
    }
  }, rest)));
}
Object.assign(__ds_scope, { EmailField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EmailField.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Seksjonstittel — the centred section heading. Orange on light surfaces,
 * beige on dark. Orange is used strategically: headings and the wordmark.
 */
function SectionHeading({
  children,
  tone = "accent",
  level = "h1",
  align = "center",
  style,
  ...rest
}) {
  const Tag = level;
  const color = tone === "light" ? "var(--beige-50)" : tone === "dark" ? "var(--aars-mork-gronn)" : tone === "white" ? "var(--white)" : "var(--aars-oransje)";
  const metrics = level === "h1" ? {
    fontSize: "var(--type-h1-size)",
    lineHeight: "var(--type-h1-lh)"
  } : level === "h2" ? {
    fontSize: "var(--type-h2-size)",
    lineHeight: "var(--type-h2-lh)"
  } : level === "h3" ? {
    fontSize: "var(--type-h3-size)",
    lineHeight: "var(--type-h3-lh)"
  } : {
    fontSize: "var(--type-h4-size)",
    lineHeight: "var(--type-h4-lh)"
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: 400,
      textAlign: align,
      color,
      ...metrics,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StatGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * "Kort om Aars" — key figures on the dark green band, orange numerals in a
 * hairline grid. Pass 6 items for the canonical 3×2 arrangement.
 */
function StatGrid({
  heading = "Kort om Aars",
  items = [],
  columns = 3,
  style,
  ...rest
}) {
  const rule = "rgba(255,255,255,0.65)";
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: "var(--surface-dark)",
      fontFamily: "var(--font-core)",
      padding: "56px 64px 72px",
      ...style
    }
  }, rest), heading ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 44px",
      fontWeight: 400,
      fontSize: 34,
      lineHeight: "44px",
      textAlign: "center",
      color: "var(--white)"
    }
  }, heading) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns},1fr)`
    }
  }, items.map((item, i) => {
    const row = Math.floor(i / columns);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 152,
        padding: "24px 16px",
        textAlign: "center",
        fontSize: 34,
        lineHeight: "44px",
        color: "var(--aars-oransje)",
        whiteSpace: "pre-line",
        borderLeft: i % columns === 0 ? "none" : `1px solid ${rule}`,
        borderTop: row === 0 ? "none" : `1px solid ${rule}`
      }
    }, item);
  })));
}
Object.assign(__ds_scope, { StatGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatGrid.jsx", error: String((e && e.message) || e) }); }

// components/core/Arrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Path data transcribed verbatim from the "Piler" set in the Figma file.
   The eight arrows are two outlined glyphs rotated in 90° steps. */
const ORTHO = {
  box: "0 0 18.752 18.784",
  d: "M 0 9.376 L 1.6 10.976 L 8.32 4.192 L 8.256 7.904 L 8.256 18.784 L 10.528 18.784 L 10.528 7.904 L 10.464 4.224 L 17.152 10.976 L 18.752 9.376 L 9.376 0 L 0 9.376 Z"
};
const DIAG = {
  box: "0 0 56 55",
  d: "M 52.818 55 L 52.818 46.145 L 14.764 46.27 L 25.455 36.293 L 56 6.236 L 49.636 0 L 19.091 30.057 L 8.909 40.283 L 9.036 3.243 L 0 3.243 L 0 55 L 52.818 55 Z"
};
const DIRECTIONS = {
  up: {
    glyph: ORTHO,
    rotate: 0
  },
  right: {
    glyph: ORTHO,
    rotate: 90
  },
  down: {
    glyph: ORTHO,
    rotate: 180
  },
  left: {
    glyph: ORTHO,
    rotate: 270
  },
  "down-left": {
    glyph: DIAG,
    rotate: 0
  },
  "up-left": {
    glyph: DIAG,
    rotate: 90
  },
  "up-right": {
    glyph: DIAG,
    rotate: 180
  },
  "down-right": {
    glyph: DIAG,
    rotate: 270
  }
};

/** Pil — the only icon family in the Aars identity. Eight directions. */
function Arrow({
  direction = "up-right",
  size = 20,
  color = "currentColor",
  style,
  ...rest
}) {
  const cfg = DIRECTIONS[direction] || DIRECTIONS["up-right"];
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: cfg.glyph.box,
    width: size,
    height: size,
    fill: color,
    "aria-hidden": "true",
    style: {
      display: "block",
      transform: `rotate(${cfg.rotate}deg)`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: cfg.glyph.d,
    fillRule: "nonzero"
  }));
}
Object.assign(__ds_scope, { Arrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Arrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  dark: {
    line: "var(--aars-mork-gronn)",
    fillText: "var(--beige-50)"
  },
  light: {
    line: "var(--beige-50)",
    fillText: "var(--aars-mork-gronn)"
  },
  accent: {
    line: "var(--aars-oransje)",
    fillText: "var(--beige-25)"
  },
  white: {
    line: "var(--white)",
    fillText: "var(--aars-mork-gronn)"
  }
};
const SIZES = {
  desktop: {
    fontSize: 20,
    lineHeight: "42px",
    padHoriz: 20,
    minHeight: 46
  },
  tablet: {
    fontSize: 18,
    lineHeight: "30px",
    padHoriz: 21,
    minHeight: 42
  },
  mobile: {
    fontSize: 16,
    lineHeight: "26px",
    padHoriz: 20,
    minHeight: 46
  }
};

/** Knapp — the Aars pill button. Outline by default, fills on hover/select. */
function Button({
  children,
  tone = "dark",
  size = "desktop",
  selected = false,
  href,
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const t = TONES[tone] || TONES.dark;
  const s = SIZES[size] || SIZES.desktop;
  const active = (hover || selected) && !disabled;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    minHeight: s.minHeight,
    padding: `2px ${s.padHoriz}px`,
    fontFamily: "var(--font-core)",
    fontWeight: "var(--weight-regular)",
    fontSize: s.fontSize,
    lineHeight: s.lineHeight,
    textAlign: "center",
    whiteSpace: "nowrap",
    borderRadius: "var(--radius-pill)",
    border: "none",
    boxShadow: `inset 0 0 0 1px ${t.line}`,
    background: active ? t.line : "transparent",
    color: active ? t.fillText : t.line,
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.4 : 1,
    textDecoration: "none",
    transition: "background var(--duration-base) var(--ease-standard),color var(--duration-base) var(--ease-standard)",
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: base
  }, handlers, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: base,
    disabled: disabled
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/CookieBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cookiebanner — dark green bar pinned to the bottom of the viewport, caption
 * copy left, single orange-outline "Godta" button right.
 */
function CookieBanner({
  text = "Vi bruker ulike verktøy som informasjonskapsler, for å samle inn data om hvordan besøkende samhandler med nettstedet vårt. Ved å klikke på Godta, godtar du bruken av disse verktøyene.",
  acceptLabel = "Godta",
  onAccept,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 64,
      padding: "40px 64px",
      background: "var(--surface-dark)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 732,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--beige-25)"
    }
  }, text), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: "accent",
    onClick: onAccept,
    style: {
      minWidth: 156
    }
  }, acceptLabel));
}
Object.assign(__ds_scope, { CookieBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CookieBanner.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureSplit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Halv-halv seksjon — a full-bleed photograph on one half, a short text block
 * on the other. Alternate `imageSide` down the page for rhythm.
 */
function FeatureSplit({
  image,
  title,
  body,
  cta,
  ctaHref = "#",
  imageSide = "left",
  background = "var(--surface-page)",
  height = 560,
  style,
  ...rest
}) {
  const media = /*#__PURE__*/React.createElement("div", {
    style: {
      background: image ? `url("${image}") center / cover no-repeat` : "var(--green-25)"
    }
  });
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 24,
      padding: "0 96px",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 400,
      fontSize: 34,
      lineHeight: "44px",
      color: "var(--aars-mork-gronn)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 430,
      fontSize: 20,
      lineHeight: "30px",
      color: "var(--aars-mork-gronn)"
    }
  }, body), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref,
    style: {
      marginTop: 8
    }
  }, cta) : null);
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: height,
      background,
      fontFamily: "var(--font-core)",
      ...style
    }
  }, rest), imageSide === "left" ? media : text, imageSide === "left" ? text : media);
}
Object.assign(__ds_scope, { FeatureSplit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureSplit.jsx", error: String((e && e.message) || e) }); }

// components/content/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Full-bleed hero: photograph under a warm scrim, centred beige headline,
 * outline button. The scrim keeps type legible over any image.
 */
function Hero({
  image,
  headline,
  cta,
  ctaHref = "#",
  height = 766,
  align = "center",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: "relative",
      height,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 40,
      padding: "0 64px",
      boxSizing: "border-box",
      overflow: "hidden",
      background: image ? `url("${image}") center / cover no-repeat` : "var(--green-75)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-image)"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: "relative",
      margin: 0,
      maxWidth: 1007,
      fontWeight: 400,
      fontSize: 48,
      lineHeight: "62px",
      textAlign: align,
      color: "var(--beige-50)"
    }
  }, headline), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: "light",
    href: ctaHref,
    style: {
      position: "relative"
    }
  }, cta) : null);
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Hero.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aars text link ("Lenker"): brand serif with a hairline rule directly under
 * the full width of the label. Used for "Les mer", footer links, list links.
 */
function TextLink({
  children,
  href = "#",
  tone = "dark",
  size = "body",
  external = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = tone === "light" ? "var(--beige-50)" : tone === "muted" ? "var(--text-on-dark-muted)" : tone === "accent" ? "var(--aars-oransje)" : "var(--aars-mork-gronn)";
  const metrics = size === "caption" ? {
    fontSize: 16,
    lineHeight: "26px"
  } : size === "menu-header" ? {
    fontSize: 22,
    lineHeight: "32px"
  } : size === "large" ? {
    fontSize: 24,
    lineHeight: "34px"
  } : {
    fontSize: 20,
    lineHeight: "30px"
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 3,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-regular)",
      color,
      textDecoration: "none",
      borderBottom: `1px solid ${color}`,
      paddingBottom: 0,
      opacity: hover ? 0.65 : 1,
      transition: "opacity var(--duration-base) var(--ease-standard)",
      ...metrics,
      ...style
    }
  }, rest), children, external ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "0.5em",
      lineHeight: 1
    }
  }, "\u2197") : null);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/content/ArticleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aktuelt-kort — an editorial teaser: 384-wide image, kicker, title, "Les mer".
 */
function ArticleCard({
  image,
  kicker,
  title,
  linkLabel = "Les mer",
  href = "#",
  width = 384,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      width,
      maxWidth: "100%",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "384 / 251",
      background: image ? `url("${image}") center / cover no-repeat` : "var(--green-25)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      marginTop: 40
    }
  }, kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      lineHeight: "30px",
      color: "var(--aars-mork-gronn)"
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 400,
      fontSize: 28,
      lineHeight: "42px",
      color: "var(--aars-mork-gronn)"
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: href,
    style: {
      alignSelf: "flex-start",
      marginTop: 6
    }
  }, linkLabel)));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const RATIO = 1920 / 706.22;
const SRC = "/assets/logo/aars-wordmark-black.svg";

/**
 * Navnetrekket — the Aars wordmark. Always rendered from the supplied design
 * file (masked so it can take any brand colour); never redrawn.
 */
function Wordmark({
  height = 34,
  color = "var(--aars-oransje)",
  src,
  style,
  ...rest
}) {
  const url = src || SRC;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": "Aars",
    style: {
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
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const RULE = "rgba(255,255,255,0.65)";
function Group({
  heading,
  children,
  ruleWidth = 100
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      lineHeight: "30px",
      color: "var(--white)",
      opacity: 0.65
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      width: ruleWidth,
      height: 1,
      background: RULE,
      marginTop: 15
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, children));
}
function FootLink({
  children,
  color = "var(--white)",
  external = false
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 3,
      alignSelf: "flex-start",
      fontSize: 16,
      lineHeight: "26px",
      color,
      textDecoration: "none",
      borderBottom: `1px solid ${RULE}`
    }
  }, children, external ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 9
    }
  }, "\u2197") : null);
}

/**
 * Footer — dark green band closing every Aars page. Three breakpoints;
 * an optional newsletter field matches the "Nyhetsbrev" variant in the kit.
 */
function Footer({
  breakpoint = "desktop",
  address = ["Bygdøy Allé 4, 0257 Oslo", "Postboks 2511 Solli, 0202 Oslo"],
  email = "info@aars.no",
  practical = ["Ledige stillinger", "LinkedIn", "Personvern"],
  showNewsletter = false,
  language = "ENG",
  onTop,
  style,
  ...rest
}) {
  const gutter = breakpoint === "desktop" ? 64 : breakpoint === "tablet" ? 61 : 19;
  const stacked = breakpoint === "mobile";
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      position: "relative",
      boxSizing: "border-box",
      width: "100%",
      background: "var(--surface-dark)",
      color: "var(--white)",
      fontFamily: "var(--font-core)",
      padding: stacked ? `40px ${gutter}px 56px` : `40px ${gutter}px 51px`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: breakpoint === "desktop" ? 34 : 28,
      lineHeight: breakpoint === "desktop" ? "44px" : "38px",
      color: "var(--white)"
    }
  }, "Aars"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: stacked ? "flex" : "grid",
      flexDirection: "column",
      gridTemplateColumns: breakpoint === "desktop" ? "348px 232px auto" : "290px auto",
      gap: stacked ? 36 : 0,
      marginTop: breakpoint === "desktop" ? 40 : 36
    }
  }, /*#__PURE__*/React.createElement(Group, {
    heading: "Kontaktinfo"
  }, address.map(line => /*#__PURE__*/React.createElement("span", {
    key: line,
    style: {
      fontSize: 16,
      lineHeight: "26px",
      color: "var(--white)"
    }
  }, line)), /*#__PURE__*/React.createElement(FootLink, null, email)), /*#__PURE__*/React.createElement(Group, {
    heading: "Praktisk",
    ruleWidth: 70
  }, practical.map(p => /*#__PURE__*/React.createElement(FootLink, {
    key: p
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 40,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 3,
      fontSize: 20,
      lineHeight: "26px",
      color: "var(--text-on-dark-muted)",
      textDecoration: "none",
      borderBottom: `1px solid ${RULE}`
    }
  }, "M\xF8llersamlingen", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 10
    }
  }, "\u2197")), showNewsletter ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 268
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--white)",
      opacity: 0.65
    }
  }, "Din epost"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: RULE,
      marginTop: 10
    }
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--beige-75)"
    }
  }, language))), breakpoint === "desktop" ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onTop,
    "aria-label": "Til toppen",
    style: {
      position: "absolute",
      right: gutter + 20,
      bottom: 60,
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Arrow, {
    direction: "up",
    size: 19,
    color: "var(--white)"
  })) : null);
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WIDTHS = {
  desktop: 1306,
  tablet: 628,
  mobile: 334
};
function Burger({
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: 21,
      height: 16.789
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "block",
      height: 1,
      background: color
    }
  })));
}

/**
 * Meny — the Aars site header. One bar, three breakpoints, two tones.
 * Desktop carries inline links; tablet and mobile collapse to the burger.
 */
function Menu({
  breakpoint = "desktop",
  tone = "light",
  links = ["Om Aars"],
  menuLabel = "Meny",
  onMenuClick,
  wordmarkColor,
  style,
  ...rest
}) {
  const color = tone === "dark" ? "var(--aars-mork-gronn)" : tone === "accent" ? "var(--aars-oransje)" : "var(--white)";
  const mark = wordmarkColor || color;
  const compact = breakpoint !== "desktop";
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxSizing: "border-box",
      width: WIDTHS[breakpoint] || WIDTHS.desktop,
      maxWidth: "100%",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      border: "none",
      textDecoration: "none"
    },
    "aria-label": "Aars"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    height: compact ? 24 : 33,
    color: mark
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: compact ? 0 : 28
    }
  }, compact ? null : links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 20,
      lineHeight: "30px",
      color,
      textDecoration: "none",
      border: "none"
    }
  }, l)), compact ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      lineHeight: "30px",
      color
    }
  }, menuLabel), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onMenuClick,
    "aria-label": menuLabel,
    style: {
      display: "inline-flex",
      alignItems: "center",
      background: "none",
      border: "none",
      padding: 0,
      marginLeft: compact ? 0 : 14,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Burger, {
    color: color
  }))));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MenuOverlay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Takeover-menyen — a dark green panel that slides in from the right over a
 * beige-multiplied page. Links at 24/34; ENG pinned bottom right.
 */
function MenuOverlay({
  open = true,
  items = ["Om Aars", "Aktuelt", "Forretningsområder", "Kontakt oss"],
  activeItem,
  onSelect,
  onClose,
  language = "ENG",
  width = 528,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: open ? "auto" : "none",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--aars-beige)",
      opacity: open ? 0.2 : 0,
      mixBlendMode: "multiply",
      transition: "opacity var(--duration-slow) var(--ease-standard)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width,
      maxWidth: "100%",
      background: "var(--surface-dark)",
      transform: open ? "translateX(0)" : `translateX(${width}px)`,
      transition: "transform var(--duration-slow) var(--ease-standard)",
      fontFamily: "var(--font-core)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Lukk",
    style: {
      position: "absolute",
      top: 61,
      right: 66,
      width: 27,
      height: 26,
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 12.5,
      width: 27,
      height: 1,
      background: "var(--white)",
      transform: "rotate(45deg)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 12.5,
      width: 27,
      height: 1,
      background: "var(--white)",
      transform: "rotate(-45deg)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 64,
      display: "flex",
      flexDirection: "column"
    }
  }, items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSelect && onSelect(item);
    },
    style: {
      fontSize: 24,
      lineHeight: "34px",
      color: activeItem === item ? "var(--aars-oransje)" : "var(--beige-25)",
      textDecoration: "none",
      border: "none"
    }
  }, item))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 64,
      bottom: 70,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--beige-75)"
    }
  }, language)));
}
Object.assign(__ds_scope, { MenuOverlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MenuOverlay.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aars-no/Aktuelt.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  ArticleCard,
  Button,
  TextLink
} = window.AarsDesignSystem_80df3d;
function Aktuelt() {
  const d = window.AarsData;
  const grid = d.articles.concat(d.articles).slice(0, 6);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "144px 64px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "Aktuelt"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px auto 0",
      maxWidth: 620,
      fontSize: 20,
      lineHeight: "30px",
      color: "var(--aars-mork-gronn)"
    }
  }, "Les v\xE5re mest aktuelle saker")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,384px)",
      justifyContent: "center",
      columnGap: 79,
      rowGap: 96,
      padding: "96px 64px 0"
    }
  }, grid.map((a, i) => /*#__PURE__*/React.createElement(ArticleCard, _extends({
    key: i
  }, a, {
    href: "#artikkel"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "96px 0 144px"
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Last flere saker")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-beige)",
      padding: "96px 64px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h3",
    tone: "dark",
    align: "left"
  }, "Last ned v\xE5re rapporter her"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      marginTop: 40
    }
  }, ["Investerings-rapport", "Bærekrafts-rapport"].map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      width: 383,
      padding: 32,
      borderRadius: "var(--radius-card)",
      background: "var(--surface-card)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      lineHeight: "42px",
      color: "var(--aars-mork-gronn)"
    }
  }, r), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(TextLink, null, "Last ned PDF")))))));
}
window.Aktuelt = Aktuelt;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aars-no/Aktuelt.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aars-no/Artikkel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  TextLink,
  ArticleCard,
  SectionHeading
} = window.AarsDesignSystem_80df3d;
function Artikkel() {
  const d = window.AarsData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 560,
      background: 'url("../../assets/images/artikkel-generasjonsskifte.png") center 20% / cover no-repeat'
    }
  }), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 776,
      margin: "0 auto",
      padding: "96px 0 144px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: "26px",
      color: "var(--green-75)"
    }
  }, "Aktuelt \xB7 Foto: M\xF8llersamlingen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "24px 0 0",
      fontWeight: 400,
      fontSize: 62,
      lineHeight: "74px",
      color: "var(--aars-mork-gronn)"
    }
  }, "Generasjonsskifte og rollebytte"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "40px 0 0",
      fontSize: 28,
      lineHeight: "42px",
      color: "var(--aars-mork-gronn)"
    }
  }, "Ny styreleder i Aars og M\xF8ller Mobility Group. Det er i dag 3. og 4. generasjon som representerer familien gjennom ledelse og styreverv."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "48px 0 0",
      fontSize: 20,
      lineHeight: "30px",
      color: "var(--aars-mork-gronn)"
    }
  }, "I Aars har vi st\xE5tt i nye tider i fire generasjoner, gjennom nesten hundre \xE5r. Nye tider byr p\xE5 nye muligheter som vi m\xE5 gripe for \xE5 lykkes. Den holdningen har fulgt oss siden 1930-\xE5rene, da Harald Aars M\xF8ller revolusjonerte norsk bilindustri, og den gjelder fortsatt."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "30px 0 0",
      fontSize: 20,
      lineHeight: "30px",
      color: "var(--aars-mork-gronn)"
    }
  }, "Slik vil vi ogs\xE5 ut\xF8ve v\xE5rt eierskap. For \xE5 v\xE6re eier er ikke bare \xE5 eie. Det er \xE5 ville noe. Det handler om \xE5 legge til rette for kommersiell vekst som skaper positive ringvirkninger for samfunnet, og enkeltmennesker."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "48px 0 0",
      padding: "40px 0",
      borderTop: "1px solid var(--beige-100)",
      borderBottom: "1px solid var(--beige-100)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 34,
      lineHeight: "44px",
      color: "var(--aars-oransje)"
    }
  }, "\xABVi tror ikke p\xE5 \xE5 standardisere, men heller p\xE5 \xE5 heve standarden der det er mulig.\xBB")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(TextLink, null, "Tilbake til Aktuelt"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-cream)",
      padding: "120px 64px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h3",
    tone: "dark"
  }, "Flere saker"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 79,
      justifyContent: "center",
      marginTop: 72
    }
  }, d.articles.slice(1, 4).map(a => /*#__PURE__*/React.createElement(ArticleCard, _extends({
    key: a.title
  }, a))))));
}
window.Artikkel = Artikkel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aars-no/Artikkel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aars-no/Forsiden.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  StatGrid,
  SectionHeading,
  ArticleCard,
  FeatureSplit,
  CompanyGrid,
  Button
} = window.AarsDesignSystem_80df3d;
function Forsiden({
  go
}) {
  const d = window.AarsData;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    image: "../../assets/images/hero-forsiden.jpg",
    headline: "I over 85 \xE5r har vi skapt arbeidsplasser og bidratt til \xE5 l\xF8se samfunnsutfordringer gjennom aktivt eierskap.",
    cta: "Les mer om Aars",
    ctaHref: "#om-aars"
  }), /*#__PURE__*/React.createElement(StatGrid, {
    heading: "Kort om Aars",
    items: d.stats
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-cream)",
      padding: "144px 64px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "Aktuelt"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 79,
      justifyContent: "center",
      marginTop: 108
    }
  }, d.articles.slice(0, 3).map(a => /*#__PURE__*/React.createElement(ArticleCard, _extends({
    key: a.title
  }, a, {
    href: "#artikkel"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("aktuelt")
  }, "Se flere saker"))), /*#__PURE__*/React.createElement(FeatureSplit, {
    image: "../../assets/images/portrett-familien.png",
    title: "Familien",
    body: "Mye har skjedd med v\xE5re virksomheter siden Harald Aars M\xF8ller etablerte Str\xF8mmen Auto i 1936. Det samme kan sies om eierskapet.",
    cta: "Les mer om familien"
  }), /*#__PURE__*/React.createElement(FeatureSplit, {
    imageSide: "right",
    image: "../../assets/images/mote-generasjon.jpg",
    title: "Hold din sti ren",
    body: "V\xE5re grunnverdier og h\xF8ye etisk standard skal bringe oss videre \u2013 ogs\xE5 p\xE5 en m\xE5te som vi kan st\xE5 inne for og v\xE6re stolte av.",
    cta: "Les mer om v\xE5re grunnverdier"
  }), /*#__PURE__*/React.createElement(FeatureSplit, {
    image: "../../assets/images/mollersamlingen-utstilling.jpg",
    title: "M\xF8llersamlingen",
    body: "Utforsk den store M\xF8llersamlingen som best\xE5r av en rekker fotografier fra 1800-tallet og frem til i dag",
    cta: "Bes\xF8k M\xF8llersamlingen \u2197"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-beige)",
      padding: "144px 0 120px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "Selskapene v\xE5re"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 108
    }
  }, /*#__PURE__*/React.createElement(CompanyGrid, {
    companies: d.companies,
    background: "transparent"
  }))));
}
window.Forsiden = Forsiden;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aars-no/Forsiden.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aars-no/Kontakt.jsx
try { (() => {
const {
  TextLink,
  SectionHeading,
  EmailField,
  Button
} = window.AarsDesignSystem_80df3d;
function Block({
  heading,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      lineHeight: "32px",
      color: "var(--aars-mork-gronn)"
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 100,
      height: 1,
      background: "var(--aars-mork-gronn)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      marginTop: 8,
      fontSize: 20,
      lineHeight: "30px",
      color: "var(--aars-mork-gronn)"
    }
  }, children));
}
function Kontakt() {
  const d = window.AarsData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "144px 64px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "Kontakt")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 64,
      padding: "96px 64px 0"
    }
  }, /*#__PURE__*/React.createElement(Block, {
    heading: "Bes\xF8k oss"
  }, /*#__PURE__*/React.createElement("span", null, "Bygd\xF8y All\xE9 4, 0257 Oslo")), /*#__PURE__*/React.createElement(Block, {
    heading: "Send oss post"
  }, /*#__PURE__*/React.createElement("span", null, "Postboks 2511 Solli, 0202 Oslo")), /*#__PURE__*/React.createElement(Block, {
    heading: "Send oss en e-post"
  }, /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:info@aars.no"
  }, "info@aars.no")), /*#__PURE__*/React.createElement(Block, {
    heading: "Presse"
  }, /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:presse@aars.no"
  }, "presse@aars.no")), /*#__PURE__*/React.createElement(Block, {
    heading: "Logo og pressefiler"
  }, /*#__PURE__*/React.createElement(TextLink, null, "Last ned her")), /*#__PURE__*/React.createElement(Block, {
    heading: "Ring oss"
  }, /*#__PURE__*/React.createElement("span", null, "+47 24 03 33 00"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "144px 64px 120px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2",
    tone: "dark",
    align: "left"
  }, "V\xE5re ansatte"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      columnGap: 64,
      rowGap: 72,
      marginTop: 64
    }
  }, d.people.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "4 / 5",
      background: `url("${p.photo}") center / cover no-repeat`,
      filter: "grayscale(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontSize: 28,
      lineHeight: "42px",
      color: "var(--aars-mork-gronn)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: "26px",
      color: "var(--green-75)"
    }
  }, p.role))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-beige)",
      padding: "96px 64px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h3",
    tone: "dark",
    align: "left"
  }, "Nyhetsbrev"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      maxWidth: 480,
      fontSize: 20,
      lineHeight: "30px",
      color: "var(--aars-mork-gronn)"
    }
  }, "F\xE5 v\xE5re saker og rapporter i innboksen.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(EmailField, {
    tone: "light"
  }), /*#__PURE__*/React.createElement(Button, null, "Meld meg p\xE5"))));
}
window.Kontakt = Kontakt;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aars-no/Kontakt.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aars-no/OmAars.jsx
try { (() => {
const {
  SectionHeading,
  CompanyGrid,
  Button
} = window.AarsDesignSystem_80df3d;
function PageHero({
  image,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 421,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: `url("${image}") center / cover no-repeat`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-image)"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: "relative",
      margin: 0,
      fontWeight: 400,
      fontSize: 62,
      lineHeight: "74px",
      color: "var(--white)"
    }
  }, title));
}
function OmAars() {
  const d = window.AarsData;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    image: "../../assets/images/hero-om-aars.jpg",
    title: "Om Aars"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "119px 332px 144px",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 28,
      lineHeight: "42px",
      color: "var(--aars-mork-gronn)"
    }
  }, "I over 80 \xE5r har M\xF8ller-familien spilt en sentral rolle i Norges samfunnsutvikling. I dag er familiens eierskap og virke samlet i familie- og holdingselskapet Aars. Selskapets navn g\xE5r tilbake til Harald Aars M\xF8ller som grunnla det som i dag er M\xF8ller Mobility Group. Det er i dag 3. og 4. generasjon som utgj\xF8r de aktive eierne.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-dark)",
      padding: "96px 64px 120px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    level: "h2",
    style: {
      maxWidth: 616,
      margin: "0 auto"
    }
  }, "M\xF8llersamlingen"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 616,
      margin: "32px auto 0",
      fontSize: 20,
      lineHeight: "30px",
      color: "var(--beige-50)"
    }
  }, "En av Nordens st\xF8rste samlinger av fotografi og kj\xF8ret\xF8y, bygget opp gjennom fire generasjoner."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "light"
  }, "Bes\xF8k M\xF8llersamlingen"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "144px 0 120px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "Selskapene v\xE5re"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 108
    }
  }, /*#__PURE__*/React.createElement(CompanyGrid, {
    companies: d.companies,
    background: "transparent"
  }))));
}
window.OmAars = OmAars;
window.PageHero = PageHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aars-no/OmAars.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aars-no/data.js
try { (() => {
window.AarsData = {
  A: "../../assets/",
  articles: [{
    image: "../../assets/images/artikkel-generasjonsskifte.png",
    kicker: "Ny styreleder i Aars og Møller Mobility Group",
    title: "Generasjonsskifte og rollebytte"
  }, {
    image: "../../assets/images/mollersamlingen-utstilling.jpg",
    kicker: "170 år med fotografi fra Møllersamlingen",
    title: "Eksponert: Utstilling Henie Onstad Kunstsenter"
  }, {
    image: "../../assets/images/mote-generasjon.jpg",
    kicker: "Med mulighet til å ta egne valg",
    title: "En eierstruktur for neste generasjon"
  }, {
    image: "../../assets/images/portrett-familien.png",
    kicker: "Harald Møller – styreleder Møller Eiendom",
    title: "Satser på bærekraft og urbanisering"
  }],
  companies: [{
    name: "Møller Mobility Group",
    logo: "../../assets/companies/moller-mobility-group.png"
  }, {
    name: "Møller Eiendom",
    logo: "../../assets/companies/moller-eiendom.png"
  }, {
    name: "Møller Medvind",
    logo: "../../assets/companies/moller-medvind.png"
  }, {
    name: "OneCo",
    logo: "../../assets/companies/oneco.png"
  }, {
    name: "InfoCare",
    logo: "../../assets/companies/infocare.png"
  }, {
    name: "ALFA",
    logo: "../../assets/companies/alfa.png"
  }, {
    name: "Micromatic",
    logo: "../../assets/companies/micromatic.png"
  }, {
    name: "Pizza Hut",
    logo: "../../assets/companies/pizza-hut.png"
  }, {
    name: "ITP Group",
    logo: "../../assets/companies/itp-group.png"
  }],
  people: [{
    name: "Øyvind Schage Førde",
    role: "Styremedlem",
    photo: "../../assets/people/portrait-01.png"
  }, {
    name: "John Giverholt",
    role: "Styremedlem",
    photo: "../../assets/people/portrait-02.png"
  }, {
    name: "Harald Møller",
    role: "Styreleder",
    photo: "../../assets/people/portrait-03.png"
  }, {
    name: "Ansatt",
    role: "Investeringsdirektør",
    photo: "../../assets/people/portrait-04.png"
  }, {
    name: "Ansatt",
    role: "Finansdirektør",
    photo: "../../assets/people/portrait-05.png"
  }, {
    name: "Ansatt",
    role: "Kommunikasjonssjef",
    photo: "../../assets/people/portrait-06.png"
  }],
  stats: ["9\nselskaper", "Nøkkeltall\nog info", "123 m.nok\nfortjeneste", "5000\nansatte", "123 m.nok\ninvestert", "Nøkkeltall\nog info"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aars-no/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.CompanyGrid = __ds_scope.CompanyGrid;

__ds_ns.CookieBanner = __ds_scope.CookieBanner;

__ds_ns.EmailField = __ds_scope.EmailField;

__ds_ns.FeatureSplit = __ds_scope.FeatureSplit;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatGrid = __ds_scope.StatGrid;

__ds_ns.Arrow = __ds_scope.Arrow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.MenuOverlay = __ds_scope.MenuOverlay;

})();
