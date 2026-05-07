import React from 'react';
import {GradientBackground} from '../components/GradientBackground';
import {AnimatedCard} from '../components/AnimatedCard';

const people = ['Famílias', 'Idosos', 'Cuidadores', 'Profissionais da saúde'];

export const Scene05Human: React.FC = () => {
  return (
    <GradientBackground>
      <div className="scene human-scene">
        <h2>Simples. Humano. Seguro.</h2>
        <p>Porque informação salva tempo — e salva vidas.</p>
        <div className="people-grid">
          {people.map((person, index) => (
            <AnimatedCard key={person} delay={index * 8} className="person-card">
              <div className="avatar">{['👨‍👩‍👧', '👵', '🤝', '🩺'][index]}</div>
              <strong>{person}</strong>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </GradientBackground>
  );
};
