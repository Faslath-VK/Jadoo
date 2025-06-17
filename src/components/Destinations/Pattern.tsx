import React from 'react';

export const Pattern: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <svg viewBox="0 0 400 400" className="w-80 h-80">
        {/* Central circle */}
        <circle 
          cx="200" 
          cy="200" 
          r="60" 
          fill="none" 
          stroke="black" 
          strokeWidth="2"
        />
        
        {/* 6 surrounding circles forming the Seed of Life */}
        <circle 
          cx="200" 
          cy="140" 
          r="60" 
          fill="none" 
          stroke="black" 
          strokeWidth="2"
        />
        <circle 
          cx="252" 
          cy="170" 
          r="60" 
          fill="none" 
          stroke="black" 
          strokeWidth="2"
        />
        <circle 
          cx="252" 
          cy="230" 
          r="60" 
          fill="none" 
          stroke="black" 
          strokeWidth="2"
        />
        <circle 
          cx="200" 
          cy="260" 
          r="60" 
          fill="none" 
          stroke="black" 
          strokeWidth="2"
        />
        <circle 
          cx="148" 
          cy="230" 
          r="60" 
          fill="none" 
          stroke="black" 
          strokeWidth="2"
        />
        <circle 
          cx="148" 
          cy="170" 
          r="60" 
          fill="none" 
          stroke="black" 
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

