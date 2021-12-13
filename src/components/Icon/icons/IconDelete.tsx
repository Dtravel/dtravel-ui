import React from 'react'
import { IconProps } from './types'

const IconDelete: React.FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_27_1276)">
        <path
          d="M14.0003 2.66663H5.33366L0.666992 7.99996L5.33366 13.3333H14.0003C14.3539 13.3333 14.6931 13.1928 14.9431 12.9428C15.1932 12.6927 15.3337 12.3536 15.3337 12V3.99996C15.3337 3.64634 15.1932 3.3072 14.9431 3.05715C14.6931 2.8071 14.3539 2.66663 14.0003 2.66663V2.66663Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 6L8 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 6L12 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_27_1276">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconDelete
