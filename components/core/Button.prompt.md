Knapp — the Aars pill button; use it for every call to action (hero CTA, "Les mer om Aars", "Godta", "Play").

**Intentional addition.** The Figma kit does not name a symbol `Button`; this component is a confirmed intentional addition, built from "Knapper – Desktop / Tablet / Mobil" in `Komponenter` (Normal + Hover/select).

```jsx
<Button tone="light" href="/om-aars">Les mer om Aars</Button>
```

- `tone`: `dark` on beige/white, `light` over photography or dark green, `accent` for orange-outline moments (cookie banner, video play), `white` on the dark green band.
- Hover/select fills the pill with the outline colour and inverts the label — this is the only button state in the kit.
- `size` follows the breakpoint scales: desktop 20/42, tablet 18/30, mobile 16/26. There is no filled-by-default or secondary button.
