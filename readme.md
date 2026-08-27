# Aars Design System

Aars is the Møller family's family office and investment company. Harald Aars
Møller founded what is today Møller Mobility Group in 1936; the family's
ownership and operating businesses have been consolidated in Aars since 2014,
and the third and fourth generations run active ownership across Norway,
Sweden, Denmark, Finland, North Macedonia and the Baltics.

Aars is both a family office and an investment company. It manages the owners'
financial investments, but the mandate is broader than return: creating good
workplaces, and giving back by helping solve problems society faces. The core
story is stated as *"Vi står alltid i nye tider"* — we always stand in new
times — and the ownership vision is ownership that creates value for Aars and
for the world around it.

This design system covers **aars.no**, the corporate website — the only product
surface the supplied sources define.

## Sources

| Source | What it gave us |
| --- | --- |
| `Aars_web.fig`, page **Design-Aars-7** (70 frames, guid `500:5127`) | Every screen, the `Komponenter` spec frame (node `615:926`) with Meny / Footer / Textstyles / Farger / Piler / Knapper / Lenker, and all photography and portfolio logos |
| `uploads/Aars_Fargepalett_v2.pdf` | The named brand colours with RGB, HEX, CMYK and Pantone references |
| `uploads/TiemposText-*.otf`, `uploads/Tiempos Headline-*.otf` | The real webfonts (8 files, copied to `assets/fonts/`) |
| `uploads/Aars_logo_svart.svg` | The official wordmark (navnetrekket), copied to `assets/logo/` |
| Brand notes supplied in the brief | Rules for wordmark colouring, colour strategy and typography |

No GitHub repository or codebase was provided. No live URL was supplied — the
Figma file is the source of truth for every value in this system.

## Index

- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `space.css`, `effects.css`, `base.css`
- `components/core/` — Wordmark, Button, TextLink, Arrow
- `components/navigation/` — Menu, MenuOverlay
- `components/layout/` — Footer
- `components/content/` — Hero, SectionHeading, ArticleCard, StatGrid, FeatureSplit, CompanyGrid, CookieBanner, EmailField
- `ui_kits/aars-no/` — interactive recreation of the website (5 screens)
- `templates/aars-page/` — "Aars page" starting template for consuming projects
- `templates/aarsdagen/` — "Aarsdagen mini-site" — six-page event site (Invitasjon, Program, Amazing Race, Deltagere, Q&A, RSVP)
- `templates/hostfest/` — "Høstfest mini-site" — four-page event site (Invitasjon, Kvelden, Praktisk, RSVP)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `assets/` — `fonts/`, `logo/`, `images/`, `companies/`, `people/`, `events/`

### Event mini-sites

Built from two separate Figma files supplied later: `aarsdagen.fig` (page
`Aarsdagen`, frame `Desktop`, node `1:165`) and `hostfest.fig` (page
`Høstfest 2026`, frames `Desktop` / `Tablet` / `Mobile`, node `1:5`). Both are
invitations rather than full sites, so the invitation page is a faithful
recreation and the remaining pages extend it using the nav labels the designs
already name — Aarsdagen's own menu lists Invitasjon, Program, Amazing Race,
Deltagere and Q&A; Høstfest's footer names Praktisk. Copy on those extra pages
is placeholder and needs a pass from whoever owns the event.

Two known deviations from source, both noted rather than silently smoothed:
the six-image collage behind "Bli med! 24. oktober 2026" lost its per-image
coordinates in the file reconstruction, so positions are matched by eye to the
rendered frame; and Aarsdagen's two video blocks are represented by the still
from the file (`f56177c2768e387e.jpg`) with the orange play button drawn as in
the design — there is no video file in the source.
- `SKILL.md` — Agent Skills entry point

### Components

Wordmark, Button, TextLink, Arrow, Menu, MenuOverlay, Footer, Hero,
SectionHeading, ArticleCard, StatGrid, FeatureSplit, CompanyGrid, CookieBanner,
EmailField.

### How the kit's component families map to these components

The Figma file exposes ten standalone symbols with working names. They collapse
into two components:

| Figma symbol | Built as |
| --- | --- |
| `Group 1059` (Meny – Desktop Pos), `Group 1060` (Meny – Desktop Neg) | `Menu breakpoint="desktop"` |
| `Meny – Tablet Pos`, `Meny – Tablet Neg` | `Menu breakpoint="tablet"` |
| `Group 989` (Meny – Mobil Pos), `Group 990` (Meny – Mobil Neg) | `Menu breakpoint="mobile"` |
| `Footer – Desktop`, `Footer – Tablet`, `Footer – Mobil` | `Footer breakpoint="…"` |
| `Group 757` (footer with newsletter) | `Footer showNewsletter` |

## Intentional additions

- Wordmark — intentional addition. Navnetrekket: `Vector.svg` in `Komponenter`, plus the supplied `Aars_logo_svart.svg`. Also covers the `Aars_logo` symbol in `hostfest.fig` (6 instances, node `1:3`), which is the same navnetrekk.
- Button — intentional addition. "Knapper – Desktop / Tablet / Mobil" in `Komponenter` (Normal + Hover/select).
- TextLink — intentional addition. "Lenker – Desktop / Tablet / Mobil" in `Komponenter` (the "Les mer" pattern).
- Arrow — intentional addition. "Piler" in `Komponenter`, the eight arrow glyphs.
- Menu — intentional addition. "Meny – Desktop / Tablet / Mobil", Pos and Neg (`Group 1059`, `Group 1060`, `Group 989`, `Group 990`, `Meny – Tablet Pos`, `Meny – Tablet Neg`).
- MenuOverlay — intentional addition. `Aars_Forsiden_Takeover_Meny_Overlay_Desktop-1440`.
- Footer — intentional addition. "Footer – Desktop / Tablet / Mobil" and `Group 757`.
- Hero — intentional addition. Hero block of `Aars_Forsiden.v.2_Desktop-1440` and `Aars_Om-Aars.v.1_Desktop-1440`.
- SectionHeading — intentional addition. "Aktuelt", "Selskapene våre", "Kort om Aars" headings and the H1–H4 Textstyles spec.
- ArticleCard — intentional addition. Aktuelt grid cards in `Aars_Forsiden.v.2` and `Aars_Aktuelt_Desktop-1440`.
- StatGrid — intentional addition. "Kort om Aars" key-figure band on the front page.
- FeatureSplit — intentional addition. The Familien / Hold din sti ren / Møllersamlingen half-and-half sections.
- CompanyGrid — intentional addition. "Selskapene våre" logo wall.
- CookieBanner — intentional addition. `Aars_Cookiebanner_Desktop` / `Aars_Cookiebanner_Mobil`.
- EmailField — intentional addition. The "Din epost" newsletter field inside `Group 757`.

The Figma file only promoted Meny and Footer to symbols, and even those carry
auto-generated layer names, so every component here is named for what it does.
Nothing is invented: each entry above lists the frame or `Komponenter` spec
block it was built from.

The seven `Group …` / `Meny – Tablet …` symbols the compiler lists as unbuilt
are built — as variants of `Menu` and `Footer` rather than as seven separate
components, since they are the same bar and the same band at three breakpoints
and two tones.

---

## Content fundamentals

**Language.** Norwegian bokmål throughout. Section labels are single plain
nouns: *Aktuelt*, *Kontakt*, *Praktisk*, *Kontaktinfo*, *Rapporter*, *Presse*.
Never a marketing headline where a noun will do.

**Voice: first person plural, always.** Aars speaks as *vi*, never as "Aars
offers" and never as *du*/*you*. From the core story: "I Aars har vi stått i
nye tider i fire generasjoner"; "Det vet vi av erfaring"; "For oss er
innovasjon et verktøy, ikke et mål i seg selv."

**Matter-of-fact, and willing to name failure.** The brand's own copy states
outright that an offensive posture means risking failure — "Det har vi gjort
før, og det kommer helt sikkert til å skje igjen" — and names the Think
investment as the example. Copy in this voice states facts and dates (1936,
1971, flexible working hours, the company doctor scheme during the war) and lets
the reader draw the conclusion. Do not editorialise on top of it.

**Sentence case, always.** Headings, buttons and links are sentence case:
*Les mer*, *Les mer om Aars*, *Se flere saker*, *Last flere saker*,
*Last ned PDF*, *Besøk Møllersamlingen*, *Godta*. No title case, no ALL CAPS
except the two-letter language toggle (*ENG*, *NOR*).

**Calls to action are short verb phrases**, two to four words, and they say
exactly where they go. *Les mer om familien*, not *Learn more*.

**No emoji. No exclamation marks.** The only non-alphabetic glyphs in the whole
system are arrows (↗ for off-site, ↑ for back to top) and the en dash used in
component names.

**Body copy is generous, not clipped.** Ingress paragraphs run three to five
full sentences at 28/42 across a 776px measure. The rhythm is editorial, not
landing-page.

**Placeholders in the file are honest placeholders.** "Nøkkeltall og info",
"123 m.nok fortjeneste" and the Lorem strings are the designers' own; the UI
kit keeps them rather than inventing numbers Aars has not published.

---

## Visual foundations

**Colour strategy.** Orange (#E06900) is the primary colour but is used
strategically: the wordmark, section headings, key figures, and occasionally a
full-bleed background where extra energy is wanted. The mass of every page is
dark green (#203433) and beige at 100/75/50/25 — deep and rich on one side, a
sophisticated warm off-white on the other. The secondary palette (Mellomgrønn,
Lys Grønn, Rosa, Mørk Rød) is for distinction: charts, diagrams, and
sub-identities such as Møllersamlingen. A page uses one or two grounds, not
five.

**Type.** One family, one weight: Tiempos Text Regular — a modern serif drawn
from editorial models, with a large x-height and geometric serifs. Semibold and
italic exist only to create distinction inside running text. Contrast comes from
size, not weight: 62px headings against 20px body, with negative space giving
the eye somewhere to rest. Desktop scale: H1 62/74, H2 48/62, H3 34/44,
H4 & Ingress 28/42, Meny header 22/32, Meny & Body 20/30, Caption 16/26,
Micro 12/18. Tablet and mobile scales are in `tokens/typography.css`.

**Layout.** A 1440 canvas with 64px gutters (61 tablet, 19 mobile); content
column 1312. Sections are full-bleed colour bands stacked vertically with
~144px of internal air. The header floats over the hero rather than sitting in a
bar. Imagery bleeds to the page edge — in the half-and-half sections the photo
touches three edges while the text half keeps its padding. Centred layouts for
section openings; left-aligned for reading.

**Backgrounds.** Flat colour bands only — no gradients anywhere, no textures, no
patterns, no illustration. The only overlay in the system is a warm olive scrim,
`rgba(78,71,48,0.25)`, laid over photography so type stays legible; the takeover
menu adds 20% beige in multiply over the page behind it. No protection
gradients, no frosted capsules, no backdrop blur.

**Imagery.** Warm documentary photography: real people at work, real rooms,
natural light, a beige-olive cast. Portraits in the contact section run
black-and-white. Portfolio logos sit as flat black-and-grey marks on a beige
band, never in tiles or boxes. There is no illustration style in this brand.

**Cards.** The Aktuelt card is an image with text under it — no border, no
shadow, no radius, no background. The image edge *is* the card. The one boxed
element in the file is the report panel: `--radius-card` 10px on
`--surface-card` #FCF9F7, still with no shadow.

**Corners.** Pill (100px) for buttons and chips; 10px for the rare panel; 0 for
images, bands and page sections; 50% for colour swatches.

**Shadows.** None. The file contains a single incidental 25%-black shadow and
nothing else. Depth is colour blocking and hairlines, never elevation.

**Borders and hairlines.** 1px is the only weight. On light: solid #203433
under links and group headings. On dark: white at 65% opacity. Buttons use a
1px inset ring rather than a border so the pill never shifts by a pixel when it
fills.

**Hover and press.** Buttons fill with their outline colour and invert the
label — that is the "Hover/select" state drawn in the kit, and the only one.
Links drop to 65% opacity and keep their colour; they never change hue,
thicken, or move. Menu items turn orange when active. Nothing scales, shrinks or
bounces on press.

**Transparency.** Used for exactly three things: the photo scrim, muted labels
and hairlines at 65% on dark, and the 20% beige multiply behind the takeover
menu. No glassmorphism.

**Motion.** Restrained. Fades and simple translations on a standard ease
(`cubic-bezier(0.4,0,0.2,1)`), 150–400ms; the takeover menu slides in from the
right at 400ms. No parallax, no scroll-jacking, no bounce or spring, no
entrance animations on body copy.

**Whitespace is a brand element.** The notes are explicit: negative space gives
visual pauses and blank surfaces for the eye to rest on. When a section feels
empty, that is usually correct.

---

## Iconography

Aars has no icon set. The entire icon system is **eight arrow glyphs** —
← ↑ → ↓ ↖ ↗ ↘ ↙ — drawn as outlines of the brand serif's own arrows and shown
as "Piler" in the `Komponenter` frame. They appear at two scales: small (≈9px)
inline after off-site links, and ~19px for the footer back-to-top control. The
`Arrow` component carries the exact outlines from the file, rotated in 90° steps.

The only other UI glyph is the menu burger: three 1px lines, 21px wide, 16.789px
tall, in the current text colour. The close control in the takeover menu is two
1px hairlines crossed at 45°.

No icon font, no sprite sheet, no SVG icon library, no PNG icons, no emoji, and
no Unicode symbols beyond the arrows. **Do not substitute Lucide, Heroicons or
similar** — a stroke-icon set would read as foreign here. If a new affordance
genuinely needs a mark, set it in Tiempos or use an arrow.

Brand assets copied into `assets/`: the wordmark (`logo/`, black outline SVG,
masked in code so it can take any brand colour), nine portfolio logos
(`companies/`), six documentary photographs (`images/`) and six portraits
(`people/`).

## Wordmark rules

The wordmark is *Aars* set in Tiempos Regular — open, honest, clear. Approved
combinations: orange on light beige or dark green; light beige or white on
orange or dark green; white or orange over photography or video, whichever gives
the better contrast. **When the wordmark appears alone, orange must be present** —
either in the mark or as the surface behind it. Always ensure strong contrast,
always use the finished design files, and never re-typeset the wordmark.

## Known substitutions and gaps

- **Fonts:** the real Tiempos files were supplied, so nothing is substituted.
  The Figma file also references a face called **Deckard** on 93 nodes, all of
  which are empty text layers with zero width — it is a leftover, not part of
  the identity, and is not reproduced here.
- **Orange tints 50 and 25** are derived (`#EBAB6B`, `#F3D3B6`). The file paints
  only 100 and 75 (`#E06900`, `#E48834`); the palette PDF names no tint values
  for orange. Confirm these against the master palette before print use.
- **Beige 75** is set to `#F3E6DF`, the value the file paints, rather than a
  strict 75% mix of `#E9CEBD` over white (`#EEDACE`).
- The Figma file defines **no Variable collections and no shared text styles** —
  every value in `tokens/` was read off the frames themselves.
- Figma renders the orange as `#DF6A00`; the palette PDF specifies `#E06900`,
  and the PDF value is used.
