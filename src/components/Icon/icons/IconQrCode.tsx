import React from 'react'
import { IconProps } from './types'

const IconQrCode: React.FC<IconProps> = ({ width = 18, height = 17, color = 'none' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 17" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.33301 13.3777V14.898C1.33301 15.1027 1.40325 15.2991 1.52827 15.4439C1.65329 15.5887 1.82286 15.6701 1.99967 15.6701H3.31234"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.31234 1H1.99967C1.82286 1 1.65329 1.08135 1.52827 1.22614C1.40325 1.37094 1.33301 1.56733 1.33301 1.77211V3.29238"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6659 3.29238V1.77211C16.6659 1.56733 16.5956 1.37094 16.4706 1.22614C16.3456 1.08135 16.176 1 15.9992 1H14.6865"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6875 15.6701H16.0002C16.177 15.6701 16.3465 15.5887 16.4716 15.4439C16.5966 15.2991 16.6668 15.1027 16.6668 14.898V13.3777"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66406 3.31628H6.66406V5.31628H4.66406V3.31628Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3311 3.31628H13.3311V5.31628H11.3311V3.31628Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4.66406 11.4H6.66406V13.4H4.66406V11.4Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.3311 11.4V13.4H13.3311V11.4H12.6644" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.99805 5.24655V3.31628H9.99805" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.99805 4.8606V7.56296" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.66406 9.49313H7.9974V7.56287" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.99805 11.4V13.4H9.99805" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33105 11.0374H9.99772" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.66406 7.17688H6.66406" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.3311 7.17688H11.3311V7.94899" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33105 9.49329H13.3311" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconQrCode
