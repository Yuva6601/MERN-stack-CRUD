import React, { useContext, useEffect, useState } from 'react'
import { GlobalValue } from '../GlobalContext/GlobalContext'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const GetData = () => {

    const { url } = useContext(GlobalValue)
    const { id } = useParams()
    const [data, setData] = useState('')

    useEffect(() => {
        console.log(id);
        const getData = async () => {
            const response = await axios.get(`${url}/api/getsingleworkout/${id}`)
            if (response) {
                setData(response.data)
                console.log('response: ', response);
            }
        }
        getData()
    }, [])

    return (
        <div className='w-full'>
            <div className='w-fit mx-auto relative top-[210px]'>
                {
                    data ?
                        <div className='py-10 px-32 bg-dark-2 flex flex-col gap-2 text-light-1'>
                            <div className='text-center text-3xl text-blue-400'>
                                <h1>Workout details</h1>
                            </div>
                            <div><span className='text-gray-400 font-semibold'>Date : </span>{data.date}</div>
                            <div><span className='text-gray-400 font-semibold'>Time : </span>{data.time}</div>
                            <div><span className='text-gray-400 font-semibold'>Title : </span>{data.title}</div>
                            {
                                data ?
                                    data.workouts.map(item => {
                                        return (
                                            <div className='flex gap-2'>
                                                <p><span className='text-gray-400 font-semibold'>Name: </span>{item.workout},</p>
                                                <p><span className='text-gray-400 font-semibold'>Sets: </span>{item.sets},</p>
                                                <p><span className='text-gray-400 font-semibold'>Reps: </span>{item.reps}</p>
                                            </div>
                                        )
                                    })
                                    : null
                            }
                            <div className='flex gap-2'>
                                <p>
                                    <span className='text-gray-400 font-semibold'> Updated Time : </span>{data.updatedAt.split("T")[0]}
                                </p>
                                <p>
                                    <span className='text-gray-400 font-semibold'> Created Time : </span>{data.createdAt.split("T")[0]}
                                </p>
                            </div>
                            <Link to={'/'}><p className='text-center m-10 p-3 text-black rounded-lg bg-white'>Home</p></Link>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default GetData