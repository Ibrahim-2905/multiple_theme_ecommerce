import React from 'react';
import AnimatedButton from '../Button/Button';

// CategoryCard.jsx
export function HeroCategoryCard({ 
  title, 
  image, 
  buttonProps 
}) {

  
  return (
    <div className="relative w-full h-[500px] md:h-[400px] overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      
      
      <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-10 lg:p-12">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
          {title}
        </h2>
        
        <AnimatedButton {...buttonProps} />
        
        {/* <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-colors duration-300">
          {buttonProps?.text || "SHOP NOW"}
        </button> */}
      </div>
    </div>
  );
}