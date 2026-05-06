import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {springConfig} from '../constants';

type ChecklistItemProps = {
  children: React.ReactNode;
  delay?: number;
  compact?: boolean;
};

export const ChecklistItem: React.FC<ChecklistItemProps> = ({children, delay = 0, compact = false}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = spring({frame: frame - delay, fps, config: springConfig});
  const opacity = interpolate(frame - delay, [0, 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: compact ? 18 : 24,
        opacity,
        transform: `translateX(${interpolate(progress, [0, 1], [38, 0])}px)`,
        fontSize: compact ? 29 : 34,
        lineHeight: 1.2,
        color: '#2D2D2D',
        fontWeight: 650,
      }}
    >
      <span
        style={{
          width: compact ? 42 : 52,
          height: compact ? 42 : 52,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          background: 'linear-gradient(135deg, #4A90E2, #42D6C5)',
          color: '#FFFFFF',
          fontSize: compact ? 24 : 30,
          boxShadow: '0 14px 32px rgba(66, 214, 197, 0.28)',
          flex: '0 0 auto',
        }}
      >
        ✓
      </span>
      <span>{children}</span>
    </div>
  );
};
