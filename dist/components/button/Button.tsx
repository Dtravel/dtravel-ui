import React, { ReactNode } from 'react'
import styles from './Button.module.scss'
import { ButtonSize, ButtonType } from '../../interfaces/buttonInterfaces'

interface ButtonProps {
  children?: ReactNode
  label?: string
  type?: ButtonType
  size?: ButtonSize
  style?: any
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  type = 'primary',
  size = 'lg',
  disabled = false,
  style = {},
  ...props
}) => {
  console.log('--type---', type, size)
  return (
    <button
      {...props}
      style={style ? { ...style } : {}}
      className={`${styles.button} ${styles[type]} ${styles[size]}`}
      disabled={disabled}
    >
      {children || label}
    </button>
  )
}

export default Button
