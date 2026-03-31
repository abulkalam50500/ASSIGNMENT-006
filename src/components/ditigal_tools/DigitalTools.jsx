import React, { use } from 'react';
import DigitoolsHead from './DigitoolsHead';
import { Suspense } from 'react';
import DigitalToolsCards from './DigitalToolsCards';
const DigitalTools = ({DigiToolsResData,cartItem,setCartItem}) => {

 
  const DigiToolsData = use(DigiToolsResData);

    return (
        <div className='w-300 max-w-full mx-auto py-20 md:py-28'>

            {/* // digitools headline */}
            <DigitoolsHead cartItem={cartItem} setCartItem={setCartItem} />

            {/* // digitools Cards */}
           <DigitalToolsCards DigiToolsData={DigiToolsData} cartItem={cartItem} setCartItem={setCartItem}  />


        </div>
    );
};

export default DigitalTools;