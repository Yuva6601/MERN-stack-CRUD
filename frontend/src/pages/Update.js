import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { RxCross1 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { GlobalValue } from '../GlobalContext/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const Update = () => {

    const [data, setData] = useState([])
    const [inputs, setInputs] = useState([])
    const [value, setValue] = useState(0)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const { url } = useContext(GlobalValue)
    const navigation = useNavigate('')
    const [getData, setGetData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`${url}/api/getsingleworkout/${id}`)
            if (response) {
                setGetData(response.data)
                setDate(response.data.date)
                setTitle(response.data.title)
                setTime(response.data.time)
                setInputs(response.data.workouts)
                setValue(response.data.workouts.length)
            }
        }
        getData()
    }, [])

    const addTags = () => {
        setData([...data, { id: value }])
        setInputs([...inputs, { id: value, workout: '', sets: '', reps: '' }])
    }
    const removeTags = (id) => {
        setData(data.filter(item => item.id !== id))
        setInputs(inputs.filter(item => item.id !== id))
    }
    const updateInputs = (id, updatedFields) => {
        setInputs(inputs.map(input =>
            input.id === id ? { ...input, ...updatedFields } : input
        ))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await axios.patch(`${url}/api/updateworkout/${id} `, {
            date: date,
            title: title,
            time: time,
            workouts: inputs
        })
        if (response) {
            navigation('/')
        }
        else {
            console.log('Something went wrong to create');
        }
    }

    return (
        <div>
            <div>
                <Navbar />
                <div className='px-32 pt-44'>
                    <form className='w-[70%] mx-auto flex flex-col items-center gap-4 bg-dark-1 shadow shadow-black p-10 rounded-lg scroll-smooth  focus:scroll-auto'
                        onSubmit={handleSubmit}
                    >
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-light-1 text-3xl font-medium'>Workout update</h1>
                            <hr />
                        </div>
                        <div className='w-full'>
                            <div className='flex w-full justify-center items-center my-3'>
                                <input
                                    type="text"
                                    placeholder='workout title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className='text-light-1 px-6 bg-dark-2 shadow-black shadow-md outline-none border-none py-3 w-[80%]' />
                                {
                                    title ?
                                        <p className='text-white absolute right-[29%] cursor-pointer' onClick={() => setTitle("")}><RxCross1 /></p>
                                        : null
                                }
                            </div>
                            <div className='flex items-center gap-5 justify-center w-full'>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className='text-light-1 px-6 bg-dark-2 shadow-black shadow-md outline-none border-none py-3 w-[39%]' />
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className='text-light-1 px-6 bg-dark-2 shadow-black shadow-md outline-none border-none py-3 w-[39%]' />
                            </div>
                            {
                                inputs.length > 0 ?
                                    inputs.map(item => {
                                        return (
                                            < div className='flex w-full mt-6 gap-4 justify-center items-center' key={item.id} >
                                                <div className='flex justify-center items-center w-[80%]'>
                                                    <input
                                                        type="text"
                                                        placeholder='workout name'
                                                        value={item.workout}
                                                        onChange={(e) => updateInputs(item.id, { workout: e.target.value })}
                                                        className='text-light-1 px-6 bg-dark-2 shadow-black shadow-md outline-none border-none py-3 w-full ' />
                                                </div>
                                                <div className='flex  justify-center items-center'>
                                                    <input
                                                        type="number"
                                                        placeholder='sets'
                                                        value={item.sets}
                                                        onChange={(e) => updateInputs(item.id, { sets: e.target.value })}
                                                        className='text-light-1 px-6 bg-dark-2 shadow-black shadow-md outline-none border-none py-3' />
                                                </div>
                                                <div className='flex justify-center items-center'>
                                                    <input
                                                        type="number"
                                                        placeholder='reps'
                                                        value={item.reps}
                                                        onChange={(e) => updateInputs(item.id, { reps: e.target.value })}
                                                        className='text-light-1 px-6 bg-dark-2 shadow-black shadow-md outline-none border-none py-3' />
                                                </div>
                                                <div>
                                                    <p className='text-white bg-dark-2 p-2 text-xl rounded-full' onClick={() => removeTags(item.id)}><RiDeleteBin6Line /></p>
                                                </div>
                                            </div >
                                        )
                                    })
                                    : null
                            }

                        </div>
                        <div className='w-[70%] py-3 text-blue-400 mt-5 flex items-center justify-center gap-2 border border-blue-400 cursor-pointer' onClick={() => addTags(setValue(prev => prev + 1))}><FaPlus />Add more</div>
                        <button className='w-[70%] py-3 text-blue-400 mt-2 flex items-center justify-center gap-2 border border-blue-400 cursor-pointer' ><FaPlus />Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update