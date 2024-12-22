import React from 'react'

const Success = () => {
    return (
        <section className='py-[100px]'>
            <div className="max-w-container mx-auto">
                <div className="w-full lg:h-[300px] lg:py-[0] md:pb-[20px] pb-[20px] sm:pb-[10px] sm:pt-[20px] h-[100%] bg-[#cff7ef] sm:flex sm:gap-[80px] lg:flex lg:justify-between rounded-[20px]">
                    <div className="lg:w-[40%] md:w-[60%] sm:w-[50%] pt-[70px] px-[40px] ">
                        <p className='font-medium text-[#6A4DF4] text-[25px] font-inter pb-[15px]'>Our Success</p>
                        <h3 className='font-semibold text-[35px] font-inter'>West cost Brand makers-Global Edge</h3>
                    </div>
                    <div className="lg:w-[60%] md:w-[40%] text-center lg:flex lg:items-center md:gap-[70px] justify-between items-center lg:pr-[30px] py-[10px]">
                        <div className="lg:py-0 py-[15px]">
                            <h3 className='font-semibold lg:text-[50px] text-[35px] font-inter'>200+</h3>
                            <p className='font-inter font-medium lg:text-[17px] text-[#737373]'>Customer Satisfied</p>
                        </div>
                        <div className="lg:py-0 py-[15px]">
                            <h3 className='font-semibold lg:text-[50px] text-[35px] font-inter'>4.5</h3>
                            <p className='font-inter font-medium lg:text-[17px] text-[#737373]'>200+ Avg rating</p>
                        </div>
                        <div className="lg:py-0 py-[15px]">
                            <h3 className='font-semibold lg:text-[50px] text-[35px] font-inter'>351+</h3>
                            <p className='font-inter font-medium lg:text-[17px] text-[#737373]'>Project Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Success