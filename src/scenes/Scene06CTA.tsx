import {interpolate, useCurrentFrame} from 'remotion';
import {CTAButton} from '../components/CTAButton';
import {GradientBackground} from '../components/GradientBackground';
import {colors} from '../styles';

export const Scene06CTA = () => {
  const frame = useCurrentFrame();
  const arrowX = interpolate(Math.sin(frame / 8), [-1, 1], [-12, 18]);

  return (
    <GradientBackground>
      <div style={{position: 'absolute', inset: 0, padding: '176px 76px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <h2 style={{margin: 0, color: colors.white, fontSize: 76, lineHeight: 1.05, letterSpacing: -2}}>Cuide da sua saúde com mais segurança.</h2>
        <p style={{margin: '36px 0 96px', color: colors.white, opacity: 0.92, fontSize: 42, fontWeight: 650}}>Organize tudo em um só lugar.</p>
        <CTAButton />
        <div style={{marginTop: 166, color: colors.white, fontSize: 46, fontWeight: 900, textShadow: '0 16px 48px rgba(45,45,45,0.18)'}}>meuprontuario.app.br</div>
        <div style={{marginTop: 34, display: 'flex', alignItems: 'center', gap: 20, color: colors.white, fontSize: 35, fontWeight: 800, transform: `translateX(${arrowX}px)`}}>
          <span style={{fontSize: 56}}>→</span>
          <span>acesse o site</span>
        </div>
        <div style={{position: 'absolute', bottom: 98, width: 760, height: 2, background: 'rgba(255,255,255,0.35)'}} />
      </div>
    </GradientBackground>
  );
};
