import {interpolate, useCurrentFrame} from 'remotion';
import {FloatingIcon} from '../components/FloatingIcon';
import {GradientBackground} from '../components/GradientBackground';
import {colors} from '../styles';

export const Scene05Human = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(Math.sin(frame / 15), [-1, 1], [0.5, 1]);

  return (
    <GradientBackground variant="light">
      <FloatingIcon icon="♡" x={158} y={380} delay={8} style={{background: colors.white, color: colors.teal}} />
      <FloatingIcon icon="＋" x={850} y={1138} delay={18} style={{background: colors.white, color: colors.green}} />
      <div style={{position: 'absolute', inset: 0, padding: 90, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <div style={{width: 360, height: 360, borderRadius: '50%', background: `linear-gradient(135deg, ${colors.blue}, ${colors.teal})`, opacity: 0.16, filter: `blur(${42 + glow * 20}px)`, position: 'absolute'}} />
        <h2 style={{margin: 0, fontSize: 88, color: colors.dark, lineHeight: 1.04, letterSpacing: -3}}>Simples. Humano. Seguro.</h2>
        <p style={{margin: '54px 0 0', maxWidth: 840, fontSize: 44, lineHeight: 1.25, color: colors.gray, fontWeight: 700}}>Porque informação salva tempo — e salva vidas.</p>
      </div>
    </GradientBackground>
  );
};
