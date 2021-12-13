import React from 'react'
import { IconProps } from './types'

const IconNotification: React.FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 13L12.5 13.75C12.6989 13.75 12.8897 13.671 13.0303 13.5303C13.171 13.3897 13.25 13.1989 13.25 13L12.5 13ZM3.5 13L2.75 13C2.75 13.4142 3.08579 13.75 3.5 13.75L3.5 13ZM13.25 13L13.25 7.5L11.75 7.5L11.75 13L13.25 13ZM2.75 7.5L2.75 13L4.25 13L4.25 7.5L2.75 7.5ZM3.5 13.75L12.5 13.75L12.5 12.25L3.5 12.25L3.5 13.75ZM8 2.25C5.10051 2.25 2.75 4.6005 2.75 7.5L4.25 7.5C4.25 5.42893 5.92893 3.75 8 3.75L8 2.25ZM8 3.75C10.0711 3.75 11.75 5.42893 11.75 7.5L13.25 7.5C13.25 4.60051 10.8995 2.25 8 2.25L8 3.75Z"
        fill="black"
      />
      <path d="M8 3L8 2" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={8} cy={14} r="1.5" fill="black" />
    </svg>
  )
}

export default IconNotification
