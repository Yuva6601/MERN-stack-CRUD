import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GlobalValue } from '../GlobalContext/GlobalContext'
import axios from 'axios'

const Delete = () => {
    const { id } = useParams()
    const { url } = useContext(GlobalValue)
    const navigation = useNavigate('')

    const deleteWorkout = async () => {
        const response = await axios.delete(`${url}/api/deleteworkout/${id}`)
        console.log(response);
        if (response) {
            navigation('/')
        }
    }

    return (
        <div className='w-full h-[100vh]'>
            <div className='w-fit mx-auto relative top-[30%] bg-dark-2 p-10 text-light-1 rounded-lg shadow-md shadow-black'>
                <div className='text-3xl font-medium text-center mb-2'>Do you want to delete <span className='text-blue-400'>?</span></div>
                <div className='flex items-center justify-center gap-10'>
                    <p
                        className='px-10 py-3 cursor-pointer rounded-lg text-dark-2 bg-white hover:scale-105'
                        onClick={deleteWorkout}
                    >Yes</p>
                    <Link to={'/'}><p className='px-10 py-3 rounded-lg bg-blue-400 hover:bg-blue-500 hover:scale-105'>No</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Delete