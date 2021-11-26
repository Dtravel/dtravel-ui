import React, { ReactNode } from 'react'
import styles from './Button.module.scss'
// import './Button.scss'
// import './Button.css'

import classnames from 'classnames'

export type ButtonType = 'primary' | 'secondary' | 'outline' | 'danger' | 'text'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export const DEFAULT_TYPE = 'primary'

export const DEFAULT_SIZE = 'lg'

export interface ButtonProps {
  children?: ReactNode
  label?: string
  type?: ButtonType
  size?: ButtonSize
  style?: any
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const Button: React.FC<ButtonProps> = ({
  children,
  label,
  type = DEFAULT_TYPE,
  size = DEFAULT_SIZE,
  disabled = false,
  style = {},
}) => {
  console.log(type)
  const renderCls = () => {
    const typeCls = ['primary', 'secondary', 'outline', 'danger', 'text'].reduce(
      (acc, item) => ({ ...acc, [item]: (!type && item === DEFAULT_TYPE) || item === type }),
      {}
    )
    const sizeCls = ['sm', 'md', 'lg', 'xl', 'xxl'].reduce(
      (acc, item) => ({ ...acc, [item]: (!size && item === DEFAULT_SIZE) || item === size }),
      {}
    )

    console.log('--------sizeCls-------', sizeCls)
    return classnames('btn', {
      // primary: type === 'primary',
      // secondary: type === 'secondary',
      // danger: type === 'danger',
      // outline: type === 'outline',
      // text: type === 'text',
      ...typeCls,
      ...sizeCls,
    })
  }

  console.log('----------', classnames(renderCls()))
  return (
    <button
      style={style ? { ...style } : {}}
      // @ts-ignore
      className={`${styles.button} ${styles[type]} ${styles[size]}`}
      // className={classnames(renderCls())}
      disabled={disabled}
    >
      {children || label}
    </button>
  )
}
