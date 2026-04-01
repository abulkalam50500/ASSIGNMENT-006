import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
    return (
        <div className='w-300 max-w-full mx-auto px-4 pt-20  md:pt-28 pb-10'>
             <div className="footer-head grid md:grid-cols-[1fr_2fr_1fr] place-items-center  gap-13">
                 <div className="footer-left">
                    <h2 className='font-extrabold text-[35px] text-[#FFFF] text-center md:text-left'>DigiTools</h2>
                    <p className='text-white/80 pt-3'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                 </div>
                 <div className="footer-middle grid grid-cols-2 md:grid-cols-3 space-y-7 md:space-y-0">
                    <div className='products text-[#FFFF]'>
                        <h2 className='text-[20px] font-medium'>Products</h2>
                      <ul className='mt-2 text-white/80 font-normal space-y-2'>
                        <li><a href="">Feature</a></li>
                        <li><a href="">Prcing</a></li>
                        <li><a href="">Templates</a></li>
                        <li><a href="">Integrations</a></li>
                      </ul>
                    </div>
                    <div className='Company text-[#FFFF]'>
                        <h2 className='text-[20px] font-medium'>Company</h2>
                      <ul className='mt-2 text-white/80 font-normal space-y-2'>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Career</a></li>
                        <li><a href="">Press</a></li>
                      </ul>
                    </div>
                    <div className='Resources text-[#FFFF]'>
                        <h2 className='text-[20px] font-medium'>Resources</h2>
                      <ul className='mt-2 text-white/80 font-normal space-y-2'>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Contact</a></li>
                      </ul>
                    </div>
                 </div>
                 <div className="footer-right">
                    <h2 className='text-white text-[20px] font-medium'>Social Links</h2>
                    <ul className='flex gap-3 mt-3'>
                        <li className=""> <InstagramIcon className='bg-white rounded-full p-1' /></li>
                        <li > <FacebookIcon className="bg-white rounded-full p-1" /></li>
                        <li > <XIcon className="bg-white rounded-full p-1" /></li>
                    </ul>
                 </div>

                   
             </div>
               <div className="divider mt-9 w-full max-w-full text-white/50 before:bg-white/50 after:bg-white/50 before:h-[1px] after:h-[1px]"></div>
        
               <div className='footer-bottom flex flex-col md:flex-row justify-between'>
                  <div className='copy_write text-[#FFFF]/50'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                  </div>

                  <ul className='text-[#FFFF]/50 flex justify-between gap-10 pt-5 md:pt-0'>
                    <li>Privacy Policy </li>
                    <li>Terms of Service </li>
                    <li>Cookies </li>
                  </ul>
                </div> 

        
        </div>
    );
};

export default Footer;