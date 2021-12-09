import React from 'react'
import { IconProps } from './types'

const IconEnvelope: React.FC<IconProps> = ({ width = 16, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 5.55554L8 9.22221L1 5.55554"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 12.3333V3.66667C1 3.02233 1.52233 2.5 2.16667 2.5H13.8333C14.4777 2.5 15 3.02233 15 3.66667V12.3333C15 12.9777 14.4777 13.5 13.8333 13.5H2.16667C1.52233 13.5 1 12.9777 1 12.3333Z"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default IconEnvelope
