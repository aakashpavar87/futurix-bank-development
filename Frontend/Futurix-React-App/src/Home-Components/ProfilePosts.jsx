import React from 'react'
import { Outlet } from 'react-router-dom'

const ProfilePosts = () => {
  return (
    <div className='text-5xl mt-52 bg-[#00040f] text-red-600'>
      <p> This is posts page. </p>
      <Outlet />
    </div>

  )
}

export const Demo = () => (
  <h1>Demo Post</h1>
)

export const Demo2 = () => (
  <h1>Second Demo Post</h1>
)

export default ProfilePosts