import React from 'react'
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import client1 from "../../assets/client1.png"
import client2 from "../../assets/client2.png"

const ClientReviews = () => {
    return (
        <section className='py-[106px]'>
            <div className="max-w-container mx-auto">
                <div className="lg:pb-[80px] pb-[30px] text-center">
                    <h3 className='font-bold lg:text-[45px] text-[32px] font-inter'>Some Client Reviews</h3>
                    <p className='text-[#737373] font-normal text-[16px] font-inter lg:w-[620px] mx-auto'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>
                <div className="lg:flex">
                    <div className="w-32% border-2">
                        <img src={client1} alt="" />
                    </div>
                    <div className="w-32% border-2 mt-[10px] lg:my-0">
                        <img src={client2} alt="" />
                    </div>
                    <div className="w-32% border-2 mt-[10px] lg:mt-0">
                        <img src={client1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientReviews