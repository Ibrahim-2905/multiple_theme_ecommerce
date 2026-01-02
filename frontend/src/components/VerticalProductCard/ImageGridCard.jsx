// ImageGridCard.jsx
"use client";
import { useRouter } from "next/navigation";
import AnimatedButton from "../Button/Button";

export function ImageGridCard({ title, buttonText, image, link }) {
    const router = useRouter();

    const handleClick = () => {
        if (link) {
            router.push(link);
        }
    };

    return (
        <div 
            className="relative w-full h-64 sm:h-72 md:h-80 lg:h-80 overflow-hidden group cursor-pointer"
            onClick={handleClick}
        >
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-start justify-start p-6 sm:p-8 md:p-10 text-white">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                    {title}
                </h3>
                
                <AnimatedButton 
                text={buttonText}
                onlyBottomBorder
                textColor="text-white"
                />
            </div>
        </div>
    );
}