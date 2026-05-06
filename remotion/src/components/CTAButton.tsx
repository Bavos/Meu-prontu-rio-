import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../colors';

export const CTAButton: React.FC<{children: React.ReactNode}> = ({children}) => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / 9), [-1, 1], [0.97, 1.04]);

  return (
    <div
      style={{
        transform: `scale(${pulse})`,
        padding: '30px 78px',
        borderRadius: 999,
        background: colors.white,
        color: colors.gradientStart,
        fontWeight: 800,
        fontSize: 44,
        letterSpacing: 1.8,
        textAlign: 'center',
        boxShadow: '0 0 0 12px rgba(255,255,255,0.13), 0 28px 90px rgba(15,86,120,0.35)'
      }}
    >
      {children}
    </div>
  );
};
