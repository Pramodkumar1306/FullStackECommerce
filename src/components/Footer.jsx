import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
    return (
        <div>
            <div className="flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div className="a">
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia quaerat soluta quae quo, error consectetur quos aliquam doloribus totam.
                    </p>
                </div>
                <div className="">
                    <p className='text-xl mb-5 font-medium'>COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="">
                    <p className='text-xl font-medium mb-5'>
                        GET IN TOUCH
                    </p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-211-465-4567</li>
                        <li>contact@forevre.com</li>
                    </ul>
                </div>
            </div>
            <div className="text-gray">
                <hr className='text-gray-400'/>
                <p className='py-5 text-sm-400 text-black-800 text-center'>Copyright 2025@forever.com - AllRight Reserved</p>
            </div>
        </div>
    )
}
