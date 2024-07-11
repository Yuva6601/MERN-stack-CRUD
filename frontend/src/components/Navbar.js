import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='pt-10 text-light-1 overflow-hidden fixed w-full '>
            <div className='bg-dark-2 px-10 py-3 shadow-black shadow-md text-lg flex justify-between items-center rounded-md mx-auto w-[80%] border border-gray-700'>
                <div className='flex gap-5 items-center'>
                    <img
                        src={assets.Logo}
                        width={75}
                        height={75}
                        alt='logo'
                        className='rounded-full'
                    />
                    <Link to={'/'}>
                        <p className='text-4xl font-medium text-light-1 '><span className='text-blue-300'>Workout</span> Buddy</p>
                    </Link>
                </div>
                <div className='flex gap-7 items-center'>
                    <Link to={'/create'}>
                        <div className='border px-4 py-2 rounded-lg hover:bg-gray-400 scale-105'>
                            create
                        </div>
                    </Link>
                    <div className='border cursor-pointer px-4 hover:bg-white hover:scale-105 border-blue-400 text-blue-400 py-2 rounded-lg'>
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar