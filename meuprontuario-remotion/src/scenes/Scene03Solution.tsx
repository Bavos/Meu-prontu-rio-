import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {GradientBackground} from '../components/GradientBackground';
import {PhoneMockup} from '../components/PhoneMockup';

export const Scene03Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <GradientBackground variant="light">
      <div className="safe-area" style={{justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'left', paddingTop: 78}}>
        <h2 className="title-lg" style={{maxWidth: 760, opacity}}>Tudo organizado na palma da mão.</h2>
        <p className="subtitle" style={{maxWidth: 690, opacity}}>Um painel limpo para manter as informações essenciais sempre por perto.</p>
      </div>
      <div style={{position: 'absolute', left: 305, top: 740}}>
        <PhoneMockup />
      </div>
    </GradientBackground>
  );
};
