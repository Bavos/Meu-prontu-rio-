import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FloatingIcon} from '../components/FloatingIcon';
import {GradientBackground} from '../components/GradientBackground';
import {BRAND} from '../constants';

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const scale = spring({frame, fps, config: {damping: 18, stiffness: 80}});
  const heartPulse = interpolate(Math.sin(frame / 10), [-1, 1], [0.96, 1.06]);

  return (
    <GradientBackground>
      <FloatingIcon icon="＋" left={126} top={270} delay={10} />
      <FloatingIcon icon="✦" left={840} top={410} delay={30} size={68} />
      <div className="scene center intro" style={{transform: `scale(${scale})`}}>
        <div className="heart-mark" style={{transform: `scale(${heartPulse})`}}>♥</div>
        <h1>{BRAND.productName}</h1>
        <p>{BRAND.slogan}</p>
      </div>
    </GradientBackground>
  );
};
