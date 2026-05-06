import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedCard} from '../components/AnimatedCard';
import {FloatingIcon} from '../components/FloatingIcon';
import {colors} from '../colors';

const PersonIcon = ({label}: {label: string}) => (
  <div style={{textAlign: 'center'}}>
    <div style={{width: 42, height: 42, borderRadius: '50%', background: colors.gradientStart, margin: '0 auto 8px'}} />
    <div style={{width: 70, height: 42, borderRadius: '28px 28px 12px 12px', background: colors.gradientEnd}} />
    <div style={{fontSize: 14, color: colors.textSecondary, marginTop: 4}}>{label}</div>
  </div>
);

export const Scene05Human: React.FC = () => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [0, 24], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: `linear-gradient(180deg, ${colors.softAqua}, ${colors.white})`, overflow: 'hidden'}}>
      <div style={{position: 'absolute', width: 830, height: 830, borderRadius: '50%', background: 'rgba(66,214,197,0.17)', left: 130, top: 260}} />
      <FloatingIcon x={116} y={360} delay={6} size={132} icon={<PersonIcon label="família" />} />
      <FloatingIcon x={820} y={472} delay={14} size={132} icon={<PersonIcon label="saúde" />} />
      <FloatingIcon x={462} y={285} delay={22} size={132} icon={<PersonIcon label="cuidado" />} />
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', padding: 86, opacity: fade}}>
        <AnimatedCard width="100%" delay={20} style={{textAlign: 'center', padding: '74px 52px'}}>
          <h2 style={{margin: 0, fontSize: 72, lineHeight: 1.07, fontWeight: 800, color: colors.textMain}}>Simples. Humano. Seguro.</h2>
          <p style={{margin: '30px 0 0', fontSize: 34, lineHeight: 1.35, color: colors.textSecondary, fontWeight: 500}}>Porque informação salva tempo — e salva vidas.</p>
        </AnimatedCard>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
