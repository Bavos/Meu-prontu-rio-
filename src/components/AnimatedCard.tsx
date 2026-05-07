import type {CSSProperties, ReactNode} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../styles';

type Props = {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
};

export const AnimatedCard = ({children, delay = 0, style}: Props) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 80}});
  const opacity = interpolate(frame - delay, [0, 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${interpolate(progress, [0, 1], [46, 0])}px) scale(${interpolate(progress, [0, 1], [0.96, 1])})`,
        background: 'rgba(255, 255, 255, 0.92)',
        border: '1px solid rgba(255, 255, 255, 0.72)',
        borderRadius: 36,
        boxShadow: '0 26px 80px rgba(45, 45, 45, 0.14)',
        color: colors.dark,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
