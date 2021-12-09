import React from 'react'
import { IconProps } from './types'

const IconDateRange: React.FC<IconProps> = ({ width = 16, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M14 6L2 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M2 13V4C2 3.44772 2.44772 3 3 3H13C13.5523 3 14 3.44771 14 4V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13Z"
        stroke="black"
        strokeWidth="1.5"
      />
      <path d="M5 1.5V3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 1.5V3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={5} cy={9} r={1} fill="black" />
      <circle cx={8} cy={9} r={1} fill="black" />
      <circle cx={11} cy={9} r={1} fill="black" />
    </svg>
  )
}

export default IconDateRange
