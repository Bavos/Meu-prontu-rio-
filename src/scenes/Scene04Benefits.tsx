import React from 'react';
import {AnimatedCard} from '../components/AnimatedCard';
import {ChecklistItem} from '../components/ChecklistItem';
import {GradientBackground} from '../components/GradientBackground';
import {BENEFITS} from '../constants';

export const Scene04Benefits: React.FC = () => {
  return (
    <GradientBackground variant="light">
      <div className="scene benefits-scene">
        <div className="eyebrow">Benefícios reais</div>
        <h2>Mais tranquilidade no cuidado com a saúde</h2>
        <div className="benefits-list">
          {BENEFITS.map((benefit, index) => (
            <AnimatedCard key={benefit} delay={index * 11} className="benefit-card">
              <ChecklistItem label={benefit} />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </GradientBackground>
  );
};
