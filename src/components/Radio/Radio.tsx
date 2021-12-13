import React from 'react'

export interface RadioProps {
  size?: 'default' | 'small'
}

export const Radio: React.FC<RadioProps> = () => {
  return <input type="radio" className={'d-radio'} />
}
