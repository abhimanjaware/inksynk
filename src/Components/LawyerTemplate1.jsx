import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import mobvdo from "../assets/inksynkmob.mp4";
 import owner from "../assets/parritosh.png";
 import img1 from "../assets/1.png";
 import img2 from "../assets/2.png";
 import img3 from "../assets/3.png";
 import img4 from "../assets/4.png";
 import img5 from "../assets/5.png";






/* =========================================================
   ULTRA-PREMIUM LAW FIRM WEBSITE
   Faster Animations | Full Hero Overlay | Rich Content
   Single-file | Agency-grade | Production-ready
   ========================================================= */

export default function LawyerTemplate1() {
  return (
    <div className="bg-black text-white overflow-x-hidden antialiased">
      <Navbar />
      <Hero />
      <StatsBar />
      <Gallery />
      <About />
      {/* <Work /> */}
      <ClientReviews/>
      <Contact />
      <Footer />
    </div>
  );
}

/* =========================================================
   FAST SCROLL REVEAL + COUNTER HOOKS
   ========================================================= */

function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, show];
}


function useCountUp(target, active) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 14);
    return () => clearInterval(interval);
  }, [target, active]);

  return count;
}

/* =========================================================
   NAVBAR + MOBILE MENU
   ========================================================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const links = ["HOME", "ABOUT", "GALLERY", "CONTACT"];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-px h-8 bg-[#c8f04a]" />
            <div>
              <p
                className="text-white font-extralight leading-none tracking-widest"
                style={{
                  fontFamily: "'Anton', 'Impact', sans-serif",
                  fontSize: "1.25rem",
                  letterSpacing: "0.15em",
                }}
              >
                INKSYNK
              </p>
              <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase mt-0.5">
                Tattoos · Pune
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.35em]">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="relative text-white/50 hover:text-white transition duration-300
                  after:absolute after:left-0 after:-bottom-1.5 after:w-0 after:h-px
                  after:bg-[#c8f04a] hover:after:w-full after:transition-all after:duration-300"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-[#c8f04a] text-black text-[10px] tracking-widest font-bold hover:bg-[#d4ff50] transition duration-300"
              style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "0.2em" }}
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span className="w-6 h-px bg-white block" />
            <span className="w-4 h-px bg-[#c8f04a] block" />
          </button>

        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#0d0d0d] z-50 transition-transform duration-500 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Top bar */}
        <div className="relative flex items-center justify-between px-6 h-20 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-px h-8 bg-[#c8f04a]" />
            <p
              className="text-white leading-none"
              style={{ fontFamily: "'Anton', 'Impact', sans-serif", fontSize: "1.25rem", letterSpacing: "0.15em" }}
            >
              INKSYNK
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/60 hover:border-[#c8f04a] hover:text-[#c8f04a] transition text-xl"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <div className="relative h-[calc(100%-5rem)] flex flex-col justify-center px-10">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-5 py-6 border-b border-white/8 last:border-0"
            >
              <span className="text-[10px] tracking-widest text-white/20">0{i + 1}</span>
              <span
                className="text-white group-hover:text-[#c8f04a] transition duration-300 uppercase"
                style={{
                  fontFamily: "'Anton', 'Impact', sans-serif",
                  fontSize: "clamp(2rem, 8vw, 3.5rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                {l}
              </span>
              <span className="ml-auto text-[#c8f04a] opacity-0 group-hover:opacity-100 transition duration-300 text-lg">→</span>
            </a>
          ))}

          {/* Bottom CTA */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-10 w-full bg-[#c8f04a] text-black py-4 text-center text-xs tracking-widest font-bold hover:bg-[#d4ff50] transition"
            style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "0.25em" }}
          >
            BOOK YOUR SESSION
          </a>
        </div>

      </div>
    </>
  );
}

/* =========================================================
   HERO — FULL HEIGHT OVERLAY FIXED
   ========================================================= */

function Hero() {
  const heroRef = React.useRef(null);

  const badgeRef = React.useRef(null);
  const titleRefs = React.useRef([]);
  const descRef = React.useRef(null);
  const actionsRef = React.useRef(null);

  const ctaRef = React.useRef(null);
  const breatheTween = React.useRef(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [badgeRef.current, ...titleRefs.current, descRef.current, actionsRef.current],
        { autoAlpha: 1 }
      );

      const introTl = gsap.timeline({ delay: 0.3 });

      introTl
        .from(badgeRef.current, {
          autoAlpha: 0,
          y: 16,
          duration: 0.6,
          ease: "power2.out",
        })
        .from(
          titleRefs.current,
          {
            autoAlpha: 0,
            y: 28,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.05,
          },
          "-=0.3"
        )
        .from(
          descRef.current,
          { autoAlpha: 0, y: 18, duration: 0.6 },
          "-=0.4"
        )
        .from(
          actionsRef.current,
          { autoAlpha: 0, y: 18, duration: 0.6 },
          "-=0.3"
        );

      const btn = ctaRef.current;
      if (!btn) return;

      gsap.set(btn, { force3D: true });

      breatheTween.current = gsap.to(btn, {
        scale: 1.06,
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.8,
      });

      const onEnter = () => {
        breatheTween.current.pause();
        gsap.to(btn, {
          scale: 1.1,
          y: -3,
          duration: 0.35,
          ease: "power3.out",
        });
      };

      const onLeave = () => {
        gsap.to(btn, {
          scale: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
          onComplete: () => breatheTween.current.resume(),
        });
      };

      btn.addEventListener("mouseenter", onEnter);
      btn.addEventListener("mouseleave", onLeave);

      return () => {
        btn.removeEventListener("mouseenter", onEnter);
        btn.removeEventListener("mouseleave", onLeave);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden"
    >

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={mobvdo} type="video/mp4" />
      </video>

      {/* VIGNETTE EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.9)_100%)]"></div>

      {/* Vertical side label — matches About */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 hidden xl:flex items-center gap-3 z-10">
        <span className="w-12 h-px bg-[#c8f04a]" />
        <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase">Inksynk Tattoos</span>
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 max-w-5xl px-6 text-left">

        {/* Top label row — mirrors About's header strip */}
        <div
          ref={badgeRef}
          className="flex items-center gap-4 mb-10"
        >
          <span className="text-[#c8f04a] text-[10px] tracking-[0.5em] uppercase">Modern Art Technologies</span>
          <span className="w-16 h-px bg-white/20" />
          <span className="text-white/20 text-[10px] tracking-widest">Pune, MH</span>
        </div>

        {/* Big name block — Anton font, solid + ghost outline like About */}
        <h1 className="leading-none mb-8">
          <span
            ref={(el) => (titleRefs.current[0] = el)}
            className="block text-white uppercase"
            style={{
              fontFamily: "'Anton', 'Impact', sans-serif",
              fontSize: "clamp(4rem, 14vw, 11rem)",
              letterSpacing: "-0.02em",
            }}
          >
            INKSYNK
          </span>
          <span
            ref={(el) => (titleRefs.current[1] = el)}
            className="block uppercase"
            style={{
              fontFamily: "'Anton', 'Impact', sans-serif",
              fontSize: "clamp(4rem, 14vw, 11rem)",
              letterSpacing: "-0.02em",
              WebkitTextStroke: "3px rgba(255,255,255,0.25)",
              color: "transparent",
            }}
          >
            TATTOOS
          </span>
        </h1>

        {/* Divider — same as About's horizontal rule */}
        <div
          ref={descRef}
          className="flex items-start gap-8"
        >
          <div className="w-px h-16 bg-[#c8f04a] mt-1 shrink-0" />
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
            Tattoo artist offering expert colouring, permanent tattoos,
            and modern artistic designs crafted with precision.
          </p>
        </div>

        {/* Actions row */}
        <div
          ref={actionsRef}
          className="mt-10 flex items-center gap-6"
        >
          <a
            ref={ctaRef}
            href="#contact"
            className="px-8 py-3 bg-[#c8f04a] text-black text-xs tracking-widest font-bold hover:bg-[#d4ff50] transition"
            style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "0.2em" }}
          >
            BOOK SESSION
          </a>

          {/* Rating badge — pulled from About's stats */}
          <div className="flex items-center gap-3 border border-white/10 px-4 py-3">
            <span
              className="text-[#c8f04a] font-black text-lg"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              5.0
            </span>
            <div>
              <p className="text-white/70 text-xs">Google Rating</p>
              <p className="text-white/30 text-[10px] tracking-widest">86 REVIEWS</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}


/* =========================================================
   STATS BAR — FASTER COUNT
   ========================================================= */

function StatsBar() {
  const [ref, show] = useReveal(0.35);

  const cases = useCountUp(500, show);
  const years = useCountUp(15, show);
  const success = useCountUp(98, show);
  const clients = useCountUp(100, show);

  const stats = [
    { value: `${cases}`, suffix: "+", label: "Tattoos Done", sub: "& counting" },
    { value: `${years}`, suffix: "+", label: "Years of Experience", sub: "in the craft" },
    { value: `${success}`, suffix: "%", label: "Happy Clients", sub: "every time" },
    { value: `${clients}`, suffix: "%", label: "Satisfaction Rate", sub: "guaranteed" },
  ];

  return (
    <section ref={ref} className="relative bg-[#c8f04a] overflow-hidden">

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Top edge label strip */}
      <div className="relative border-b border-black/10 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-6 h-px bg-black/30" />
          <span className="text-[10px] tracking-[0.4em] text-black/40 uppercase">Inksynk · By The Numbers</span>
        </div>
        <span className="text-[10px] tracking-widest text-black/30 uppercase">Katraj · Pune</span>
      </div>

      {/* Stats grid */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`relative py-14 px-8 flex flex-col group ${
              i < 3 ? "md:border-r border-black/10" : ""
            } ${i % 2 === 0 ? "border-r border-black/10 md:border-r-0 md:[&:not(:last-child)]:border-r" : ""}`}
          >
            {/* Large number */}
            <div className="flex items-start leading-none mb-3">
              <span
                className="text-black"
                style={{
                  fontFamily: "'Anton', 'Impact', sans-serif",
                  fontSize: "clamp(3.5rem, 7vw, 6rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-black/40 mt-2 ml-1"
                style={{
                  fontFamily: "'Anton', 'Impact', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  lineHeight: 1,
                }}
              >
                {stat.suffix}
              </span>
            </div>

            {/* Label */}
            <p
              className="text-black text-sm uppercase tracking-widest mb-1"
              style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "0.1em" }}
            >
              {stat.label}
            </p>

            {/* Sub label */}
            <p className="text-black/40 text-[10px] tracking-widest uppercase">
              {stat.sub}
            </p>

            {/* Bottom corner accent */}
            <div className="absolute bottom-5 right-5 w-4 h-4 border-b-2 border-r-2 border-black/20 group-hover:border-black/50 transition duration-300" />
          </div>
        ))}
      </div>

      {/* Bottom edge strip */}
      <div className="relative border-t border-black/10 px-6 py-3 flex items-center justify-end gap-6">
        {["Custom Designs", "Cover-Ups", "Fine Line", "Portraits"].map((tag, i) => (
          <span key={i} className="text-[10px] tracking-widest text-black/35 uppercase hidden sm:inline">
            {i > 0 && <span className="mr-6 text-black/20">·</span>}
            {tag}
          </span>
        ))}
      </div>

    </section>
  );
}


function Stat({ value, label }) {
  return (
    <div className="transition-all duration-300">
      <p className="font-serif text-5xl mb-2">{value}</p>
      <span className="text-xs tracking-[0.35em]">{label}</span>
    </div>
  );
}

/* =========================================================
   EXPERTISE — RICH CONTENT
   ========================================================= */

function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gallery = [
    { img: img1, title: "Fine Line Tattoo" },
    { img: img2, title: "Tattoo Workspace" },
    { img: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200", title: "Ink Preparation" },
    { img: img3, title: "Minimal Tattoo" },
    { img: "https://plus.unsplash.com/premium_photo-1707699571976-f8d8d873eb0d?w=500&auto=format&fit=crop&q=60", title: "Precision Work" },
    { img: img4, title: "Creative Session" },
    { img: img5, title: "Tattoo Craft" },
    { img: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=500", title: "Studio Vibes" },
  ];

  const visibleImages = isMobile && !showAll ? gallery.slice(0, 4) : gallery;

  return (
    <section id="gallery" className="relative bg-[#0d0d0d] py-32 overflow-hidden">

      {/* Background texture */}
      {/* <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      /> */}

      {/* Vertical side label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 hidden xl:flex items-center gap-3 z-10">
        <span className="w-12 h-px bg-[#c8f04a]" />
        <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase">Our Work</span>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Top label row */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#c8f04a] text-[10px] tracking-[0.5em] uppercase">Inksynk Gallery</span>
          <span className="flex-1 h-px bg-white/10" />
          <span className="text-white/20 text-[10px] tracking-widest">KATRAJ · PUNE</span>
        </div>

        {/* Header */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-16 items-end mb-16">
          <div>
            <h2
              className="uppercase leading-none text-white"
              style={{
                fontFamily: "'Anton', 'Impact', sans-serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              INKED BY
            </h2>
            <h2
              className="uppercase leading-none"
              style={{
                fontFamily: "'Anton', 'Impact', sans-serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                letterSpacing: "-0.02em",
                WebkitTextStroke: "1px rgba(255,255,255,0.25)",
                color: "transparent",
              }}
            >
              PARITOSH
            </h2>
          </div>

          <div className="flex items-end pb-2">
            <div className="flex items-start gap-5">
              <div className="w-px h-14 bg-[#c8f04a] shrink-0" />
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                Where creativity meets skin — every piece tells a story crafted with precision, passion, and artistry.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {visibleImages.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700 ease-out"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition duration-500"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}
              >
                <div className="flex items-center justify-between">
                  <p
                    className="text-white text-xs uppercase tracking-widest"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {item.title}
                  </p>
                  <span className="text-[#c8f04a] text-xs">✦</span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#c8f04a] opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
          <span className="text-white/20 text-[10px] tracking-widest uppercase">
            {gallery.length} pieces shown
          </span>

          {isMobile && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-white/20 text-white/60 px-6 py-2.5 text-[10px] tracking-widest uppercase hover:border-[#c8f04a] hover:text-[#c8f04a] transition duration-300"
            >
              {showAll ? "SHOW LESS" : "VIEW ALL"}
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
/* =========================================================
   ABOUT — EDITORIAL DEPTH
   ========================================================= */


function About() {
  const [ref, show] = useReveal();

  return (
    <section id="about" className="relative bg-[#0d0d0d] py-32 overflow-hidden">

      {/* Background ink-bleed texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Vertical side label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 hidden xl:flex items-center gap-3">
        <span className="w-12 h-px bg-[#c8f04a]" />
        <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase">Inksynk Tattoos</span>
      </div>

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >

        {/* Top label row */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#c8f04a] text-[10px] tracking-[0.5em] uppercase">The Artist</span>
          <span className="flex-1 h-px bg-white/10" />
          <span className="text-white/20 text-[10px] tracking-widest">EST. PUNE, MH</span>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-20 items-start">

          {/* LEFT — Content */}
          <div className="flex flex-col">

            {/* Big name */}
            <h2
              className="font-black uppercase leading-none mb-2 text-white"
              style={{
                fontFamily: "'Anton', 'Impact', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                letterSpacing: "-0.02em",
              }}
            >
              PARITOSH
            </h2>
            <h2
              className="font-black uppercase leading-none mb-8"
              style={{
                fontFamily: "'Anton', 'Impact', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                letterSpacing: "-0.02em",
                WebkitTextStroke: "1px rgba(255,255,255,0.25)",
                color: "transparent",
              }}
            >
              GHODAKE
            </h2>

            {/* Tag strip */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["Tattoo Artist", "Custom Designs", "Cover-Ups", "Fine Line"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-widest uppercase border border-white/15 text-white/50 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-white/65 leading-relaxed mb-5 text-[15px]">
              Based at <span className="text-white/90">Inksynk Tattoos</span> in Katraj, Pune — Paritosh Ghodake brings more than just ink to the table. Every piece is a conversation: he counsels clients on design, meaning, and placement before a single needle touches skin.
            </p>
            <p className="text-white/45 leading-relaxed mb-12 text-sm">
              The studio at Bharati Vidyapeeth carries a calm, focused energy that makes even first-timers feel at ease. Whether it's a bold cover-up, delicate fine line, or a deeply personal custom piece — the result is consistently a work of art.
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-white/8 mb-10" />

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <p className="text-[#c8f04a] font-black text-4xl" style={{ fontFamily: "'Anton', sans-serif" }}>86</p>
                <span className="text-[10px] tracking-widest text-white/35 uppercase">Reviews</span>
              </div>
              <div>
                <p className="text-[#c8f04a] font-black text-4xl" style={{ fontFamily: "'Anton', sans-serif" }}>5.0</p>
                <span className="text-[10px] tracking-widest text-white/35 uppercase">Rating</span>
              </div>
              <div>
                <p className="text-[#c8f04a] font-black text-4xl" style={{ fontFamily: "'Anton', sans-serif" }}>∞</p>
                <span className="text-[10px] tracking-widest text-white/35 uppercase">Designs</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/8 mb-10" />

            {/* Review quote */}
            <div className="border-l-2 border-[#c8f04a] pl-6">
              <p className="text-white/60 text-sm leading-relaxed italic mb-3">
                "He not only designs a tattoo but also counsels about the design and process. Incredible place for tattoo lovers."
              </p>
              <span className="text-[10px] tracking-widest text-white/25 uppercase">— Google Review</span>
            </div>

          </div>

          {/* RIGHT — Image + decorative frame */}
          <div className="relative lg:sticky lg:top-24">

            {/* Offset accent frame */}
            <div
              className="absolute -top-4 -right-4 w-full h-full border border-[#c8f04a]/20"
              style={{ zIndex: 0 }}
            />

            <div className="relative" style={{ zIndex: 1 }}>
              <img
                src={owner}
                className="w-full object-cover grayscale"
                style={{ height: "580px", filter: "grayscale(80%) contrast(1.1)" }}
                alt="Paritosh Ghodake — Inksynk Tattoos"
              />

              {/* Color tint overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(200,240,74,0.06) 0%, rgba(0,0,0,0.55) 100%)" }}
              />

              {/* Bottom info strip */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-bold text-sm tracking-wide">INKSYNK TATTOOS</p>
                <p className="text-white/40 text-xs tracking-widest mt-0.5">Bharati Vidyapeeth Rd, Katraj · Pune</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#c8f04a]" />
              <div className="absolute bottom-16 right-4 w-8 h-8 border-b-2 border-r-2 border-[#c8f04a]" />
            </div>

            {/* Floating specialties card */}
            <div className="absolute -left-6 top-1/3 bg-[#0d0d0d] border border-white/10 px-5 py-4" style={{ zIndex: 2 }}>
              <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase mb-3">Specialties</p>
              <ul className="space-y-1.5">
                {["Custom Artwork", "Cover-Ups", "Portraits", "Minimalist"].map((s) => (
                  <li key={s} className="flex items-center gap-2 text-xs text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8f04a]" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS
   ========================================================= */

// function Work() {
//   const [ref, show] = useReveal();

//   const steps = [
//     {
//       no: "01",
//       title: "Initial Contact",
//       desc:
//         "Begin by reaching out via phone, WhatsApp, or email. Your inquiry is received with confidentiality and professional discretion.",
//       extra:
//         "This first interaction helps us understand the nature of your concern and guide you toward the right legal direction.",
//     },
//     {
//       no: "02",
//       title: "Consultation & Evaluation",
//       desc:
//         "A detailed consultation is conducted to assess facts, documents, and legal standing.",
//       extra:
//         "You receive clear advice on strengths, risks, and possible outcomes before any legal action is initiated.",
//     },
//     {
//       no: "03",
//       title: "Strategic Planning",
//       desc:
//         "A tailored legal strategy is developed based on your objectives and applicable law.",
//       extra:
//         "Every step is planned with foresight, ensuring preparedness for negotiations, filings, or courtroom proceedings.",
//     },
//     {
//       no: "04",
//       title: "Execution & Representation",
//       desc:
//         "Legal action is carried out with focus, precision, and continuous updates.",
//       extra:
//         "You remain informed at every stage while your matter is represented with diligence and authority.",
//     },
//   ];

//   return (
//     <section className="bg-black py-40">
//       <div
//         ref={ref}
//         className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
//           show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//         }`}
//       >
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-28">
//           <p className="text-[#d4a14f] text-xs tracking-[0.35em] mb-4">
//             HOW IT WORKS
//           </p>
//           <h2 className="font-serif text-5xl mb-6">
//             A Structured & Thoughtful Legal Process
//           </h2>
//           <p className="text-white/60">
//             Every matter is handled through a disciplined process designed to
//             ensure clarity, preparedness, and strong legal positioning.
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14">
//           {steps.map((step, i) => (
//             <div
//               key={step.no}
//               style={{ transitionDelay: `${i * 90}ms` }}
//               className="bg-[#161b22] border border-white/10 p-12
//                          hover:border-[#d4a14f]/40 hover:scale-105 transition duration-300
//                          flex flex-col"
//             >
//               {/* Step Number */}
//               <span className="font-serif text-4xl text-[#d4a14f] mb-6">
//                 {step.no}
//               </span>

//               {/* Title */}
//               <h3 className="font-serif text-xl mb-4">
//                 {step.title}
//               </h3>

//               {/* Description */}
//               <p className="text-white/70 text-sm leading-relaxed mb-4">
//                 {step.desc}
//               </p>

//               {/* Extra */}
//               <p className="text-white/50 text-sm leading-relaxed mt-auto">
//                 {step.extra}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


/* =========================================================
   reviews
   ========================================================= */

function ClientReviews() {
  const [ref, show] = useReveal();
  const [page, setPage] = React.useState(0);

  const reviews = [
    {
      name: "Mrunmayee Jadhav",
      tag: "7th Tattoo",
      text: "Inksynk was always the only choice. The studio has this calm, peaceful vibe that instantly makes you feel at ease. Every tattoo of mine will always be from this place.",
    },
    {
      name: "Aishwarya Pawar",
      tag: "First Timer",
      text: "Paritosh is incredibly kind, patient, and detail-oriented. He guided me well and the tattoo turned out just perfect. Warm, cozy, and welcoming from the moment you step in.",
    },
    {
      name: "Rutvik Dhotre",
      tag: "Cover-Up",
      text: "I got a cover-up done at Inksynk and couldn't be happier. The transformation is absolutely incredible — Paritosh nailed it beyond my expectations.",
    },
    {
      name: "Shreya Kulkarni",
      tag: "Custom Design",
      text: "He not only designs a tattoo but also counsels about the process. Took time to understand exactly what I wanted and delivered something even better than I imagined.",
    },
    {
      name: "Rohit Patil",
      tag: "Google Review",
      text: "Overall the experience was so good. The ambiance and vibe is great. Paritosh is very skilled and professional. Highly recommend Inksynk to anyone looking for quality work.",
    },
    {
      name: "Neha Deshmukh",
      tag: "Google Review",
      text: "Incredible place for tattoo lovers. The attention to detail and cleanliness of the studio is top-notch. Will definitely be coming back for my next piece.",
    },
  ];

  const pageSize = 3;
  const totalPages = Math.ceil(reviews.length / pageSize);
  const next = () => { if (page < totalPages - 1) setPage(page + 1); };
  const prev = () => { if (page > 0) setPage(page - 1); };
  const visibleReviews = reviews.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section className="relative bg-[#0d0d0d] py-32 overflow-hidden">

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >

        {/* Top label row */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-[#c8f04a] text-[10px] tracking-[0.5em] uppercase">Client Reviews</span>
          <span className="flex-1 h-px bg-white/10" />
          <span className="text-white/20 text-[10px] tracking-widest">86 GOOGLE REVIEWS · 5.0 ★</span>
        </div>

        {/* Section title */}
        <div className="mb-16">
          <h2
            className="uppercase leading-none text-white"
            style={{
              fontFamily: "'Anton', 'Impact', sans-serif",
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            WHAT THEY SAY
          </h2>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {visibleReviews.map((r, i) => (
            <div
              key={i}
              className="border border-white/10 p-8 flex flex-col hover:border-[#c8f04a]/30 transition duration-300"
            >
              {/* Stars */}
              <span className="text-[#c8f04a] text-xs tracking-widest mb-6">★★★★★</span>

              {/* Quote */}
              <p className="text-white/55 leading-relaxed text-sm flex-1 mb-8">
                "{r.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <p
                  className="text-white text-sm uppercase tracking-wide"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {r.name}
                </p>
                <span className="text-[10px] tracking-widest text-white/25 uppercase">{r.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
          <span className="text-white/25 text-[10px] tracking-widest uppercase">
            Verified · Google Maps
          </span>
          <div className="flex items-center gap-5">
            <button
              onClick={prev}
              disabled={page === 0}
              className={`w-10 h-10 border flex items-center justify-center text-base transition ${
                page === 0
                  ? "border-white/10 text-white/20 cursor-not-allowed"
                  : "border-white/20 text-white/60 hover:border-[#c8f04a] hover:text-[#c8f04a]"
              }`}
            >
              ‹
            </button>
            <span className="text-white/30 text-xs tracking-widest">{page + 1} / {totalPages}</span>
            <button
              onClick={next}
              disabled={page === totalPages - 1}
              className={`w-10 h-10 border flex items-center justify-center text-base transition ${
                page === totalPages - 1
                  ? "border-white/10 text-white/20 cursor-not-allowed"
                  : "border-white/20 text-white/60 hover:border-[#c8f04a] hover:text-[#c8f04a]"
              }`}
            >
              ›
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   CONTACT
   ========================================================= */

function Contact() {
  const [ref, show] = useReveal();

  return (
    <section id="contact" className="relative bg-[#0d0d0d] py-32 overflow-hidden">

      {/* Background dot texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Vertical side label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 hidden xl:flex items-center gap-3 z-10">
        <span className="w-12 h-px bg-[#c8f04a]" />
        <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase">Book a Session</span>
      </div>

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Top label row */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#c8f04a] text-[10px] tracking-[0.5em] uppercase">Get In Touch</span>
          <span className="flex-1 h-px bg-white/10" />
          <span className="text-white/20 text-[10px] tracking-widest">KATRAJ · PUNE</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">

          {/* LEFT — Info */}
          <div className="flex flex-col">

            <h2
              className="uppercase leading-none mb-2 text-white"
              style={{
                fontFamily: "'Anton', 'Impact', sans-serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              BOOK YOUR
            </h2>
            <h2
              className="uppercase leading-none mb-10"
              style={{
                fontFamily: "'Anton', 'Impact', sans-serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                letterSpacing: "-0.02em",
                WebkitTextStroke: "1px rgba(255,255,255,0.25)",
                color: "transparent",
              }}
            >
              SESSION
            </h2>

            <div className="flex items-start gap-6 mb-12">
              <div className="w-px h-16 bg-[#c8f04a] mt-1 shrink-0" />
              <p className="text-white/55 text-sm leading-relaxed">
                Ready to get inked? Drop your details and Paritosh will get back to you to discuss your design, placement, and appointment slot.
              </p>
            </div>

            <div className="h-px w-full bg-white/8 mb-10" />

            {/* Phone */}
            <div className="flex items-start gap-5 mb-8">
              <div className="w-11 h-11 flex items-center justify-center border border-white/10 text-[#c8f04a] shrink-0 text-base">
                ☎
              </div>
              <div>
                <p
                  className="text-white text-sm mb-1 uppercase tracking-widest"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  Call / WhatsApp
                </p>
                <p className="text-white/70 text-sm">0788 735 7888</p>
                <p className="text-white/35 text-xs mt-1">Opens 10 AM · Bharati Vidyapeeth Rd</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-5 mb-8">
              <div className="w-11 h-11 flex items-center justify-center border border-white/10 text-[#c8f04a] shrink-0 text-base">
                📍
              </div>
              <div>
                <p
                  className="text-white text-sm mb-1 uppercase tracking-widest"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  Studio Address
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Shop No. 3, Trimurti, Shalini Palace,<br />
                  Opposite lane to Bikaner Sweets,<br />
                  Katraj, Pune — 411046
                </p>
              </div>
            </div>

            {/* Instagram / social hint */}
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 flex items-center justify-center border border-white/10 text-[#c8f04a] shrink-0 text-base">
                ✦
              </div>
              <div>
                <p
                  className="text-white text-sm mb-1 uppercase tracking-widest"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  Rating
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[#c8f04a] font-black text-xl" style={{ fontFamily: "'Anton', sans-serif" }}>5.0</span>
                  <span className="text-white/35 text-xs tracking-widest">— 86 GOOGLE REVIEWS</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT — Form */}
          <div className="relative">

            {/* Offset accent frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#c8f04a]/15" />

            <div className="relative bg-[#111] border border-white/10 p-10">

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#c8f04a]" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#c8f04a]" />

              <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-8">
                Tattoo Inquiry Form
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-[10px] tracking-widest text-white/40 mb-2 uppercase">
                    Your Name
                  </label>
                  <input
                    className="w-full bg-black/40 border border-white/10 px-5 py-4 outline-none text-white text-sm placeholder:text-white/20 focus:border-[#c8f04a]/40 transition"
                    placeholder="Full name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-widest text-white/40 mb-2 uppercase">
                      Phone / WhatsApp
                    </label>
                    <input
                      className="w-full bg-black/40 border border-white/10 px-5 py-4 outline-none text-white text-sm placeholder:text-white/20 focus:border-[#c8f04a]/40 transition"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest text-white/40 mb-2 uppercase">
                      Tattoo Size
                    </label>
                    <select className="w-full bg-black/40 border border-white/10 px-5 py-4 outline-none text-white/70 text-sm focus:border-[#c8f04a]/40 transition appearance-none">
                      <option value="" disabled selected>Select size</option>
                      <option>Small (under 3")</option>
                      <option>Medium (3"–6")</option>
                      <option>Large (6"+)</option>
                      <option>Full sleeve / back</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest text-white/40 mb-2 uppercase">
                    Placement
                  </label>
                  <input
                    className="w-full bg-black/40 border border-white/10 px-5 py-4 outline-none text-white text-sm placeholder:text-white/20 focus:border-[#c8f04a]/40 transition"
                    placeholder="e.g. forearm, chest, back, wrist..."
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest text-white/40 mb-2 uppercase">
                    Describe Your Design
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 px-5 py-4 outline-none text-white text-sm resize-none placeholder:text-white/20 focus:border-[#c8f04a]/40 transition"
                    placeholder="Tell Paritosh about your idea — style, reference, meaning, anything..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c8f04a] text-black py-4 text-xs tracking-widest font-bold hover:bg-[#d4ff50] transition"
                  style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "0.25em" }}
                >
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 text-center py-14">
      <div className="w-full  mx-auto text-center px-6 flex flex-col md:flex-row justify-center items-center gap-6 text-white/80 text-sm">
<a href="https://www.aakaar.digital/" target="_blank">        <p>Designed by <span className="text-[#e2eebc]">Aakaar</span> ©2026.  All rights reserved.</p>
</a>
      </div>
    </footer>
  );
}
