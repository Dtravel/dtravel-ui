import React from 'react'
import { IconProps } from './types'

const IconFilter2: React.FC<IconProps> = ({ width = 18, height = 16 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4L13 4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 11L16 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={15} cy={4} r={2} stroke="black" strokeWidth="1.5" />
      <circle cx={3} cy={11} r={2} stroke="black" strokeWidth="1.5" />
    </svg>
  )
}

export default IconFilter2
