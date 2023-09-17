import React from 'react'

export default function BookmarkItem(props) {
  return (
    <div className='h-10 w-full bg-white bg-opacity-25 rounded-md pt-1 hover:bg-opacity-40 hover:cursor-pointer'>
      <span className='text-white opacity-100 pl-2 font-vt323 text-xl tracking-wider'>{props.children}</span>
    </div>
  )
}
