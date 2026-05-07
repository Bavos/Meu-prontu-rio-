import {AnimatedCard} from '../components/AnimatedCard';
import {FloatingIcon} from '../components/FloatingIcon';
import {GradientBackground} from '../components/GradientBackground';
import {colors} from '../styles';

const problems = ['Exames perdidos', 'Medicamentos esquecidos', 'Informações espalhadas', 'Emergências sem acesso rápido'];

export const Scene02Problem = () => {
  return (
    <GradientBackground variant="light">
      <FloatingIcon icon="!" x={800} y={236} delay={0} style={{color: colors.white, background: colors.blue}} />
      <div style={{position: 'absolute', inset: 0, padding: '210px 86px'}}>
        <div style={{fontSize: 34, color: colors.teal, fontWeight: 800, letterSpacing: 2}}>QUANDO MAIS IMPORTA</div>
        <h2 style={{margin: '28px 0 76px', color: colors.dark, fontSize: 76, lineHeight: 1.08, letterSpacing: -2}}>Sua informação de saúde não pode estar perdida.</h2>
        <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
          {problems.map((problem, index) => (
            <AnimatedCard key={problem} delay={index * 11} style={{padding: '36px 42px', display: 'flex', alignItems: 'center', gap: 24}}>
              <span style={{width: 56, height: 56, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#EEF6FD', color: colors.blue, fontSize: 32, fontWeight: 900}}>×</span>
              <span style={{fontSize: 42, fontWeight: 800}}>{problem}</span>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </GradientBackground>
  );
};
