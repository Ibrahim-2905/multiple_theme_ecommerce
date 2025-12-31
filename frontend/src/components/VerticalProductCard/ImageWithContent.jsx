"use client"
import React from 'react';
import { Typography } from 'antd';
import { useRouter } from 'next/navigation';
import AnimatedButton from '../Button/Button';


export const ImageWithContent = ({
  image,
  subtitle,
  title,
  description,
  buttonText,
  buttonBg = '#D4A574',
  buttonTextColor = 'text-white',
  link,
  reverseRow = false
}) => {
    const router = useRouter()
  return (
    <div className="w-full px-4 py-12 lg:py-20">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverseRow ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Section */}
        <div className={`relative ${reverseRow ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative">
            <img 
              src={image}
              alt={title}
              className="w-full h-auto object-cover rounded-lg"
            />
        
          </div>
        </div>

        {/* Content Section */}
        <div className={` ${reverseRow ? 'lg:order-1' : 'lg:order-2'} flex flex-col md:gap-5 lg:gap-10 `}>
          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm tracking-widest uppercase text-gray-600">
              {subtitle}
            </p>
          )}

          {/* Title */}
          <Typography.Title 
            level={1} 
            className="!mb-0 font-serif !leading-tight "
            style={{ fontSize: '', fontWeight: 400 , color:"black"}}
          >
            {title}
          </Typography.Title>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-base text-sm">
            {description}
          </p>

          {/* Button */}
          {buttonText && (
            <div className="pt-4">
              <AnimatedButton
                text={buttonText}
                bgColor={buttonBg}
                textColor={buttonTextColor}
                onClick={()=> router.push(link)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};









// demo
{/* <ImageWithContent 
  image="/images/skincare.jpg"
  subtitle="Our Skincare"
  title="Personalised treatments that evolve with you & your skin"
  description="Everyone's skin is different..."
  buttonText="READ MORE"
  buttonBg="#D4A574"
  buttonTextColor="text-white"
  link="/skincare"
  reverseRow={false}
/> */}