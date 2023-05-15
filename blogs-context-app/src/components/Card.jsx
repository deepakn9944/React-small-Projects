import React from 'react'


export default function Card({post}) {
  return (
      <div>
          <p className='text-lg  font-bold'>{post.title}</p>
          <p className='text-sm  mt-[4px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
          <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
          <p className='text-md mt-[14px]'>{post.content}</p>
          <div>
              {post.tags.map((tag, index) => (
                  <span key={index} className='text-blue-500 underline text-xs pr-2'>{ `#${tag}`}</span>
              ))}
          </div>
    </div>
  )
}
