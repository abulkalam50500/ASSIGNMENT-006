import React from 'react';

const TransparentPricingCards = () => {
    return (
        <div className='pt-10 px-6 md:px-0'>
            <div className='transparentCards grid md:grid-cols-3 gap-7 '>

                <div className='transparentSingleCards p-5 bg-[#F9FAFC] rounded-[10px]'>
                    <div className="pricing-head">
                        <h2 className='text-[24px] text-[#101727] font-bold'>Starter</h2>
                        <p className='text-[#627382]'>Perfect for getting started</p>
                    </div>
                    <div className="pricing-info mt-2">
                        <h2 className='text-[40px] text-[#101727] font-bold'>$0<span className='text-[#627382] text-[20px] font-normal'>/Month</span></h2>

                    </div>

                    <ul className="mt-3 flex flex-col gap-2 text-xs">
                        <li className='text-[#627382] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                        <li className='text-[#627382] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Basic templates</span>
                        </li>
                        <li className='text-[#627382] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Community support</span>
                        </li>
                        <li className='text-[#627382] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>1 project per month</span>
                        </li>
                    </ul>

                    <button className='btn mt-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full text-[#FFFF]'>Get Started Free</button>
                </div>


                <div className='transparentSingleCards p-5 bg-[#F9FAFC] rounded-[10px] relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] '>
                    <div className="badge bg-[#FEF3C6] border-0 badge-warning absolute -top-4 right-37 font-medium text-[#BB4D00]">Most Popular</div>
                    
                    <div className="pricing-head">
                        <h2 className='text-[24px] text-[#FFFF] font-bold'>Pro</h2>
                        <p className='text-[#FFFF]'>Best for professionals</p>
                    </div>
                    <div className="pricing-info mt-2">
                        <h2 className='text-[40px] text-[#FFFF] font-bold'>$29<span className='text-[#FFFF] text-[20px] font-normal'>/Month</span></h2>

                    </div>

                    <ul className="mt-3 flex flex-col gap-2 text-xs">
                        <li className='text-[#FFFF] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-normal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to all premium tools</span>
                        </li>
                        <li className='text-[#FFFF] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-normal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited templates</span>
                        </li>
                        <li className='text-[#FFFF] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-normal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Priority support</span>
                        </li>
                        <li className='text-[#FFFF] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-normal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited projects</span>
                        </li>
                        <li className='text-[#FFFF] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-normal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Cloud sync</span>
                        </li>
                        <li className='text-[#FFFF] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-normal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Advanced analytics</span>
                        </li>
                    </ul>

                    <button className='btn mt-4 mb-7 bg-[#FFFF] w-full rounded-full text-[#FFFF]'>
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                            Start Pro Trial
                        </span>
                    </button>
                </div>



                <div className='transparentSingleCards p-5 bg-[#F9FAFC] rounded-[10px]'>
                    <div className="pricing-head">
                        <h2 className='text-[24px] text-[#101727] font-bold'>Enterprise</h2>
                        <p className='text-[#627382]'>For teams and businesses</p>
                    </div>
                    <div className="pricing-info mt-2">
                        <h2 className='text-[40px] text-[#101727] font-bold'>$99<span className='text-[#627382] text-[20px] font-normal'>/Month</span></h2>

                    </div>

                    <ul className="mt-3 flex flex-col gap-2 text-xs">
                        <li className='text-[#627382] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Everything in Pro</span>
                        </li>
                        <li className='text-[#627382] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Team collaboration</span>
                        </li>
                        <li className='text-[#627382] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom integrations</span>
                        </li>
                        <li className='text-[#627382] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Dedicated support</span>
                        </li>
                        <li className='text-[#627382] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>SLA guarantee</span>
                        </li>
                        <li className='text-[#627382] font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom branding</span>
                        </li>
                      
                    </ul>

                    <button className='btn mt-4 mb-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full text-[#FFFF]'>Contact Sales</button>
                </div>

            </div>
        </div>
    );
};

export default TransparentPricingCards;