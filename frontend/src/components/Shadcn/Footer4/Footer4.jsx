// import React, { useState } from "react";
// import { ChevronUp } from "lucide-react";

// const Footer4 = ({
//   logo = {
//     text: "netro",
//   },
//   tagline = "True radiance starts with self-care nurturing your skin reflects the beauty within.",
//   contactInfo = {
//     address: "1234 Heaven Stress, USA.",
//     phone: "(+84) 1800 68 68",
//     email: "hello@domain.com",
//     hours: "All Day: 9:00AM - 22:00PM"
//   },
//   socials = {
//     twitter: "https://twitter.com/yourpage",
//     dribbble: "https://dribbble.com/yourpage",
//     behance: "https://behance.com/yourpage",
//     instagram: "https://instagram.com/yourpage"
//   },
//   categories = [
//     { text: "Skincare Solutions", url: "#" },
//     { text: "Complexion Perfection", url: "#" },
//     { text: "Eye Enhancements", url: "#" },
//     { text: "Radiant Lips", url: "#" }
//   ],
//   copyright = "© Copyright 2025 | Netro By ShopiLaunch. Powered by Shopify.",
//   footerLinks = [
//     { text: "Terms and conditions", url: "#" },
//     { text: "Privacy Policy", url: "#" },
//     { text: "Cookies", url: "#" }
//   ]
// }) => {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = () => {
//     if (email) {
//       alert(`Subscribed with email: ${email}`);
//       setEmail("");
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="bg-black text-gray-400 relative">
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

//           {/* Column 1 - Logo and Tagline */}
//           <div>
//             <h2 className="text-5xl font-bold text-white mb-6">{logo.text}</h2>
//             <p className="text-gray-400 text-sm leading-relaxed mb-8">{tagline}</p>
//             <div className="flex gap-3">
//               <a href={socials.twitter} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//                 </svg>
//               </a>
//               <a href={socials.dribbble} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.2 6.4c1.5 1.9 2.4 4.3 2.4 6.9 0 .3 0 .7-.1 1-.8-.2-4.5-1-8.4-.4-.1-.2-.2-.4-.3-.6-.2-.5-.4-1-.7-1.5 4.1-1.7 6-4.2 6.1-4.4zM12 2.3c2.6 0 5 1 6.8 2.6-.1.2-1.8 2.5-5.7 4-1.8-3.3-3.8-6-4.1-6.4 1-.2 2-.2 3-.2zm-5.1.9c.3.4 2.2 3.1 4.1 6.3-5.2 1.4-9.7 1.4-10.3 1.4.7-3.4 3-6.2 6.2-7.7zM2 12v-.5c.6 0 6.1 0 11.7-1.6.3.6.6 1.2.8 1.8-4.6 1.3-8.5 4.9-9.5 6.3C3.3 16.5 2 14.4 2 12zm10 9.7c-2.3 0-4.4-.8-6.1-2.1.8-1.2 3.8-4.3 8.9-5.9 0 0 .1 0 .1-.1 1.2 3.1 1.7 5.8 1.8 6.6-1.5.9-3.2 1.5-4.7 1.5zm6.7-2.4c-.1-.6-.6-3.1-1.7-6.1 3.6-.6 6.7.4 7.1.5-.5 3.1-2.3 5.8-5.4 7.6z"/>
//                 </svg>
//               </a>
//               <a href={socials.behance} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.25-1.91.25H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.07-1.077-1.75-.253-.68-.37-1.42-.37-2.22 0-.81.125-1.54.373-2.23.25-.693.604-1.28 1.063-1.77.46-.493 1.01-.875 1.67-1.146.66-.27 1.406-.405 2.224-.405.88 0 1.643.16 2.31.48.666.32 1.22.74 1.657 1.27.44.52.75 1.15.94 1.84.19.71.27 1.46.25 2.25h-7.69c0 .84.28 1.7.71 2.17l-.002.003zm-10.78-6.23c-.432-.342-1.058-.512-1.863-.512H1.38v3.585h3.616c.815 0 1.442-.17 1.872-.52.43-.344.64-.84.64-1.44 0-.59-.21-1.08-.64-1.42l-.002-.003zm13.233-1.21c-.387-.37-.98-.556-1.764-.556-.56 0-1.01.13-1.35.4-.34.27-.577.55-.71.86h3.98c-.107-.48-.368-.86-.755-1.23l-.402-.47zM10.1 10.56c0-.66-.26-1.2-.78-1.61-.52-.41-1.19-.62-2.01-.62H1.38v4.48h5.53c.86 0 1.53-.2 2.03-.62.51-.42.77-.97.77-1.65l-.003.01zm5.62-6.47c-.37-.37-.82-.56-1.35-.56-.41 0-.76.1-1.05.28-.29.18-.52.42-.7.7h3.27c-.11-.52-.37-.95-.74-1.32l-.37-.4zm-2.62 10.94c-.37-.37-.82-.56-1.35-.56-.41 0-.76.1-1.05.28-.29.18-.52.42-.7.7h3.27c-.11-.52-.37-.95-.74-1.32l-.37-.4z"/>
//                 </svg>
//               </a>
//               <a href={socials.instagram} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Column 2 - About Us */}
//           <div>
//             <h3 className="text-white font-semibold text-base mb-6">About Us</h3>
//             <div className="space-y-4 text-sm">
//               <div className="flex items-start gap-3">
//                 <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
//                 </svg>
//                 <span>{contactInfo.address}</span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
//                 </svg>
//                 <span>{contactInfo.phone}</span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
//                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
//                 </svg>
//                 <span>{contactInfo.email}</span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
//                 </svg>
//                 <span>{contactInfo.hours}</span>
//               </div>
//             </div>
//           </div>

//           {/* Column 3 - Categories */}
//           <div>
//             <h3 className="text-white font-semibold text-base mb-6">Categories</h3>
//             <ul className="space-y-3 text-sm">
//               {categories.map((category, idx) => (
//                 <li key={idx}>
//                   <a href={category.url} className="hover:text-white transition-colors">
//                     {category.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4 - Newsletter */}
//           <div>
//             <h3 className="text-white font-semibold text-base mb-6">Newsletters</h3>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email..."
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="flex-1 px-4 py-2.5 bg-gray-900 border border-gray-800 focus:outline-none focus:border-gray-600 text-sm text-white placeholder-gray-500"
//               />
//               <button
//                 onClick={handleSubscribe}
//                 className="bg-[#d4a574] hover:bg-[#c9986a] text-black px-6 py-2.5 font-medium text-sm transition-colors"
//               >
//                 SUBMIT
//               </button>
//             </div>
//             <div className="flex gap-4 mt-8">
//               <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-8 object-contain opacity-70" />
//               <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-8 object-contain opacity-70" />
//               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8 object-contain opacity-70" />
//               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 object-contain opacity-70" />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
//           <p className="text-gray-500">
//             {copyright}
//           </p>
//           <div className="flex gap-6">
//             {footerLinks.map((link, idx) => (
//               <a key={idx} href={link.url} className="hover:text-white transition-colors">
//                 {link.text}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-8 right-8 bg-white text-black w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg z-50"
//       >
//         <ChevronUp size={24} />
//       </button>
//     </footer>
//   );
// };

// export default Footer4;























import React, { useState } from "react";
import { Mail, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SocialIcons from "@/components/SocialIcons/SocialIcons";

const Footer4 = ({
  logo = {
    text: "netro",
  },
  tagline = "True radiance starts with self-care nurturing your skin reflects the beauty within.",
  contactInfo = {
    address: "1234 Heaven Stress, USA.",
    phone: "(+84) 1800 68 68",
    email: "hello@domain.com",
    hours: "All Day: 9:00AM - 22:00PM"
  },
  socials = {
    twitter: "https://twitter.com/yourpage",
    facebook: "https://dribbble.com/yourpage",
    linkedin: "https://behance.com/yourpage",
    instagram: "https://instagram.com/yourpage"
  },
  categories = [
    { text: "Skincare Solutions", url: "#" },
    { text: "Complexion Perfection", url: "#" },
    { text: "Eye Enhancements", url: "#" },
    { text: "Radiant Lips", url: "#" }
  ],
  copyright = "© Copyright 2025 | Netro By ShopiLaunch. Powered by Shopify.",
  footerLinks = [
    { text: "Terms and conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
    { text: "Cookies", url: "#" }
  ]
}) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-400 relative">
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1 - Logo and Tagline */}
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">{logo.text}</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{tagline}</p>
            <div className="flex text-white">
              <SocialIcons socials={socials} />
            </div>
          </div>

          {/* Column 2 - About Us */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">About Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 3 - Categories */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Categories</h3>
            <ul className="space-y-3 text-sm">
              {categories.map((category, idx) => (
                <li key={idx}>
                  <a href={category.url} className="hover:text-white transition-colors">
                    {category.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Newsletters</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 focus:outline-none focus:border-gray-600 text-sm text-white placeholder-gray-500"
              />
              <button
                onClick={handleSubscribe}
                className="bg-white text-black p-3 cursor-pointer transition-colors"
              >
                <Mail size={20} />
              </button>
            </div>
            <div className="mt-8">
              <img src="/ThemePictures/cards.webp" alt="Payment cards" className="h-8 object-contain opacity-70" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <Separator className="bg-gray-800" />
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            {copyright}
          </p>
          <div className="flex gap-6">
            {footerLinks.map((link, idx) => (
              <a key={idx} href={link.url} className="text-gray-400 hover:text-white transition-colors">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white text-black w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg z-50"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer4;