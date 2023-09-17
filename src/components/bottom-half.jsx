import React from 'react'
import ToDoList from './to-do-list'
import PendingList from './pending-list'
import IdeasList from './ideas-list'

export default function BottomHalf() {
  return (
    <div className='flex md:flex-row flex-col w-full pl-20'>
      <ToDoList/>
      <PendingList/>
      <IdeasList/>
    </div>
  )
}
