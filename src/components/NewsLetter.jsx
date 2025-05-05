import React from 'react'

export default function NewsLetter() {
    const onSubmitHandeler = (e) =>  {
        e.preventDefault();
    }
    return (
        <div className='text-center'> 
            <p className='text-2xl font-medium text-gray-800'> Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quasi recusandae perferendis a facere, repudiandae ex deserunt esse eum laboriosam.</p>
            <form onSubmit={onSubmitHandeler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6   pl-3'>
                <input type="email"  className='w-full sm:flex-1 outline-none' placeholder='enter your Email' required/>
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe </button>
            </form>
        </div>
    )
}
