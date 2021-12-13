import React from 'react'
import { IconProps } from './types'

const IconDismiss: React.FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L14 14M2 14L14 2" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default IconDismiss
