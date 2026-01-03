// import React, { useState, useEffect } from 'react';
// import AnimatedButton from '../Button/Button';

// // Import Jost font
// const style = document.createElement('style');
// style.textContent = `
//   @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap');
//   body { font-family: 'Jost', sans-serif; }
// `;
// document.head.appendChild(style);



// // Individual OneItemCard Component
// export const OneItemCard = ({
//   image,
//   title,
//   currentPrice,
//   originalPrice,
//   countdown,
//   buttonProps,
//   bgColor,
//   flexDirection,
//   containerPadding
// }) => {
//   const [timeLeft, setTimeLeft] = useState(countdown);

//   useEffect(() => {
//     if (!countdown) return;

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         const newTime = {
//           days: prev.days,
//           hours: prev.hours,
//           mins: prev.mins,
//           secs: prev.secs - 1
//         };

//         if (newTime.secs < 0) {
//           newTime.secs = 59;
//           newTime.mins -= 1;
//         }
//         if (newTime.mins < 0) {
//           newTime.mins = 59;
//           newTime.hours -= 1;
//         }
//         if (newTime.hours < 0) {
//           newTime.hours = 23;
//           newTime.days -= 1;
//         }

//         return newTime;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [countdown]);

//   const isReversed = flexDirection === 'row-reverse';

//   return (
//     <div 
//       className={`w-full ${bgColor || 'bg-[#F5F3EE]'} ${containerPadding || ''}`}
//     >
//       <div 
//         className={`mx-auto w-full  flex flex-col ${
//           isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
//         } items-center gap-8 md:gap-16`}
//       >
//         {/* Image Section */}
//         <div className="w-full  flex justify-center">
//           <img 
//             src={image} 
//             alt={title}
//             className="object-contain"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900" style={{fontFamily: 'Jost, sans-serif'}}>
//             {title}
//           </h1>

//           {/* Price Section */}
//           <div className="flex items-center gap-4">
//             <span className="text-3xl md:text-4xl font-semibold text-[#FDB713]" style={{fontFamily: 'Jost, sans-serif'}}>
//               ${currentPrice}
//             </span>
//             {originalPrice && (
//               <span className="text-xl text-gray-400 line-through">
//                 ${originalPrice}
//               </span>
//             )}
//           </div>

//           {/* Countdown Timer */}
//           {countdown && timeLeft && (
//             <div className="flex gap-4">
//               <TimeUnit value={timeLeft.days} label="DAYS" />
//               <TimeUnit value={timeLeft.hours} label="HOURS" />
//               <TimeUnit value={timeLeft.mins} label="MINS" />
//               <TimeUnit value={timeLeft.secs} label="SECS" />
//             </div>
//           )}

//           {/* Animated Button - Pass all buttonProps */}
//           {buttonProps && <AnimatedButton {...buttonProps} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Time Unit Component
// const TimeUnit = ({ value, label }) => (
//   <div className="flex flex-col items-center" style={{fontFamily: 'Jost, sans-serif'}}>
//     <div className="w-12 h-12 md:w-15 md:h-15 rounded-full bg-[#FDB713] flex items-center justify-center">
//       <span className="text-xl  font-semibold text-white">{value}</span>
//     </div>
//     <span className="text-xs font-semibold mt-2 text-gray-700">{label}</span>
//   </div>
// );
















import React, { useState, useEffect } from 'react';
import AnimatedButton from '../Button/Button';

// Individual OneItemCard Component
export const OneItemCard = ({
  image,
  title,
  currentPrice,
  originalPrice,
  countdown,
  buttonProps,
  bgColor,
  flexDirection
}) => {
  const [timeLeft, setTimeLeft] = useState(countdown);

  useEffect(() => {
    if (!countdown) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;

        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }

        return { days, hours, mins, secs };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const isReversed = flexDirection === 'row-reverse';

  return (
    <section className={` ${bgColor || 'bg-[#F5F3EE]'}`}>
      <div
        className={`flex flex-col ${
          isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center w-full px-4 py-10 gap-10`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[520px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2  flex items-center flex-col gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-3xl font-semibold text-gray-900">
            {title}
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-3xl md:text-3xl font-semibold text-[#FDB713]">
              ${currentPrice}
            </span>
            {originalPrice && (
              <span className="text-xl text-gray-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          {countdown && timeLeft && (
            <div className="flex gap-4">
              <TimeUnit value={timeLeft.days} label="DAYS" />
              <TimeUnit value={timeLeft.hours} label="HOURS" />
              <TimeUnit value={timeLeft.mins} label="MINS" />
              <TimeUnit value={timeLeft.secs} label="SECS" />
            </div>
          )}


          {buttonProps &&  <div><AnimatedButton {...buttonProps} /></div>}
        </div>
      </div>
    </section>
  );
};

// Time unit
const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-[#FDB713] flex items-center justify-center">
      <span className="text-lg font-semibold text-white">{value}</span>
    </div>
    <span className="text-xs font-semibold mt-2 text-gray-700">{label}</span>
  </div>
);
