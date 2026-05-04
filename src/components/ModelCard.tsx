"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Model } from "@/data/models";

interface ModelCardProps {
  model: Model;
  index: number;
}

export function ModelCard({ model, index }: ModelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      layout
    >
      <Link href={`/models/${model.slug}`} style={{ display: "block" }}>
        <div className="model-card">
          <style jsx>{`
            .model-card {
              position: relative;
              overflow: hidden;
              aspect-ratio: 3/4;
              background: #f5f5f5;
              cursor: pointer;
            }

            .model-card-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .model-card:hover .model-card-image {
              transform: scale(1.05);
            }

            .model-card-overlay {
              position: absolute;
              inset: 0;
              background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.6) 0%,
                rgba(0, 0, 0, 0) 50%
              );
              opacity: 0;
              transition: opacity 0.4s ease;
            }

            .model-card:hover .model-card-overlay {
              opacity: 1;
            }

            .model-card-info {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 24px 20px;
              transform: translateY(8px);
              opacity: 0;
              transition: all 0.4s ease;
            }

            .model-card:hover .model-card-info {
              transform: translateY(0);
              opacity: 1;
            }

            .model-card-name {
              font-family: "Cormorant Garamond", serif;
              font-weight: 500;
              font-style: italic;
              font-size: clamp(22px, 3vw, 30px);
              color: #ffffff;
              line-height: 1;
              display: block;
            }

            .model-card-gender {
              font-family: "Inter", sans-serif;
              font-weight: 300;
              font-size: 11px;
              letter-spacing: 0.2em;
              color: rgba(255, 255, 255, 0.7);
              text-transform: uppercase;
              margin-top: 4px;
              display: block;
            }
          `}</style>

          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={`/models/${model.slug}/cover.webp`}
              alt={model.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              style={{ objectFit: "cover" }}
              className="model-card-image"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
              loading="lazy"
              quality={75}
            />
            <div className="model-card-overlay" />
            <div className="model-card-info">
              <span className="model-card-name">{model.name}</span>
              <span className="model-card-gender">
                {model.gender === "female" ? "Women" : "Men"}
              </span>
            </div>
          </div>
        </div>

        <div style={{ padding: "12px 0 0" }}>
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#0a0a0a",
              lineHeight: 1,
            }}
          >
            {model.firstName}{" "}
            <span style={{ fontWeight: 300 }}>{model.lastName}</span>
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "#a0a0a0",
              textTransform: "uppercase",
              marginTop: "4px",
            }}
          >
            {model.stats.height.split("/")[1]?.trim() ||
              model.stats.height.split("/")[0].trim()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}