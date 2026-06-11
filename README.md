# Don't Miss the Good Stuff: An Introduction to Triggering in High-Energy Physics

A 45-minute presentation deck on real-time data acquisition and trigger systems at the LHC, built for the CPAN PhD Network.

## Overview

This deck covers the physics and engineering of trigger systems across ATLAS, CMS, LHCb, and ALICE — the real-time decision systems that reduce LHC data rates from 40 MHz to ~1–3 kHz for permanent storage.

**Key topics:**
- Why triggers are necessary (the 10^5 rate-reduction problem)
- Two-level trigger architecture (L1 hardware + HLT software)
- Case studies: general-purpose detectors (ATLAS/CMS), forward spectrometer (LHCb), heavy-ion physics (ALICE)
- GPU-based real-time reconstruction (Allen framework at LHCb)
- Machine learning and anomaly detection in triggers
- HL-LHC Phase-2 upgrades and future challenges

## Files

- **HEP Trigger Introduction.html** — Main interactive deck (1920×1080, 21 slides)
  - Uses `deck-stage.js` for keyboard/touch navigation, slide counter, speaker notes support
  - Tweaks panel for live color/font adjustments
  - Responsive to print-to-PDF (Cmd+P / Ctrl+P → Save as PDF)

- **HEP Trigger Design Reference.html** — Standalone design guide
  - Color palette with hex codes
  - Typography specimens and Google Fonts import
  - Logo usage rules
  - 4 reusable SVG slide templates at 1920×1080
  - Decorative element specs (eyebrows, title rules, bullets, quotes)

- **deck-stage.js** — Slide deck shell component
  - Handles scaling, keyboard navigation (← / → / Home / End), thumbnail rail
  - Speaker notes via postMessage
  - Print-to-PDF support (one page per slide)
  - Usage: wrap slides in `<deck-stage width="1920" height="1080">` with `<section>` children

- **tweaks-panel.jsx** — Live control panel for design tweaks
  - Color swatches, font scales, toggle options
  - Wires to CSS custom properties for instant feedback
  - Load with `<script type="text/babel" src="tweaks-panel.jsx"></script>`

- **tokens/** — Design system assets (INTREPID brand)
  - `fonts.css` — Google Fonts imports (Space Grotesk, IBM Plex Sans, IBM Plex Mono)
  - `colors.css` — Complete color palette
  - `typography.css` — Type scales and line heights
  - `spacing.css` — Margins, padding, gaps
  - `base.css` — Element resets
  - `components.css` — UI component styles

- **assets/** — Logos and images
  - `intrepid-logo.png` / `intrepid-logo-white.png` — INTREPID project logo (color and white)
  - `erc-eu-funding.png` — EU/ERC funding lockup (required on closing slide)

## Building & Presenting

### View the deck locally

1. Clone or download this repository
2. Open `HEP Trigger Introduction.html` in a modern web browser
3. Use arrow keys (← / →) or swipe to navigate
4. Press Escape to exit any fullscreen focus overlay
5. Click "Tweaks" in the toolbar to adjust colors and fonts live

### Print to PDF

1. Open the deck in a browser
2. Press Cmd+P (Mac) or Ctrl+P (Windows)
3. Select "Save as PDF"
4. Choose "Background graphics" to preserve dark backgrounds
5. Result: one slide per page, optimized for printing or archival

### Export to PowerPoint (when ready)

If you want a fully editable `.pptx` file:
- Use the design reference SVG templates (Section 04) as a starting point in PowerPoint
- Or use an online HTML-to-PPTX converter (e.g. CloudConvert, Zamzar)

### Modify the deck

The HTML is directly editable:
- Click any heading or paragraph text to inline-edit in the preview
- Changes are saved to the source file automatically
- Slide structure: each slide is a `<section data-label="…">` inside the `<deck-stage>`
- CSS variables are at the top of the `<style>` block — adjust `--type-*` and `--pad-*` to rescale

## Design System (INTREPID)

All visuals follow the **INTREPID design system**:
- **Fonts:** Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (data)
- **Colors:** Deep blue (#082739) for dark slides, white/neutral for light slides, gold (#E2AD07) for accents
- **Spacing:** 110px margins on left/right, 88px top, 80px bottom
- **Type scale:** Titles 68px, subtitles 48px, body 34px, small 28px, tiny 24px

For consistent visuals across related materials, use the design tokens from `tokens/` in your own pages.

## Slide Structure

| Slide | Topic | Notes |
|-------|-------|-------|
| 1 | Title / opening | Dark slide with INTREPID logo + ERC funding lockup |
| 2 | The rare vs. mundane | Hook: 10⁻⁹ cross-section for H→γγ |
| 3 | Storage problem | 60 TB/s throughput vs. 1–2 GB/s storage budget |
| 4 | Definition & goals | What is a trigger? Why it matters. |
| 5 | Funnel diagram | 40 MHz → L1 → 100 kHz → HLT → 1–3 kHz |
| 6 | Level-1 trigger | Hardware, FPGA/ASIC, 3.8 μs latency (CMS) |
| 7 | L1 FPGA pipeline | Trigger primitives → regional → global → menu |
| 8 | Trigger menu | ~500 seeds, prescales, physics program |
| 9 | HLT architecture | CPU farm, 100 kHz input, partial reconstruction |
| 10 | Tracking at HLT | Most expensive step, b-tagging, impact parameter |
| 11 | ATLAS & CMS | General-purpose detectors, broad menu philosophy |
| 12 | LHCb philosophy | Forward spectrometer, displaced vertices, B-physics |
| 13 | Allen GPU trigger | LHCb Run 3: fully software trigger at 30 MHz |
| 14 | ALICE | Heavy-ion collisions, continuous readout, O² framework |
| 15 | Trigger efficiency | Turn-on curves, tag-and-probe, bias |
| 16 | Data scouting / TLA | Low-mass thresholds, dark sector searches |
| 17 | ML in triggers | b-tagging NNs, hls4ml, AXOL1TL anomaly detection |
| 18 | HL-LHC challenges | 5–7× luminosity, 200 pileup, phase-2 upgrades |
| 19 | Takeaways | 6 key conclusions (numbered list) |
| 20 | Discussion | 4 open questions for debate |
| 21 | Thank you | Closing slide with funding lockup |

## Audience & Context

- **Audience:** CPAN PhD Network (mixed HEP background, some non-experimentalists)
- **Duration:** 45 minutes (20 content slides + 5 min Q&A)
- **Level:** Accessible introduction; assumes basic particle physics knowledge but no trigger expertise
- **Tone:** Technical but conversational; includes speaker anecdotes (e.g. "firework factory", "bouncer at a club")

## References

- ATLAS Trigger/DAQ TDR: CERN-LHCC-2017-020
- Allen (LHCb GPU trigger): *Comput. Softw. Big Sci.* **4** (2020) 7 | [arXiv:2005.13977](https://arxiv.org/abs/2005.13977)
- hls4ml (ML on FPGAs): *JINST* **13** (2018) P07027 | [arXiv:1711.03578](https://arxiv.org/abs/1711.03578)
- CMS Trigger 2016–2018: *JINST* **12** (2017) P01020 | [arXiv:1609.02366](https://arxiv.org/abs/1609.02366)

## License

This deck is provided as-is for educational and research purposes. INTREPID logos and branding remain the property of their respective institutions.

---

**Built with:** HTML5 + CSS3 + vanilla JS (no frameworks required for the deck itself)
**Compatible with:** All modern browsers (Chrome, Safari, Firefox, Edge)
**Last updated:** June 2026
