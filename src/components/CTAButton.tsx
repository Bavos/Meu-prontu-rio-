import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../styles';

export const CTAButton = () => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / 10), [-1, 1], [1, 1.06]);

  return (
    <div
      style={{
        transform: `scale(${pulse})`,
        borderRadius: 999,
        padding: '32px 76px',
        background: colors.white,
        color: colors.blue,
        fontSize: 38,
        fontWeight: 900,
        letterSpacing: 2,
        boxShadow: '0 0 58px rgba(255, 255, 255, 0.72), 0 26px 70px rgba(45, 45, 45, 0.16)',
      }}
    >
      ACESSE AGORA
    </div>
  );
};
