import React from 'react'
import { IconProps } from './types'

const IconMenu: React.FC<IconProps> = ({ width = 16, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M1 8L17 8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 4L14 4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 12L14 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconMenu
