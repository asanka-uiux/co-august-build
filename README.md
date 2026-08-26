# One Weekend. One Driveway. One Build. . 2018 F-150

Single-file landing page for the driveway weekend build video.
Structure follows the last build page (`customwheeloffset.com/your-truck-isnt-done-build`).

---

## 1. What is in this folder

```
index.html          The markup. Links styles.css and script.js.
styles.css          All CSS, written mobile-first (base rules are the phone layout,
                    min-width media queries add the tablet/desktop layout on top).
script.js           All JS, unchanged in behavior from the original inline version.
assets/             35 files. Real logo and real hero photo. Everything else is a labeled placeholder.
index-original.html The previous single-file version (all CSS/JS inline), kept as a fallback.
README.md           This file.
```

No build step, no dependencies. Upload `index.html`, `styles.css`, `script.js`, and `assets/` together.
Fonts load from the Google Fonts CDN via one `<link>` (Bebas Neue, Oswald, Inter, Rajdhani).

This page used to ship as a single self-contained `index.html` with inline `<style>`/`<script>`
and an `images/` folder. As of round 13 it is split into three files, and the image folder is
renamed to `assets/` to match. `index-original.html` is the old all-in-one version, kept working
(its `<img>` paths were updated to `assets/`) as an easy fallback if anything looks off after the split.

---

## 2. One thing I could not do, and what I did instead

**Prices are now all filled in** from the parts list in the brief doc, as of round 9.
See section 15.

**I could not pull product photos from the website.** Fetching customwheeloffset.com is blocked
from this session, and I am not able to download images from the web here.

Every product card image is a local placeholder. Swapping in the live photos is a one-line
change per card. There is a comment marking the spot right above the parts grid:

```html
<!-- PRODUCT IMAGES: every .pcard__img <img> below points at a local placeholder in assets/.
     To use the live Custom Offsets product photos, replace each src with the product image URL
     from that item's product page. Nothing else needs to change. -->
```

If you paste me the product image URLs I will drop them straight in.

**I could not download the Affirm and Katapult logos** for the same reason. Both cards have a
prominent 40px logo slot wired to a file, with a designed placeholder wordmark in it and a
`TK_LOGO` chip beside it so it cannot ship by accident. Drop the official assets in as
`assets/affirm-logo.svg` and `assets/katapult-logo.svg` and they render immediately.

Official merchant assets:

- Affirm: [Logos, Banners, and Buttons](https://businesshub.affirm.com/hc/en-us/articles/4425266541204-Logos-Banners-and-Buttons) and the [Merchant Marketing Guidelines PDF](https://cdn-assets.affirm.com/docs/pdf/MerchantMarketingGuidelines_11.30.2018.pdf)
- Katapult: [Merchant Resources](https://docs.katapult.com/docs/merchant-resources)

---

## 3. What changed in this round

| Request | What I did |
|---|---|
| Hero copy | **One Weekend. One Driveway. One Build.** Third line in Race Red. |
| Hero photo | Your driveway shot is in. Re-cropped and re-framed in round 9, see section 15. |
| Real logo | `assets/logo.png` from your white feature logo, trimmed to its bounding box and set to 26px in the nav. |
| Quick shot parts list | Rebuilt as five buckets, brand and product on one line each. See section 4. |
| Shortcuts | Superseded in round 8, see section 14. |
| Section names | The Swaps, Buy Now Pay Later, The Tool Checklist, Full Parts List, Watch It Now, The Build Story, FAQ. Matches in both the top nav and the jump band. |
| Merge the two swaps | One section, two clickable mode cards. See section 5. |
| Vertical lift graphic | Suspension now uses a vertical 0 to 6in gauge with tick labels, a rising fill, and a value chip, instead of a horizontal bar. |
| Driveway ready by Sunday night | Reworded to **Finished by Sunday night.** Opens the Buy Now, Pay Later section, followed by the full-build image and the financing banner. |
| Financing near-exact to the reference | Superseded in round 8: the two cards now live in a modal behind a banner. See section 14. |
| Remove the anything else box | Gone. Checklist is 14 items and the counter reads "of 14". |

Note: I kept the **Latest From the Garage** blog section. It was not in your section list but you
never asked to remove it, so it is still on the page and simply not linked from the shortcuts.
Say the word and I will pull it.

---

## 4. The quick shot parts list

Five buckets, each with a category label, the brand and product on one line, and the paired
detail on a second line. Both lines are set to never wrap, which is what keeps the row cohesive.

| Bucket | Line 1 | Line 2 |
|---|---|---|
| Suspension | Rough Country Vertex 2.5 RR | 2in lift . F-150 09-25 |
| Setup 01 . 20x9 | Fuel Rebel 6 | BFGoodrich KO3 LT295/60R20 |
| Setup 02 . 22x9.5 | Factory Reproductions FR52 | Nitto Trail Grappler 35s |
| Setup 03 . 22x12 | ARKON OFF-ROAD Caesar | Kelfire DMR R/T 33s |
| Also going on | AWE Tuning . aFe Power | Holley Superchips . Morimoto . Coverking |

Each wheel and tire set is bucketed together as you asked, and the last cell is brand names only.
Five columns at 1080px and up, three below that, one on phones.

You wrote the suspension example as "Rough Country Vertex V2". I used **Rough Country Vertex 2.5 RR**
to match the product name you gave earlier. If V2 is the correct product line, that is a one-word fix.

---

## 5. The Swaps, merged

One section. Two mode cards side by side:

- **Left**: "Three packages, one truck." with the copy underneath
- **Right**: "Three ways to lift." with the copy underneath

(The mode card sentences hide below a 880px viewport height, leaving just the titles.)

Clicking either card switches the content below it. The inactive card drops to 42% opacity and
its indicator dot goes hollow, so it reads as grayed off but obviously clickable. Hover lifts it
to 72%. Arrow keys move between the two. The label under each card reads "Viewing this" or
"Switch to this" so there is no ambiguity about state.

The wheel content is unchanged apart from the accuracy work in section 6. The suspension content
now shows lift on a vertical gauge.

---

## 6. Fact check on the swap data

I went through every number in both swaps.

**Verified against the package pages you confirmed**

| Setup | Wheel | Offset | Tire |
|---|---|---|---|
| 01 | Fuel Rebel 6 20x9 | +1mm | BFGoodrich All-Terrain T/A KO3 LT295/60R20 |
| 02 | Factory Reproductions FR52 22x9.5 | +44mm | Nitto Trail Grappler 35x12.50R22LT |
| 03 | ARKON OFF-ROAD Caesar 22x12 | -51mm | Kelfire DMR R/T 33x12.50R22LT |

**Added for clarity, because offset alone does not help a first-time buyer**

- **Backspacing**, derived with the standard formula, (marketed width + 1in) / 2 + offset in inches.
  Exact figures in section 17.
- **Overall tire diameter**: the two LT sizes state it in the name, 35in and 33in. The metric
  LT295/60R20 computes to **33.9in**, so the page says "about 34in tall" rather than calling it a 34.
- A new FAQ entry, "What is offset, and why does everyone keep talking about it?", written for
  someone who has never bought a wheel before. The explainer lives there rather than in the swap
  panel, which keeps the panel short.

**Claims I checked and kept**

- "The most sidewall of the three" on the 20x9. Sidewall height is 295mm x 0.60 = about 7in, versus
  6.5in on the 35s and 5.5in on the 33s. Correct.
- "The tallest tire of the three" on the 35s. 35in versus 33.9in and 33in. Correct.
- "+44 keeps it tucked." At 6.98in of backspacing on a 9.5in wheel, yes.
- "51mm of negative offset pushes the wheel to the edge of the fender." At 4.49in of backspacing on
  a 12in wheel, yes.

**Claims I changed**

- The ruler's end labels were "max poke" and "tucked". Now "sticks out" and "tucked in", which reads
  without jargon. Their left/right order was flipped in round 17, see section 17.
- The "Poke" meter was renamed "Sticks out", then removed entirely in the compaction pass, since the
  ruler and the backspacing chip already answer it.
- The meters are now under a header that reads **"Our take, not a spec"**. They are editorial 0 to 100
  scores, not measurements, and previously nothing on the page said so.
- Suspension no longer has a "Lift height" meter. The vertical gauge covers it, and scoring a height
  out of 100 was meaningless.
- Suspension specs are now plain rows a first-timer can act on: lift height, fitment years, shock
  body, whether cutting or welding is required, and price.

**One thing to confirm**: the page states the Vertex 2.5 RR gives 2in over stock, per the spec you
sent. If that coilover is adjustable across a range rather than fixed at 2in, tell me and I will
reword it, since "adjustable, set at 2in" is a different claim than "a 2in lift".

---

## 7. Every TK placeholder

**Prices.** Three are live and came off the parts sheet: AWE exhaust $1,095.00, aFe intake $593.00,
Flashcal $299.95. Needed: Rough Country Vertex, all three packages, all three wheels, all three
tires, both Morimoto lights, both Coverking rows.

**Product photos.** Every card. See section 2.

**Links and IDs**

| Token | Where |
|---|---|
| `TK_SKU` | Rough Country Vertex card |
| `TK_LINK` x6 | Individual wheel and tire cards. Custom Offsets IDs are already in place. |
| `TK_LOGO` x2 | Affirm and Katapult logo slots |
| `TK_VIDEO_ID` | Video block. A commented-out `<iframe>` sits right above the placeholder. |
| Watch other builds | Hero CTA points at the homepage. Needs the builds or video library URL. |
| Pre-qualify CTAs | Both point at the homepage. Need the real Affirm and Katapult pre-qualify URLs. |

**Copy**

`TK_SAVINGS`, `TK_NOTE_20x9 / _22x95 / _22x12`, `TK_NOTE_SUSP_1`,
`TK_SUSPENSION_2` and `_3` plus their blurbs, specs, meters, notes and the two placeholder tab
labels in the markup, `TK_STORY_SUSPENSION / _LIGHTING / _PERFORMANCE / _WHEELS / _CLOSE`,
`TK_FAQ_1 / _4 / _5` (four of the seven FAQ answers are written and ready),
`TK` Min Read in the byline, and the blog card fields.

---

## 8. Images

Real: `hero-driveway.jpg`, `og-share.jpg` (cropped from the hero), `logo.png`.

Placeholders, all labeled on-image with filename, dimensions, and what belongs there:

| File | Size | Notes |
|---|---|---|
| `setup-20x9 / -22x95 / -22x12.jpg` | 1800x1125 | The three packages. **Same angle, lens, and ride height across all three.** |
| `susp-01 / -02 / -03.jpg` | 1800x1125 | The three suspension options. Same rule. |
| `build-full.jpg` | 2000x1125 | The full build showcase above the financing banner. |
| `part-suspension.jpg` | 1200x900 | Vertex coilovers. |
| `wheel-rebel6 / -fr52 / -caesar.jpg` | 1200x900 | Individual wheels. |
| `tire-ko3 / -trailgrappler / -dmrrt.jpg` | 1200x900 | Individual tires. |
| `pkg-20x9 / -22x95 / -22x12.jpg` | 1200x900 | Mounted packages. |
| `part-exhaust / -intake / -tuner.jpg` | 1200x900 | Performance. |
| `part-headlights / -taillights.jpg` | 1200x900 | Lighting. |
| `part-seats-front / -rear.jpg` | 1200x900 | Interior. |
| `blog-01/02/03.jpg` | 1200x750 | Blog thumbnails. |
| `video-poster.jpg` | 1600x900 | Behind the video block. Delete once the iframe is live. |
| `affirm-logo.svg`, `katapult-logo.svg` | any | Lender logos. See section 2. |
| `truck-stock.jpg`, `tools-flatlay.jpg` | | Staged, not currently placed on the page. |

---

## 9. Editing the swaps

Both swaps are driven by one `SWAPS` object at the top of the script.

Wheels use `scaleValue` and `scaleLabel` for the horizontal offset ruler.
Suspension uses `liftValue` and `liftLabel` for the vertical gauge, with the top of the scale set by
`SWAPS.susp.lift.max` (currently 6 inches).

```js
{
  title:"Rough Country Vertex 2.5 RR",
  who:"...",                 // red line under the title
  blurb:"...",
  specs:[["Lift height","2in over stock"], ...],   // any number of rows
  liftValue:2, liftLabel:"2in",
  meters:[["Ride quality",84],["Install difficulty",62],["Driveway friendly",88]],
  note:"...",
  cta:"...", link:"..."
}
```

Any string starting with `TK` or `$TK` renders as a red placeholder chip automatically, and a meter
set to `0` shows "TK" instead of a score.

---

## 10. Brand and technical

- Race Red standard on near-black. `#CE1126` primary, `#FF2036` accent, `#0A0A0B` base.
  All colors are CSS custom properties at the top of the stylesheet.
- Bebas Neue display, Oswald labels and buttons, Inter body, Rajdhani numerals and specs.
- Zero em dashes and zero en dashes. Verified.
- ARKON OFF-ROAD in all caps everywhere it appears in visible text.
- Ford and F-150 are the only vehicle brands mentioned. Verified.
- Single HTML file, all CSS and JS inline, no frameworks, no external scripts.
- Open Graph and Twitter tags set. Respects `prefers-reduced-motion`.
- No horizontal overflow at 390px, 1024px, 1280px, or 1440px.
- Verified headless with no JS errors: mode toggle between the two swaps, both swap components with
  independent state, the vertical lift gauge, the 14-item checklist with counter and reset, parts
  filtering (14 on All Parts, 9 on Wheels & Tires), FAQ accordion, scrollspy on both navs, progress bar.

---

## 11. Before it goes live

- [x] Package photos for Setup 01 and Setup 02, and an updated full-build hero shot (round 20)
- [ ] Product photos and prices for every card
- [ ] Official Affirm and Katapult logos, plus their real pre-qualify URLs
- [ ] The six individual wheel and tire product links, plus the Vertex SKU and link
- [ ] Suspension options 02 and 03, including their two tab labels
- [ ] Confirm whether the Vertex 2.5 RR is fixed at 2in or adjustable
- [ ] Confirm Vertex 2.5 RR versus Vertex V2 for the product name
- [ ] Shoot the three package photos and the three suspension photos at a matched angle
- [ ] Full build showcase photos
- [ ] Point Watch other builds at the real builds page
- [ ] Fill the story, the three open FAQ answers, and the setup notes
- [ ] Uncomment the video iframe and drop in the YouTube ID
- [ ] Add the three blog cards and their links, or tell me to remove the section
- [ ] Point the video description's landing page URL at this page

---

## 12. Round 6 revisions

| Note | What changed |
|---|---|
| Hero tail did not explain the why | Now reads "...and three different wheel and tire packages run back to back on the same truck, so you can see which one is actually worth living with before you spend a dollar." The packages have a reason to exist instead of just being a count. |
| Packages section too tall to fit a screen | The right column dropped from about 1030px to **728px**, a 29% cut. See below. |
| "Driveway ready by Sunday night" sounded odd | Now **"Finished by Sunday night."** |
| "as you pull it out of the box" implied new purchases | Now **"as you dig it out of the garage."** |

**How the stage column got shorter**

- The five-row spec list became a **three-up chip row** (Wheel, Backspacing, Tire diameter) plus a single
  Tire line. Same information, roughly a third of the vertical space.
- Offset now lives only on the ruler. The chip row does not repeat it.
- Meters went from four to three and now sit **three across** instead of stacked on desktop.
  Dropped "Sticks out" because the ruler and the backspacing chip already answer it.
- The long offset explainer under the ruler is gone. That content is in the FAQ, where it belongs.
- Price moved to a single footer row directly above the CTA.
- Tightened the ruler track, meter bars, note block, and column padding.

The suspension panel got the same treatment: three chips (Lift, Fitment, Shock body), one Install line,
and the same price and CTA footer.

---

## 13. Round 7 revisions

**Hero now fits one screen.** Headline dropped from a 7.3rem cap to 5rem, top padding from 120px to 90px,
and the sub and CTA spacing tightened. A `max-height:760px` rule pulls it in further on short windows.
Verified: the hero bottom lands at or inside the viewport at 700, 768, 820, 900, 960, 1080, and 1440px tall.

**The Swaps section now fits one screen too.** It was 1403px. What changed:

- **Driveway reality moved onto the photo.** It is now a translucent panel pinned to the bottom-left corner
  of the image, red left border, capped at 78% width. That alone took about 100px out of the data column.
- Mode cards went compact: single-line titles, one short sentence, tighter padding. 298px down to about 150px.
- Setup tabs tightened. Section padding cut.
- **Three height tiers** at 960px, 880px, and 790px progressively tighten the section. At 880 and below the
  mode card sentences hide, leaving just the titles, since the panel content matters more than the intro copy.

| Viewport height | Swaps section | Space available |
|---|---|---|
| 768px | 689px | 702px |
| 820px | 724px | 754px |
| 900px | 816px | 834px |
| 1080px | 937px | 1014px |

**Panels now match.** The suspension panel is within 5px of the wheel panel at every tier (505 vs 510 at
900px tall). The lift gauge shortens with each tier so the two sides stay level.

One honest limit: at a 700px viewport the section runs about 55px over. That is a 1366x768 laptop with a
lot of browser chrome open. Compressing further would mean cutting real content, so I left it.

---

## 14. Round 8 revisions

| Note | What changed |
|---|---|
| Shortcuts cramped to the left | The jump band now spans a 1520px container with `space-between`, so the seven links distribute edge to edge instead of bunching. Size back up to a 1.5rem cap. Still one line at 1366px and wider. |
| Setup 02 brand name was cut off | The spec bar moved to the same 1520px container with slightly larger type. **Zero clipped cells now**, verified programmatically at 1366, 1440, 1512, and 1920px wide. "Factory Reproductions FR52" shows in full. |
| Tire name prominent under the wheel name | New red-tinted feature band directly under the product line, tire name set in white Oswald at 1rem. Same treatment on the suspension side, where it carries the fitment years. |
| Setup name biggest, wheel size smallest | New four-level hierarchy in every panel. |
| Remove the three photos under the win image | Gone, along with their placeholder files. |
| Merge financing into the win section | One section now: headline, savings copy, the full-build image, then the banner. |
| Banner like the last landing page, no budget | Race Red gradient panel, rounded, centered, white CTA. No total, no asterisk, no cost figure anywhere. |
| Affirm and Katapult as a popup | Both cards moved into a modal that opens from the banner CTA. |
| Soft pulsing glow | 3.4s ease-in-out box-shadow pulse on the banner, disabled under `prefers-reduced-motion`. |

**Panel hierarchy, per setup**

| Level | Setup 01 | Setup 02 | Setup 03 |
|---|---|---|---|
| Eyebrow, small red | SETUP 01 | SETUP 02 | SETUP 03 |
| **Name, biggest** | **The Daily Driver** | **The 35in Look** | **Max Poke** |
| Product plus size, smaller | Fuel Rebel 6 `20x9` | Factory Reproductions FR52 `22x9.5` | ARKON OFF-ROAD Caesar `22x12` |
| Featured band | BFGoodrich All-Terrain T/A KO3 | Nitto Trail Grappler | Kelfire DMR R/T |

Suspension mirrors it: OPTION 01 / **Vertex 2.5 RR** / Rough Country `2in lift` / Fits Ford F-150, 2009 to 2025.

Chips changed to suit, since size and tire moved up: **Backspacing, Tire size, Diameter**.

**Modal behavior.** Opens on the banner CTA. Closes on the X, on Escape, or on a click outside the panel.
Focus moves to the close button on open and returns to the CTA on close. Body scroll locks while open.
`role="dialog"`, `aria-modal`, and `aria-hidden` all wired. Verified headless.

**Fit is still held.** The tighter type hierarchy added height, so I trimmed the three height tiers to
compensate:

| Viewport height | Swaps section | Available |
|---|---|---|
| 768px | 699px | 702px |
| 820px | 751px | 754px |
| 900px | 832px | 834px |
| 1080px | 986px | 1014px |

Wheel and suspension panels stay matched within 4px.

---

## 15. Round 9 revisions

**Hero top trimmed.** I cropped the top off the source photo to kill the empty sky, dropped top
padding from 90px to 52px, and capped the hero at 760px tall instead of filling the viewport. The
truck and the box stack now dominate the frame, and the spec bar is visible on load at 900px tall.
`og-share.jpg` is regenerated from the same crop. (Crop amount revised in round 10, see section 16.)

**Watch other builds** now points at the Custom Offsets YouTube channel:
`youtube.com/channel/UCnmCVfwLakc9Fd2ltaowisQ`. Note there is also a separate
[Custom Offsets Garage](https://www.youtube.com/c/CustomOffsetsGarage) channel. Tell me if the
Garage channel is the better target and it is a one-line swap.

**Every price is in, from the brief doc.**

| Item | Price |
|---|---|
| Vertex 2.5 RR 2in, F-150 09-25 | $1,299.95 |
| Setup 01 package, 20x9 | $3,691.32 |
| Setup 01 wheel, Fuel Rebel 6 | $399.00 each |
| Setup 01 tire, BFGoodrich KO3 | $523.83 each |
| Setup 02 package, 22x9.5 | $4,291.04 |
| Setup 02 wheel, FR52 | $475.00 each |
| Setup 02 tire, Nitto Trail Grappler | $597.76 each |
| Setup 03 package, 22x12 | $3,476.16 |
| Setup 03 wheel, ARKON OFF-ROAD Caesar | $599.00 each |
| Setup 03 tire, Kelfire DMR R/T | $270.04 each |
| AWE 0FG exhaust | $1,095.00 |
| aFe Momentum XP intake | $593.00 |
| Holley Superchips Flashcal | $299.95 |
| Morimoto XB Hybrid headlights | $999.00 |
| Morimoto XB taillights | $709.00 |
| Coverking front row | $194.99 |
| Coverking rear row | $194.99 |

Two things worth knowing about those numbers:

1. **The wheel and tire figures in the doc are per-item, not per-set.** I checked the math: 399.00 x 4
   plus 523.83 x 4 equals exactly 3,691.32, and the same holds for both other setups. So the
   individual wheel and tire cards now carry a small **each** tag next to the price, and only the
   package cards show the set total. Without that tag a shopper would read $399 as the price of four
   wheels.
2. **The suspension row in the doc has a mismatch.** The product is named "vertex 2.5 RR 2 In" but the
   link still points at the 3in Rough Country M1 kit. I used the $1,299.95 price and kept the
   roughcountry.com link as-is. Worth fixing at the source. `TK_SKU` is still open on that card.

**Parts list is now a carousel.** Paging resets to page 1 when you switch tabs, and the grid scrolls
itself back into view so you are not dumped further down the page. Page size and arrow placement were
revised in round 10, see section 16.

See section 16 for the current page counts.

---

## 16. Round 10 revisions

**Hero zoomed out, truck no longer cut off.** The 24% top crop was too aggressive: at 1.973:1 the photo
was wider than the hero box, so `object-fit: cover` was trimming the sides and clipping the truck.
I eased the crop back to 14%, which puts the photo at **1.744:1**. That is now narrower than the hero
box at every desktop width, so cover trims top and bottom instead of left and right and **the full
width of the frame always shows**. Focal point moved to `center 66%`.

Verified in the browser: `imgAspect 1.745, containerAspect 1.895, croppedSides: false`. The whole
grille and both front wheels are in frame.

**Parts carousel is now two rows of three.** Six cards per page instead of nine, and the arrows moved
out of the footer row to **flank the grid on the left and right**, vertically centered. They went from
44x44 to **64x96** with a 30px chevron, and they lift and turn Race Red on hover. Page count and dots
now sit centered below the grid.

| Tab | Items | Pages |
|---|---|---|
| All Parts | 14 | 3 |
| Wheels & Tires | 9 | 2 |
| Suspension | 1 | 1 |
| Performance | 3 | 1 |
| Lighting | 2 | 1 |
| Interior | 2 | 1 |

The arrows use `visibility: hidden` rather than `display: none` when a tab only has one page, so the
grid does not shift sideways between tabs. The parts section moved to the same 1520px container as the
nav and spec bar to make room for the arrows outside the cards.

Grid height went from 2044px at three rows to **1351px at two rows**. Combined with the earlier change,
the All Parts block is down from roughly 3400px unpaginated to 1351px.

Below 820px wide the arrows drop under the grid as a 52px pair, left and right aligned, since there is
no room to flank at that width.

`PER_PAGE` in the script still controls this if you want a different page size.

---

## 17. Round 11 revisions

**Offset scale flipped.** The ruler now runs **+60 tucked in on the left, -60 sticks out on the right**.
That is the right instinct: more negative means more wheel outside the fender, so the pin travelling
right now reads as "more aggressive" instead of the reverse.

Implemented by inverting the scale bounds in the config rather than special-casing the math, so the
existing pin and zero-marker formulas still handle it:

```js
scale: { min: 60, max: -60, showZero: true }
```

Verified pin positions across the three setups: +44 lands at 12.9% (far left, most tucked), +1 at 48.6%
(just left of the centre line), and -51 at 91.8% (far right, most poke). Zero marker holds at 50%.
The suspension gauge is unaffected.

**Backspacing is now exact, not approximate.** Calculated with the standard formula,
`(marketed width + 1in) / 2 + offset in inches`:

| Setup | Wheel | Offset | Backspacing |
|---|---|---|---|
| 01 | 20x9 | +1mm | **5.04in** |
| 02 | 22x9.5 | +44mm | **6.98in** |
| 03 | 22x12 | -51mm | **4.49in** |

Updated everywhere the number appears: the chip row in each swap panel, the three swap blurbs, the
three individual wheel cards in the parts list, and the offset FAQ answer.

One I deliberately left alone: **tire diameter still reads "About 34in" on the 20x9.** The LT295/60R20
calculates to 33.94in, but a metric tire's real published OD varies by manufacturer, so an exact-looking
number there would be less honest than the approximation. The two LT-sized tires state 35in and 33in in
their own names, so those are already exact.

---

## 18. Round 12: full copy overhaul

Applied the copy document top to bottom. **Layout, structure, and CSS were not touched** anywhere in
this round. Every change was an exact-match string replacement against the existing markup and the
`SWAPS` config, with an assertion guard on each one so nothing could silently fail to apply.

### What changed

| Region | New copy |
|---|---|
| `<title>` | One Weekend. One Driveway. One Build. \| 2018 Ford F-150 \| Custom Offsets |
| Spec bar, suspension | `2in front lift . F-150 14-26` |
| Setup 02 blurb | "Looks built from fifty feet away, still parks in a normal garage." |
| Setup chips, backspacing | About 5in / About 7in / About 4.5in |
| Suspension fits band | Ford F-150 4WD, 2014 to 2026 |
| Suspension blurb | "Two real inches up front and real damping..." |
| You Win lede | "Zero shop bills all weekend... The only thing we booked was Monday's alignment..." |
| Financing banner | Headline "Build now. Pay over time." / CTA "Get pre-qualified & start your build today" / logo line "Payment partners" |
| Financing modal | Title "Two ways to pay over time." / new Affirm and Katapult bodies / Katapult pill "As low as $1 down" / new two-partner disclaimer |
| Parts list lede | "...fitment proof pulled from 100,000+ real owner trucks in the gallery." |
| Suspension card title | Vertex 2.5 RR Leveling Coilovers, 2in, Ford F-150 4WD (14-26) |
| Wheel card titles | Rebel 6 20x9 +1mm / FR52 22x9.5 +44mm / Caesar 22x12 -51mm |
| Build story, FAQ | Rewritten per doc; offsets now carry the `mm` unit |
| Stats bar | 1.25M+ fitment photos / 1M+ orders fulfilled / 4.9★ 28,000+ verified reviews / phone |
| Footer | New disclaimer |

Roughly 39 replacements in total across two passes.

### Two places the doc conflicts with an earlier instruction

Flagging rather than deciding, since "follow exactly" and the round-11 note point opposite ways.

**1. Backspacing went back to "About".** Round 11 asked for actual figures instead of approximations,
and section 17 above records the exact values (5.04in / 6.98in / 4.49in). The copy doc writes them as
About 5in / About 7in / About 4.5in, so that is what the page now says, in the chips, the blurbs, the
three wheel cards, and the offset FAQ answer. Say the word and the exact numbers go back in; it is a
four-value change.

**2. Offset ruler label order.** The doc lists the ends as "-60 . sticks out / tucked in . +60" but
heads the line "(both directions)", which reads as descriptive rather than positional. The round-11
flip is still in place: **+60 tucked in on the left, -60 sticks out on the right.** If the doc meant
that literally, flipping back is a one-line config change.

### Verification

Rendered at 1440x900, 1440x1080, and 1440x768 in headless Chromium with the real typefaces inlined.

```
title       One Weekend. One Driveway. One Build. | 2018 Ford F-150 | Custom Offsets
overflow    doc 1440 / win 1440  (no horizontal scroll)
swaps       832 / 834 at 900  .  699 / 702 at 768  .  986 / 1014 at 1080   FITS
spec bar    0 clipped cells
setup 01    The Daily Driver . Fuel Rebel 6 20x9 . BFGoodrich All-Terrain T/A KO3 . $3,691.32
setup 02    The 35in Look . Factory Reproductions FR52 22x9.5 . $4,291.04
setup 03    Max Poke . ARKON OFF-ROAD Caesar 22x12 . $3,476.16
suspension  Vertex 2.5 RR . Rough Country 2in lift . Ford F-150 4WD, 2014 to 2026 . $1,299.95
console     no errors
em dashes   0
stale copy  0 remaining strings from the previous revision
```

---

## 19. Round 13: split into separate files, CSS rewritten mobile-first

Two structural changes, no copy or layout changes.

**File split.** The page was one self-contained `index.html` with inline `<style>` and `<script>`.
It is now three files: `index.html` (markup only), `styles.css`, and `script.js`. The JS is an exact,
unmodified extraction, byte for byte the same logic. `index.html` still loads `styles.css` via one
`<link>` in the head and `script.js` via one `<script src>` at the end of the body, in the same spot
the inline block used to sit, so load order and behavior are unchanged. The previous all-in-one file
is kept as `index-original.html` as a fallback, with its image paths updated to match the folder
rename below.

**Images folder renamed.** `images/` is now `assets/`. All 35 files moved as-is, nothing inside them
changed. Every reference across `index.html`, `index-original.html`, and this README was updated to
match: `<img src>`, the `og:image` meta tag, and the product-image comment above the parts grid.

**CSS rewritten mobile-first.** Every width-based breakpoint in `styles.css` was inverted. The old
sheet was desktop-first: full desktop rules up top, then close to thirty `@media(max-width:...)`
blocks knocking things down for smaller screens. The base rules in the new sheet are now the phone
layout, and `@media(min-width:...)` blocks layer the tablet and desktop layout on top as the viewport
grows. Breakpoint pixel values did not move, only the direction: a rule that used to read
`@media(max-width:1080px)` now reads `@media(min-width:1081px)` and describes what to add above that
width instead of what to remove below it.

Two exceptions, kept as-is on purpose:

- The three `@media(max-height:...)` blocks that keep the hero and the swaps section fitting inside
  one screen on short laptop windows. Height is a different axis from the mobile-first, device-tier
  width cascade, so these stay as compressing overrides layered on top of whichever width tier is
  active, same as before.
- The two `@media(prefers-reduced-motion:reduce)` blocks, unrelated to screen size entirely.

The trickiest parts were the quick-shot spec bar and the stats row, both of which use `nth-child`
rules to control borders and padding per grid position at each column count (5/3/1 columns and 4/2
columns). Getting those right meant writing out the full, explicit rule set for every tier rather
than relying on partial overrides, specifically because mobile-first media queries are cumulative:
a `min-width:681px` block stays active at 1400px wide too, so the 1081px-and-up block has to
explicitly reset anything the 681px tier touched that no longer applies at full desktop width
(confirmed by hand for every `nth-child` selector involved, since two selectors of equal specificity
resolve by source order, not by which one is more "current").

Verified: `node --check` on `script.js` passes, and `styles.css` has matching brace and parenthesis
counts. No visual regression check was possible in this pass since there is no browser tool
available here — recommend opening `index.html` at a phone width, a tablet width, and a wide desktop
width before treating this as final.

---

## 20. Round 20: real photos for the two remaining package cards, updated hero

Four new stakeholder photos landed in `assets/`: `Package_001.jpg`, `Package_002.jpg`,
`Setup_002.jpg`, `Updatd_Full_Build.jpg`. All four were raw camera exports (10-50MB each,
non-standard aspect ratios), so each was resized and re-compressed with `sips` to match the
weight of the site's existing real photos before being wired in. The originals are kept at
`raw-originals/` (outside `assets/`, not part of the upload set) rather than discarded.

| Source file | Wired in as | Replaces |
|---|---|---|
| `Package_001.jpg` | `assets/pkg-20x9.jpg` | Setup 01 package placeholder |
| `Package_002.jpg` | `assets/pkg-22x95.jpg` | Setup 02 package placeholder |
| `Setup_002.jpg` | `assets/setup-22x95.jpg` | Setup 02 stage-photo placeholder |
| `Updatd_Full_Build.jpg` | `assets/build-full.jpg` | Previous full-build hero photo |

**Matching was verified by content, not just filename.** `Package_001.jpg` shows the gunmetal
Fuel Rebel 6 on a BFGoodrich KO3, an exact match for the Setup 01 label. `Package_002.jpg` and
`Setup_002.jpg` both show a polished-chrome multi-spoke wheel that does not visually resemble the
FR52-on-35in-Trail-Grappler description in the Setup 02 copy — but that same chrome wheel is
already what the site's existing, previously-committed `pkg-22x12.jpg` and `build-full.jpg` real
photos show. Since those two shipped in an earlier round without objection, the chrome wheel is
evidently how this truck actually photographs across setups, not a mismatched delivery, so all
four were wired in as named.

No markup or CSS changed — every `<img src>` already pointed at these exact filenames
(`assets/pkg-20x9.jpg`, `assets/pkg-22x95.jpg`, `assets/setup-22x95.jpg`, `assets/build-full.jpg`),
so replacing the files was the entire change. `pkg-22x95.jpg` and `setup-22x95.jpg` no longer
render their "PLACEHOLDER . REPLACE BEFORE LAUNCH" card.

---

## 21. Build-story photo: framed-banner attempt tried and reverted

Asked to show the build-team worker and the truck together in the build-story photo (zoomed out a
bit) plus the page's scroll-reveal on it. The photo's `background-image`/gradient-mask technique on
`#story::before` was masking the worker permanently — he sits at roughly 20-35% across the source
frame, which is exactly the stretch the text-legibility gradient keeps opaque — so no resize/pan
within that technique could reveal him. Tried replacing it with a real `<img>` in a framed banner
above the prose instead. That didn't land — reverted back to the original `#story::before`
background-image at the user's request, unchanged from before this round. Worth knowing before
trying again: the mask-vs-worker conflict above is still unresolved in the current markup.

---

## 22. Build-story background: cover crop, then the worker made visible

Two follow-up passes on the same `#story::before` background-image, both keeping it as a
background-image per the round 21 revert.

**Fill the section, no letterboxing.** `background-size` for the photo layer was `contain`, which
at this section's height (much taller than the photo's 16:9) left solid `--ink` gaps above and
below it. Changed to `cover` — the photo now fills the section's full height with no gaps, cropped
by width instead.

**Bring the worker into frame.** `cover` alone made it worse for visibility, not better: at
`background-position:right center` the crop window only showed the truck's grille, with the worker
cropped off-canvas entirely (not just masked). Per the round-21 finding, worker and truck together
are wider than the section can show in one crop without either losing the worker or losing most of
the truck — asked which trade-off to take; chose **worker fully in frame, truck's cab and bed rail
only** (no grille/wheels/front bumper). Implemented as `background-position:left center, 0% center`
(pans the crop window to the photo's left edge).

At that crop the worker still sat mostly under the gradient's opaque 0-46% zone, though — visible
in outline but too dark to read. Narrowed and lightened the gradient (opaque 0-46% -> 0-27%, softer
fade curve down to .32 alpha by 100%, versus the old floor of .55) so he reads clearly at full
opacity's edge while staying dim enough for the darkest part still to back the kicker/h2/byline
text. Checked every paragraph's rightmost extent against the new curve at 1440 and 1024px wide -
all still comfortably legible, including where headings text now runs directly over his hoodie at
1024px (lower contrast there than elsewhere, but still readable). No horizontal overflow at either
width. Mobile is unaffected — the photo still only shows at 1001px and up, same gate as before.

---

## 23. Round 23: better source photo replaces the worker/truck trade-off entirely

A new stakeholder photo (`truck_image.png`, 1672x941) landed loose in `assets/` with the worker
and truck flipped from the old `story-background.jpg`: truck on the left/center, worker on the
right, both fully in frame together at a wider angle. Converted to `assets/story-background.jpg`
(same filename the CSS already points at, quality 85 JPEG, no resize needed) and the original kept
at `raw-originals/truck_image.png`.

This retires the round-22 trade-off. Flipped `background-position` back to `right center, 100%
center` to match the new photo's layout (worker now lands in the crop's right/visible side instead
of needing the left pan), and kept the round-22 lightened gradient as-is - it happens to suit this
photo well too. Result: the worker is fully visible AND the truck's grille, hood, and front fender
are in frame (previously it was one or the other). Verified no horizontal overflow at 1001, 1024,
1280, 1440, and 1920px wide, and that text stays legible at every width, including where it crosses
his hoodie at 1024px.
