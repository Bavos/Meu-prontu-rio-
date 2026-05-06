import React from 'react';
import {AbsoluteFill} from 'remotion';
import {PhoneMockup} from '../components/PhoneMockup';
import {colors} from '../colors';

export const Scene03Solution: React.FC = () => (
  <AbsoluteFill style={{background: colors.lightBackground, overflow: 'hidden', alignItems: 'center', justifyContent: 'center'}}>
    <div style={{position: 'absolute', width: 900, height: 900, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(74,144,226,0.22), rgba(66,214,197,0.26))', top: 330}} />
    <div style={{position: 'absolute', top: 165, left: 86, right: 86, textAlign: 'center'}}>
      <h2 style={{margin: 0, fontSize: 58, lineHeight: 1.1, fontWeight: 800, color: colors.textMain}}>Tudo organizado na palma da mão.</h2>
      <p style={{margin: '24px 0 0', fontSize: 29, color: colors.textSecondary, fontWeight: 500}}>Exames, medicamentos, alergias, receitas e contatos médicos em uma experiência simples.</p>
    </div>
    <div style={{marginTop: 290}}>
      <PhoneMockup delay={8} />
    </div>
  </AbsoluteFill>
);
