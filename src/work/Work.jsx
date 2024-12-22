import React from 'react'
import img1 from '.././assets/workImg1.jpg'
import img2 from '.././assets/workImg2.png'
import img3 from '.././assets/workImg3.png'
import img4 from '.././assets/workImg4.png'
import img5 from '.././assets/workImg5.png'
import img6 from '.././assets/workImg6.png'

const Work = () => {
    return (
        <section className='py-[100px] lg:py-[150px] bg-[#F3F3F3]'>
            <div className="max-w-container mx-auto">
                <div className="text-center">
                    <h3 className='font-bold lg:text-[45px] text-[35px]'>Our Recent Work</h3>
                    <p className='font-normal text-[16px] font-inter lg:w-[620px] text-[#737373] mx-auto'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>
                <div className="lg:flex sm:flex justify-between flex-wrap pt-[106px]">
                    <div className="lg:w-[32%] text-center mx-auto pt-[10px] rounded-[10px] hover:bg-[#e7e5e5] my-[20px] lg:my-[10px] duration-300 ease-in-out cursor-pointer">
                        <img src={img1} alt="" />
                        <div className="py-[30px]">
                            <h3 className='font-bold text-[20px] font-inter pb-[10px]'>Task Management App</h3>
                            <p className='font-bold text-[#737373] text-[16px] font-inter'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                    <div className="lg:w-[32%] text-center mx-auto pt-[10px]  rounded-[10px] hover:bg-[#e7e5e5] my-[20px] lg:my-[10px] duration-300 ease-in-out cursor-pointer">
                        <img className='mx-auto' src={img2} alt="" />
                        <div className="py-[30px]">
                            <h3 className='font-bold text-[20px] font-inter pt-[10px]'>Saas Landing Page Design</h3>
                            <p className='font-bold text-[#737373] text-[16px] font-inter'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                    <div className="lg:w-[32%] text-center mx-auto pt-[10px]  rounded-[10px] hover:bg-[#e7e5e5] my-[20px] lg:my-[10px] duration-300 ease-in-out cursor-pointer">
                        <img className='mx-auto' src={img3} alt="" />
                        <div className="py-[30px]">
                            <h3 className='font-bold text-[20px] font-inter pb-[10px]'>App Design</h3>
                            <p className='font-bold text-[#737373] text-[16px] font-inter'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                    <div className="lg:w-[32%] text-center mx-auto pt-[10px] rounded-[10px] hover:bg-[#e7e5e5] my-[20px] lg:my-[10px] duration-300 ease-in-out cursor-pointer">
                        <img className='mx-auto' src={img4} alt="" />
                        <div className="py-[30px]">
                            <h3 className='font-bold text-[20px] font-inter py-[10px]'>Landing Page Design</h3>
                            <p className='font-bold text-[#737373] text-[16px] font-inter'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                    <div className="lg:w-[32%] text-center mx-auto pt-[10px] rounded-[10px] hover:bg-[#e7e5e5] my-[20px] lg:my-[10px] duration-300 ease-in-out cursor-pointer">
                        <img className='mx-auto' src={img5} alt="py-[30px]" />
                        <div className="">
                            <h3 className='font-bold text-[20px] font-inter pb-[10px]'>Dashboard Design</h3>
                            <p className='font-bold text-[#737373] text-[16px] font-inter'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                    <div className="lg:w-[32%] pt-[10px] text-center mx-auto py-[20px] rounded-[10px] hover:bg-[#e7e5e5] my-[20px] lg:my-[10px] duration-300 ease-in-out cursor-pointer">
                        <img className='mx-auto' src={img6} alt="" />
                        <div className="py-[30px]">
                            <h3 className='font-bold text-[20px] font-inter pb-[10px]'>Web App Design</h3>
                            <p className='font-bold text-[#737373] text-[16px] font-inter'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work