"use client";

import { motion } from "framer-motion";

export function Hero() {
  const scrollToGrid = () => {
    const grid = document.getElementById("models-grid");
    if (grid) {
      grid.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (gender: string) => {
    const section = document.getElementById(`section-${gender}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      scrollToGrid();
    }
  };

  return (
    <section className="hero-section">
      <style jsx>{`
        .hero-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-logo-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 40px;
        }

        .hero-logo-text {
          font-family: "Inter", sans-serif;
          font-weight: 900;
          font-size: clamp(80px, 18vw, 280px);
          line-height: 0.85;
          letter-spacing: -0.02em;
          color: #0a0a0a;
          user-select: none;
          text-align: center;
        }

        .hero-subtitle {
          font-family: "Inter", sans-serif;
          font-weight: 300;
          font-size: clamp(10px, 1.2vw, 14px);
          letter-spacing: 0.4em;
          color: #a0a0a0;
          text-transform: uppercase;
          margin-top: 16px;
          text-align: center;
        }

        .hero-nav {
          display: flex;
          gap: clamp(20px, 4vw, 60px);
          margin-top: 32px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-nav-item {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: clamp(12px, 1.5vw, 16px);
          letter-spacing: 0.2em;
          color: #0a0a0a;
          text-transform: uppercase;
          cursor: pointer;
          background: none;
          border: none;
          position: relative;
          padding: 4px 8px;
          transition: color 0.3s ease;
        }

        .hero-nav-item::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #0a0a0a;
          transition: width 0.3s ease;
        }

        .hero-nav-item:hover::after {
          width: 100%;
        }

        .hero-nav-item:hover {
          color: #0a0a0a;
        }

        .hero-nav-divider {
          width: 1px;
          height: 12px;
          background: #d0d0d0;
        }

        .hero-scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .hero-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, #0a0a0a, transparent);
          animation: scrollHint 2s ease infinite;
        }

        .hero-scroll-text {
          font-family: "Inter", sans-serif;
          font-weight: 300;
          font-size: 10px;
          letter-spacing: 0.3em;
          color: #a0a0a0;
          text-transform: uppercase;
        }

        @keyframes scrollHint {
          0%,
          100% {
            opacity: 0.3;
            transform: scaleY(1);
          }
          50% {
            opacity: 1;
            transform: scaleY(1.2);
          }
        }

        @media (max-width: 768px) {
          .hero-nav {
            gap: 16px;
            margin-top: 24px;
          }

          .hero-nav-divider {
            display: none;
          }

          .hero-logo-text {
            font-size: clamp(60px, 20vw, 200px);
          }

          .hero-subtitle {
            margin-top: 12px;
            font-size: 10px;
          }

          .hero-scroll-hint {
            bottom: 24px;
          }
        }

        @media (max-width: 480px) {
          .hero-nav {
            gap: 12px;
          }

          .hero-nav-item {
            font-size: 11px;
            padding: 4px 4px;
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hero-logo-wrapper"
      >
        <div>
          <h1 className="hero-logo-text">AKULA</h1>
          <p className="hero-subtitle">Models Agency</p>
        </div>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="hero-nav"
      >
        <button
          className="hero-nav-item"
          onClick={() => scrollToSection("female")}
        >
          Women
        </button>
        <div className="hero-nav-divider" />
        <button
          className="hero-nav-item"
          onClick={() => scrollToSection("male")}
        >
          Men
        </button>
        <div className="hero-nav-divider" />
        <button className="hero-nav-item" onClick={scrollToGrid}>
          All
        </button>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hero-scroll-hint"
      >
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
}
