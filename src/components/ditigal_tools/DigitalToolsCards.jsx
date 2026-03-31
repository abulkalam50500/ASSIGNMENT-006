import React, { useState } from 'react';
import Card from '../../ui/Card';
const DigitalToolsCards = ({ DigiToolsData, cartItem, setCartItem,CardBtnCheck,setCardBtnCheck }) => {


    
    
     
    return (
        <div className='mt-10 grid place-items-center md:grid-cols-3 space-y-6'>

            {
                DigiToolsData.map((item, index) => <Card key={index} item={item} cartItem={cartItem} setCartItem={setCartItem}  CardBtnCheck={CardBtnCheck} setCardBtnCheck={setCardBtnCheck} />)
            }



        </div>
    );
};

export default DigitalToolsCards;