import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../colors';

type GradientBackgroundProps = {
  intensity?: 'soft' | 'strong';
  children?: React.ReactNode;
};

export const GradientBackground: React.FC<GradientBackgroundProps> = ({intensity = 'soft', children}) => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame % 240, [0, 120, 240], [-80, 80, -80]);
  const glowOpacity = intensity === 'strong' ? 0.58 : 0.35;

  return (
    <AbsoluteFill
      style={{
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientEnd})`
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 760,
          height: 760,
          borderRadius: '50%',
          top: -130,
          left: -210 + drift,
          background: 'rgba(255,255,255,0.23)',
          opacity: glowOpacity
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 660,
          height: 660,
          borderRadius: '50%',
          right: -240 - drift * 0.6,
          bottom: -100,
          background: 'rgba(61,213,152,0.42)',
          opacity: glowOpacity
        }}
      />
      {Array.from({length: 10}).map((_, index) => {
        const y = interpolate((frame + index * 13) % 180, [0, 180], [1940, -80]);
        const x = 80 + ((index * 137) % 930);
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: 8 + (index % 4) * 4,
              height: 8 + (index % 4) * 4,
              borderRadius: '50%',
              left: x,
              top: y,
              background: 'rgba(255,255,255,0.34)',
              boxShadow: '0 0 26px rgba(255,255,255,0.38)'
            }}
          />
        );
      })}
      {children}
    </AbsoluteFill>
  );
};
