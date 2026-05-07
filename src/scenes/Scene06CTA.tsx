import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CTAButton } from "../components/CTAButton";
import { GradientBackground } from "../components/GradientBackground";

export const Scene06CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [780, 810], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [780, 820], [45, 0], {
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
          flexDirection: "column",
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
            transform: "translateY(80px)",
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
            Organize tudo em um só lugar.
          </p>

          <div style={{ transform: `scale(${pulse})` }}>
            <CTAButton>ACESSE AGORA</CTAButton>
          </div>

          <div
            style={{
              marginTop: 118,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "#FFFFFF",
                fontSize: 44,
                lineHeight: 1.05,
                fontWeight: 900,
                letterSpacing: -0.8,
                textAlign: "center",
                textShadow: "0 12px 34px rgba(0,0,0,0.20)",
              }}
            >
              meuprontuario.app.br
            </div>

            <div
              style={{
                marginTop: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 18,
                color: "#FFFFFF",
                fontSize: 27,
                fontWeight: 800,
                opacity: 0.96,
              }}
            >
              <span style={{ fontSize: 34, lineHeight: 1 }}>→</span>
              <span>acesse o site</span>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
