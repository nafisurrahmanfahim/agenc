import React from 'react'

const Contact = () => {
  return (
    <section className="lg:py-[150px] bg-[#ebe9e9]">
      <div className="max-w-container mx-auto lg:flex justify-between">
        <div className="lg:w-[40%] pt-[80px]">
          <h3 className="font-bold lg:text-[45px] text-[40px] font-inter pb-[20px]">We Do design, Code & Development</h3>
          <p className="font-inter font-normal text=[16px] text-[#737373] pb-[10px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
          <p className="font-inter font-normal text=[16px] text-[#737373]">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
        </div>
        <div className="lg:w-[50%] pt-[60px] lg:pt-0">
          <div className="py-[61px] bg-[#fff]">
            <h3 className='text-center font-bold text-[30px] font-inter'>Get a free quote now</h3>

            <div className="px-[50px] pt-[35px]">
              <h3 className='font-medium text-[16px] font-inter'>Name</h3>
              <input className='rounded-[10px] py-[19px] outline-none w-full border-[1px] mt-[10px] px-[23px] font-inter font-normal text-[16px]' type="text" placeholder='Enter your name' />
            </div>

            <div className="px-[50px] pt-[35px]">
              <h3 className='font-medium text-[16px] font-inter'>Email</h3>
              <input className='rounded-[10px] py-[19px] outline-none w-full border-[1px] mt-[10px] px-[23px] font-inter font-normal text-[16px]' type="text" placeholder='Enter your name' />
            </div>

            <div className="px-[50px] pt-[35px]">
              <h3 className='font-medium text-[16px] font-inter'>Phone</h3>
              <input className='rounded-[10px] py-[19px] outline-none w-full border-[1px] mt-[10px] px-[23px] font-inter font-normal text-[16px]' type="text" placeholder='Enter your name' />
            </div>
            <div className="text-center px-[50px] py-[19px]">
              <a className='py-[19px] block rounded-[10px] text-white font-semibold font-inter text-[20px] bg-[#6A4DF4]' href="#">Get Pricing Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact