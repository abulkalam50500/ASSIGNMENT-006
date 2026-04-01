import React from 'react';
import TransparentPricingHead from "./TransparentPricingHead"
import TransparentPricingCards from './TransparentPricingCards';


const TransparentPricing = () => {
    return (
        <div className='w-300 max-w-full mx-auto py-28'>
             <TransparentPricingHead />
             <TransparentPricingCards />
        </div>
    );
};

export default TransparentPricing;