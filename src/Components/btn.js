import React from 'react'
export const Btn = ({digit , Class}) => {
  return (
    <div className='btn'>
        <button className={Class}>{digit}</button>
    </div>
  )
}
