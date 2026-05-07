import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { GradientBackground } from "../components/GradientBackground";

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 35], [0.92, 1], {
    extrapolateRight: "clamp",
  });

  const floatY = Math.sin(frame / 22) * 10;

  return (
    <AbsoluteFill>
      <GradientBackground />

      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 80,
          opacity,
        }}
      >
        <div
          style={{
            transform: `translateY(${floatY}px) scale(${scale})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 260,
              height: 240,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              filter: "drop-shadow(0 0 36px rgba(255,255,255,0.35))",
              marginBottom: 46,
            }}
          >
            <svg
              width="260"
              height="240"
              viewBox="0 0 24 24"
              fill="white"
              preserveAspectRatio="xMidYMid meet"
              style={{
                display: "block",
                overflow: "visible",
              }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <h1
            style={{
              margin: 0,
              color: "#FFFFFF",
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 800,
              textAlign: "center",
              letterSpacing: -2,
              fontFamily: "Poppins, Nunito, Montserrat, sans-serif",
            }}
          >
            Meu Prontuário
          </h1>

          <p
            style={{
              marginTop: 26,
              color: "#FFFFFF",
              fontSize: 34,
              lineHeight: 1.25,
              fontWeight: 600,
              textAlign: "center",
              fontFamily: "Poppins, Nunito, Montserrat, sans-serif",
              opacity: 0.95,
            }}
          >
            Seu assistente de saúde pessoal
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
