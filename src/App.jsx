import React from "react";
import Hero from "./components/Hero.jsx";

export default function App() {
  return (
    <main>
      <Hero />
      <section className="after-hero" aria-label="Experience details">
        <p className="eyebrow">THE ITZFIZZ EXPERIENCE</p>
        <h2>Built to move.<br /><span>Made to be remembered.</span></h2>
        <p className="after-copy">A scroll-led visual story combining motion, precision and a little bit of attitude.</p>
        <a className="text-link" href="#top">Back to top <span>↗</span></a>
      </section>
      <footer><span>ITZFIZZ</span><span>SCROLL TO EXPLORE · 2026</span></footer>
    </main>
  );
}