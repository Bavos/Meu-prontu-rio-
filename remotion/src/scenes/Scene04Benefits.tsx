import React from 'react';
import {AbsoluteFill} from 'remotion';
import {ChecklistItem} from '../components/ChecklistItem';
import {colors} from '../colors';

const benefits = ['Histórico médico organizado', 'Mais rapidez em emergências', 'Compartilhamento seguro', 'Acompanhamento da família', 'Mais tranquilidade no dia a dia'];

export const Scene04Benefits: React.FC = () => (
  <AbsoluteFill style={{background: colors.white, overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 8%, #E8FFFB 0, transparent 34%), radial-gradient(circle at 80% 88%, #EAF4FF 0, transparent 35%)'}} />
    <AbsoluteFill style={{padding: '170px 76px 120px'}}>
      <h2 style={{margin: 0, fontSize: 62, lineHeight: 1.08, fontWeight: 800, color: colors.textMain}}>Mais clareza para cuidar melhor.</h2>
      <p style={{margin: '24px 0 58px', fontSize: 30, color: colors.textSecondary, fontWeight: 500}}>Benefícios pensados para você, sua família e momentos importantes.</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
        {benefits.map((benefit, index) => <ChecklistItem key={benefit} label={benefit} delay={index * 15} />)}
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);
