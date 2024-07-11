import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ navcontext }) => {

    const [nav, setNav] = useState(navcontext)

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
                    <p className='text-4xl font-medium text-light-1 '><span className='text-blue-300'>Workout</span> Buddy</p>
                </div>
                <div className='flex gap-7 items-center'>
                    <Link to={'/'}>
                        <div onClick={() => setNav("home")} className={nav === 'home'
                            ? 'border px-4 py-2 rounded-lg bg-white text-blue-400 hover:scale-105'
                            : 'border px-4 py-2 rounded-lg hover:bg-gray-400 scale-105'}>
                            Home
                        </div>
                    </Link>
                    <Link to={'/create'}>
                        <div onClick={() => setNav("create")} className={nav === 'create'
                            ? 'border px-4 py-2 rounded-lg bg-white text-blue-400 hover:scale-105'
                            : 'border px-4 py-2 rounded-lg hover:bg-gray-400 scale-105'}>
                            create
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar