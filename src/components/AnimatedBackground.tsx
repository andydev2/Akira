"use client";

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-background" />

      {/* Radial gradient — top left warm */}
      <div
        className="absolute -top-[30%] -left-[20%] w-[70vw] h-[70vw] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--color-base) 0%, transparent 70%)",
        }}
      />

      {/* Radial gradient — bottom right emerald */}
      <div
        className="absolute -bottom-[20%] -right-[15%] w-[60vw] h-[60vw] rounded-full animate-glow-shift opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      {/* Drifting SVG curves */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] animate-drift-1"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ willChange: "transform" }}
      >
        <path
          d="M-100 600 C200 400, 600 800, 900 500 S1200 200, 1540 450"
          stroke="var(--color-base)"
          strokeOpacity="0.5"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 200 C300 100, 500 500, 800 300 S1100 600, 1500 250"
          stroke="var(--color-accent)"
          strokeOpacity="0.4"
          strokeWidth="0.8"
          fill="none"
        />
      </svg>

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] animate-drift-2"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ willChange: "transform" }}
      >
        <path
          d="M1540 100 C1200 300, 800 50, 500 350 S100 600, -100 300"
          stroke="var(--color-base)"
          strokeOpacity="0.4"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M1540 700 C1100 500, 700 800, 400 600 S0 300, -100 650"
          stroke="var(--color-accent)"
          strokeOpacity="0.3"
          strokeWidth="0.6"
          fill="none"
        />
      </svg>

      {/* Floating particles */}
      {[
        { w: 2.1, h: 2.4, l: 8, t: 10, g: true, d: 0, dur: 6 },
        { w: 2.5, h: 1.8, l: 15.5, t: 33, g: false, d: 1.2, dur: 8 },
        { w: 1.8, h: 2.8, l: 23, t: 56, g: false, d: 2.4, dur: 10 },
        { w: 3.0, h: 2.2, l: 30.5, t: 4, g: true, d: 3.6, dur: 12 },
        { w: 2.3, h: 1.6, l: 38, t: 27, g: false, d: 4.8, dur: 6 },
        { w: 1.9, h: 2.6, l: 45.5, t: 50, g: false, d: 6, dur: 8 },
        { w: 2.7, h: 2.0, l: 53, t: 73, g: true, d: 7.2, dur: 10 },
        { w: 2.0, h: 3.1, l: 60.5, t: 21, g: false, d: 8.4, dur: 12 },
        { w: 2.8, h: 1.7, l: 68, t: 44, g: false, d: 9.6, dur: 6 },
        { w: 2.4, h: 2.9, l: 75.5, t: 67, g: true, d: 10.8, dur: 8 },
        { w: 1.7, h: 2.3, l: 83, t: 15, g: false, d: 12, dur: 10 },
        { w: 2.6, h: 1.9, l: 90.5, t: 38, g: false, d: 13.2, dur: 12 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-particle"
          style={{
            width: `${p.w}px`,
            height: `${p.h}px`,
            left: `${p.l}%`,
            top: `${p.t}%`,
            background: p.g
              ? "var(--color-accent)"
              : "var(--color-base)",
            opacity: p.g ? 0.4 : 0.2,
            animationDelay: `${p.d}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}

      {/* Subtle grid dots — very faint */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-base) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Very subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
