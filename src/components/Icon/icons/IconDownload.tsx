import React from 'react'
import { IconProps } from './types'

const IconDownload: React.FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 9.5V13C1 13.5523 1.44772 14 2 14H14C14.5523 14 15 13.5523 15 13V9.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M8 10L8 2" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 7L8 10L5 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconDownload
