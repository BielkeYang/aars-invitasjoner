Meny — the Aars site header: wordmark left, links and burger right. One bar per breakpoint.

**Intentional addition.** The Figma kit does not name a symbol `Menu`; this component is a confirmed intentional addition, built from "Meny – Desktop / Tablet / Mobil" Pos and Neg (`Group 1059`, `Group 1060`, `Group 989`, `Group 990`, `Meny – Tablet Pos`, `Meny – Tablet Neg`).

```jsx
<Menu breakpoint="desktop" tone="light" links={["Om Aars"]} onMenuClick={open} />
```

- `tone="light"` over photography or the dark green band; `dark` over beige/white; `accent` gives the orange wordmark used on mobile.
- Tablet and mobile drop the inline links and show only the burger.
- Pair with `MenuOverlay` for the takeover navigation.
