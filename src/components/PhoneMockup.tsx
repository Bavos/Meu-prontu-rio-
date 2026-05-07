import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../styles';
import {ChecklistItem} from './ChecklistItem';

const rows = ['exames', 'medicamentos', 'alergias', 'receitas', 'contatos médicos'];

export const PhoneMockup = () => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / 20), [-1, 1], [0.98, 1.02]);

  return (
    <div
      style={{
        width: 520,
        height: 1040,
        borderRadius: 72,
        background: colors.dark,
        padding: 24,
        boxShadow: '0 42px 120px rgba(45, 45, 45, 0.28)',
        transform: `scale(${pulse})`,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 54,
          background: `linear-gradient(180deg, ${colors.white}, ${colors.light})`,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 170,
            height: 28,
            borderRadius: 18,
            background: colors.dark,
            margin: '18px auto 0',
          }}
        />
        <div style={{padding: '58px 42px'}}>
          <div style={{fontSize: 34, fontWeight: 800, color: colors.blue}}>Meu Prontuário</div>
          <div style={{marginTop: 10, fontSize: 22, color: colors.gray}}>Organização da saúde</div>
          <div
            style={{
              marginTop: 34,
              borderRadius: 34,
              padding: 28,
              background: `linear-gradient(135deg, ${colors.blue}, ${colors.teal})`,
              color: colors.white,
              boxShadow: '0 18px 44px rgba(74, 144, 226, 0.24)',
            }}
          >
            <div style={{fontSize: 26, fontWeight: 700}}>Histórico clínico</div>
            <div style={{fontSize: 18, marginTop: 8, opacity: 0.9}}>Seguro e fácil de acessar</div>
          </div>
          <div style={{marginTop: 36, display: 'flex', flexDirection: 'column', gap: 18}}>
            {rows.map((row, index) => (
              <div
                key={row}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '18px 20px',
                  borderRadius: 24,
                  background: colors.white,
                  boxShadow: '0 12px 32px rgba(45, 45, 45, 0.06)',
                }}
              >
                <span style={{color: colors.green, fontSize: 24}}>✓</span>
                <span style={{fontSize: 24, fontWeight: 700, color: colors.dark}}>{row}</span>
                <span style={{marginLeft: 'auto', width: 38 + index * 10, height: 8, borderRadius: 8, background: '#DCEFFB'}} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PhoneFeatureList = () => (
  <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
    {rows.map((row, index) => (
      <ChecklistItem key={row} text={row} delay={index * 8} />
    ))}
  </div>
);
