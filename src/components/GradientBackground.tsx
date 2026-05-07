import type {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors, fullScreen} from '../styles';

type Props = {
  children: ReactNode;
  variant?: 'gradient' | 'light';
};

export const GradientBackground = ({children, variant = 'gradient'}: Props) => {
  const frame = useCurrentFrame();
  const glow = interpolate(Math.sin(frame / 24), [-1, 1], [0.55, 1]);

  const base: CSSProperties =
    variant === 'gradient'
      ? {background: `linear-gradient(135deg, ${colors.blue}, ${colors.teal})`}
      : {background: `linear-gradient(180deg, ${colors.white}, ${colors.light})`};

  return (
    <div style={{...fullScreen, ...base}}>
      <div
        style={{
          position: 'absolute',
          width: 620,
          height: 620,
          borderRadius: '50%',
          background: colors.white,
          opacity: variant === 'gradient' ? 0.16 * glow : 0.5 * glow,
          filter: 'blur(90px)',
          top: 180,
          right: -180,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: variant === 'gradient' ? colors.green : colors.teal,
          opacity: variant === 'gradient' ? 0.16 : 0.1,
          filter: 'blur(86px)',
          bottom: 120,
          left: -160,
        }}
      />
      {children}
    </div>
  );
};
