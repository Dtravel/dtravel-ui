import React from 'react'
import { IconProps } from './types'

const IconSearch: React.FC<IconProps> = ({ width = 16, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <circle cx={7} cy={7} r={5} stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 14L11 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconSearch
