import React from 'react'
import './styles.css'

const Loading = () => {
  return (
    <div className="mt-10 h-[20rem] flex flex-col items-center gap-5">
        <p className=" text-2xl text-center font-bold text-orange-900">Loading</p>
        <span className='loader' />
    </div>
  )
}

export default Loading