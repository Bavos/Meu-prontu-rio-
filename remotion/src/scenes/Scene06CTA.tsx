import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CTAButton} from '../components/CTAButton';
import {GradientBackground} from '../components/GradientBackground';
import {HeartLogo} from '../components/HeartLogo';
import {colors} from '../colors';

export const Scene06CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const arrowShift = interpolate(Math.sin(frame / 8), [-1, 1], [-10, 16]);
  const fadeOut = interpolate(frame, [104, 120], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <GradientBackground intensity="strong">
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', padding: 76, opacity: fadeOut}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 22, marginBottom: 46}}>
          <HeartLogo size={100} />
          <div style={{color: colors.white, fontSize: 39, fontWeight: 800}}>Meu Prontuário</div>
        </div>
        <h2 style={{margin: 0, color: colors.white, fontSize: 66, lineHeight: 1.08, fontWeight: 800, textAlign: 'center', textShadow: '0 18px 60px rgba(0,0,0,0.12)'}}>Cuide da sua saúde com mais segurança.</h2>
        <p style={{margin: '26px 0 70px', color: 'rgba(255,255,255,0.92)', fontSize: 34, lineHeight: 1.35, fontWeight: 500, textAlign: 'center'}}>Organize tudo em um só lugar.</p>
        <CTAButton>ACESSE AGORA</CTAButton>
        <div style={{marginTop: 66, display: 'flex', alignItems: 'center', gap: 20, transform: `translateX(${arrowShift}px)`}}>
          <div style={{fontSize: 58, color: colors.white, filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.16))'}}>➜</div>
          <div
            style={{
              padding: '24px 34px',
              borderRadius: 28,
              background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.32)',
              color: colors.white,
              fontSize: 38,
              fontWeight: 700,
              boxShadow: '0 24px 70px rgba(0,0,0,0.14)',
            }}
          >
            meuprontuario.app.br
          </div>
        </div>
        <div style={{position: 'absolute', bottom: 136, color: 'rgba(255,255,255,0.88)', fontSize: 31, fontWeight: 700}}>Simples. Humano. Seguro.</div>
      </AbsoluteFill>
    </GradientBackground>
  );
};
