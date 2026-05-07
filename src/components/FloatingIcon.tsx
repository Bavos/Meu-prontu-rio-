import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

type FloatingIconProps = {
  icon: string;
  delay?: number;
  size?: number;
  left: number;
  top: number;
};

export const FloatingIcon: React.FC<FloatingIconProps> = ({icon, delay = 0, size = 88, left, top}) => {
  const frame = useCurrentFrame();
  const y = interpolate(Math.sin((frame + delay) / 20), [-1, 1], [-14, 14]);
  const rotate = interpolate(Math.sin((frame + delay) / 28), [-1, 1], [-5, 5]);

  return (
    <div className="floating-icon" style={{left, top, width: size, height: size, fontSize: size * 0.46, transform: `translateY(${y}px) rotate(${rotate}deg)`}}>
      {icon}
    </div>
  );
};
