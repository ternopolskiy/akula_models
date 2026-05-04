"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Model, getGalleryImages } from "@/data/models";
import { withBasePath } from "@/lib/basePath";
import { GalleryLightbox } from "./GalleryLightbox";
import { ScrollToTop } from "./ScrollToTop";

interface ModelPageProps {
  model: Model;
}

const statLabels: Record<string, string> = {
  height: "height",
  bust: "bust",
  waist: "waist",
  hips: "hips",
  suit: "suit",
  inseam: "inseam",
  shoes: "shoes",
  eyes: "eyes",
  hair: "hair",
};

const statOrder = [
  "height",
  "bust",
  "suit",
  "waist",
  "hips",
  "inseam",
  "shoes",
  "eyes",
  "hair",
];

export function ModelPage({ model }: ModelPageProps) {
  const galleryImages = getGalleryImages(model.slug, model.galleryCount);
  const infoColRef = useRef<HTMLDivElement>(null);

  const handleDownloadPortfolio = () => {
    const link = document.createElement("a");
    link.href = withBasePath(`/models/${model.slug}/portfolio.pdf`);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const orderedStats = statOrder
    .filter((key) => model.stats[key as keyof typeof model.stats])
    .map((key) => ({
      key,
      label: statLabels[key],
      value: model.stats[key as keyof typeof model.stats] as string,
    }));

  return (
    <>
      <style jsx global>{`
        .model-page-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 0;
          min-height: calc(100vh - 80px);
          margin-top: 80px;
        }

        .model-info-col {
          padding: 60px 48px 60px 60px;
          border-right: 1px solid #e5e5e5;
          overflow-y: auto;
          scrollbar-width: thin;
          max-height: calc(100vh - 80px);
          position: sticky;
          top: 80px;
        }

        .model-info-col::-webkit-scrollbar {
          width: 6px;
        }

        .model-info-col::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .model-info-col::-webkit-scrollbar-thumb {
          background: #c0c0c0;
          border-radius: 3px;
        }

        .model-info-col::-webkit-scrollbar-thumb:hover {
          background: #808080;
        }

        .model-media-col {
          padding: 60px 60px 80px 60px;
          overflow-y: auto;
        }

        @media (max-width: 1024px) {
          .model-page-layout {
            grid-template-columns: 280px 1fr;
          }

          .model-info-col {
            padding: 40px 32px;
          }

          .model-media-col {
            padding: 40px 32px;
          }
        }

        @media (max-width: 768px) {
          .model-page-layout {
            grid-template-columns: 1fr;
          }

          .model-info-col {
            position: static;
            max-height: none;
            padding: 32px 24px;
            border-right: none;
            border-bottom: 1px solid #e5e5e5;
            top: 0;
          }

          .model-media-col {
            padding: 32px 24px;
          }
        }

        .stat-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          align-items: baseline;
          padding: 7px 0;
          gap: 16px;
        }

        .stat-label {
          font-family: "Cormorant Garamond", serif;
          font-weight: 400;
          font-size: 16px;
          color: #b0b0b0;
          text-align: right;
          font-style: italic;
        }

        .stat-value {
          font-family: "Cormorant Garamond", serif;
          font-weight: 500;
          font-size: 20px;
          color: #0a0a0a;
          font-style: italic;
        }
      `}</style>

      <main className="model-page-layout">
        {/* LEFT: Info Column */}
        <aside className="model-info-col" ref={infoColRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Name */}
            <h1
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 500,
                lineHeight: 1,
                marginBottom: "32px",
                color: "#0a0a0a",
              }}
            >
              <em style={{ fontStyle: "italic", fontWeight: 500 }}>
                {model.firstName}
              </em>{" "}
              <span style={{ fontStyle: "normal", fontWeight: 300 }}>
                {model.lastName}
              </span>
            </h1>

            {/* Instagram */}
            <div style={{ marginBottom: "24px" }}>
              <a
                href={`https://instagram.com/${model.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                data-instagram
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  color: "#0a0a0a",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  transition: "opacity 0.2s",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @{model.instagram}
              </a>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "#808080",
                  marginTop: "4px",
                  paddingLeft: "24px",
                }}
              >
                {model.followers} followers
              </p>
            </div>

            {/* Download Button */}
            <button
              data-portfolio
              onClick={handleDownloadPortfolio}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#3a3a3a",
                color: "#ffffff",
                border: "none",
                borderRadius: 0,
                padding: "12px 20px",
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                marginBottom: "40px",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#0a0a0a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#3a3a3a")
              }
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 1v7M3 5l3 3 3-3M1 10h10" strokeLinecap="round" />
              </svg>
              Portfolio PDF
            </button>

            {/* Stats */}
            <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "16px" }}>
              {orderedStats.map((stat, i) => (
                <motion.div
                  key={stat.key}
                  className="stat-row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                >
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Description (only if exists) */}
            {model.description && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "#3a3a3a",
                  lineHeight: 1.7,
                  marginTop: "28px",
                  textAlign: "center",
                  paddingTop: "20px",
                  borderTop: "1px solid #e5e5e5",
                }}
              >
                {model.description}
              </motion.p>
            )}
          </motion.div>
        </aside>

        {/* RIGHT: Media Column */}
        <section className="model-media-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Hero Image */}
            <div
              style={{
                width: "100%",
                marginBottom: "12px",
                overflow: "hidden",
                background: "#f5f5f5",
              }}
            >
              <Image
                src={withBasePath(`/models/${model.slug}/hero.webp`)}
                alt={`${model.name} hero`}
                width={1200}
                height={1600}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxHeight: "85vh",
                  objectFit: "cover",
                }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
                loading="eager"
              />
            </div>

            {/* Gallery */}
            <GalleryLightbox images={galleryImages} modelName={model.name} />
          </motion.div>
        </section>
      </main>

      <ScrollToTop />
    </>
  );
}