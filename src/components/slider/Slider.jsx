import { Play } from 'lucide-react';
import React, { use } from 'react';

const Slider = ({SliderResData}) => {
    const SliderData = use(SliderResData);
    const {top_title,title,short,image} = SliderData;
    
    return (
        <div className='w-300 max-w-full mx-auto flex flex-col md:flex-row justify-between items-center py-16'>
            <div id="slider-left-box" className='ml-2 max-w-160'>
                <div className='bg-[#E1E7FF] rounded-full inline-flex items-center   pl-3'>
                    <p className='h-4 w-4  rounded-full bg-[radial-gradient(circle_at_center,_#4F39F6,_#9514FA,_#E0AAFF)]'></p>
                    <p className=' p-2 font-medium bg-linear-to-r from-[#4F39F6] via-[#6217e4] to-[#8c58e6] bg-clip-text text-transparent'>{top_title}</p>
                </div>
                <h2 className='font-extrabold text-[40px] md:text-[71px]'>{title}</h2>
                <p className='text-[18px] text-[#627382] md:w-150'>{short}</p>
                <div className='pt-5 space-x-3'>
                    <button className='btn  rounded-full bg-linear-to-r from-[#4F39F6] via-[#7424fd] to-[#b995f6] text-white'>Explore Products</button>
                    <button className='btn btn-outline btn-primary rounded-full  text-[#4F39F6]'><Play className='w-5' /> Watch Demo</button>
                </div>
            </div>
            <div id="slider-right-box ">
                  <img className='max-w-full mt-4  ' src={image} alt="" />
            </div>
        </div>
    );
};

export default Slider;