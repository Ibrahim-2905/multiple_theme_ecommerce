// "use client";
// import AnimatedButton from "@/components/Button/Button";
// import { useRouter } from "next/navigation";
// import { useState, useEffect, useRef } from "react";
// import ReactPlayer from "react-player";

// export default function Hero_Carousel({ slides = [], autoPlay = true, interval = 5000, showIndicators = true }) {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const timeoutRef = useRef(null);
//     const router = useRouter();

//     const prevSlide = () => {
//         setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     };

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     };

//     useEffect(() => {
//         if (!autoPlay) return;

//         timeoutRef.current = setTimeout(() => {
//             nextSlide();
//         }, interval);

//         return () => clearTimeout(timeoutRef.current);
//     }, [currentIndex, autoPlay, interval]);

//     return (
//         <div className="relative w-full h-screen overflow-hidden mb-8">
//             {/* Slides */}
//             <div className="w-full h-full relative">
//                 {slides.map((slide, i) => (
//                     <div
//                         key={i}
//                         className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//                             i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//                         }`}
//                     >
//                         {/* Render ReactPlayer for video or Image for image */}
//                         {slide.mediaType === "video" ? (
//                             <ReactPlayer
//                                 url={slide.media}
//                                 playing={i === currentIndex}
//                                 loop
//                                 muted
//                                 width="100%"
//                                 height="100%"
//                                 style={{ position: 'absolute', top: 0, left: 0 }}
//                                 config={{
//                                     file: {
//                                         attributes: {
//                                             style: { width: '100%', height: '100%', objectFit: 'cover' }
//                                         }
//                                     }
//                                 }}
//                             />
//                         ) : (
//                             <img
//                                 src={slide.media || slide.image}
//                                 alt={slide.title}
//                                 className="w-full h-full object-cover"
//                             />
//                         )}

//                         {/* Text Overlay */}
//                         <div
//                             className={`absolute top-1/2 -translate-y-1/2 max-w-lg left-1/2 -translate-x-1/2 text-center sm:left-auto sm:-translate-x-0 ${
//                                 slide.position === "left"
//                                     ? "sm:left-6 sm:text-left md:left-12 md:text-left"
//                                     : ""
//                             } ${
//                                 slide.position === "right"
//                                     ? "sm:right-6 sm:text-right md:right-12 md:text-right"
//                                     : ""
//                             } ${
//                                 slide.position === "center"
//                                     ? "sm:left-1/2 sm:-translate-x-1/2 sm:text-center md:left-1/2 md:-translate-x-1/2 md:text-center"
//                                     : ""
//                             } ${slide.textColor || "text-white"}`}
//                         >
//                             <p className="tracking-widest text-xs sm:text-sm md:text-base lg:text-base">
//                                 {slide.subtitle}
//                             </p>
//                             <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-6 md:mt-10">
//                                 {slide.title}
//                             </h2>
//                             <p className="mt-4 sm:mt-5 md:mt-10 text-sm sm:text-base md:text-lg lg:text-lg">
//                                 {slide.description}
//                             </p>
//                             {slide.button && (
//                                 <AnimatedButton
//                                     onClick={() => router.push("/shop")}
//                                     text={slide.button}
//                                     bgColor={slide.buttonBg || "bg-black"}
//                                     textColor={slide.buttonText || "text-white"}
//                                     padding="px-4 md:px-10 mt-7 md:mt-10"
//                                 />
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Indicators */}
//             {showIndicators && (
//                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
//                     {slides.map((_, i) => (
//                         <button
//                             key={i}
//                             className={`w-2 h-2 rounded-full transition-colors duration-300 ${
//                                 i === currentIndex ? "bg-black" : "bg-gray-400"
//                             }`}
//                             onClick={() => setCurrentIndex(i)}
//                         />
//                     ))}
//                 </div>
//             )}

//             {/* Navigation Buttons */}
//             <button
//                 className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl font-bold p-2 z-20"
//                 onClick={prevSlide}
//             >
//                 &#10094;
//             </button>
//             <button
//                 className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl font-bold p-2 z-20"
//                 onClick={nextSlide}
//             >
//                 &#10095;
//             </button>
//         </div>
//     );
// }
















"use client";
import AnimatedButton from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Hero_Carousel({
    slides = [],
    autoPlay = true,
    interval = 100000,
    showIndicators = true
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);
    const router = useRouter();

    // Debug: Log slides data
    useEffect(() => {
        console.log("Slides data:", slides);
        slides.forEach((slide, i) => {
            console.log(`Slide ${i}:`, {
                mediaType: slide.mediaType,
                media: slide.media,
                isCurrentSlide: i === currentIndex
            });
        });
    }, [slides, currentIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, [slides.length]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    useEffect(() => {
        if (!autoPlay) return;

        timeoutRef.current = setTimeout(() => {
            nextSlide();
        }, interval);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex, autoPlay, interval, nextSlide]);

    const handlePlayerReady = () => {
        console.log("Player is ready");
    };

    const handlePlayerError = (error) => {
        console.error("Player error:", error);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden mb-8">
            {/* Slides */}
            <div className="w-full h-full relative">
                {slides.map((slide, i) => {
                    const isVideo = slide.mediaType === "video";
                    const isCurrent = i === currentIndex;

                    console.log(`Rendering slide ${i}:`, { isVideo, isCurrent, playing: isVideo && isCurrent });

                    return (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isCurrent ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            {isVideo ? (
                                <div className="w-full h-full">
                                    {/* <ReactPlayer
                                        url={slide.media}
                                        playing={isCurrent}
                                        loop={true}
                                        muted={true}
                                        width="100%"
                                        height="100%"
                                        playsinline={true}
                                        controls={false}
                                        onReady={handlePlayerReady}
                                        onError={handlePlayerError}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0
                                        }}
                                        config={{
                                            youtube: {
                                                playerVars: { 
                                                    autoplay: 1,
                                                    controls: 0,
                                                    modestbranding: 1,
                                                    rel: 0,
                                                    showinfo: 0
                                                }
                                            },
                                            file: {
                                                attributes: {
                                                    autoPlay: true,
                                                    muted: true,
                                                    playsInline: true,
                                                    preload: 'auto',
                                                    style: { 
                                                        width: '100%', 
                                                        height: '100%', 
                                                        objectFit: 'cover' 
                                                    }
                                                },
                                                forceVideo: true
                                            }
                                        }}
                                    /> */}

                                    <video
                                        src={slide.media}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <img
                                    src={slide.media || slide.image}
                                    alt={slide.title || "Hero slide"}
                                    className="w-full h-full object-cover"
                                />
                            )}

                            {/* Text Overlay */}
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 max-w-lg left-1/2 -translate-x-1/2 text-center sm:left-auto sm:-translate-x-0 ${slide.position === "left"
                                        ? "sm:left-6 sm:text-left md:left-12 md:text-left"
                                        : ""
                                    } ${slide.position === "right"
                                        ? "sm:right-6 sm:text-right md:right-12 md:text-right"
                                        : ""
                                    } ${slide.position === "center"
                                        ? "sm:left-1/2 sm:-translate-x-1/2 sm:text-center md:left-1/2 md:-translate-x-1/2 md:text-center"
                                        : ""
                                    } ${slide.textColor || "text-white"}`}
                            >
                                <p className="tracking-widest text-xs sm:text-sm md:text-base lg:text-base">
                                    {slide.subtitle}
                                </p>
                                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-6 md:mt-10">
                                    {slide.title}
                                </h2>
                                <p className="mt-4 sm:mt-5 md:mt-10 text-sm sm:text-base md:text-lg lg:text-lg">
                                    {slide.description}
                                </p>
                                {slide.button && (
                                    <AnimatedButton
                                        onClick={() => router.push("/shop")}
                                        text={slide.button}
                                        bgColor={slide.buttonBg || "bg-black"}
                                        textColor={slide.buttonText || "text-white"}
                                        padding="px-4 md:px-10 mt-7 md:mt-10"
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Indicators */}
            {showIndicators && slides.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === currentIndex ? "bg-black" : "bg-gray-400"
                                }`}
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Navigation Buttons */}
            {slides.length > 1 && (
                <>
                    <button
                        className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl font-bold p-2 z-20 hover:scale-110 transition-transform"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        &#10094;
                    </button>
                    <button
                        className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl font-bold p-2 z-20 hover:scale-110 transition-transform"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        &#10095;
                    </button>
                </>
            )}
        </div>
    );
}