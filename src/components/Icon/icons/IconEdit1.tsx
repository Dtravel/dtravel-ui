import React from 'react'
import { IconProps } from './types'

const IconEdit1: React.FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.10354 3.20288H3.13412C2.83333 3.20288 2.54486 3.32237 2.33218 3.53506C2.11949 3.74775 2 4.03621 2 4.337V12.2758C2 12.5766 2.11949 12.8651 2.33218 13.0778C2.54486 13.2905 2.83333 13.41 3.13412 13.41H11.073C11.3738 13.41 11.6622 13.2905 11.8749 13.0778C12.0876 12.8651 12.2071 12.5766 12.2071 12.2758V8.30642"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3565 2.35233C11.5821 2.12674 11.888 2 12.2071 2C12.5261 2 12.8321 2.12674 13.0577 2.35233C13.2832 2.57792 13.41 2.88388 13.41 3.20292C13.41 3.52195 13.2832 3.82792 13.0577 4.05351L7.67058 9.44058L5.40234 10.0076L5.9694 7.7394L11.3565 2.35233Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconEdit1
