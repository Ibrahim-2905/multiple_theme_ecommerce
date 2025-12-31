import { Typography } from "antd";
import { ImageWithColorProductCard } from "./ImageWithColorProductCard";

export const ImageWithColorProductCardWrapper = ({ data=[]}) => {
  return (
    <div className="w-full bg-white py-16 px-8">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs tracking-widest uppercase text-gray-600 mb-2">DISCOVER</p>
        <Typography.Title level={1} className="!mb-0 font-serif" style={{ fontSize: '2.5rem', fontWeight: 400 }}>
          Collections
        </Typography.Title>
      </div>

      {/* Staggered Grid Layout */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-0 max-w-7xl mx-auto">
        {data.map((data, index) => {
          // Pattern: left-center (1st), top-right (2nd), top-left (3rd), repeat...
          const position = index % 3;
          
          let gridClass = '';
          let marginClass = '';
          
          if (position === 0) {
            // Left-center: starts from center, ends before right edge
            gridClass = 'col-start-1 col-span-1';
            marginClass = 'ml-[20%] mr-[10%]';
          } else if (position === 1) {
            // Top-right: full right side
            gridClass = 'col-start-2 col-span-1';
            marginClass = 'ml-0';
          } else {
            // Top-left: full left side
            gridClass = 'col-start-1 col-span-1';
            marginClass = 'mr-[10%]';
          }
          
          // Add top margin to create staggered effect (except first item)
          const topMargin = index > 0 ? '-mt-32' : '';
          
          return (
            <div 
              key={index} 
              className={`${gridClass} ${marginClass} ${topMargin}`}
            >
              <ImageWithColorProductCard {...data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};