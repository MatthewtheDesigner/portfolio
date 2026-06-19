# Portfolio Design System

A specification of the design language used in `portfolio.html`, written so it can be passed back to a model as the source of truth when generating new pages, sections, or projects in the same style.

---

## 1. Design philosophy

Editorial, quiet, and serif-led. The page reads like a print magazine spread translated to the web: generous negative space, hairline rules instead of boxes, and a strict pairing between a Chinese serif for body and a heavy condensed sans for labels. Color is restrained — a warm off-white background, near-black text, and grey subdivided into "speaking grey" and "structural light grey." Animation is limited to a soft fade-and-rise as sections enter the viewport. Imagery is cinematic (full-bleed or two-up grids) and never decorative.

When generating new content, the rule of thumb is: **if it would belong in a paper portfolio, it belongs here.** Anything that looks like a UI component (gradients, buttons with shadows, rounded cards, icons in colored bubbles) does not belong.

---

## 2. Color palette

The palette is defined as CSS custom properties on `:root` and is the only legal color source for non-image elements.

```css
:root {
  --bg:          #F0EFED;  /* page background, warm off-white */
  --black:       #1a1a1a;  /* headings, body text, strong rules */
  --grey:        #999999;  /* secondary text, soft labels */
  --light-grey:  #c8c8c8;  /* tertiary text, muted captions */
  --border:      #d0cfc9;  /* hairline rules between sections */
}
```

White (`#fff`) is used only over photographic content (e.g. the project hero overlay). No accent or brand colors. No gradients except the dark-to-transparent overlay on the project hero image.

---

## 3. Typography

Two families, strictly paired.

```css
font-family: 'Noto Serif TC', serif;          /* Chinese + body */
font-family: 'Roboto Condensed', sans-serif;    /* labels, names, captions */
```

Roboto Condensed is always weight 900 with letter-spacing applied (`0.08em` to `0.25em` depending on context) and almost always uppercase. SourceHanSerif uses weight 400 for body and 700 for emphasis.

Three core sizes are exposed as CSS variables and used everywhere:

```css
--heading: 56px;   /* section headings */
--body:    24px;   /* paragraph and meta values */
--small:   18px;   /* labels, captions, nav */
```

A handful of larger sizes are hard-coded for display text:

```
108px — hero name (Chinese)
124px — project hero title (English)
 64px — hero name (English transliteration)
 60px — footer name
 35px — pull-quote French line
 27px — project hero subtitle
 22px — nav name, large captions
 20px — about-entry description
 14px — fine print, copyright
```

Letter-spacing on Roboto Condensed:
- `0.06em` for large display (hero title, footer name)
- `0.08em` for English transliterations
- `0.10em–0.15em` for body-size labels and contact info
- `0.18em–0.25em` for small uppercase labels (`section-index`, `meta-label`, `tool-tag`)

Line-height: `1.0` for display headings, `1.1–1.2` for section headings, `1.6` for meta values, `1.8–1.9` for body paragraphs.

---

## 4. Layout grid

The body is fully fluid (`width: 100%`) with `overflow-x: hidden` enforced on `html`. There is no fixed canvas width.

A single horizontal padding token is used for almost every section:

```css
--margin: 50px;     /* applied as `padding: <vertical> var(--margin)` */
```

Vertical rhythm comes from generous section padding:

```
Hero          — fills viewport (min-height: 100vh), padding-top 80px
About         — 140px var(--margin)
Quote         — 160px var(--margin)
Project meta  —  80px var(--margin)
Project body  — 100px var(--margin)
Footer        —  80px var(--margin)
Section gaps  — 120px between project sub-sections, 80px between split-layout blocks
```

Sections are separated by a single 1px border (`var(--border)`) at the top, never both top and bottom.

Common grid templates:

```css
#hero            { grid-template-columns: 1fr 1fr; }                /* image | text */
#about           { grid-template-columns: 340px 1fr 1fr; gap: 0 80px; } /* index | block | block */
.project-meta    { grid-template-columns: 1fr 1fr 1fr 1fr; }        /* 4 meta items */
.split-layout    { grid-template-columns: 1fr 1fr; gap: 80px; }     /* text | media */
.img-two         { grid-template-columns: 1fr 1fr; gap: 2px; }
.img-three       { grid-template-columns: 1fr 1fr 1fr; gap: 2px; }
```

The 2px gap between images is intentional — it creates the impression of contact-sheet tiling rather than separated cards.

---

## 5. Section anatomy

Every long-form section follows the same anatomy when adapted to a project:

```
project-section-label    →  Roboto 900, --small, uppercase, 0.20em tracking, light-grey
                            Form: "01 — 設計概念"
project-section-heading  →  SourceHanSerif 400, --heading, line-height 1.2, black
project-section-body     →  SourceHanSerif 400, --body, line-height 1.9, grey, max-width 760px
```

The label–heading–body trio is the workhorse of the page. Numeric prefixes (`01 — `, `02 — `, …) carry through the document and are the only place where indexing is visible. The body paragraph is left-aligned with a `max-width: 760px` to preserve a comfortable measure, regardless of how wide the column is.

The about section uses a slightly different vocabulary:

```
section-index            →  "01 — 關於" in 11px Roboto 900, light-grey
section-heading          →  "學歷" / "經歷" at --heading, with 48px bottom margin
about-entry              →  border-top hairline, 24px top padding, 48px between entries
about-entry-label        →  Roboto 900, --small, uppercase, 0.18em tracking, grey
about-entry-title        →  SourceHanSerif 700, --body, black, line-height 1.4
about-entry-org          →  SourceHanSerif 400, 18px, light-grey
about-entry-desc         →  SourceHanSerif 400, 20px, grey, line-height 1.8
```

---

## 6. Components

**Navigation** is fixed to the top with a translucent backdrop (`rgba(240,239,237,0.92)` plus `backdrop-filter: blur(8px)`) and a single 1px bottom border. The brand mark on the left is two uppercase letters in Roboto 900 (`MW`); links on the right use SourceHanSerif at 18px in grey, with a 200ms color transition to black on hover.

**Hero** is a full-height two-column split. Left is a single full-bleed portrait with `mix-blend-mode: multiply` and a subtle `grayscale(8%)` filter so the photograph sits inside the page's tonal range rather than punching through. Right is the typographic block: small uppercase role label, large Chinese name, larger English transliteration in heavy condensed sans, a 60px-wide hairline divider, contact lines, and a "向下捲動" cue with a trailing 60px hairline.

**Quote** is a single centered block, max-width 900px. The French line is italic light-grey at 35px; the English translation is italic grey at body size; the attribution is Roboto 900 small caps in black. The whole block is meant to function as a breath between sections.

**Project hero** is a full-bleed image with an absolute-positioned overlay at the bottom. The overlay uses a `linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)` and contains the project title at 124px in Roboto 900 (white) and a right-aligned subtitle in SourceHanSerif (white at 70% opacity).

**Project meta** is a four-column strip directly under the project hero: each `meta-item` shows a small uppercase label in light-grey above a SourceHanSerif value at body size. Items are separated by 1px right borders that do not extend to the last item.

**Image grids** — `img-full`, `img-two`, `img-three` — all use `width: 100%; height: auto` so images render at their native aspect ratio. Captions sit underneath in Roboto small caps (`img-caption`), 14px on 40px bottom padding, in light-grey, prefixed with an em-dash.

**Tool tags** (`tools-grid` + `.tool-tag`) are flex-wrapped inline pills with hairline borders, 8px × 20px padding, Roboto 900 at `--small`, uppercase, 0.15em tracking. Tags carry a category vocabulary like `個人作品`, `工業設計`, `使用者研究`, and never use color or filled backgrounds.

**Split layout** is a 1fr 1fr two-column grid with 80px gap. Text on one side, media on the other. A `reverse` modifier flips the visual order via `direction: rtl` on the grid (children re-flipped with `direction: ltr`).

**Footer** is a single flex row with text bottom-aligned (`align-items: flex-end`). The signature "Matthew Wang" sits at 60px in Roboto 900 with a SourceHanSerif sub-line beneath; contact details are right-aligned and end with a 14px location stamp in light-grey.

---

## 7. Diagrams (inline SVG)

Custom diagrams in this portfolio are inline SVG, not raster images, and they reuse the system's typography and color tokens.

```html
<svg viewBox="0 0 W H" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;background:transparent;">
  <defs>
    <style>
      .label-en { font-family: 'Roboto Condensed', sans-serif; font-weight: 900;
                  font-size: 14px; letter-spacing: 0.22em; fill: #999999; }
      .label-cn { font-family: 'Noto Serif TC', serif; font-weight: 700;
                  font-size: 32px; fill: #1a1a1a; }
      .item     { font-family: 'Noto Serif TC', serif; font-size: 22px; fill: #1a1a1a; }
      .grid     { stroke: #d0cfc9; stroke-width: 1; }
      .divider  { stroke: #1a1a1a; stroke-width: 1; }
    </style>
  </defs>
  …
</svg>
```

Rules: only stroke shapes (no fills) for connecting lines, hairline divider underlines (~140px) under each section label inside the SVG, and the same color tokens as the rest of the page.

---

## 8. Motion

A single behavior: elements with the `reveal` class start at `opacity: 0; transform: translateY(30px)` and transition to `opacity: 1; transform: none` over 0.8s ease when the `visible` class is added by an `IntersectionObserver` (threshold `0.1`). No staggers, no scroll-driven parallax, no hover micro-interactions beyond the nav/contact link color transitions. Add `class="reveal"` to anything that should fade in on scroll.

---

## 9. Responsive behavior

The layout is fluid: `body { width: 100%; }` and `html { overflow-x: hidden; }`. Grid columns are defined in `fr` units so they scale with the viewport. Images use `width: 100%; height: auto` so aspect ratios stay intact and nothing is cropped on narrower windows. Display text sizes are not yet broken into media-query tiers — the assumption is desktop-first, ~1280px and up. If a smaller breakpoint is ever needed, scale `--heading`, `--body`, hero name, and project hero title down proportionally; do not let the structural padding (`var(--margin)`) drop below 24px.

---

## 10. HTML skeleton

A reusable starting point. Replace the marked content blocks; do not change tag classes or structural order.

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>NAME — DISCIPLINE</title>
  <style>/* paste full design system CSS here */</style>
</head>
<body>

<nav>
  <a class="nav-name" href="#hero">XX</a>
  <ul class="nav-links">
    <li><a href="#about">關於</a></li>
    <li><a href="#project">作品</a></li>
    <li><a href="mailto:…">聯繫</a></li>
  </ul>
</nav>

<section id="hero">
  <div class="hero-left"><img src="…" alt=""></div>
  <div class="hero-right">
    <p class="hero-label">職稱 · 學校</p>
    <h1 class="hero-name">中文名</h1>
    <p class="hero-name-en">English Name</p>
    <div class="hero-divider"></div>
    <div class="hero-contact">
      <span>+886 …</span>
      <a href="mailto:…">…@…</a>
    </div>
    <p class="hero-scroll">向下捲動</p>
  </div>
</section>

<section id="about">
  <div class="section-index">01 — 關於</div>
  <div>
    <h2 class="section-heading reveal">學歷</h2>
    <div class="about-block">
      <div class="about-entry reveal">
        <p class="about-entry-label">大學</p>
        <p class="about-entry-title">系所名稱</p>
        <p class="about-entry-org">學校名稱</p>
      </div>
      <!-- additional .about-entry … -->
    </div>
  </div>
  <div>
    <h2 class="section-heading reveal">經歷</h2>
    <div class="about-block"><!-- about-entry … --></div>
  </div>
</section>

<section id="quote">
  <div class="quote-inner reveal">
    <p class="quote-fr">« … »</p>
    <p class="quote-en">"…"</p>
    <p class="quote-author">— Author</p>
  </div>
</section>

<section id="project">
  <div class="project-hero">
    <img src="…" alt="">
    <div class="project-hero-overlay">
      <p class="project-hero-title">PROJECT</p>
      <p class="project-hero-subtitle">中文一行說明</p>
    </div>
  </div>

  <div class="project-meta">
    <div class="meta-item"><p class="meta-label">使用者</p><p class="meta-value">…</p></div>
    <div class="meta-item"><p class="meta-label">地點</p>  <p class="meta-value">…</p></div>
    <div class="meta-item"><p class="meta-label">進行時長</p><p class="meta-value">…</p></div>
    <div class="meta-item"><p class="meta-label">使用軟體</p><p class="meta-value">…</p></div>
  </div>

  <div class="project-content">
    <div class="project-section reveal">
      <div class="tools-grid" style="margin-top:0;margin-bottom:32px;">
        <span class="tool-tag">…</span>
        <span class="tool-tag">…</span>
      </div>
      <p class="project-section-label">01 — 設計概念</p>
      <h3 class="project-section-heading">小標題</h3>
      <p class="project-section-body">段落…</p>
    </div>

    <div class="img-full reveal">
      <img src="…" alt="">
      <p class="img-caption">— 標題 / 說明</p>
    </div>

    <div class="project-section reveal" style="margin-top:80px;">
      <p class="project-section-label">02 — 使用者調查</p>
      <h3 class="project-section-heading">小標題</h3>
      <p class="project-section-body">段落…</p>
    </div>

    <div class="img-two reveal">
      <img src="…" alt="">
      <img src="…" alt="">
    </div>

    <div class="split-layout reveal" style="margin-top:80px;">
      <div>
        <h3 class="project-section-heading">小標題</h3>
        <p class="project-section-body">段落…</p>
      </div>
      <div><!-- supporting media or inline SVG diagram --></div>
    </div>

    <div class="img-full reveal">
      <img src="…" alt="">
      <p class="img-caption">— 產品色系 / 說明</p>
    </div>
  </div>
</section>

<footer>
  <div>
    <p class="footer-name">English Name</p>
    <p class="footer-sub">中文系所 · 學校 · 年份</p>
    <p class="footer-copy">© YEAR 中文姓名. 版權所有。</p>
  </div>
  <div class="footer-contact">
    <span>+886 …</span>
    <a href="mailto:…">…@…</a>
    <span style="color:var(--light-grey);margin-top:8px;font-size: 14px;letter-spacing:0.12em;">城市 · 國家</span>
  </div>
</footer>

<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>

</body>
</html>
```

---

## 11. Voice and content rules

Copy alternates between two registers. **Roman labels** are uppercase English category words (`PSYCHOLOGICAL`, `COURSE`, `BODY`, `EQUIPMENT`, `PROJECT`) — short, declarative, never sentences. **Chinese body copy** is reflective and process-oriented, written in first person, often describing a research or design move ("我重新連絡受訪者…"). Pull quotes are in original language plus translation, never paraphrased to English-only.

Numeric section labels (`01 —`, `02 —`) restart at 01 inside each `project-content`, separately from the about section's own `01 —`. Em-dashes (`—`) separate index from label and prefix every image caption.

Images carry both a captioned theme and a slash-delimited descriptor (`— 使用情境 / 俯視視角`). Tool tags are noun phrases at the granularity of a discipline (`工業設計`, `使用者研究`), not skills (`Photoshop`, `Sketch`).

---

## 12. Quick reference checklist for new content

When generating a new page or new project block:

- [ ] Use only the five palette tokens; never introduce new colors.
- [ ] Pair RobotoCondensed (heavy, tracked, uppercase) with SourceHanSerif (regular, calm).
- [ ] Use `--heading`, `--body`, `--small` for normal sizing; reach for hard-coded sizes only for display text.
- [ ] Preface each project sub-section with `NN — 中文標籤`.
- [ ] Add `class="reveal"` to any block that should fade in.
- [ ] Use `width: 100%; height: auto` on images; never set fixed pixel heights.
- [ ] Keep `body` fluid (`width: 100%`) and let the existing grids do the layout work.
- [ ] Diagrams are inline SVG using the same tokens, never PNG screenshots.
- [ ] Captions begin with `— ` and use a single ` / ` to separate theme from descriptor.
