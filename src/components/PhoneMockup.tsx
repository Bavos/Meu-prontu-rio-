import React from 'react';
import {BRAND, HEALTH_ITEMS} from '../constants';
import {ChecklistItem} from './ChecklistItem';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="phone-mockup">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="app-header">
          <div>
            <p>{BRAND.productName}</p>
            <strong>Saúde organizada</strong>
          </div>
          <span>♥</span>
        </div>
        <div className="health-score">
          <span>Resumo seguro</span>
          <strong>98%</strong>
        </div>
        {HEALTH_ITEMS.map((item) => (
          <ChecklistItem key={item} label={item} compact />
        ))}
      </div>
    </div>
  );
};
