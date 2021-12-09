import React from 'react'
import { IconProps } from './types'

const IconArrowUp: React.FC<IconProps> = ({ width = 16, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12.6667V3.33337" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3.33398 8.00004L8.00065 3.33337L12.6673 8.00004"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconArrowUp
