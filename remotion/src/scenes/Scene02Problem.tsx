import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedCard} from '../components/AnimatedCard';
import {colors} from '../colors';

const problems = ['Exames perdidos', 'Medicamentos esquecidos', 'Informações espalhadas', 'Emergências sem acesso rápido'];

export const Scene02Problem: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{background: colors.lightBackground, overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 10%, #E8FFFB 0, transparent 36%), radial-gradient(circle at 90% 70%, #EAF4FF 0, transparent 34%)'}} />
      <AbsoluteFill style={{padding: '210px 80px 140px'}}>
        <div style={{fontSize: 34, color: colors.textSecondary, fontWeight: 600, marginBottom: 22}}>Quando está tudo em lugares diferentes...</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
          {problems.map((problem, index) => (
            <AnimatedCard
              key={problem}
              delay={index * 20}
              tone="alert"
              style={{
                marginLeft: index % 2 === 0 ? 0 : 80,
                transform: `rotate(${index % 2 === 0 ? -1.6 : 1.4}deg) translateY(${Math.sin((frame + index * 16) / 22) * 8}px)`,
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 24}}>
                <div style={{width: 56, height: 56, borderRadius: 20, background: '#FFF1F1', color: '#D66', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 800}}>!</div>
                <div style={{fontSize: 36, fontWeight: 700, color: colors.textMain}}>{problem}</div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </AbsoluteFill>
      {Array.from({length: 7}).map((_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: 190,
            height: 230,
            borderRadius: 26,
            background: 'rgba(255,255,255,0.65)',
            border: '1px solid rgba(74,144,226,0.08)',
            left: interpolate(index, [0, 6], [-55, 925]),
            top: 1140 + Math.sin((frame + index * 22) / 22) * 40,
            transform: `rotate(${index * 9 - 23}deg)`,
            boxShadow: '0 18px 50px rgba(45,45,45,0.08)'
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
