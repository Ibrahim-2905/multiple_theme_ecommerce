import React from 'react';
import { Plane, DollarSign, Lock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-sm h-80 p-6">
      <div className="mb-6 flex-shrink-0">
        <Icon className="w-16 h-16" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-lg font-bold mb-4 uppercase tracking-wide flex-shrink-0">
        {title}
      </h3>
      
      <p className="text-sm leading-relaxed text-gray-600 flex-grow overflow-hidden">
        {description}
      </p>
    </div>
  );
};

const Features = ({features = []}) => {

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;