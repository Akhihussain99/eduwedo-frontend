import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-3xl">{icon}</div>
      <p className="text-sm font-semibold">{title}</p>
    </div>
  );
};

export default FeatureCard;