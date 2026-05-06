import React from 'react';

export const HeartLogo: React.FC<{size?: number; color?: string}> = ({size = 126, color = '#FFFFFF'}) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-label="Meu Prontuário coração">
    <path
      d="M60 96C38 78 24 65 24 46.5C24 33.6 34.2 24 46.2 24C53.1 24 57.4 27.3 60 31.1C62.6 27.3 66.9 24 73.8 24C85.8 24 96 33.6 96 46.5C96 65 82 78 60 96Z"
      fill={color}
      opacity="0.96"
    />
    <path d="M43 58H55L60 47L67 70L73 58H83" stroke="#42D6C5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
