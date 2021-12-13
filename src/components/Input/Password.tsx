import React, { useState } from 'react'
import { Input, InputProps } from './Input'
import { IconEye, IconEyeOff } from '../Icon'

export const Password: React.FC<InputProps> = (props) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const toggleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState)
  }

  return (
    <Input
      {...props}
      type={isShowPassword ? 'text' : 'password'}
      suffix={
        <button style={{ border: 'none', background: 'none', cursor: 'pointer' }} onClick={toggleShowPassword}>
          {isShowPassword ? <IconEye /> : <IconEyeOff />}
        </button>
      }
    />
  )
}
