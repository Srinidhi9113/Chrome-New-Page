import React from 'react'
import Title from './search-title'
import Bookmarks from './bookmarks'

export default function TopHalf() {
  return (
    <div className='flex md:flex-row flex-col place-content-evenly w-full'>
        <Title/>
        <Bookmarks/>
    </div>
  )
}
