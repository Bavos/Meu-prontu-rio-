import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CTAButton } from "../components/CTAButton";
import { GradientBackground } from "../components/GradientBackground";

export const Scene06CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [0, 35], [60, 0], {
    extrapolateRight: "clamp",
  });

  const pulse = 1 + Math.sin(frame / 10) * 0.025;

  return (
    <AbsoluteFill>
      <GradientBackground />

      <AbsoluteFill
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          padding: "0 72px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins, Nunito, Montserrat, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 900,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: "translateY(90px)",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#FFFFFF",
              fontSize: 61,
              lineHeight: 1.12,
              fontWeight: 850,
              letterSpacing: -1.8,
              textAlign: "center",
            }}
          >
            Cuide da sua saúde com mais segurança.
          </h2>

          <p
            style={{
              margin: "34px 0 72px",
              color: "#FFFFFF",
              fontSize: 33,
              lineHeight: 1.25,
              fontWeight: 650,
              textAlign: "center",
              opacity: 0.96,
            }}
          >
            Organize tudo em um
