import React from 'react'
import logo from '../../assets/logo2.png'

const Footer = () => {
  return (
    <section className='lg:py-[154px] py-[70px]'>
      <div className="max-w-container mx-auto lg:flex justify-between">
        <div className="lg:w-[30%]">
          <div className="flex">
            <img src={logo} alt="" />
            <h3 className="font-semibold text-[35px] font-inter pl-[10px]">Agenc</h3>
          </div>
          <p className='pt-[30px] sm:w-[500px] lg:w-[100%] font-normal lg:text-[16px] text-[#7B7B7B] font-inter'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
        </div>
        <div className="flex gap-[30px] justify-between lg:w-[60%] flex-wrap ">
          <div className="lg:w-15% pt-[25px]">
            <p className='lg:pb-[7px] font-semibold text-[20px] font-inter'>About</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>About Us</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>Features</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>News</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>Careers</p>
          </div>

          <div className="lg:w-15% pt-[25px]">
            <p className='lg:pb-[7px] font-semibold text-[20px] font-inter'>Company</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>Our Team</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>Partner With Us</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>FAQ</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>Blog</p>
          </div>

          <div className="lg:w-15% pt-[25px]">
            <p className='lg:pb-[7px] font-semibold text-[20px] font-inter'>Support</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>About</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>Support Center</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>Feedback</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>Contact Us</p>
            <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[17px]'>Accesbility</p>
          </div>

          <div className="lg:lg:w-[15%] w-[40%] pt-[15px]">
            <p className='lg:pb-[7px] font-semibold text-[20px] font-inter'>Get in touch</p>
            <div className="pt-[10px]">
              <p className='text-[16px] text-[#7B7B7B] font-normal font-inter'>info@gmail.com</p>
              <p className='text-[16px] text-[#7B7B7B] font-normal font-inter pt-[10px]'>+88 0121 0212</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer