import React from 'react';
import {AnimatedCard} from '../components/AnimatedCard';
import {FloatingIcon} from '../components/FloatingIcon';
import {GradientBackground} from '../components/GradientBackground';
import {PROBLEM_CARDS} from '../constants';

export const Scene02Problem: React.FC = () => {
  return (
    <GradientBackground variant="light">
      <div className="scene problem-scene">
        <h2>Quando a saúde fica espalhada...</h2>
        <div className="messy-stack">
          {PROBLEM_CARDS.map((problem, index) => (
            <AnimatedCard key={problem} delay={index * 10} className="problem-card" style={{rotate: `${index % 2 === 0 ? -5 : 5}deg`}}>
              <span className="doc-icon">▤</span>
              <strong>{problem}</strong>
            </AnimatedCard>
          ))}
        </div>
      </div>
      <FloatingIcon icon="📄" left={86} top={520} delay={4} />
      <FloatingIcon icon="💊" left={800} top={990} delay={18} />
      <FloatingIcon icon="⚕" left={188} top={1390} delay={36} />
    </GradientBackground>
  );
};
