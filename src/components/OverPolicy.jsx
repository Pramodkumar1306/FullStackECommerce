import React from 'react'
import { assets } from '../assets/assets'

export default function OverPolicy() {
    return (
        
            <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-12 sm:gap-2 text-center py-20 text-xs sm:text-base text-gray-700">
                <div className="">
                    <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
                    <p className='font-semibold'>Easy Exchange Policy</p>
                    <p className='text-gray-400'>We Offer hassle free Exchage Policy</p>
                </div>
                <div className="">
                    <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
                    <p className='font-semibold'>Seven Day Return Policy</p>
                    <p className='text-gray-400'>We Provide Seven Day Free Return Policy</p>
                </div>
                <div className="">
                    <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
                    <p className='font-semibold'>Best Customer Support</p>
                    <p className='text-gray-400'>We Provide 24/7 Policy Support</p>
                </div>
            </div>
        
    )
}
