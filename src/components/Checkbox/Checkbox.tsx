import React from 'react'

export interface CheckboxProps {
  size?: 'default' | 'small'
}

export const Checkbox: React.FC<CheckboxProps> = () => {
  return <input type="checkbox" className={'d-checkbox'} />
}
