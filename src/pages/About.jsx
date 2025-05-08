import React from 'react'
import   { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter'



export default function About() {
    const { products, currency, delivery_fee } = useContext(ShopContext);
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Tittle text1={'ABOUT'} text2={'US'} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit illo blanditiis perferendis cum doloribus maxime neque, harum accusamus ex et saepe vitae in eius accusantium quos veritatis modi laudantium molestiae?</p>
                    <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae expedita, aliquid tenetur at harum animi, sapiente sed officiis enim autem quis consequatur rem quas quasi omnis, assumenda perferendis quia necessitatibus?</p>
                    <b className="text-gray-800">Our Mission</b>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et error sint accusantium. Suscipit doloribus neque aperiam asperiores quaerat nostrum esse.</p>
                </div>
            </div>
            <div className="text-4xl py-4">
                <Tittle text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p className="text-gray-600">We metlorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam totam id iste, qui delectus exercitationem? Ipsum laborum fuga aliquid eos?</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience:</b>
                    <p className="text-gray-600"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde exercitationem asperiores totam modi perspiciatis enim libero quae facere dolorum excepturi. aliquid eos?</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p className="text-gray-600">We metlorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam totam id iste, qui delectus exercitationem? Ipsum laborum fuga aliquid eos?</p>
                </div>
            </div>

            <NewsLetter/>
        </div>
      
    )
    }
