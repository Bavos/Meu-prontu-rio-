import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const CTAButton: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / 8), [-1, 1], [0.98, 1.04]);

  return (
    <div className="cta-button" style={{transform: `scale(${pulse})`}}>
      ACESSE AGORA
    </div>
  );
};
