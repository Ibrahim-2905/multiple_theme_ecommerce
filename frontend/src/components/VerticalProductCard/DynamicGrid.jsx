"use client"
import React from 'react'
import AnimatedButton from '../Button/Button'
import { useRouter } from 'next/navigation'

const DynamicGrid = ({ category, title, subtitle, image, grid, buttonProps, categoryColor, itemStart, titleColor, subtitleColor }) => {
    const router = useRouter()
    return (
        <div className={`relative group cursor-pointer overflow-hidden  w-full h-full ${grid || ""}`}>
            <img
                className='w-full h-full  group-hover:scale-110 transition-transform duration-700 ease-out  object-cover'
                src={image}
                alt="picture" />

            <div className={`absolute inset-0 flex ${itemStart ? "items-start" : "items-center"} justify-center p-8 flex-col`}>
                <p className={`${categoryColor || "text-black"} text-sm font-semibold tracking-widest mb-2`}>{category}</p>
                <h1 className={`${titleColor} text-2xl font-semibold whitespace-pre-line`}>{title}</h1>
                <p className='text-md mt-3'>{subtitle}</p>
                <div className='mt-10'>

                    <AnimatedButton {...buttonProps} />
                </div>

            </div>

        </div>


    )
}

export default DynamicGrid
