import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../colors';

type AnimatedCardProps = {
  children: React.ReactNode;
  delay?: number;
  width?: number | string;
  style?: React.CSSProperties;
  tone?: 'white' | 'glass' | 'alert';
};

export const AnimatedCard: React.FC<AnimatedCardProps> = ({children, delay = 0, width = '100%', style, tone = 'white'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 90}});
  const floatY = Math.sin((frame + delay) / 28) * 7;
  const opacity = interpolate(frame - delay, [0, 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  const background = tone === 'glass' ? 'rgba(255,255,255,0.18)' : tone === 'alert' ? '#FFFFFF' : colors.white;
  const border = tone === 'glass' ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(74,144,226,0.08)';

  return (
    <div
      style={{
        width,
        opacity,
        transform: `translateY(${(1 - progress) * 46 + floatY}px) scale(${0.94 + progress * 0.06})`,
        padding: 30,
        borderRadius: 34,
        background,
        border,
        boxShadow: tone === 'glass' ? '0 28px 70px rgba(21,90,130,0.18)' : '0 28px 80px rgba(45,45,45,0.12)',
        ...style
      }}
    >
      {children}
    </div>
  );
};
