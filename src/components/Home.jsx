import React, { useState, useEffect, useRef } from "react";
import { PHOTOS } from "../photos.js";

// Renders a YAML block-scalar paragraph, optionally gold-highlighting one phrase.
const Prose = ({ text, highlight }) => {
  const t = String(text || "").trim();
  if (!highlight || !t.includes(highlight)) return <>{t}</>;
  const [a, b] = t.split(highlight);
  return (
    <>
      {a}
      <span className="text-[#C8A951]">{highlight}</span>
      {b}
    </>
  );
};
import {
  Menu,
  X,
  Mail,
  MapPin,
  ArrowUpRight,
  GraduationCap,
  Users,
  FlaskConical,
  BookOpen,
  Globe,
  ArrowRight,
  Linkedin,
  Github,
} from "lucide-react";




// ============================================================
//  varanis.cc — Home prototype (single-page demo)
//  Visual identity: mainblue #0A2240, gold #C8A951, softgray #EDF2F7
//  Signature element: animated Duffing oscillator phase trajectory
// ============================================================

// ---- Fonts ----
const FontFace = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Spectral:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

    :root {
      --mainblue: #0A2240;
      --navy:     #061730;
      --gold:     #C8A951;
      --gold-dim: #8E763B;
      --softgray: #EDF2F7;
      --ink:      #0F172A;
      --muted:    #475569;
      --line:     #1f3559;
    }

    html { scroll-behavior: smooth; }
    body { font-family: 'Spectral', Georgia, serif; color: var(--ink); }
    .display { font-family: 'Fraunces', 'Bodoni 72', Didot, serif; letter-spacing: -0.02em; }
    .mono    { font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace; }

    /* gold underline link */
    .underline-gold {
      background-image: linear-gradient(var(--gold), var(--gold));
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: 0 100%;
      transition: background-size .3s ease;
    }
    .underline-gold:hover { background-size: 100% 2px; }

    /* phase trail draw */
    @keyframes draw { to { stroke-dashoffset: 0; } }
    .phase-trail {
      stroke-dasharray: 4000;
      stroke-dashoffset: 4000;
      animation: draw 9s ease-out forwards;
    }
    @keyframes pulse-dot { 0%,100%{opacity:.3} 50%{opacity:1} }
    .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

    /* fade-up on load */
    @keyframes fadeUp { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform:none; } }
    .fade-up { animation: fadeUp .9s ease-out both; }
  `}</style>
);

// ---- Custom social icons (not in lucide) ----
const OrcidIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 17.119H5.961V7.043h1.408v10.076zM6.667 5.591a.873.873 0 1 1 0-1.745.873.873 0 0 1 0 1.745zm12.402 11.528h-1.408v-4.96c0-1.18-.022-2.7-1.645-2.7-1.647 0-1.9 1.286-1.9 2.616v5.044h-1.408V7.043h1.351v1.376h.02c.188-.356.648-1.733 2.534-1.733 2.71 0 3.21 1.78 3.21 4.097v6.336H19.07v-.0z" />
    <path d="M11.06 7.043H9.65v10.076h1.41V7.043z" fill="none" />
  </svg>
);

const ResearchGateIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.586 0H4.414C1.978 0 0 1.978 0 4.414v15.172C0 22.022 1.978 24 4.414 24h15.172C22.022 24 24 22.022 24 19.586V4.414C24 1.978 22.022 0 19.586 0zM8.654 17.97H6.86V9.86h-1.43V8.41h1.43V7.66c0-1.71.79-2.73 2.69-2.73.62 0 1.13.07 1.49.16v1.49h-.94c-.83 0-1.06.39-1.06 1.05v.78h2.04l-.27 1.45h-1.77v8.11zm6.46-3.31c-.78 1.97-2.18 3.31-4.45 3.31-2.27 0-4.45-1.65-4.45-4.7 0-3.05 2.18-4.7 4.45-4.7 1.59 0 3.06.74 3.86 2.05l-1.51 1.16c-.42-.66-1.31-1.18-2.35-1.18-1.55 0-2.7 1.16-2.7 2.67 0 1.51 1.15 2.67 2.7 2.67 1.21 0 2.07-.59 2.49-1.45h-2.13v-1.66h4.09c0 .65-.04 1.28-.21 1.83z"/>
  </svg>
);

const ScholarIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
  </svg>
);

const LattesIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 8h10M7 12h10M7 16h6" />
  </svg>
);

// ============================================================
//  Duffing oscillator phase portrait (signature visual)
//  Equation: ẍ + δẋ + αx + βx³ = γ cos(ωt)
//  We integrate with simple RK4 and render trajectory in SVG.
// ============================================================
function buildDuffingPath({
  alpha = -1, beta = 1, delta = 0.2, gamma = 0.3, omega = 1.0,
  x0 = 0.5, v0 = 0, t0 = 0, dt = 0.02, steps = 6000,
} = {}) {
  const f = (x, v, t) => -delta * v - alpha * x - beta * x * x * x + gamma * Math.cos(omega * t);
  let x = x0, v = v0, t = t0;
  const pts = [];
  for (let i = 0; i < steps; i++) {
    const k1x = v;
    const k1v = f(x, v, t);
    const k2x = v + 0.5 * dt * k1v;
    const k2v = f(x + 0.5 * dt * k1x, v + 0.5 * dt * k1v, t + 0.5 * dt);
    const k3x = v + 0.5 * dt * k2v;
    const k3v = f(x + 0.5 * dt * k2x, v + 0.5 * dt * k2v, t + 0.5 * dt);
    const k4x = v + dt * k3v;
    const k4v = f(x + dt * k3x, v + dt * k3v, t + dt);
    x += (dt / 6) * (k1x + 2 * k2x + 2 * k3x + k4x);
    v += (dt / 6) * (k1v + 2 * k2v + 2 * k3v + k4v);
    t += dt;
    if (i % 2 === 0) pts.push([x, v]);
  }
  // map data coords to viewBox 800x520 with margins
  const xs = pts.map(p => p[0]);
  const vs = pts.map(p => p[1]);
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  const vMin = Math.min(...vs), vMax = Math.max(...vs);
  const W = 800, H = 520, m = 40;
  const sx = (W - 2 * m) / (xMax - xMin);
  const sy = (H - 2 * m) / (vMax - vMin);
  const path = pts
    .map(([x, v], i) => {
      const px = m + (x - xMin) * sx;
      const py = H - m - (v - vMin) * sy;
      return (i === 0 ? "M" : "L") + px.toFixed(2) + "," + py.toFixed(2);
    })
    .join(" ");
  return path;
}

const DuffingHero = () => {
  const [d, setD] = useState("");
  useEffect(() => { setD(buildDuffingPath()); }, []);
  return (
    <svg viewBox="0 0 800 520" className="w-full h-full" aria-label="Duffing oscillator phase portrait">
      {/* faint grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1f3559" strokeWidth="0.5" />
        </pattern>
        <radialGradient id="halo" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#C8A951" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#C8A951" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#C8A951" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="800" height="520" fill="url(#grid)" opacity="0.5" />
      <rect x="0" y="0" width="800" height="520" fill="url(#halo)" />
      {/* axes labels */}
      <text x="780" y="270" fill="#5b7099" fontSize="11" textAnchor="end" className="mono">x</text>
      <text x="408" y="20"  fill="#5b7099" fontSize="11" textAnchor="start" className="mono">ẋ</text>
      <line x1="40"  y1="260" x2="760" y2="260" stroke="#1f3559" strokeWidth="0.5" />
      <line x1="400" y1="40"  x2="400" y2="480" stroke="#1f3559" strokeWidth="0.5" />
      {/* trajectory */}
      <path d={d} fill="none" stroke="#C8A951" strokeWidth="0.9" strokeOpacity="0.85" className="phase-trail" />
      {/* pulse dot at attractor center */}
      <circle cx="400" cy="260" r="3" fill="#C8A951" className="pulse-dot" />
    </svg>
  );
};

// ============================================================
//  Components
// ============================================================
const Nav = ({ nav = [] }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-[#0A2240]/95 backdrop-blur border-b border-[#1f3559]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 text-white">
          <span className="display text-xl font-medium tracking-tight">Varanis</span>
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-[#C8A951]">.cc</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[13px] tracking-wide text-white/80 hover:text-[#C8A951] transition-colors"
            >
              {n.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "EN" ? "PT" : "EN")}
            className="mono text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-[#C8A951] border border-[#1f3559] px-2 py-1 rounded"
            aria-label="Toggle language"
          >
            {lang} · {lang === "EN" ? "PT" : "EN"}
          </button>
        </nav>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0A2240] border-t border-[#1f3559] px-6 py-4">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-white/80 hover:text-[#C8A951]"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

const ICONS = {
  orcid: <OrcidIcon />,
  researchgate: <ResearchGateIcon />,
  scholar: <ScholarIcon />,
  lattes: <LattesIcon />,
  linkedin: <Linkedin size={18} />,
  github: <Github size={18} />,
};

const SocialHub = ({ tone = "dark", profiles = [] }) => {
  // tone: "dark" -> light icons on navy; "light" -> dark icons on white
  const base =
    tone === "dark"
      ? "text-white/70 hover:text-[#C8A951] border-white/10 hover:border-[#C8A951]/40"
      : "text-[#0A2240]/70 hover:text-[#C8A951] border-[#0A2240]/10 hover:border-[#C8A951]/60";
  const links = profiles;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-2 border ${base} px-3 py-2 rounded-sm transition-colors`}
          aria-label={l.label}
        >
          <span className="shrink-0">{ICONS[l.icon]}</span>
          <span className="text-[12px] tracking-wide">{l.label}</span>
        </a>
      ))}
    </div>
  );
};

// --- HERO ---
const Hero = ({ c, profiles }) => (
  <section
    id="top"
    className="relative min-h-[100vh] pt-16"
    style={{ background: "linear-gradient(180deg, #0A2240 0%, #061730 100%)" }}
  >
    {/* phase portrait absolutely placed behind text */}
    <div className="absolute inset-0 opacity-90 pointer-events-none">
      <div className="absolute right-[-4%] top-[10%] w-[70%] max-w-[900px] aspect-[8/5.2]">
        <DuffingHero />
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-24">
      <div className="relative z-10 max-w-3xl fade-up">
        <p className="mono text-[11px] uppercase tracking-[0.32em] text-[#C8A951] mb-6">
          {c.eyebrow}
        </p>
        <h1 className="display text-white text-5xl md:text-6xl lg:text-7xl leading-[1.02] font-medium">
          {c.name}
        </h1>

        <p className="display text-white text-2xl md:text-3xl leading-snug mt-6 max-w-2xl">
          {c.tagline}
        </p>

        <p className="text-white/80 text-lg leading-relaxed mt-8 max-w-2xl">
          <Prose text={c.body} highlight={c.highlight} />
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={c.cta_primary.href}
            className="group inline-flex items-center gap-2 bg-[#C8A951] text-[#0A2240] px-5 py-3 text-sm font-medium tracking-wide hover:bg-[#d8b85e] transition-colors"
          >
            {c.cta_primary.label}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={c.cta_secondary.href}
            className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 text-sm hover:border-[#C8A951] hover:text-[#C8A951] transition-colors"
          >
            {c.cta_secondary.label}
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-12">
          <p className="mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">Profiles</p>
          <SocialHub tone="dark" profiles={profiles} />
        </div>
      </div>

      {/* footer of hero — tiny equation as signature */}
      <div className="absolute bottom-6 right-6 lg:right-10 mono text-[11px] text-white/35">
        {c.equation}
      </div>
    </div>
  </section>
);

// --- ABOUT (snippet) ---
const About = ({ c }) => (
  <section id="about" className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
      {/* Left: Photo + section meta */}
      <div className="lg:col-span-4 space-y-6">
        <div className="aspect-[4/5] bg-[#0A2240] overflow-hidden relative group">
          <img
            src={PHOTOS.varanis}
            alt="Marcus Varanis"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A2240]/90 to-transparent p-5">
            <p className="mono text-[10px] uppercase tracking-[0.25em] text-[#C8A951]">{c.portrait_caption}</p>
            <p className="display text-white text-xl mt-1">{c.name}</p>
          </div>
        </div>
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.3em] text-[#8E763B] mb-3">{c.eyebrow}</p>
          <h2 className="display text-3xl md:text-4xl text-[#0A2240] leading-[1.05]">
            {c.headline}
          </h2>
        </div>
      </div>

      {/* Right: bio paragraphs */}
      <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-[17px] leading-[1.75] text-[#0F172A]/80 lg:pt-4">
        {c.paragraphs.map((t, i) => (
          <p key={i}>{String(t).trim()}</p>
        ))}
      </div>
    </div>
  </section>
);

// --- RESEARCH ---
const Research = ({ c }) => (
  <section id="research" className="bg-[#EDF2F7] py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.3em] text-[#8E763B] mb-3">{c.eyebrow}</p>
          <h2 className="display text-4xl md:text-5xl text-[#0A2240]">{c.headline}</h2>
          <p className="mt-3 text-[#475569] max-w-2xl">
            {String(c.question).trim()}
          </p>
        </div>
        <a href={c.link.href} className="text-[#0A2240] underline-gold mono text-[12px] uppercase tracking-[0.18em]">
          {c.link.label}
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0A2240]/10">
        {c.lines.map((r) => (
          <div
            key={r.tag}
            className="bg-white p-7 hover:bg-[#0A2240] hover:text-white transition-colors group cursor-pointer"
          >
            <p className="mono text-[10px] tracking-[0.25em] text-[#C8A951] mb-3">{r.tag}</p>
            <h3 className="display text-2xl leading-tight mb-3 group-hover:text-white">{r.title}</h3>
            <p className="text-[14px] leading-relaxed text-[#475569] group-hover:text-white/80">{String(r.body).trim()}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- GROUP ---
const InitialsPlaceholder = ({ name }) => {
  const _p = name.split(" ").filter(Boolean);
  const initials = (_p.length > 1 ? _p[0][0] + _p[_p.length - 1][0] : name.slice(0, 2)).toUpperCase();
  return (
    <div className="relative w-full h-full bg-[#0A2240] flex items-center justify-center">
      <span className="display text-[#C8A951]/80 text-3xl">{initials}</span>
    </div>
  );
};

const MemberCard = ({ m }) => {
  const hasPhoto = m.photo && PHOTOS[m.photo];
  return (
    <div className={`group bg-white border-b-2 border-transparent hover:border-[#C8A951] transition-colors ${m.lead ? "ring-1 ring-[#C8A951]/40" : ""}`}>
      <div className="aspect-square bg-[#0A2240] overflow-hidden relative">
        {hasPhoto ? (
          <img
            src={PHOTOS[m.photo]}
            alt={m.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        ) : (
          <InitialsPlaceholder name={m.name} />
        )}
        {m.badge && (
          <span className="absolute top-2 left-2 mono text-[9px] uppercase tracking-[0.2em] bg-[#C8A951] text-[#0A2240] px-1.5 py-0.5 z-10">
            {m.badge}
          </span>
        )}
      </div>
      <div className="p-4 bg-[#EDF2F7]">
        <p className="display text-[15px] text-[#0A2240] leading-tight">{m.name}</p>
        <p className="mono text-[9px] uppercase tracking-[0.18em] text-[#8E763B] mt-1.5">{m.role}</p>
        <p className="text-[12px] text-[#475569] mt-2 leading-snug">{m.topic}</p>
      </div>
    </div>
  );
};

const Group = ({ c }) => (
  <section id="group" className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <p className="mono text-[11px] uppercase tracking-[0.3em] text-[#8E763B] mb-4">{c.eyebrow}</p>
      <div className="mb-8 bg-[#0A2240] px-6 py-10 md:px-10 md:py-12 flex justify-center">
        <img
          src={c.banner}
          alt={c.banner_alt}
          className="w-full max-w-4xl h-auto"
          loading="lazy"
        />
      </div>
      <div className="mb-12">
        <p className="text-[#475569] leading-relaxed max-w-3xl">
          {String(c.intro).trim()}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {c.members.map((m) => <MemberCard key={m.name} m={m} />)}
      </div>

      {/* Join-the-group banner */}
      <div className="mt-8 bg-[#EDF2F7] border-l-4 border-[#C8A951] relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
        <div className="relative p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-2 flex md:block items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#0A2240] flex items-center justify-center shrink-0">
              <Users size={20} className="text-[#C8A951]" />
            </div>
            <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#8E763B] md:mt-4">
              {c.open_call.eyebrow}
            </p>
          </div>
          <div className="md:col-span-7">
            <h3 className="display text-2xl md:text-3xl leading-tight text-[#0A2240] font-semibold">
              {String(c.open_call.headline).trim()}
            </h3>
            <p className="text-[14px] text-[#475569] mt-2">
              {c.open_call.body}
            </p>
          </div>
          <div className="md:col-span-3 md:text-right">
            <a
              href={c.open_call.cta.href}
              className="inline-flex items-center gap-2 bg-[#0A2240] text-white px-5 py-3 text-sm font-medium hover:bg-[#15355F] transition-colors"
            >
              {c.open_call.cta.label} <ArrowUpRight size={16} className="text-[#C8A951] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- PROJECTS ---
const Projects = ({ c }) => (
  <section id="projects" className="bg-[#EDF2F7] py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.3em] text-[#8E763B] mb-3">{c.eyebrow}</p>
          <h2 className="display text-4xl md:text-5xl text-[#0A2240]">{c.headline}</h2>
          <p className="mt-3 text-[#475569] max-w-2xl">
            {c.intro}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {c.items.map((p) => (
          <article
            key={p.code}
            className="bg-white border-t-4 border-[#C8A951] p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-start justify-between mb-5">
              <span className="mono text-[10px] tracking-[0.2em] uppercase text-[#0A2240] bg-[#C8A951]/15 border border-[#C8A951]/40 px-2 py-1 font-semibold">
                {p.code}
              </span>
              <ArrowUpRight size={16} className="text-[#0A2240]/40 group-hover:text-[#C8A951] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </div>

            <h3 className="display text-xl leading-snug mb-3 text-[#0A2240] font-semibold">
              {p.title}
            </h3>

            <p className="text-[13px] leading-relaxed text-[#475569] mb-4">
              {String(p.description).trim()}
            </p>

            <div className="border-t border-[#0A2240]/10 pt-3 space-y-1.5">
              {p.meta.map((m) => (
                <p key={m.label} className="text-[12px] text-[#475569] leading-relaxed">
                  <span className="mono uppercase tracking-[0.15em] text-[10px] text-[#8E763B]">{m.label}</span>
                  {" "}· {m.value}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// --- PUBLICATIONS ---
// Selected publications grouped by research line. "flagship" = first-author work.
const Publications = ({ c }) => (
  <section id="publications" className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.3em] text-[#8E763B] mb-3">{c.eyebrow}</p>
          <h2 className="display text-4xl md:text-5xl text-[#0A2240]">
            {c.headline}
          </h2>
          <p className="mt-3 text-[#475569] max-w-2xl">
            {String(c.intro).trim()}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {c.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 border border-[#0A2240]/15 px-3 py-2 text-[12px] hover:border-[#C8A951] hover:text-[#C8A951] transition-colors">
              {l.label} <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#0A2240]/10 mb-16">
        {c.stats.map((s, i) => (
          <div key={s.label} className={`py-7 px-4 ${i !== 0 ? "md:border-l border-[#0A2240]/10" : ""}`}>
            <p className="display text-5xl text-[#0A2240]">{s.n}</p>
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-[#8E763B] mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Grouped by research line */}
      <div className="space-y-14">
        {c.groups.map((g) => (
          <div key={g.tag}>
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-[#0A2240]">
              <span className="mono text-[10px] tracking-[0.25em] text-[#C8A951] font-medium">{g.tag}</span>
              <h3 className="display text-2xl text-[#0A2240]">{g.line}</h3>
            </div>

            {g.items.map((p, i) => (
              <article
                key={i}
                className={`grid grid-cols-12 gap-4 py-5 border-b border-[#0A2240]/10 hover:bg-[#EDF2F7] transition-colors px-2 ${p.flagship ? "border-l-2 border-l-[#C8A951]" : "border-l-2 border-l-transparent"}`}
              >
                <div className="col-span-3 md:col-span-1">
                  <p className="display text-2xl text-[#C8A951]">{p.year}</p>
                </div>
                <div className="col-span-9 md:col-span-3">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#8E763B]">{p.type}</p>
                  <p className="text-[12px] text-[#475569] italic mt-1">{p.venue}</p>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <h4 className="display text-[18px] text-[#0A2240] leading-snug">{p.title}</h4>
                  <p className="text-[12px] text-[#475569] mt-1.5">{p.authors}</p>
                  {p.doi && (
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mono text-[11px] text-[#8E763B] hover:text-[#C8A951] transition-colors inline-block mt-1.5"
                    >
                      doi:{p.doi}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center gap-3 text-[12px] text-[#475569]">
        <span className="inline-block w-6 h-0.5 bg-[#C8A951]" />
        <span>{c.flagship_note}</span>
      </div>
    </div>
  </section>
);



// --- COLLABORATIONS ---

// --- CONTACT ---
const Contact = ({ c, profiles }) => (
  <section id="contact" className="bg-[#EDF2F7] py-24 relative overflow-hidden">
    {/* Subtle Duffing trail echo in background — callback to hero */}
    <div className="absolute -top-10 -right-20 w-[500px] h-[500px] opacity-[0.08] pointer-events-none">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <circle cx="200" cy="200" r="180" fill="none" stroke="#0A2240" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#C8A951" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="60"  fill="none" stroke="#0A2240" strokeWidth="0.5" />
      </svg>
    </div>

    <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center relative">
      {/* Decorative seal at top */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#C8A951] bg-white mb-8">
        <Mail size={22} className="text-[#0A2240]" />
      </div>

      <p className="mono text-[11px] uppercase tracking-[0.3em] text-[#8E763B] mb-4">{c.eyebrow}</p>
      <h2 className="display text-5xl md:text-6xl leading-[1.05] text-[#0A2240] font-semibold">
        {c.headline}
      </h2>

      {/* gold rule */}
      <div className="flex justify-center my-8">
        <div className="h-px w-16 bg-[#C8A951]"></div>
      </div>

      <p className="text-[#475569] max-w-2xl mx-auto text-lg leading-relaxed">
        {String(c.body).trim()}
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a
          href={`mailto:${c.email}`}
          style={{ backgroundColor: "#0A2240", color: "#FFFFFF" }}
          className="inline-flex items-center gap-2 px-7 py-4 text-[15px] transition-colors font-medium"
        >
          <Mail size={18} style={{ color: "#C8A951" }} />
          <span style={{ color: "#FFFFFF" }}>{c.email}</span>
        </a>
        <span className="inline-flex items-center gap-2 bg-white border border-[#0A2240]/15 px-7 py-4 text-[#0A2240] text-[15px]">
          <MapPin size={18} className="text-[#C8A951]" />
          {c.location}
        </span>
      </div>

      <div className="mt-14">
        <p className="mono text-[10px] uppercase tracking-[0.25em] text-[#8E763B] mb-5">{c.profiles_label}</p>
        <div className="flex justify-center"><SocialHub tone="light" profiles={profiles} /></div>
      </div>

      {/* closing equation — same as hero footer, page comes full circle */}
      <p className="mono text-[11px] text-[#0A2240]/35 mt-16">
        {c.equation}
      </p>
    </div>
  </section>
);

// --- FOOTER ---
const Footer = ({ c }) => (
  <footer className="bg-white border-t-2 border-[#C8A951] text-[#475569] py-8 text-[12px]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-3">
      <p>{c.left}</p>
      <p className="mono text-[#8E763B]">{c.right}</p>
    </div>
  </footer>
);

// ============================================================
//  Root
// ============================================================
export default function VaranisHome({ copy }) {
  // `copy` comes from src/content/site/home.yaml, validated by src/content/config.ts.
  const { nav, profiles, hero, about, research, group, projects, publications, contact, footer } = copy;
  return (
    <div className="min-h-screen bg-white">
      <FontFace />
      <Nav nav={nav} />
      <main>
        <Hero c={hero} profiles={profiles} />
        <About c={{ ...about, name: hero.name }} />
        <Research c={research} />
        <Group c={group} />
        <Projects c={projects} />
        <Publications c={publications} />
        <Contact c={contact} profiles={profiles} />
      </main>
      <Footer c={footer} />
    </div>
  );
}
