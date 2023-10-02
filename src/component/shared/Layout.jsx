import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen m-screen overflow-hidden'>
        <div>side</div>
        {/* <div>header</div> */}
        <div>{<Outlet/>}</div>
    </div>
  )
}
