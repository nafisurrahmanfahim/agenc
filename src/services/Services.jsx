import React from 'react'
import card1 from '.././assets/card1.png'
import card2 from '.././assets/card2.png'
import card3 from '.././assets/card3.png'
import card4 from '.././assets/card4.png'
import card5 from '.././assets/card5.png'
import card6 from '.././assets/card6.png'

const Services = () => {
    return (
        <section className='lg:pt-[75px] pt-[20px] sm:pt-[30px] pb-[130px]'>
            <div className="max-w-container mx-auto">
                <div className="w-full text-center">
                    <h3 className='lg:font-semibold font-bold lg:text-[54px] text-[37px] lg:leading-[50px] leading-[45px] font-inter'>Our Provided Services</h3>
                </div>
                <div className="lg:flex lg:flex-wrap justify-between lg:pt-[60px]">
                        <div className="my-[20px] lg:my-[10] border-2 lg:w-[32%] text-center lg:shadow-2xl py-[45px]">
                            <img className='mx-auto pb-[40px]' src={card1} alt="" />
                            <h3 className='text-[25px] font-semibold font-inter pb-[20px]'>Web Design</h3>
                            <p className='w-326px text-[#737373] font-normal text-[16px] font-inter'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        </div>

                        <div className="my-[20px] lg:my-[10] border-2 lg:w-[32%] text-center lg:shadow-2xl py-[55px]">
                            <img className='mx-auto pb-[40px]' src={card2} alt="" />
                            <h3 className='text-[25px] font-semibold font-inter pb-[20px]'>UI/UX Design</h3>
                            <p className='w-326px text-[#737373] font-normal text-[16px] font-inter'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        </div>

                        <div className="my-[20px] lg:my-[10] border-2 lg:w-[32%] text-center lg:shadow-2xl py-[55px]">
                            <img className='mx-auto pb-[40px]' src={card3} alt="" />
                            <h3 className='text-[25px] font-semibold font-inter pb-[20px]'>Web Development</h3>
                            <p className='w-326px text-[#737373] font-normal text-[16px] font-inter'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        </div>

                    <div className="my-[20px] lg:my-[10px] border-2 lg:w-[32%] pt-[71px] text-center lg:shadow-2xl py-[55px]">
                        <img className='mx-auto pb-[40px]' src={card4} alt="" />
                        <h3 className='text-[25px] font-semibold font-inter pb-[20px]'>Motion Graphics</h3>
                        <p className='w-326px text-[#737373] font-normal text-[16px] font-inter'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>

                    <div className="my-[20px] lg:my-[10px] border-2 lg:w-[32%] pt-[71px] text-center lg:shadow-2xl py-[55px]">
                        <img className='mx-auto pb-[40px]' src={card5} alt="" />
                        <h3 className='text-[25px] font-semibold font-inter pb-[20px]'>3D Animation</h3>
                        <p className='w-326px text-[#737373] font-normal text-[16px] font-inter'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>

                    <div className="my-[20px] lg:my-[10px] border-2 lg:w-[32%] pt-[71px] text-center lg:shadow-2xl py-[55px]">
                        <img className='mx-auto pb-[40px]' src={card6} alt="" />
                        <h3 className='text-[25px] font-semibold font-inter pb-[20px]'>Digital Marketing</h3>
                        <p className='w-326px text-[#737373] font-normal text-[16px] font-inter'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services