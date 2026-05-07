import React from 'react';

type ChecklistItemProps = {
  label: string;
  compact?: boolean;
};

export const ChecklistItem: React.FC<ChecklistItemProps> = ({label, compact = false}) => {
  return (
    <div className={compact ? 'check-item check-item--compact' : 'check-item'}>
      <span>✓</span>
      <p>{label}</p>
    </div>
  );
};
