import React, { useEffect, useState } from 'react'
import FreqLinks from './frequent-links'

const getDate = ()=>{
    const date = new Date()
    const res = {}
    res.date = ('0'+date.getDate()).slice(-2)
    res.month = ('0'+date.getMonth()).slice(-2)
    res.hours = ('0'+date.getHours()).slice(-2)
    res.mins = ('0'+date.getMinutes()).slice(-2)
    res.secs = ('0'+date.getSeconds()).slice(-2)
    return res
}


export default function Title() {
    const [date,setDate] = useState(getDate())
    useEffect(()=>{
        setInterval(()=>{
            setDate(getDate())
        },1000)
    },[])

    const submitHandler = (event)=>{
        const form = event.currentTarget
        const search_input = form['search-input']
        if(!search_input.value && search_input.value=='') event.preventDefault()
        else{
            window.open("https://www.google.com/search?q="+search_input.value)
        }
        form.reset()
    }

  return (
    <div className='text-center items-end lg:basis-4/5 md:basis-1/2 lg:pl-64'>
        <h2 className='sm:text-5xl text-4xl text-white font-vt323 mb-8'>
            <span className='mr-10'>{date.date}-{date.month}</span>
            <span className='ml-10'>{date.hours}:{date.mins}:{date.secs}</span></h2>
        <h1 className='sm:text-9xl text-6xl pr-7 pl-7 text-white font-vt323 mb-5'>Search</h1>
        <form action="https://www.google.com/search" method="GET" target="_blank" onSubmit={submitHandler}>
            <input type="text" autoComplete='off' name="q" className='opacity-70 pl-2 p-1 w-2/3 h-8 mb-7 rounded-md' id="search-input"/>
            <input type="submit" value="Search" hidden/>
        </form>
        <FreqLinks/>
    </div>
  )
}
