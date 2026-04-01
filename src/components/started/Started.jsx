import React from 'react';

const Started = () => {
   return (
      <div className='p-12 md:p-28'>
         <div className='started-head text-center'>
            <h2 className='text-[30px] md:text-[48px] font-extrabold'>Get Started in 3 Steps</h2>
            <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
         </div>

         <div className='started-cards pt-5 grid md:grid-cols-3 gap-5'>


            <div className='started-single-card bg-[#FFFFFF] p-4 relative'>
               <button className="btn btn-active bg-linear-to-r from-[#4F39F6] to-[#9514FA]  absolute right-5 rounded-full p-3 text-[#FFFF]">01</button>
               <div className='py-13 flex flex-col items-center space-y-2'>

                  <div className="img w-25 h-24.75 flex items-center  justify-center rounded-full bg-gradient-to-r from-[#4F39F6]/10 to-[#9514FA]/10">
                     <img className='items-center' src="https://i.ibb.co.com/mw3Th4q/user.png" alt="" />
                  </div>
                  <h2 className='text-[24px] font-bold text-center'>Create Account</h2>
                  <p className='text-[#627382] text-[16px] text-center'>Sign up for free in seconds. No credit card required to get started.</p>

               </div>
            </div>

            <div className='started-single-card bg-[#FFFFFF] p-4 relative'>
               <button className="btn btn-active bg-linear-to-r from-[#4F39F6] to-[#9514FA]  absolute right-5 rounded-full p-3 text-[#FFFF]">02</button>
               <div className='py-13 flex flex-col items-center space-y-2'>

                  <div className="img w-25 h-24.75 flex items-center  justify-center rounded-full bg-gradient-to-r from-[#4F39F6]/10 to-[#9514FA]/10">
                     <img className='items-center' src="https://i.ibb.co.com/Pzf7ZMcQ/rocket.png" alt="" />
                  </div>
                  <h2 className='text-[24px] font-bold text-center'>Start Creating</h2>
                  <p className='text-[#627382] text-[16px] text-center'>Download and start using your premium  tools immediately.</p>

               </div>
            </div>

            <div className='started-single-card bg-[#FFFFFF] p-4 relative'>
               <button className="btn btn-active bg-linear-to-r from-[#4F39F6] to-[#9514FA]  absolute right-5 rounded-full p-3 text-[#FFFF]">03</button>
               <div className='py-13 flex flex-col items-center space-y-2'>

                  <div className="img w-25 h-24.75 flex items-center  justify-center rounded-full bg-gradient-to-r from-[#4F39F6]/10 to-[#9514FA]/10">
                     <img className='items-center' src="https://i.ibb.co.com/S7wYSCCp/package.png" alt="" />
                  </div>
                  <h2 className='text-[24px] font-bold text-center'>Choose Products</h2>
                  <p className='text-[#627382] text-[16px] text-center'>Browse our catalog and select the tools that fit your needs.</p>

               </div>
            </div>


         </div>

      </div>
   );
};

export default Started;