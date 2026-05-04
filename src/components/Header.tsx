"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getModelBySlug } from "@/data/models";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const modelMatch = pathname.match(/^\/models\/([^/]+)$/);
  const modelSlug = modelMatch ? modelMatch[1] : null;
  const model = modelSlug ? getModelBySlug(modelSlug) : null;
  const isModelPage = !!model;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    document.getElementById("models-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navigateToSection = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
      return;
    }
    window.location.href = `/#${sectionId}`;
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <Link href="/" className="logo">
            AKULA
          </Link>

          <nav className="main-nav">
            {!isModelPage && (
              <>
                <button className="nav-btn" onClick={() => navigateToSection("section-female")}>
                  Women
                </button>
                <button className="nav-btn" onClick={() => navigateToSection("section-male")}>
                  Men
                </button>
              </>
            )}

            {isModelPage && model && (
              <>
                <a
                  href={`/models/${model.slug}/portfolio.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-btn"
                >
                  Portfolio
                </a>
                <a
                  href={`https://instagram.com/${model.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-btn"
                >
                  Instagram
                </a>
              </>
            )}
          </nav>
        </div>
      </header>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #e5e5e5;
          transition: all 0.3s ease;
          height: 80px;
        }

        .site-header.scrolled {
          background: rgba(255, 255, 255, 0.95);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          gap: 16px;
          padding: 0 20px;
        }

        .logo {
          font-family: "Inter", sans-serif;
          font-weight: 900;
          font-size: 26px;
          letter-spacing: -0.02em;
          color: #0a0a0a;
          text-decoration: none;
          line-height: 1;
          flex-shrink: 0;
        }

        .main-nav {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-left: auto;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 4px 0;
        }

        .main-nav::-webkit-scrollbar {
          display: none;
        }

        .nav-btn {
          font-family: "Inter", sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0a0a0a;
          background: none;
          border: 1px solid transparent;
          cursor: pointer;
          padding: 8px 14px;
          text-decoration: none;
          transition: all 0.2s ease;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 36px;
          line-height: 1;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .nav-btn:hover {
          background: #f5f5f5;
          border-color: #e2e2e2;
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0 12px;
          }

          .logo {
            font-size: 22px;
          }

          .nav-btn {
            font-size: 10px;
            padding: 7px 10px;
            min-height: 30px;
            letter-spacing: 0.07em;
          }
        }
      `}</style>
    </>
  );
}