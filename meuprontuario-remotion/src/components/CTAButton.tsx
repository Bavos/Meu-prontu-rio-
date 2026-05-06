import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {springConfig} from '../constants';

export const CTAButton: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame: frame - 26, fps, config: springConfig});
  const glow = interpolate(Math.sin(frame / 9), [-1, 1], [0.18, 0.42]);

  return (
    <div
      style={{
        padding: '30px 68px',
        borderRadius: 999,
        background: 'linear-gradient(135deg, #4A90E2, #42D6C5)',
        color: '#FFFFFF',
        fontSize: 34,
        fontWeight: 800,
        letterSpacing: 1.8,
        boxShadow: `0 26px 68px rgba(74, 144, 226, ${glow})`,
        transform: `scale(${interpolate(enter, [0, 1], [0.86, 1])})`,
      }}
    >
      ACESSE AGORA
    </div>
  );
};
