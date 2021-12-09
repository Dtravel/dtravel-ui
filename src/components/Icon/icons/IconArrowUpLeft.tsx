import React from 'react'
import { IconProps } from './types'

const IconArrowUpLeft: React.FC<IconProps> = ({ width = 16, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.3327 11.3333L4.66602 4.66663"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66602 11.3333V4.66663H11.3327"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconArrowUpLeft
