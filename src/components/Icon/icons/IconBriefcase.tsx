import React from 'react'
import { IconProps } from './types'

const IconBriefcase: React.FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x={2}
        y="5.33337"
        width={12}
        height={8}
        rx="0.666667"
        stroke="black"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10.6663 5.33329C10.6663 3.86053 9.47243 2.66663 7.99967 2.66663C6.52692 2.66663 5.33301 3.86053 5.33301 5.33329"
        stroke="black"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5.33301 5.33337V13.3334" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10.667 5.33337V13.3334" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export default IconBriefcase
