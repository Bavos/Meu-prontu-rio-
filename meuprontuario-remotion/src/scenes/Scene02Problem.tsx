import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {AnimatedCard} from '../components/AnimatedCard';
import {GradientBackground} from '../components/GradientBackground';

const cards = [
  {text: 'Exames perdidos', y: 410, x: -34, rotate: -3},
  {text: 'Medicamentos esquecidos', y: 610, x: 42, rotate: 2.5},
  {text: 'Informações espalhadas', y: 820, x: -26, rotate: -2},
  {text: 'Emergências sem acesso rápido', y: 1030, x: 34, rotate: 2},
];

export const Scene02Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <GradientBackground variant="light">
      <div className="safe-area" style={{justifyContent: 'flex-start', paddingTop: 118}}>
        <div className="eyebrow" style={{opacity: titleOpacity}}>Quando a saúde fica dispersa</div>
        <p className="subtitle" style={{maxWidth: 760, opacity: titleOpacity}}>
          Pequenas informações importantes podem se perder na rotina.
        </p>
      </div>
      {cards.map((card, index) => (
        <AnimatedCard key={card.text} delay={16 + index * 12} y={card.y} x={card.x} rotate={card.rotate}>
          {card.text}
        </AnimatedCard>
      ))}
      <div
        style={{
          position: 'absolute',
          bottom: 170,
          left: 155,
          right: 155,
          color: '#6B6B6B',
          fontSize: 29,
          lineHeight: 1.42,
          textAlign: 'center',
          opacity: interpolate(frame, [92, 126], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        Organização traz clareza, rapidez e mais segurança para cuidar de quem importa.
      </div>
    </GradientBackground>
  );
};
