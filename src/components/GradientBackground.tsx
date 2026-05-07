import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

type GradientBackgroundProps = {
  variant?: 'blue' | 'light' | 'white';
  children: React.ReactNode;
};

export const GradientBackground: React.FC<GradientBackgroundProps> = ({variant = 'blue', children}) => {
  const frame = useCurrentFrame();
  const glow = interpolate(Math.sin(frame / 24), [-1, 1], [0.55, 1]);

  return (
    <AbsoluteFill className={`gradient-bg gradient-bg--${variant}`}>
      <div className="ambient ambient-one" style={{opacity: glow}} />
      <div className="ambient ambient-two" style={{opacity: 1.1 - glow / 2}} />
      <div className="grid-overlay" />
      {children}
    </AbsoluteFill>
  );
};
