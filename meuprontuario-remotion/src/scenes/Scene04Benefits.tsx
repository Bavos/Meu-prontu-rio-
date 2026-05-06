import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {ChecklistItem} from '../components/ChecklistItem';
import {GradientBackground} from '../components/GradientBackground';

const benefits = [
  'Histórico médico organizado',
  'Mais rapidez em emergências',
  'Compartilhamento seguro',
  'Acompanhamento da família',
  'Mais tranquilidade no dia a dia',
];

export const Scene04Benefits: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <GradientBackground>
      <div className="safe-area" style={{justifyContent: 'flex-start', paddingTop: 160}}>
        <h2 className="title-lg white-text" style={{maxWidth: 850, opacity}}>Mais tranquilidade no cuidado com a saúde</h2>
        <div
          className="glass-panel"
          style={{
            width: 860,
            borderRadius: 44,
            marginTop: 92,
            padding: '58px 58px',
            display: 'grid',
            gap: 36,
            textAlign: 'left',
          }}
        >
          {benefits.map((item, index) => (
            <ChecklistItem key={item} delay={26 + index * 12}>{item}</ChecklistItem>
          ))}
        </div>
        <div
          style={{
            marginTop: 78,
            padding: '24px 34px',
            borderRadius: 999,
            color: '#FFFFFF',
            background: 'rgba(255,255,255,0.16)',
            fontSize: 28,
            fontWeight: 700,
            opacity: interpolate(frame, [142, 172], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          }}
        >
          Simplicidade, segurança e evolução constante
        </div>
      </div>
    </GradientBackground>
  );
};
