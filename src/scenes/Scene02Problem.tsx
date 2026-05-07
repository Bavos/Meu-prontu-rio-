import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedCard } from "../components/AnimatedCard";

const items = [
  "Exames perdidos",
  "Medicamentos esquecidos",
  "Informações espalhadas",
  "Emergências sem acesso rápido",
];

export const Scene02Problem: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [120, 145], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [120, 150], [45, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#F5F5F5",
        padding: "210px 82px",
        fontFamily: "Poppins, Nunito, Montserrat, sans-serif",
        opacity,
        transform: `translateY(${translateY}px)`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -220,
          bottom: -180,
          width: 620,
          height: 620,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(66,214,197,0.18), rgba(66,214,197,0) 68%)",
        }}
      />

      <p
        style={{
          margin: 0,
          color: "#42D6C5",
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        Quando mais importa
      </p>

      <h2
        style={{
          margin: "32px 0 72px",
          color: "#2D2D2D",
          fontSize: 61,
          lineHeight: 1.08,
          fontWeight: 850,
          letterSpacing: -2,
        }}
      >
        Sua informação de saúde não pode estar perdida.
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        {items.map((item, index) => (
          <AnimatedCard key={item} delay={index * 8}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: "#EEF7FF",
                  color: "#4A90E2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 800,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                ×
              </div>

              <span
                style={{
                  color: index === 3 ? "#6B6B6B" : "#2D2D2D",
                  fontSize: 34,
                  fontWeight: 750,
                  lineHeight: 1.2,
                }}
              >
                {item}
              </span>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AbsoluteFill>
  );
};
