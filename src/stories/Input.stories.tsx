import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Input } from '../components/Input'
import type { InputProps } from '../components/Input'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    size: {
      options: ['default', 'small'],
      control: { type: 'radio' }, // Automatically inferred when 'options' is defined
    },
  },
} as Meta<typeof Input>

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Primary = Template.bind({})

Primary.args = {
  placeholder: 'placeholder',
  value: 'Please enter something',
  onChange: () => {},
}
