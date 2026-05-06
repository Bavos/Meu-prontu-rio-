import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../colors';
import {HeartLogo} from './HeartLogo';

const rows = [
  ['Exames', 'Atualizados', '#4A90E2'],
  ['Medicamentos', '08:00 • 20:00', '#42D6C5'],
  ['Alergias', 'Acesso rápido', '#3DD598'],
  ['Receitas', 'Organizadas', '#4A90E2'],
  ['Contatos médicos', 'Compartilhar', '#42D6C5']
];

export const PhoneMockup: React.FC<{delay?: number}> = ({delay = 0}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 80}});
  const float = Math.sin(frame / 32) * 11;
  const opacity = interpolate(frame - delay, [0, 24], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        width: 520,
        height: 980,
        borderRadius: 72,
        padding: 22,
        opacity,
        transform: `translateY(${(1 - progress) * 80 + float}px) rotate(${(1 - progress) * -2}deg)`,
        background: '#1F2933',
        boxShadow: '0 42px 110px rgba(19,82,115,0.28)'
      }}
    >
      <div
        style={{
          height: '100%',
          borderRadius: 55,
          background: colors.lightBackground,
          overflow: 'hidden',
          padding: 34
        }}
      >
        <div style={{height: 34, width: 150, borderRadius: 999, background: '#1F2933', margin: '0 auto 34px'}} />
        <div
          style={{
            borderRadius: 36,
            padding: 30,
            color: colors.white,
            background: `linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientEnd})`,
            boxShadow: '0 24px 56px rgba(74,144,226,0.28)'
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
            <HeartLogo size={70} />
            <div>
              <div style={{fontSize: 29, fontWeight: 700}}>Meu Prontuário</div>
              <div style={{fontSize: 18, opacity: 0.86}}>Saúde pessoal organizada</div>
            </div>
          </div>
        </div>
        <div style={{marginTop: 30, display: 'flex', flexDirection: 'column', gap: 18}}>
          {rows.map(([title, subtitle, color], index) => (
            <div
              key={title}
              style={{
                opacity: interpolate(frame - delay - index * 6, [0, 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                padding: 22,
                borderRadius: 28,
                background: colors.white,
                boxShadow: '0 14px 34px rgba(45,45,45,0.08)'
              }}
            >
              <div style={{width: 48, height: 48, borderRadius: 16, background: color, color: colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 25, fontWeight: 800}}>✓</div>
              <div>
                <div style={{fontSize: 24, fontWeight: 700, color: colors.textMain}}>{title}</div>
                <div style={{fontSize: 18, fontWeight: 500, color: colors.textSecondary}}>{subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
