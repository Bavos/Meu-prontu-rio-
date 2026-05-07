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
        <svg
          width="260"
          height="240"
          viewBox="0 0 24 24"
          fill="white"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: 'block',
            overflow: 'visible',
            transform: `scale(${interpolate(enter, [0, 1], [0.78, 1])})`,
            filter: `drop-shadow(0 0 ${48 * glow}px rgba(255,255,255,0.72))`,
            marginBottom: 86,
          }}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <h1 style={{margin: 0, color: colors.white, fontSize: 92, fontWeight: 900, lineHeight: 1.02, letterSpacing: -3, transform: `translateY(${interpolate(enter, [0, 1], [42, 0])}px)`, textShadow: '0 22px 70px rgba(45,45,45,0.18)'}}>Meu Prontuário</h1>
        <p style={{margin: '34px 0 0', color: colors.white, fontSize: 42, fontWeight: 600, opacity: 0.94}}>Seu assistente de saúde pessoal</p>
      </div>
    </GradientBackground>
  );
};
