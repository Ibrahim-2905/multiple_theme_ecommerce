"use client"
import React from 'react';
import { Typography } from 'antd';
import AnimatedButton from '../Button/Button';
import { useRouter } from 'next/navigation';



export const ImageWithColorProductCard = ({ 
  image, 
  bgcolor = '#D4A574', 
  title, 
  buttonText,
  link
}) => {
    const router = useRouter()
  return (
    <div className="relative inline-block">
      {/* Background color block - positioned absolutely */}
      <div 
        className="absolute top-0 right-0 w-[88%] h-[70%] -z-10"
        style={{ backgroundColor: bgcolor }}
      />
      
      {/* Main content */}
      <div className="flex flex-col gap-4 p-6">
        {/* Image container */}
        <div className="relative w-full aspect-square bg-[#F5E6D3] rounded-sm overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Title */}
        <Typography.Title 
          level={3} 
          className="!mb-0 !mt-2 font-serif"
          style={{ fontSize: '2rem', fontWeight: 400 }}
        >
          {title}
        </Typography.Title>
        
        {/* Button */}
        <AnimatedButton
          text={buttonText}
        //   onlyBottomBorder
          textColor="text-black"
          onClick={()=> router.push(link)}
        />
      </div>
    </div>
  );
};



  