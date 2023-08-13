import React from 'react'

export const Header = ({progress , result}) => {
  return (
    <div className='Calculator-header'>
        <div className='Math-Area'>
          <div className='Result'>{result}</div>
          <div className='Progress'>{progress}</div>
        </div>
    </div>
  )
}
