import React, { useRef } from 'react'
import './Input.scss'
import classnames from 'classnames'

export interface InputProps {
  placeholder?: string
  size?: 'default' | 'small'
  label?: string
  value?: string
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  addonBefore?: {
    value: string
    separate: boolean
  }
  width?: string | number
  maxLength?: number
}

export const Input: React.FC<InputProps> = ({
  placeholder = '',
  label = '',
  value = '',
  onChange,
  size = 'default',
  addonBefore,
  width,
  maxLength,
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
    props.value = value
  }
  if (typeof onChange === 'function') {
    props.onChange = (event: React.FormEvent<HTMLInputElement>) => onChange(event)
  }
  if (maxLength) {
    props.maxLength = maxLength
  }

  return (
    <div className={renderClass('d-input-group')} style={width ? { width } : {}} onClick={onClick}>
      {addonBefore && (
        <span className={classnames(renderClass('d-input-addonBefore'), { separate: addonBefore.separate })}>
          {addonBefore.value}
        </span>
      )}
      <div className={'d-input-wrapper'}>
        <span className={'d-input-label'}>{label}</span>
        <input ref={inputRef} className={renderClass('d-input')} placeholder={placeholder} {...props} />
      </div>
    </div>
  )
}
