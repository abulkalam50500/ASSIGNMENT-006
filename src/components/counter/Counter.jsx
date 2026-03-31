import React, { use } from 'react';

const Counter = ({CounterResData}) => {

    const CounterData = use(CounterResData);


    
    return (
        <div className='w-300 grid grid-cols-1 md:grid-cols-3 place-items-center max-w-full mx-auto py-6'>
            {
                CounterData.map((counter,index)=>{
                    return <div key={index} className="counter-card w-full text-center  py-5 border-b md:border-b-0 md:border-r last:border-r-0 border-[#b8b1b1]">
                <h2 className='text-[60px] font-extrabold text-white'>{counter.title}</h2>
                <p className='text-[24px] font-medium text-white'>{counter.short}</p>
                
            
            </div>
                })
            }
            

         
        </div>
    );
};

export default Counter;