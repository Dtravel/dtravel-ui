import React from 'react'
import { IconProps } from './types'

const IconDisclosureArrowDown: React.FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
      <path d="M1 5L8 12L15 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconDisclosureArrowDown
