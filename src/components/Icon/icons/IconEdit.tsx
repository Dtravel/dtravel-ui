import React from 'react'
import { IconProps } from './types'

const IconEdit: React.FC<IconProps> = ({ width = 16, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.8208 2.91652C10.9694 2.7679 11.1459 2.65001 11.3401 2.56958C11.5342 2.48915 11.7424 2.44775 11.9525 2.44775C12.1627 2.44775 12.3708 2.48915 12.565 2.56958C12.7592 2.65001 12.9356 2.7679 13.0842 2.91652C13.2329 3.06514 13.3507 3.24158 13.4312 3.43576C13.5116 3.62993 13.553 3.83805 13.553 4.04823C13.553 4.25841 13.5116 4.46653 13.4312 4.66071C13.3507 4.85489 13.2329 5.03132 13.0842 5.17994L5.44521 12.819L2.33301 13.6678L3.18179 10.5556L10.8208 2.91652Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconEdit
