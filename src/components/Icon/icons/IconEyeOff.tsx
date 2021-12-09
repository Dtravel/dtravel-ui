import React from 'react'
import { IconProps } from './types'

const IconEyeOff: React.FC<IconProps> = ({ width = 18, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.59935 3.82664C8.05824 3.71923 8.52806 3.66554 8.99935 3.66664C13.666 3.66664 16.3327 8.99998 16.3327 8.99998C15.928 9.75705 15.4454 10.4698 14.8927 11.1266M10.4127 10.4133C10.2296 10.6098 10.0088 10.7674 9.76345 10.8767C9.51812 10.986 9.25328 11.0448 8.98474 11.0496C8.7162 11.0543 8.44946 11.0049 8.20042 10.9043C7.95139 10.8037 7.72516 10.654 7.53525 10.4641C7.34533 10.2742 7.19561 10.0479 7.09502 9.7989C6.99443 9.54987 6.94503 9.28312 6.94977 9.01458C6.95451 8.74604 7.01329 8.48121 7.1226 8.23587C7.23191 7.99054 7.38952 7.76974 7.58602 7.58664M12.9593 12.96C11.8197 13.8286 10.4321 14.3099 8.99935 14.3333C4.33268 14.3333 1.66602 8.99998 1.66602 8.99998C2.49528 7.45457 3.64544 6.10438 5.03935 5.03998L12.9593 12.96Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66602 1.66663L16.3327 16.3333"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconEyeOff