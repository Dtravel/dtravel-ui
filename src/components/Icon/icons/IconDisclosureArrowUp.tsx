import React from 'react'
import { IconProps } from './types'

const IconDisclosureArrowUp: React.FC<IconProps> = ({ width = 16, height = 16, color = 'none' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill={color}>
      <path d="M15 11L8 4L1 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconDisclosureArrowUp
