import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import "./script.js"
import "./header.css"
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
// onClick={()=> setShow(!show)./



const Header = () => {

    let [show, setShow] = useState(false)
    // let handleClick = ()=> {
    //     setShow(!show)
    // }

    return (
        <section className='py-[16px] lg:py-[0] fixed w-full z-[2] nav'>
            <div className="max-w-container mx-auto">
                <div className="flex items-center">
                    <div className="w-[20%]">
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-[60%] flex items-center flex-col lg:flex-row lg:static">
                        <ul className={`duration-[1s] ease-in-out lg:flex lg-item-center lg:mx-auto w-[60%] inline-block pb-[100vh] ${show == true ? "bg-gray-700 lg:bg-transparent lg:bg-opacity-0 lg:static absolute lg:right-0 right-[0] top-0" : "bg-transparent md:bg-transparent lg:bg-transparent lg:bg-opacity-0 lg:static absolute top-0 right-[-1000px] lg:py-[20px]"}`}>
                            <li className='py-2 border-b-[1px] lg:border-b-0'>
                                <a className='text-[#4756DF] font-semibold text-[18px] px-4' href="#">Home</a>
                            </li>
                            <li className='py-2 border-b-[1px] lg:border-b-0'>
                                <a className='font-semibold text-[18px] px-4 text-[#fff]' href="#">About</a>
                            </li>
                            <li className='py-2 border-b-[1px] lg:border-b-0'>
                                <a className='font-semibold text-[18px] px-4 text-[#fff]' href="#">Services</a>
                            </li>
                            <li className='py-2 border-b-[1px] lg:border-b-0'>
                                <a className='font-semibold text-[18px] px-4 text-[#fff]' href="#">Careers</a>
                            </li>
                            <li className='py-2 border-b-[1px] lg:border-b-0'>
                                <a className='font-semibold text-[18px] px-4 text-[#fff] ' href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-20%">
                    <a className='lg:py-[15px] lg:px-[42px]  lg:bg-[#6A4DF4] lg:font-semibold font-normal lg:text-[20px] text-[15px] text-white rounded-[10px] opacity-0 lg:opacity-100' href="#">Contact</a>
                    </div>
                    {/* <div className="w-[20%] flex justify-end">
                        <a className='py-[15px] px-[42px] bg-[#6A4DF4] font-semibold text-[20px] text-white rounded-[10px]' href="#">Contact</a>
                    </div> */}
                    <div className="lg:hidden text-[#fff] z-10" onClick={() => setShow(!show)}>
                        {show == true ? <RxCross1 className='cursor-pointer' /> : <FiMenu className='cursor-pointer'/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header