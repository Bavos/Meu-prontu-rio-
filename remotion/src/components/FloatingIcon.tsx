import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../colors';

type FloatingIconProps = {
  icon: React.ReactNode;
  x: number;
  y: number;
  delay?: number;
  size?: number;
};

export const FloatingIcon: React.FC<FloatingIconProps> = ({icon, x, y, delay = 0, size = 96}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame - delay, [0, 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const float = Math.sin((frame + delay) / 24) * 13;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y + float,
        width: size,
        height: size,
        borderRadius: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.gradientStart,
        background: 'rgba(255,255,255,0.82)',
        boxShadow: '0 24px 60px rgba(42,120,170,0.18)',
        opacity
      }}
    >
      {icon}
    </div>
  );
};
