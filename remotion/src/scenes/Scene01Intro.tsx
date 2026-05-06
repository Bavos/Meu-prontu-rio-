import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {GradientBackground} from '../components/GradientBackground';
import {HeartLogo} from '../components/HeartLogo';
import {colors} from '../colors';

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const logo = spring({frame, fps, config: {damping: 18, stiffness: 90}});
  const textOpacity = interpolate(frame, [12, 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <GradientBackground>
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', padding: 96}}>
        <div
          style={{
            width: 230,
            height: 230,
            borderRadius: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.2)',
            boxShadow: '0 0 90px rgba(255,255,255,0.36)',
            transform: `scale(${0.7 + logo * 0.3}) translateY(${Math.sin(frame / 25) * 10}px)`
          }}
        >
          <HeartLogo size={170} />
        </div>
        <h1 style={{margin: '58px 0 0', color: colors.white, fontSize: 78, lineHeight: 1.05, fontWeight: 800, textAlign: 'center', opacity: textOpacity}}>Meu Prontuário</h1>
        <p style={{margin: '24px 0 0', color: 'rgba(255,255,255,0.9)', fontSize: 35, fontWeight: 500, textAlign: 'center', opacity: textOpacity}}>Seu assistente de saúde pessoal</p>
      </AbsoluteFill>
    </GradientBackground>
  );
};
