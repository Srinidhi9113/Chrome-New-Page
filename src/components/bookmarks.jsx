import React from 'react'
import BookmarkItem from './bookmark-item'
import { useEffect,useState } from 'react'


export default function Bookmarks() {
  const [bookmarkList,setbookmarkList] = useState()
  useEffect(()=>{
    // chrome.bookmarks.getChildren("1",(data)=>{
    //   setbookmarkList(Object.values(data))
    // })
  },[])
  return (
    <div className='flex flex-col md:items-start items-center lg:basis-1/5'>
        <h2 className='font-vt323 text-white md:text-3xl text-2xl md:self-start'>Bookmarks...</h2>
    <div className='shaded-box pt-3 p-2 lg:w-64 lg:h-96 w-56 h-64'>
      {bookmarkList && bookmarkList.map(bookmark =>(<p>{bookmark.title}</p>))}
      <BookmarkItem>Gmail</BookmarkItem>
      <BookmarkItem>Gmail</BookmarkItem>
      <BookmarkItem>Gmail</BookmarkItem>
    </div>
    </div>
  )
}
