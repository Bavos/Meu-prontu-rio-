import {AnimatedCard} from '../components/AnimatedCard';
import {GradientBackground} from '../components/GradientBackground';
import {PhoneFeatureList, PhoneMockup} from '../components/PhoneMockup';
import {colors} from '../styles';

export const Scene03Solution = () => {
  return (
    <GradientBackground variant="light">
      <div style={{position: 'absolute', inset: 0, padding: '132px 72px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2 style={{margin: 0, textAlign: 'center', fontSize: 70, lineHeight: 1.06, color: colors.dark, letterSpacing: -2}}>Tudo organizado na palma da mão.</h2>
        <div style={{marginTop: 68, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 44, width: '100%'}}>
          <PhoneMockup />
          <AnimatedCard delay={16} style={{padding: 36, width: 410}}>
            <PhoneFeatureList />
          </AnimatedCard>
        </div>
      </div>
    </GradientBackground>
  );
};
