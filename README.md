# ItzFizz — Scroll-Driven Hero Animation

A responsive React landing page featuring a premium automotive-inspired hero, staggered intro animations, animated statistics, and a car illustration whose movement is tied to scroll progress using GSAP ScrollTrigger.

## Run locally

Requirements: Node.js 18+

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project.
2. Install the Pages helper: `npm install --save-dev gh-pages`
3. Add `"predeploy": "npm run build"` and `"deploy": "gh-pages -d dist"` to `scripts` in `package.json`.
4. Set Vite's `base` in `vite.config.js` to your repository name, e.g. `base: '/itzfizz-scroll-hero/'`.
5. Run `npm run deploy`, then enable GitHub Pages from the `gh-pages` branch if needed.

## Notes

- The car is an original inline SVG illustration, so no external car image asset is required.
- The headline and metric values are editable in `src/components/Hero.jsx`.
- GSAP intro animation runs on load; car position and glow are linked to scroll progress with ScrollTrigger `scrub`.
- Google Fonts are loaded from the web; system fallbacks are included.
