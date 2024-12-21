import React from 'react'
import idea from '../../assets/ideas.png'
import agenc from '../../assets/agenc.jpg'
import support from '../../assets/support.png'

const Ajenc = () => {
    return (
        <section className='py-[130px]'>
            <div className="max-w-container mx-auto">
                <div className="text-center">
                    <h3 className="font-extrabold lg:text-[45px] text-[30px] font-inter lg:w-[518px] mx-auto">Why You Should Choose Agenc</h3>
                    <p className='text-center mx-auto pt-[20px] font-normal text-[16px] font-inter text-[#737373] lg:w-[802px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div className="lg:flex justify-between">
                    <div className="w-[70%] text-center pt-[130px] mx-auto">
                        <div className="lg:flex justify-between">
                            <div className="">
                                <img className='mx-auto' src={idea} alt="" />
                                <h3 className='pt-[20px] font-bold font-inter text-[25px]'>Innovative Ideas</h3>
                                <p className='font-normal text-[16px] font-inter text-[#737373]'>Because each project is different, we adapt to your business model.</p>
                            </div>
                            <div className="pt-[60px] lg:pt-[0]">
                                <img className='mx-auto' src={idea} alt="" />
                                <h3 className='pt-[20px] font-bold font-inter text-[25px]'>Innovative Ideas</h3>
                                <p className='font-normal text-[16px] font-inter text-[#737373]'>Because each project is different, we adapt to your business model.</p>
                            </div>
                        </div>

                        <div className="lg:flex justify-between  pt-[88px]">
                            <div className="">
                                <img className='mx-auto' src={support} alt="" />
                                <h3 className='pt-[20px] font-bold font-inter text-[25px]'>Dedicated Support</h3>
                                <p className='font-normal text-[16px] font-inter text-[#737373]'>We provide 24/7 support for all our clients and serve them professionally.</p>
                            </div>
                            <div className="pt-[60px] lg:pt-[0]">
                                <img className='mx-auto' src={support} alt="" />
                                <h3 className='pt-[20px] font-bold font-inter text-[25px]'>Dedicated Support</h3>
                                <p className='font-normal text-[16px] font-inter text-[#737373]'>We provide 24/7 support for all our clients and serve them professionally.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[30%]">
                        <div className="lg:pt-[180px] pt-[100px]">
                        <img className='mx-auto' src={agenc} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ajenc