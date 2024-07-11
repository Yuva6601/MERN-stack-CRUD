import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GlobalValue } from '../GlobalContext/GlobalContext';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns'
import { Link } from 'react-router-dom';
import { FaCircleInfo } from "react-icons/fa6";

const Home = () => {
    let sets = 0;
    let reps = 0;
    const { url } = useContext(GlobalValue)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${url}/api/getWorkout`)
            if (response) {
                setData(response.data)
                setLoading(true)
            }
            else {
                console.error("Something went wrong to get data");
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <Navbar />
            <div className='pt-44 pb-3 w-full text-light-1 px-32'>
                <div>
                    {
                        data.length > 0 ?
                            data.map(item => {
                                return (
                                    <div className='flex justify-between mt-5 mx-auto bg-dark-2 w-[50%] rounded-lg' >
                                        <div>
                                            <div className='p-10'>
                                                <p>Date : {item.date} -- Time : {item.time}</p>
                                                <p className='text-2xl text-gray-300 font-medium my-2'>{(item.title).toUpperCase()}</p>
                                                {item.workouts.map(workout => {
                                                    sets += Number(workout.sets)
                                                    reps += (Number(workout.sets) * Number(workout.reps))
                                                    return (
                                                        <div className='flex gap-2 mb-2' key={workout.id}>
                                                            <div className="flex items-center gap-2"><GoDotFill /><p>{workout.workout}  - </p></div>
                                                            <p><span> Sets : </span> {workout.sets}</p>
                                                            <p><span> Reps : </span> {workout.reps}</p>
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                            <div className='px-10 flex gap-3 items-center pb-7'>
                                                <p>TOTAL WORKOUT : <span className='text-xl text-blue-400 mx-1'>{item.workouts.length}</span>,</p>
                                                <p>SETS : <span className='text-xl text-blue-400 mx-1'>{sets}</span>,</p>
                                                <p>REPS : <span className='text-xl text-blue-400 mx-1'>{reps}</span></p>
                                            </div>
                                            <div className='px-10 pb-7'>
                                                <p>Updated {formatDistanceToNow(item.updatedAt)} ago</p>
                                            </div>
                                        </div>
                                        <div className='py-5 px-1'>
                                            <div className='flex flex-col px-5 items-center gap-3'>
                                                <Link to={`/delete/${item._id}`}><p className='bg-light-1 text-dark-1 rounded-full p-1 text-xl'><RiDeleteBin6Line /></p></Link>
                                                <Link to={`/update/${item._id}`} ><p className='bg-light-1 text-dark-1 rounded-full p-1 text-xl'><MdOutlineEdit /></p></Link>
                                                <Link to={`/getWorkout/${item._id}`} ><p className='bg-light-1 text-dark-1 rounded-full p-1 text-xl'><FaCircleInfo /></p></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            loading ?
                                < div className="text-center font-semibold text-4xl" >No more data, Create new data</div>
                                :
                                <div className="text-center font-semibold relative top-44 text-4xl" >Loading....</div>
                    }
                </div>
            </div>
        </div >
    )
}

export default Home