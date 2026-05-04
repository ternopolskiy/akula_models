"use client";

import { motion } from "framer-motion";

type FilterType = "all" | "female" | "male";

interface ModelFilterProps {
  active: FilterType;
  onChange: (filter: FilterType) => void;
  counts: { all: number; female: number; male: number };
}

export function ModelFilter({ active, onChange, counts }: ModelFilterProps) {
  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "All" },
    { key: "female", label: "Women" },
    { key: "male", label: "Men" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "32px",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 0 48px",
        borderBottom: "1px solid #e5e5e5",
        marginBottom: "48px",
      }}
    >
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => onChange(f.key)}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: active === f.key ? 600 : 300,
            fontSize: "13px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: active === f.key ? "#0a0a0a" : "#a0a0a0",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px 0",
            position: "relative",
            transition: "all 0.3s ease",
          }}
        >
          {f.label}
          <span
            style={{
              marginLeft: "6px",
              fontSize: "11px",
              color: "#c0c0c0",
              fontWeight: 300,
            }}
          >
            ({counts[f.key]})
          </span>
          {active === f.key && (
            <motion.div
              layoutId="filter-underline"
              style={{
                position: "absolute",
                bottom: "-2px",
                left: 0,
                right: 0,
                height: "1px",
                background: "#0a0a0a",
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
