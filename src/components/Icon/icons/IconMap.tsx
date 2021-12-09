import React from 'react'
import { IconProps } from './types'

const IconMap: React.FC<IconProps> = ({ width = 18, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.66699 4.00004V14.6667L6.33366 12L11.667 14.6667L16.3337 12V1.33337L11.667 4.00004L6.33366 1.33337L1.66699 4.00004Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.33301 1.33337V12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.667 4V14.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconMap
