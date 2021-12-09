import React from 'react'
import { IconProps } from './types'

const IconArrowDownRight: React.FC<IconProps> = ({ width = 18, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.66602 4.66663L11.3327 11.3333"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3327 4.66663V11.3333H4.66602"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconArrowDownRight
