import React, { use, useState } from 'react';
import DigitoolsHead from './DigitoolsHead';
import { Suspense } from 'react';
import DigitalToolsCards from './DigitalToolsCards';
import Cart from '../cart/Cart';
const DigitalTools = ({DigiToolsResData,cartItem,setCartItem,TotalAmount}) => {

  const [activePremiumBtn,setActivePremiumBtn] = useState("product");
const [CardBtnCheck, setCardBtnCheck] = useState([]);
 
  const DigiToolsData = use(DigiToolsResData);

    return (
        <div className='w-300 max-w-full mx-auto py-20 md:py-28'>

            {/* // digitools headline */}
            <DigitoolsHead activePremiumBtn={activePremiumBtn} setActivePremiumBtn={setActivePremiumBtn} cartItem={cartItem} setCartItem={setCartItem} />

            {/* // digitools Cards */}
            {
                activePremiumBtn=="product"?<DigitalToolsCards DigiToolsData={DigiToolsData} cartItem={cartItem} setCartItem={setCartItem} CardBtnCheck={CardBtnCheck} setCardBtnCheck={setCardBtnCheck}   />:<Cart TotalAmount={TotalAmount} cartItem={cartItem} setCartItem={setCartItem} CardBtnCheck={CardBtnCheck} setCardBtnCheck={setCardBtnCheck} />
            }
           


        </div>
    );
};

export default DigitalTools;