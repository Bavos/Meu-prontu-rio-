import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {CTAButton} from '../components/CTAButton';
import {GradientBackground} from '../components/GradientBackground';
import {PRODUCT} from '../constants';

export const Scene06CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame, fps, config: {damping: 18, stiffness: 80, mass: 0.85}});
  const arrowMove = interpolate(Math.sin(frame / 7), [-1, 1], [-10, 14]);

  return (
    <GradientBackground>
      <div className="safe-area">
        <div style={{transform: `translateY(${interpolate(enter, [0, 1], [45, 0])}px)`, opacity: interpolate(frame, [0, 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
          <h2 className="title-lg white-text" style={{maxWidth: 870}}>Cuide da sua saúde com mais segurança.</h2>
          <p className="subtitle muted-white" style={{maxWidth: 760}}>Organize tudo em um só lugar.</p>
        </div>
        <div style={{marginTop: 88}}>
          <CTAButton />
        </div>
        <div
          className="glass-panel"
          style={{
            marginTop: 70,
            padding: '30px 42px',
            borderRadius: 30,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            color: '#2D2D2D',
            fontSize: 38,
            fontWeight: 800,
            letterSpacing: -0.6,
          }}
        >
          <span style={{color: '#4A90E2'}}>{PRODUCT.site}</span>
          <span style={{fontSize: 46, color: '#42D6C5', transform: `translateX(${arrowMove}px)`}}>→</span>
        </div>
      </div>
    </GradientBackground>
  );
};
