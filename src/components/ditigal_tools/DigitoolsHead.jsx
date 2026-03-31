import React from 'react';

const DigitoolsHead = ({cartItem,setCartItem}) => {

  

    return (
        <div className='flex flex-col items-center'>
             <h2 className='text-[34px] md:text-[48px] font-extrabold text-[#101727]'>Premium Digital Tools</h2>
             <p className='w-138 max-w-full text-[#627382] text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        
           <div id="digitoolsAction" className='bg-[#FFFFFF] border border-[#F6F6F6] mt-5 space-x-2 p-2.25 rounded-full'>
             <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] via-[#7424fd] to-[#b995f6] text-white'>Products</button>
             <button className='btn rounded-full'>Cart ({cartItem?.length||0})</button>
           </div>

        </div>
    );
};

export default DigitoolsHead;