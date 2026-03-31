import React from 'react';
import { Trash, Ban } from 'lucide-react';
import { Bounce, toast } from 'react-toastify';

const Cart = ({ TotalAmount, cartItem, setCartItem, CardBtnCheck, setCardBtnCheck }) => {


   const HandleRemoveItem = async (item) => {

      const updateCartItem = cartItem.filter(list => list.title != item.title);
      setCartItem(updateCartItem);

      const updateCarBtnCheck = CardBtnCheck.filter(list => list != item.title);
      setCardBtnCheck(updateCarBtnCheck);

      toast.success('🦄 Item Successfully removed!', {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         transition: Bounce,
      });

   }

   const HandleProcess = () => {
      const updateCartItem = [];
      setCartItem(updateCartItem);

      const updateCarBtnCheck = [];
      setCardBtnCheck(updateCarBtnCheck);

      toast.success('🦄  Successfully Proceed!', {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         transition: Bounce,
      });


   }


   return (
      <div className='shadow p-5 mt-6'>
         <div>
            <h2 className='text-[24px] font-bold'>Your Cart</h2>
         </div>

         {

            cartItem.length < 1 ?
               <div className='md:h-screen mt-10 flex items-center justify-center'>
                  <div className='shadow p-10 rounded-2xl'>
                     <h2 className='text-2xl font-bold text-center flex items-center gap-4'><Ban />No items yet!</h2>
                  </div>
               </div>
               :

               <div>
                  {


                     cartItem.map((item, index) => {
                        return (

                           <div key={index} className='p-4 mt-3 bg-[#F9FAFC] flex flex-col md:flex-row justify-between  md:items-center'>
                              <div className='flex  items-center gap-4'>
                                 <div>
                                    <img className='' src={item.image} alt="" />
                                 </div>
                                 <div className='cart-info'>
                                    <h2 className='text-[20px] font-semibold text-[#101727]'>{item.title}</h2>
                                    <p className='font-medium'>{item?.price?.currency}{item?.price?.amount}</p>
                                 </div>
                              </div>

                              <div className='cart-remove '>
                                 <button onClick={() => {
                                    HandleRemoveItem(item)
                                 }} className='btn text-[#d60606] float-right md:float-none'>Remove</button>
                              </div>

                           </div>




                        )



                     })
                  }
                  <div className='mt-5 flex justify-between'>
                     <p className='text-[#627382]'>Total:</p>
                     <h2 className='font-bold text-[24px] '>${TotalAmount}</h2>
                  </div>

                  <div className='mt-6'>
                     <button onClick={HandleProcess} className='rounded-full btn bg-linear-to-r from-[#4F39F6] via-[#7424fd] to-[#b995f6] text-white w-full'>Proceed to Checkout</button>
                  </div>

               </div>
         }


      </div>
   );
};

export default Cart;