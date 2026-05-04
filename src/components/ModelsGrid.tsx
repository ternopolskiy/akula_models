"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { models } from "@/data/models";
import { ModelCard } from "./ModelCard";
import { ModelFilter } from "./ModelFilter";

type FilterType = "all" | "female" | "male";

export function ModelsGrid() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered = models.filter((m) => {
    if (filter === "all") return true;
    return m.gender === filter;
  });

  const counts = {
    all: models.length,
    female: models.filter((m) => m.gender === "female").length,
    male: models.filter((m) => m.gender === "male").length,
  };
  const femaleModels = models.filter((m) => m.gender === "female");
  const maleModels = models.filter((m) => m.gender === "male");

  return (
    <section
      id="models-grid"
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "80px 40px 120px",
      }}
    >
      <style jsx>{`
        .gender-anchor {
          scroll-margin-top: 110px;
        }

        .gender-section {
          margin-top: 56px;
        }

        .gender-heading {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: #9a9a9a;
          text-transform: uppercase;
          margin: 0 0 22px;
        }

        .models-layout {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
          gap: clamp(16px, 3vw, 40px) clamp(12px, 2vw, 24px);
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 20px 80px !important;
          }

          .gender-section {
            margin-top: 40px;
          }

          .gender-heading {
            margin-bottom: 16px;
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ModelFilter active={filter} onChange={setFilter} counts={counts} />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filter === "all" ? (
            <>
              <div id="section-female" className="gender-anchor gender-section">
                <p className="gender-heading">Women</p>
                <div className="models-layout">
                  <AnimatePresence>
                    {femaleModels.map((model, index) => (
                      <ModelCard key={model.slug} model={model} index={index} />
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <div id="section-male" className="gender-anchor gender-section">
                <p className="gender-heading">Men</p>
                <div className="models-layout">
                  <AnimatePresence>
                    {maleModels.map((model, index) => (
                      <ModelCard
                        key={model.slug}
                        model={model}
                        index={index + femaleModels.length}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </>
          ) : (
            <div
              id={filter === "female" ? "section-female" : "section-male"}
              className="gender-anchor gender-section"
            >
              <p className="gender-heading">{filter === "female" ? "Women" : "Men"}</p>
              <div className="models-layout">
                <AnimatePresence>
                  {filtered.map((model, index) => (
                    <ModelCard key={model.slug} model={model} index={index} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
