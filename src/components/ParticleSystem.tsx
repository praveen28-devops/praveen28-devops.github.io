import React from 'react';

interface ParticleSystemProps {
  count?: number;
  className?: string;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ count = 20, className = '' }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 20,
    size: ['particle-small', 'particle-medium', 'particle-large'][Math.floor(Math.random() * 3)],
    color: Math.random() > 0.5 ? 'particle-blue' : ''
  }));

  return (
    <div className={`particles ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.size} ${particle.color}`}
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;