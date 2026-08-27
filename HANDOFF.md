# Handoff — Aars design system & Aarsdagen invitation

## What this is

The Aars design system (tokens, components, guidelines, assets) plus two event
mini-sites built on it. Everything is plain HTML, CSS and JSX — no build step,
no npm install.

## Push to GitHub

```
git clone git@github.com:<org>/<repo>.git
cd <repo>
# unzip this export into the repo root
git checkout -b aarsdagen-invitasjon
git add .
git commit -m "Aars design system + Aarsdagen invitation"
git push -u origin aarsdagen-invitasjon
```

Fonts and generated files are both included in this export, as agreed.

## Open in Claude Design

Create a project, then import the repo or attach the unzipped folder. The design
system is recognised automatically and `templates/aarsdagen/Aarsdagen.dc.html`
opens as an editable page. `SKILL.md` at the root gives any agent in the project
the brand rules.

## Root layout

| Path | What |
| --- | --- |
| `styles.css` | Global CSS entry point — `@import`s every token file |
| `tokens/` | Colors, typography, spacing, effects, fonts, base |
| `components/` | 15 React primitives (Button, Menu, Hero, Footer, …) |
| `assets/` | Wordmark, fonts, company logos, event imagery |
| `templates/aarsdagen/` | The Aarsdagen invitation mini-site |
| `templates/hostfest/` | The Høstfest invitation |
| `ui_kits/` | Screen recreations of aars.no |
| `guidelines/` | Foundation specimen cards |
| `readme.md` | Design guide and manifest |
| `SKILL.md` | Agent-invocable skill definition |

## Generated files — do not hand-edit

`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are rebuilt
from source on every change. They are committed for convenience only.

## Fonts

Tiempos Text and Tiempos Headline (Klim Type Foundry) are in `assets/fonts/`
and declared in `tokens/fonts.css`. **These are licensed.** Confirm the
recipient's licence covers their use before making the repository public or
sharing it outside Aars.

## Known placeholders in the Aarsdagen site

Not yet real, and each needs a decision before the invitation goes out:

- **RSVP form** — shows a thank-you state, stores nothing. Needs a real
  endpoint, a Google Form, or a Typeform embed.
- **Registration counter** — simulated, starts at 84 and ticks upward. Needs a
  live source.
- **Deltagere grid** — all names are "Navn Navnesen"; every portrait reuses one
  photo from the Figma file.
- **Team lists** — fictive names on the nine Amazing Race teams.
- **Q&A copy** — drafted by us, not client-approved.
- **"Legg til i kalender"** — not wired to a calendar file.

## Responsiveness

Built from the desktop Figma frames, then made responsive by hand (percentage
widths, `minmax()` grids, `clamp()` type, a full-screen menu below 900px). The
source file has no mobile frames, so mobile layout is our judgement, not a
recreation — worth a design review.

## Going live

Pushing to a branch does not publish the site. For a public URL, produce a
standalone build and host it on Netlify, Vercel, Cloudflare Pages or GitHub
Pages. Ask us for the standalone build; it inlines fonts, images and components
into one self-contained file.
