import React, { useRef, ReactNode } from 'react'
import './Input.scss'
import classnames from 'classnames'

export interface InputProps {
  type?: 'text' | 'password'
  placeholder?: string
  size?: 'default' | 'small'
  label?: string
  value?: string
  prefix?: ReactNode
  suffix?: ReactNode
  addonBefore?: {
    value: string | ReactNode
    separate?: boolean
    style?: any
  }
  addonAfter?: {
    value: string | ReactNode
    separate?: boolean
    style?: any
  }
  width?: string | number
  maxLength?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  label = '',
  value = '',
  onChange,
  size = 'default',
  width,
  maxLength,
  prefix,
  suffix,
  addonBefore,
  addonAfter,
}) => {
  const inputRef: any = useRef(null)
  const renderClass = (cls: string) => {
    return classnames([cls], {
      default: size === 'default',
      small: size === 'small',
      'has-label': !!label,
    })
  }

  const onClick = () => {
    inputRef.current.focus()
  }

  let props: any = {
    placeholder,
  }
  if (value) {
    props.value = value || ''
  }
  if (typeof onChange === 'function') {
    props.onChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(event)
  }
  if (maxLength) {
    props.maxLength = maxLength
  }

  return (
    <div className={renderClass('d-input-group')} style={width ? { width } : {}} onClick={onClick}>
      {addonBefore && (
        <div
          style={addonBefore.style ? { ...addonBefore.style } : {}}
          className={classnames(renderClass('d-input-addonBefore-wrapper'), { separate: addonBefore.separate })}
        >
          <span className={classnames(renderClass('d-input-addonBefore'))}>{addonBefore.value}</span>
        </div>
      )}

      {prefix && <span className={classnames(renderClass('d-input-prefix'))}>{prefix}</span>}

      <div className={'d-input-wrapper'}>
        <span className={'d-input-label'}>{label}</span>
        <input
          ref={inputRef}
          className={renderClass('d-input')}
          placeholder={placeholder}
          type={type || 'text'}
          {...props}
        />
      </div>

      {suffix && <span className={classnames(renderClass('d-input-suffix'))}>{suffix}</span>}

      {addonAfter && (
        <div
          style={addonAfter.style ? { ...addonAfter.style } : {}}
          className={classnames(renderClass('d-input-addonAfter-wrapper'), { separate: addonAfter.separate })}
        >
          <span className={classnames(renderClass('d-input-addonAfter'))}>{addonAfter.value}</span>
        </div>
      )}
    </div>
  )
}
