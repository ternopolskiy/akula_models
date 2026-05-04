"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

interface GalleryLightboxProps {
  images: string[];
  modelName: string;
}

export function GalleryLightbox({ images, modelName }: GalleryLightboxProps) {
  const [loaded, setLoaded] = useState(false);

  const openPhotoswipe = useCallback(
    async (startIndex: number) => {
      const PhotoSwipe = (await import("photoswipe")).default;

      const items = images.map((src, i) => ({
        src,
        width: 1200,
        height: 1800,
        alt: `${modelName} - Photo ${i + 1}`,
      }));

      const pswp = new PhotoSwipe({
        dataSource: items,
        index: startIndex,
        bgOpacity: 0.95,
        showHideAnimationType: "zoom",
        loop: true,
        wheelToZoom: true,
        zoom: false,
        close: true,
        counter: true,
        arrowKeys: true,
        escKey: true,
        pswpModule: () => import("photoswipe"),
      });

      pswp.init();
    },
    [images, modelName]
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "12px",
        marginTop: "12px",
      }}>
        {[...Array(Math.min(6, images.length))].map((_, i) => (
          <div
            key={i}
            style={{
              aspectRatio: i % 3 === 0 ? "2/3" : i % 2 === 0 ? "3/4" : "4/5",
              background: "#f0f0f0",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
        ))}
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div>
      <style jsx>{`
        .masonry-grid {
          columns: 2;
          column-gap: 12px;
          margin-top: 12px;
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 12px;
          cursor: zoom-in;
          overflow: hidden;
          background: #f5f5f5;
          position: relative;
        }

        .masonry-item img {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          display: block;
          width: 100%;
          height: auto;
        }

        .masonry-item:hover img {
          transform: scale(1.03);
        }

        @media (max-width: 768px) {
          .masonry-grid {
            columns: 1;
          }
        }
      `}</style>

      <div className="masonry-grid">
        {images.map((src, index) => (
          <div
            key={src}
            className="masonry-item"
            onClick={() => openPhotoswipe(index)}
          >
            <Image
              src={src}
              alt={`${modelName} - Photo ${index + 1}`}
              width={600}
              height={index % 3 === 0 ? 900 : index % 2 === 0 ? 750 : 800}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="(max-width: 768px) 90vw, 30vw"
              loading="lazy"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
            />
          </div>
        ))}
      </div>
    </div>
  );
}