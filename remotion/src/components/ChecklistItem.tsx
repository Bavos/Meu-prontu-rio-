import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../colors';

type ChecklistItemProps = {
  label: string;
  delay?: number;
};

export const ChecklistItem: React.FC<ChecklistItemProps> = ({label, delay = 0}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = spring({frame: frame - delay, fps, config: {damping: 16, stiffness: 120}});
  const opacity = interpolate(frame - delay, [0, 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${(1 - progress) * -34}px)`,
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        padding: '24px 26px',
        borderRadius: 30,
        background: colors.white,
        boxShadow: '0 20px 56px rgba(49,120,158,0.11)',
        border: '1px solid rgba(74,144,226,0.08)'
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: 18,
          background: colors.success,
          color: colors.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: 28,
          boxShadow: '0 12px 30px rgba(61,213,152,0.35)'
        }}
      >
        ✓
      </div>
      <div style={{fontSize: 30, fontWeight: 600, color: colors.textMain, lineHeight: 1.22}}>{label}</div>
    </div>
  );
};
