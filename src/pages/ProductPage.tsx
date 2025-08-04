import React from 'react';
import HeroSection from '../components/ProductPage/HeroSection';
import FeatureCarousel from '../components/ProductPage/FeatureCarousel';

function ProductPage() {
    return (
        <div className="min-h-[300vh] bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
         <HeroSection/>
         <FeatureCarousel/>
        </div>
    )
}

export default ProductPage
