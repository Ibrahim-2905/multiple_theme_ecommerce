// ReviewsCardWrapper.jsx
"use client";
import { useState } from "react";
import { ReviewCard } from "./ReviewCard";

export function ReviewCardWrapper({ reviews = [], title = "Customer Reviews" }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    if (!reviews || reviews.length === 0) {
        return null;
    }

    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
            {/* Title */}
            {title && (
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
                    {title}
                </h2>
            )}

            {/* Mobile Navigation - Top */}
            <div className="flex md:hidden justify-center gap-4 mb-6">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
                    aria-label="Previous review"
                >
                    <span className="text-2xl text-gray-700">‹</span>
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
                    aria-label="Next review"
                >
                    <span className="text-2xl text-gray-700">›</span>
                </button>
            </div>

            {/* Review Card with Desktop Navigation */}
            <div className="relative">
                {/* Desktop Left Button */}
                <button
                    onClick={prevSlide}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 items-center justify-center transition-colors duration-300 z-10"
                    aria-label="Previous review"
                >
                    <span className="text-2xl text-gray-700">‹</span>
                </button>

                {/* Review Card */}
                <div className="transition-opacity duration-500">
                    <ReviewCard {...reviews[currentIndex]} />
                </div>

                {/* Desktop Right Button */}
                <button
                    onClick={nextSlide}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 items-center justify-center transition-colors duration-300 z-10"
                    aria-label="Next review"
                >
                    <span className="text-2xl text-gray-700">›</span>
                </button>
            </div>

            {/* Indicators */}
            {reviews.length > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? "bg-gray-800 w-8"
                                    : "bg-gray-300"
                            }`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}