import React from 'react';
import Card from '../../ui/Card';
const DigitalToolsCards = ({ DigiToolsData, cartItem, setCartItem }) => {
    return (
        <div className='mt-10 grid place-items-center md:grid-cols-3 space-y-6'>

            {
                DigiToolsData.map((item, index) => <Card key={index} item={item} cartItem={cartItem} setCartItem={setCartItem} />)
            }



        </div>
    );
};

export default DigitalToolsCards;