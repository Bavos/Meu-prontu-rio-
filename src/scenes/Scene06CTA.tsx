import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

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
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #4A90E2, #42D6C5)",
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
          Organize tudo em um só lugar.
        </p>

        <div
          style={{
            transform: `scale(${pulse})`,
            background: "#FFFFFF",
            color: "#4A90E2",
            padding: "28px 86px",
            borderRadius: 999,
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: 4,
            boxShadow: "0 22px 60px rgba(0,0,0,0.18)",
            marginBottom: 118,
          }}
        >
          ACESSE AGORA
        </div>

        <div
          style={{
            color: "#FFFFFF",
            fontSize: 52,
            lineHeight: 1.05,
            fontWeight: 950,
            letterSpacing: -0.8,
            textAlign: "center",
            textShadow: "0 14px 38px rgba(0,0,0,0.24)",
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
            fontSize: 28,
            fontWeight: 800,
            opacity: 0.96,
          }}
        >
          <span style={{ fontSize: 36, lineHeight: 1 }}>→</span>
          <span>acesse o site</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
