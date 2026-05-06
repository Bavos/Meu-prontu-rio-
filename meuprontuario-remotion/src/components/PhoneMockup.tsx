import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {springConfig} from '../constants';
import {ChecklistItem} from './ChecklistItem';

export const PhoneMockup: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame: frame - 16, fps, config: springConfig});
  const float = Math.sin(frame / 24) * 12;

  return (
    <div
      style={{
        width: 470,
        height: 900,
        borderRadius: 70,
        padding: 18,
        background: 'linear-gradient(145deg, #202B3A, #3B4654)',
        boxShadow: '0 45px 110px rgba(28, 51, 82, 0.28)',
        transform: `translateY(${interpolate(enter, [0, 1], [90, float])}px) rotate(-2deg)`,
      }}
    >
      <div
        style={{
          height: '100%',
          borderRadius: 54,
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F6FFFD 100%)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{width: 148, height: 24, borderRadius: 999, background: '#1F2937', margin: '20px auto 0'}} />
        <div style={{padding: '44px 36px 0', textAlign: 'left'}}>
          <div style={{fontSize: 24, color: '#6B6B6B', fontWeight: 700}}>Hoje</div>
          <div style={{fontSize: 42, color: '#2D2D2D', fontWeight: 800, lineHeight: 1.05, marginTop: 8}}>Saúde organizada</div>
          <div
            style={{
              marginTop: 30,
              borderRadius: 34,
              padding: 26,
              background: 'linear-gradient(135deg, rgba(74,144,226,0.95), rgba(66,214,197,0.95))',
              color: '#FFFFFF',
              boxShadow: '0 22px 50px rgba(74,144,226,0.24)',
            }}
          >
            <div style={{fontSize: 23, opacity: 0.9, fontWeight: 650}}>Meu Prontuário</div>
            <div style={{fontSize: 30, fontWeight: 800, marginTop: 8}}>Tudo em um só lugar</div>
          </div>
          <div style={{display: 'grid', gap: 18, marginTop: 34}}>
            {['Exames', 'Medicamentos', 'Alergias', 'Receitas', 'Contatos médicos'].map((item, index) => (
              <div key={item} style={{padding: '18px 20px', borderRadius: 24, background: '#FFFFFF', boxShadow: '0 12px 34px rgba(45,45,45,0.08)'}}>
                <ChecklistItem delay={28 + index * 6} compact>
                  {item}
                </ChecklistItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
