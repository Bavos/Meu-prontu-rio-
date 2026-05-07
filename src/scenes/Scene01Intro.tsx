import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FloatingIcon} from '../components/FloatingIcon';
import {GradientBackground} from '../components/GradientBackground';
import {colors} from '../styles';

export const Scene01Intro = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame, fps, config: {damping: 16, stiffness: 90}});
  const glow = interpolate(Math.sin(frame / 12), [-1, 1], [0.76, 1.12]);

  return (
    <GradientBackground>
      <FloatingIcon icon="＋" x={118} y={338} delay={6} />
      <FloatingIcon icon="✓" x={858} y={1170} delay={14} />
      <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 92, textAlign: 'center'}}>
        <div
          style={{
            width: 214,
            height: 190,
            position: 'relative',
            transform: `scale(${interpolate(enter, [0, 1], [0.78, 1])}) rotate(-45deg)`,
            filter: `drop-shadow(0 0 ${48 * glow}px rgba(255,255,255,0.72))`,
            marginBottom: 86,
          }}
        >
          <div style={{position: 'absolute', inset: 0, borderRadius: '26px 26px 20px 20px', background: colors.white}} />
          <div style={{position: 'absolute', width: 214, height: 214, borderRadius: '50%', background: colors.white, top: -102, left: 0}} />
          <div style={{position: 'absolute', width: 214, height: 214, borderRadius: '50%', background: colors.white, top: 0, left: 102}} />
        </div>
        <h1 style={{margin: 0, color: colors.white, fontSize: 92, fontWeight: 900, lineHeight: 1.02, letterSpacing: -3, transform: `translateY(${interpolate(enter, [0, 1], [42, 0])}px)`, textShadow: '0 22px 70px rgba(45,45,45,0.18)'}}>Meu Prontuário</h1>
        <p style={{margin: '34px 0 0', color: colors.white, fontSize: 42, fontWeight: 600, opacity: 0.94}}>Seu assistente de saúde pessoal</p>
      </div>
    </GradientBackground>
  );
};
