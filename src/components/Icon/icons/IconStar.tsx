import React from 'react'
import { IconProps } from './types'

const IconStar: React.FC<IconProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_8_605)">
        <path
          d="M7.51016 1.63746C7.69527 1.20761 8.30473 1.20762 8.48984 1.63746L10.0378 5.23196C10.115 5.41125 10.284 5.53404 10.4784 5.55206L14.3753 5.91349C14.8413 5.95671 15.0296 6.53635 14.678 6.84523L11.7378 9.42818C11.5911 9.55701 11.5266 9.75568 11.5695 9.94612L12.43 13.764C12.5329 14.2205 12.0398 14.5788 11.6374 14.3398L8.2723 12.3417C8.10445 12.242 7.89555 12.242 7.7277 12.3417L4.36259 14.3398C3.96018 14.5788 3.46711 14.2205 3.57001 13.764L4.43048 9.94612C4.47341 9.75568 4.40885 9.55701 4.26219 9.42817L1.32197 6.84523C0.970362 6.53634 1.1587 5.95671 1.62471 5.91349L5.52162 5.55206C5.716 5.53404 5.885 5.41125 5.96221 5.23196L7.51016 1.63746Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_8_605">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconStar
