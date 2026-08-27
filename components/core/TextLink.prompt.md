Lenke — an inline link: serif label with a hairline rule under its full width. This is the "Les mer" pattern used through articles, cards and the footer.

**Intentional addition.** The Figma kit does not name a symbol `TextLink`; this component is a confirmed intentional addition, built from "Lenker – Desktop / Tablet / Mobil" in `Komponenter` (the "Les mer" pattern).

```jsx
<TextLink href="/aktuelt">Les mer</TextLink>
<TextLink tone="muted" external>Møllersamlingen</TextLink>
```

- `tone="muted"` is the grey-green footer treatment; `light` is for dark backgrounds.
- `external` appends the ↗ glyph, exactly as in the footer.
- Hover drops opacity to 0.65. Never change colour on hover.
