import React from 'react';
import {GradientBackground} from '../components/GradientBackground';
import {PhoneMockup} from '../components/PhoneMockup';
import {FloatingIcon} from '../components/FloatingIcon';

export const Scene03Solution: React.FC = () => {
  return (
    <GradientBackground variant="white">
      <div className="scene solution-scene">
        <div className="eyebrow">Solução premium</div>
        <h2>Tudo organizado na palma da mão.</h2>
        <PhoneMockup />
      </div>
      <FloatingIcon icon="✓" left={120} top={430} delay={16} />
      <FloatingIcon icon="🔒" left={828} top={540} delay={24} />
    </GradientBackground>
  );
};
