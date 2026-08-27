Seksjonstittel — the centred heading that opens a section ("Aktuelt", "Selskapene våre", "Kort om Aars").

**Intentional addition.** The Figma kit does not name a symbol `SectionHeading`; this component is a confirmed intentional addition, built from the "Aktuelt" / "Selskapene våre" / "Kort om Aars" headings and the H1–H4 Textstyles spec.

```jsx
<SectionHeading>Aktuelt</SectionHeading>
<SectionHeading tone="white" level="h3">Kort om Aars</SectionHeading>
```

Orange on light surfaces, white on the dark green band. Headings are the main place orange appears — keep it to one per section.
