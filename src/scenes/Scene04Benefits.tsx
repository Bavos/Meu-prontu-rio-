import {AnimatedCard} from '../components/AnimatedCard';
import {ChecklistItem} from '../components/ChecklistItem';
import {GradientBackground} from '../components/GradientBackground';
import {colors} from '../styles';

const benefits = ['Histórico médico organizado', 'Mais rapidez em emergências', 'Compartilhamento seguro', 'Acompanhamento da família', 'Mais tranquilidade no dia a dia'];

export const Scene04Benefits = () => {
  return (
    <GradientBackground>
      <div style={{position: 'absolute', inset: 0, padding: '190px 86px'}}>
        <h2 style={{margin: 0, color: colors.white, fontSize: 76, lineHeight: 1.04, letterSpacing: -2}}>Cuidado mais simples para você e sua família.</h2>
        <AnimatedCard delay={16} style={{marginTop: 86, padding: '62px 52px', display: 'flex', flexDirection: 'column', gap: 42}}>
          {benefits.map((benefit, index) => (
            <ChecklistItem key={benefit} text={benefit} delay={26 + index * 12} />
          ))}
        </AnimatedCard>
      </div>
    </GradientBackground>
  );
};
