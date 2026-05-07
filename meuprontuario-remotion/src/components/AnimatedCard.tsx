import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type AnimatedCardProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

export const AnimatedCard: React.FC<AnimatedCardProps> = ({children, delay = 0, className = '', style}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = spring({frame: frame - delay, fps, config: {damping: 16, stiffness: 90}});
  const opacity = interpolate(frame - delay, [0, 16], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      className={`animated-card ${className}`}
      style={{
        opacity,
        transform: `translateY(${interpolate(progress, [0, 1], [80, 0])}px) scale(${interpolate(progress, [0, 1], [0.94, 1])})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
