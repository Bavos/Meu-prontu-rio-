import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../styles';

type Props = {
  text: string;
  delay?: number;
};

export const ChecklistItem = ({text, delay = 0}: Props) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame - delay, [0, 15], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const x = interpolate(frame - delay, [0, 18], [34, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${x}px)`,
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        fontSize: 43,
        fontWeight: 700,
        color: colors.dark,
        lineHeight: 1.2,
      }}
    >
      <span
        style={{
          width: 58,
          height: 58,
          borderRadius: 18,
          background: colors.green,
          color: colors.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 34,
          flex: '0 0 auto',
          boxShadow: '0 14px 34px rgba(61, 213, 152, 0.34)',
        }}
      >
        ✓
      </span>
      <span>{text}</span>
    </div>
  );
};
