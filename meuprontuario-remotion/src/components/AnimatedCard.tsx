import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {springConfig} from '../constants';

type AnimatedCardProps = {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  rotate?: number;
  width?: number;
};

export const AnimatedCard: React.FC<AnimatedCardProps> = ({children, delay = 0, x = 0, y = 0, rotate = 0, width = 760}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({frame: frame - delay, fps, config: springConfig});
  const float = Math.sin((frame + delay) / 18) * 10;
  const opacity = interpolate(frame - delay, [0, 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      className="glass-panel"
      style={{
        width,
        minHeight: 132,
        borderRadius: 34,
        padding: '32px 36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: `calc(50% - ${width / 2}px + ${x}px)`,
        top: y + float,
        opacity,
        transform: `translateY(${interpolate(entrance, [0, 1], [90, 0])}px) scale(${interpolate(entrance, [0, 1], [0.92, 1])}) rotate(${rotate}deg)`,
        fontSize: 36,
        fontWeight: 650,
        color: '#2D2D2D',
      }}
    >
      {children}
    </div>
  );
};
