import React, { useState } from 'react';
import { use } from 'react';
import Links from '../../ui/Links';
import { ShoppingCart,Menu, X } from 'lucide-react';
const Nabvar = ({ MenuResData,cartItem }) => {

     const [openMenu,setOpenMenu] = useState(false);


    const MenuData = use(MenuResData);
    const MenuLink = MenuData.map((link, index) => <Links key={index} link={link} />);


    return (
        <div className='w-300 max-w-full mx-auto'>
            <nav className='flex justify-between items-center p-6.5'>
                <div className='nav-logo flex items-center gap-2' onClick={()=>{setOpenMenu(!openMenu)}}>
                    
                    {
                        openMenu?<X className='md:hidden' />:<Menu className='md:hidden' />
                    }

                    <ul className={`md:hidden absolute ${openMenu?'top-18':'-top-38'} duration-400 bg-white`}>
                        { MenuLink}
                    </ul>

               

                    <h2 className='text-[25px] md:text-[37px] font-extrabold bg-linear-to-r from-[#4F39F6] via-[#7a2cff] to-[#b995f6] bg-clip-text text-transparent'>DigiTools</h2>
                </div>
                <div className='nav-menu hidden md:block'>
                    <ul className='flex items-center gap-8'>
                        {
                            MenuLink
                        }

                    </ul>
                </div>
                <div className='nav-action'>
                    <ul className='flex items-center gap-4 font-semibold'>
                        <li className='flex items-start'><ShoppingCart />
                         <p className='rounded-full absolute top-3.6 right-17.25 md:top-5 md:right-67.5'>
                            <sup className='bg-[#b97f14] pl-2.5 pr-2.25 pt-1.25 pb-1  text-white rounded-full'>{cartItem?.length||0}</sup>
                            </p>
                            </li>
                        <li>Login</li>
                        <li className='hidden md:block'><button className='btn rounded-full bg-linear-to-r from-[#4F39F6] via-[#7424fd] to-[#b995f6] text-white'>Get Started</button></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nabvar;