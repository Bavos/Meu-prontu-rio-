import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {springConfig} from '../constants';

type FloatingIconProps = {
  icon: string;
  label?: string;
  delay?: number;
  x: number;
  y: number;
  size?: number;
};

export const FloatingIcon: React.FC<FloatingIconProps> = ({icon, label, delay = 0, x, y, size = 132}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame: frame - delay, fps, config: springConfig});
  const bob = Math.sin((frame + x) / 17) * 13;
  const opacity = interpolate(frame - delay, [0, 16], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y + bob,
        opacity,
        transform: `scale(${interpolate(enter, [0, 1], [0.75, 1])})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: size,
          height: size,
          borderRadius: 38,
          display: 'grid',
          placeItems: 'center',
          fontSize: size * 0.45,
        }}
      >
        {icon}
      </div>
      {label ? <div style={{fontSize: 24, color: '#6B6B6B', fontWeight: 700}}>{label}</div> : null}
    </div>
  );
};
