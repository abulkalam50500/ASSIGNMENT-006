import React, { useState } from 'react';
import Item from './Item';
import { Check } from 'lucide-react';
const Card = ({ item,cartItem,setCartItem }) => {

    const { title, tag,image, description, price, features } = item;

    const tagStyles = {
        'Best Seller': 'badge-warning',
        'Popular': 'badge-primary',
        'New': 'badge-success'
    };

    const [CardBtnCheck,setCardBtnCheck] = useState(false);

    const HandleCartBtnCheck=async(btn_status)=>{

        setCardBtnCheck(btn_status);

        const updateCart = [...cartItem,item];
        setCartItem(updateCart);

    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-end'>
                        <span className={`badge badge-xs ${tagStyles[tag]} float-right text-[12px] p-2`}>{tag}</span>
                    </div>

                    <div className="digitoolsImg">
                        <img className=' rounded-full p-3' src={image} alt="" />
                    </div>

                    <div id="digitoolsTitle">
                        <h2 className='text-[24px] font-bold'>{title}</h2>
                        <p className='pt-2 text-[#627382]'>{description}</p>
                        <h2 className="text-2xl font-bold pt-2">{price?.currency}{price?.amount}<span className='text-[16px] font-normal text-[#627382]'>/{price?.type}</span></h2>
                    </div>


                    <ul className="mt-2 flex flex-col gap-2 text-xs font-medium text-[#627382]">

                        {
                            features.map((feature_item, index) => <Item key={index} feature_item={feature_item} />)
                        }




                    </ul>
                    <div className="mt-6">
                        <button className={`btn btn-block ${!CardBtnCheck?'bg-linear-to-r from-[#4F39F6] via-[#7424fd] to-[#9467e2]':'bg-linear-to-r from-[#99261e] via-[#e66a54] to-[#e2997c]'} text-white font-bold rounded-full`} onClick={()=>{HandleCartBtnCheck(true)}}>{CardBtnCheck?(<><Check />  Already Added.</>):'Buy Now'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;