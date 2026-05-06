import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {FloatingIcon} from '../components/FloatingIcon';
import {GradientBackground} from '../components/GradientBackground';

export const Scene05Human: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <GradientBackground variant="light">
      <FloatingIcon icon="👨‍👩‍👧" label="família" x={92} y={310} delay={8} size={150} />
      <FloatingIcon icon="🤍" label="cuidado" x={746} y={390} delay={16} size={142} />
      <FloatingIcon icon="🧓" label="idosos" x={132} y={1210} delay={24} size={142} />
      <FloatingIcon icon="🩺" label="saúde" x={720} y={1160} delay={32} size={150} />
      <div className="safe-area">
        <h2 className="title-lg" style={{opacity}}>Simples. Humano. Seguro.</h2>
        <p className="subtitle" style={{maxWidth: 790, opacity}}>
          Porque informação salva tempo — e salva vidas.
        </p>
      </div>
    </GradientBackground>
  );
};
