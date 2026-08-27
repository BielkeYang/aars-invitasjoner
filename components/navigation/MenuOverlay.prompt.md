Takeover-menyen — a 528px dark green panel that slides in from the right while the page behind is multiplied with 20% beige.

**Intentional addition.** The Figma kit does not name a symbol `MenuOverlay`; this component is a confirmed intentional addition, built from `Aars_Forsiden_Takeover_Meny_Overlay_Desktop-1440`.

```jsx
<MenuOverlay open={open} items={["Om Aars","Aktuelt","Forretningsområder","Kontakt oss"]} onClose={close} />
```

Items are 24/34 cream; the active item turns orange. Close is a hairline X, and the language toggle sits bottom right. Requires a positioned parent.
