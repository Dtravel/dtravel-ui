import React, { ReactNode } from 'react'
import './Button.scss'
import { FaSpinner } from 'react-icons/fa'
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
  htmlType?: 'button' | 'submit'
  loading?: boolean
  style?: any
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  label,
  type = DEFAULT_TYPE,
  size = DEFAULT_SIZE,
  disabled = false,
  htmlType = 'button',
  loading = false,
  style = {},
  icon,
  ...props
}) => {
  const renderCls = () => {
    const typeCls = ['primary', 'secondary', 'outline', 'danger', 'text'].reduce(
      (acc, item) => ({
        ...acc,
        [item]: (!type && item === DEFAULT_TYPE) || item === type,
      }),
      {}
    )
    const sizeCls = ['sm', 'md', 'lg', 'xl', 'xxl'].reduce(
      (acc, item) => ({
        ...acc,
        [item]: (!size && item === DEFAULT_SIZE) || item === size,
      }),
      {}
    )

    return classnames('btn', {
      ...typeCls,
      ...sizeCls,
    })
  }

  return (
    <button
      style={style ? { ...style } : {}}
      type={htmlType}
      className={renderCls()}
      disabled={disabled || loading}
      {...props}
    >
      {icon && <span className={'btn-icon'}>{icon}</span>}
      {children || label}{' '}
      {loading ? (
        <>
          &nbsp;
          <FaSpinner className={'spinner'} />
        </>
      ) : (
        ''
      )}
    </button>
  )
}
