import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

type GradientBackgroundProps = {
  variant?: 'primary' | 'light';
  children?: React.ReactNode;
};

export const GradientBackground: React.FC<GradientBackgroundProps> = ({variant = 'primary', children}) => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / 24), [-1, 1], [0.8, 1.08]);
  const drift = interpolate(frame, [0, 120], [-30, 30], {extrapolateRight: 'extend'});

  const light = variant === 'light';

  return (
    <div
      className="scene"
      style={{
        background: light
          ? 'linear-gradient(180deg, #FFFFFF 0%, #F5FBFF 50%, #F6FFFD 100%)'
          : 'linear-gradient(135deg, #4A90E2 0%, #42D6C5 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 640,
          height: 640,
          borderRadius: '50%',
          left: -170 + drift,
          top: 160,
          background: light ? 'rgba(74, 144, 226, 0.12)' : 'rgba(255, 255, 255, 0.18)',
          filter: 'blur(6px)',
          transform: `scale(${pulse})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 760,
          height: 760,
          borderRadius: '50%',
          right: -260 - drift,
          bottom: 180,
          background: light ? 'rgba(66, 214, 197, 0.15)' : 'rgba(61, 213, 152, 0.18)',
          filter: 'blur(10px)',
          transform: `scale(${1.1 - (pulse - 0.8)})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 22%, rgba(255,255,255,0.22) 0 2px, transparent 3px), radial-gradient(circle at 82% 70%, rgba(255,255,255,0.18) 0 2px, transparent 3px)',
          backgroundSize: '76px 76px, 92px 92px',
          opacity: light ? 0.45 : 0.65,
        }}
      />
      {children}
    </div>
  );
};
