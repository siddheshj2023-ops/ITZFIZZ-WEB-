import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "58%", label: "More attention" },
  { value: "23%", label: "Stronger recall" },
  { value: "27%", label: "Higher engagement" },
  { value: "40%", label: "More impact" }
];

export default function Hero() {
  const root = useRef(null);
  const car = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro.from(".hero-kicker", { y: 14, opacity: 0, duration: 0.65 })
        .from(".headline-line", { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.09 }, "-=0.25")
        .from(".stat-card", { y: 22, opacity: 0, duration: 0.6, stagger: 0.12 }, "-=0.35")
        .from(".hero-bottom", { opacity: 0, y: 10, duration: 0.55 }, "-=0.2");

      gsap.to(car.current, {
        x: () => Math.min(window.innerWidth * 0.22, 300),
        y: -36,
        rotate: -2,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.1
        }
      });

      gsap.to(".hero-glow", {
        scale: 1.25,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.3
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <header className="nav">
        <a className="brand" href="#top" aria-label="ItzFizz home"><span className="brand-mark">✳</span> ITZFIZZ<span className="brand-dot">.</span></a>
        <span className="nav-caption">A NEW KIND OF DRIVE</span>
        <a className="nav-link" href="#experience">EXPLORE <span>↗</span></a>
      </header>

      <div className="hero-content">
        <p className="hero-kicker"><span className="kicker-line" /> THE FUTURE IS IN MOTION</p>
        <h1 aria-label="Welcome ItzFizz">
          <span className="headline-mask"><span className="headline-line">W E L C O M E</span></span>
          <span className="headline-mask accent-mask"><span className="headline-line">I T Z F I Z Z<span className="headline-period">.</span></span></span>
        </h1>
        <p className="hero-description">Make every moment <em>count.</em><br />Make every move <em>matter.</em></p>
      </div>

      <div className="car-stage" aria-label="Stylized sports car illustration">
        <div className="car-shadow" />
        <div className="car-visual" ref={car}>
          <svg className="car-svg" viewBox="0 0 900 340" role="img" aria-label="Abstract red sports car" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="body" x1="0" y1="0" x2="0.8" y2="1">
                <stop offset="0" stopColor="#ff6a4b"/><stop offset=".36" stopColor="#e83a28"/><stop offset=".72" stopColor="#a81715"/><stop offset="1" stopColor="#4b0b0d"/>
              </linearGradient>
              <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#9eb5c0" stopOpacity=".82"/><stop offset=".45" stopColor="#17232b"/><stop offset="1" stopColor="#070b0e"/>
              </linearGradient>
              <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f1f3f4"/><stop offset=".5" stopColor="#555d62"/><stop offset="1" stopColor="#15191c"/>
              </linearGradient>
              <filter id="soft"><feGaussianBlur stdDeviation="8"/></filter>
            </defs>
            <ellipse cx="455" cy="281" rx="360" ry="26" fill="#000" opacity=".62" filter="url(#soft)"/>
            <path d="M83 219 L112 191 Q143 180 201 173 L306 112 Q350 87 415 82 L559 88 Q602 91 645 130 L724 165 Q782 174 816 195 L837 226 L817 250 L759 258 L147 258 L91 246Z" fill="url(#body)" stroke="#ff8067" strokeWidth="2"/>
            <path d="M270 167 L333 119 Q359 101 415 98 L548 104 Q583 106 617 139 L648 166Z" fill="url(#glass)" stroke="#7b858b" strokeWidth="3"/>
            <path d="M423 100 L418 166 M554 106 L591 166" stroke="#66737a" strokeWidth="3" opacity=".7"/>
            <path d="M113 192 Q205 181 268 170 L646 170 Q704 172 770 194" fill="none" stroke="#ff9a7e" strokeWidth="3" opacity=".6"/>
            <path d="M96 220 Q185 207 260 208 L687 208 Q772 209 828 225" fill="none" stroke="#5c1010" strokeWidth="7" opacity=".75"/>
            <path d="M114 218 L185 215 L165 229 L107 232Z" fill="#e8f4f5" opacity=".9"/>
            <path d="M748 205 L812 219 L816 231 L750 226Z" fill="#ffb49c"/>
            <path d="M294 175 L604 175" stroke="#f8a18b" strokeWidth="2" opacity=".6"/>
            <path d="M355 183 L531 183 L558 192 L342 192Z" fill="#600f11" opacity=".55"/>
            <path d="M185 204 Q222 197 270 198 L630 198 Q684 198 728 208" fill="none" stroke="#ffb09a" strokeWidth="2" opacity=".45"/>
            <path d="M263 250 L644 250" stroke="#ff9a7e" strokeWidth="3" opacity=".4"/>
            <g>
              <circle cx="250" cy="251" r="69" fill="#090b0d"/><circle cx="250" cy="251" r="49" fill="url(#rim)" stroke="#9ba1a4" strokeWidth="3"/>
              <circle cx="250" cy="251" r="31" fill="#14191d" stroke="#aeb5b8" strokeWidth="2"/>
              {Array.from({length:10},(_,i)=><path key={i} d="M250 222 L256 244 L250 251 L244 244Z" fill="#c6cbcd" transform={`rotate(${i*36} 250 251)`}/>)}
              <circle cx="250" cy="251" r="10" fill="#d6d9da"/>
              <circle cx="674" cy="251" r="69" fill="#090b0d"/><circle cx="674" cy="251" r="49" fill="url(#rim)" stroke="#9ba1a4" strokeWidth="3"/>
              <circle cx="674" cy="251" r="31" fill="#14191d" stroke="#aeb5b8" strokeWidth="2"/>
              {Array.from({length:10},(_,i)=><path key={i} d="M674 222 L680 244 L674 251 L668 244Z" fill="#c6cbcd" transform={`rotate(${i*36} 674 251)`}/>)}
              <circle cx="674" cy="251" r="10" fill="#d6d9da"/>
            </g>
            <path d="M87 241 Q450 273 836 241" fill="none" stroke="#ff533e" strokeWidth="4" opacity=".8"/>
            <path d="M150 186 L200 180 L218 190 L143 198Z" fill="#f7f2e9" opacity=".12"/>
          </svg>
        </div>
        <div className="road-line" />
      </div>

      <div className="stats" id="experience">
        {stats.map((stat, i) => (
          <div className="stat-card" key={stat.value}>
            <span className="stat-index">0{i + 1}</span>
            <strong>{stat.value}</strong>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="hero-bottom">
        <span>DESIGNED FOR THE BOLD</span>
        <span className="scroll-cue"><i /> SCROLL TO EXPERIENCE</span>
        <span>01 — 03</span>
      </div>
    </section>
  );
}