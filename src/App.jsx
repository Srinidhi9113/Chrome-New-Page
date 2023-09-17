import React from 'react'
import TopHalf from './components/top-half'
import BottomHalf from './components/bottom-half'

export default function App() {
  return (
    <div className='h-screen pt-10 bg-bgImg bg-cover bg-fixed bg-no-repeat flex flex-col justify-top items-center'>
      <TopHalf/>
      <BottomHalf/>
    </div>
  )
}
