import React from 'react'

const Banner = () => {
  return (
    <section className='bg-Banner lg:py-[190px] py-[120px] z-[1] relative after:absolute after:z-[-1] after:contents-[""] after:top-0 after:left-0 after:w-full after:h-full after:bg-[#1a19198f]'>
        <div className="max-w-container mx-auto text-center">
            <h3 className='mx-auto lg:w-[900px] md:font-inter md:w-[770px] sm:w-[550px] font-inter font-bold lg:text-[75px] text-white text-center lg:leading-[80px] lg:pb-[40px] md:pb-[20px] pb-[8px] text-[30px] md:text-[60px] sm:text-[40px] leading-9 md:leading-[70px] sm:leading-[48px]'>We Help brands with high quality services</h3>
            <p className='lg:pb-[40px] md:pb-[30px] pb-[20px] md:font-inter font-inter font-normal lg:text-[16px] md:text-[16px] text-[#fff] lg:w-[621px] md:w-[600px] sm:w-[600px] mx-auto lg:leading-[26px] text-[12px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
            <a className='lg:py-[15px] md:py-[15px] lg:px-[40px] md:px-[35px] bg-[#6A4DF4] lg:text-[20px] lg:font-semibold font-inter text-white lg:rounded-[10px] text-[16px] font-normal py-[10px] px-[20px] rounded-[5px]' href="#">Get Started</a>
        </div>
    </section>
  )
}

export default Banner