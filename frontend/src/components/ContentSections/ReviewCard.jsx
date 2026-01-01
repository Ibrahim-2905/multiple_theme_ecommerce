// ReviewsCard.jsx
"use client";

export function ReviewCard({ image, review, name, stars }) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 max-w-4xl mx-auto">
            {/* Image */}
            <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
                    {review}
                </p>

                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {name}
                </h4>

                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`text-xl sm:text-2xl ${
                                index < stars ? "text-yellow-400" : "text-gray-300"
                            }`}
                        >
                            ★
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}