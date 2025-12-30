// Main entry point for CarouselDynamicBanner component
// This file exports all components so you can import them easily

import { CarouselBanner } from '.';

// Export the main component (most commonly used)
export { default as CarouselBanner } from './CarouselBanner';

// Export child components (if you need them separately)
export { default as CategoryCard } from './CategoryCard';
export { default as Breadcrumb } from './Breadcrumb';

// Export data (if you need to access categories)
export { categories } from './DataCategoriesWatch';


export const CarouselDynamicBannerMap = {
    carouselBanner: CarouselBanner,
}