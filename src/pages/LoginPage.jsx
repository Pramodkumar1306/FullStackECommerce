import React ,{useState} from 'react'

export default function LoginPage() {
    // const {currentStatte ,setCurrentState} = useState('Sign Up');
    const onSubmitHandler = async(e) => {
        e.preventDefault();
    }
    const [currentState, setCurrentState] = useState('Login');
    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className="prata-regular text-3xl">{currentState}</p>
                {/* <hr className="border-none hg-[1.5px] w-8 bg-gray-700" /> */}
                <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
 
            </div>
            {currentState === 'Login' ? '' : <input type="text" className='w-full px-2 py-2 border border-gray-800' placeholder='Name' required/>}
            <input type="Email" className='w-full px-2 py-2 border border-gray-800' placeholder='Email' required/>
            <input type="Pasword" className='w-full px-2 py-2 border border-gray-800' placeholder='Pasword' required/>
            <div className="w-full flex justify-between text-sm mt-[-8px]">
                <p className="cursor-pointer">Forgot You Password?</p>
                {
                    currentState === 'Login' ? 
                    <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p> :
                    <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
                }
            </div>
            <button  className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>{ currentState === 'Login' ? 'Sign In ' : 'Sign Up'}</button>
        </form>
    )
}
