import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CTAButton} from '../components/CTAButton';
import {GradientBackground} from '../components/GradientBackground';
import {BRAND} from '../constants';

export const Scene06CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const arrowX = interpolate(Math.sin(frame / 7), [-1, 1], [-8, 18]);

  return (
    <GradientBackground>
      <div className="scene center cta-scene">
        <div className="heart-mark small">♥</div>
        <h2>Cuide da sua saúde com mais segurança.</h2>
        <p>Organize tudo em um só lugar.</p>
        <CTAButton />
        <div className="site-row">
          <span style={{transform: `translateX(${arrowX}px)`}}>➜</span>
          <strong>{BRAND.site}</strong>
        </div>
      </div>
    </GradientBackground>
  );
};
