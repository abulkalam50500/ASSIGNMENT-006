import React from 'react';

const ReadyToTransform = () => {
    return (
        <div className='w-300 max-w-full mx-auto py-28'>
            <div className='ReadyToTransformHead text-center'>
                <h2 className='font-extrabold text-[30px] md:text-[40px] text-[#FFFF]'>Ready to Transform Your Workflow?</h2>
                <p className='text-[#FFF] pt-5 md:pt-0'>Join thousands of professionals who are already using Digitools to work smarter.<br/> Start your free trial today.</p>
            </div>

            <div className='ReadyToTransformAction text-center mt-8'>
                <button className='btn color-[#FFFF] rounded-full '> <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'> Explore Products</span></button>
                <button className='ml-3 shadow-none btn border border-[#FFFF] rounded-full bg-[#4F39F6] text-[#FFFF]'><span className='font-semibold'>View Pricing</span></button>
            </div>

            <p className='mt-5 text-center text-[#FFFF]'>
               14-day free trial • No credit card required • Cancel anytime
            </p>

        </div>
    );
};

export default ReadyToTransform;