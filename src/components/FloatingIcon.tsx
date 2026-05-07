import type {CSSProperties} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../styles';

type Props = {
  icon: string;
  x: number;
  y: number;
  delay?: number;
  size?: number;
  style?: CSSProperties;
};

export const FloatingIcon = ({icon, x, y, delay = 0, size = 74, style}: Props) => {
  const frame = useCurrentFrame();
  const bob = Math.sin((frame + delay) / 22) * 14;
  const opacity = interpolate(frame - delay, [0, 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y + bob,
        opacity,
        width: size,
        height: size,
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.48,
        background: 'rgba(255, 255, 255, 0.88)',
        color: colors.blue,
        boxShadow: '0 20px 60px rgba(74, 144, 226, 0.22)',
        ...style,
      }}
    >
      {icon}
    </div>
  );
};
