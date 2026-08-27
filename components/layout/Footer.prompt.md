Footer — the dark green band that closes every Aars page: wordmark-scale "Aars", contact details, practical links, Møllersamlingen and the language toggle.

**Intentional addition.** The Figma kit does not name a symbol `Footer`; this component is a confirmed intentional addition, built from "Footer – Desktop / Tablet / Mobil" and `Group 757`.

```jsx
<Footer breakpoint="desktop" onTop={() => window.scrollTo({top:0})} />
```

- `showNewsletter` adds the "Din epost" hairline field from the newsletter variant.
- Group headings sit at 65% white with a short hairline beneath; links are underlined at 16/26.
- Desktop shows the back-to-top arrow at the right edge.
