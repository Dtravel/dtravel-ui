import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxProps } from '../components/Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  // argTypes: {
  //   type: {
  //     options: ['primary', 'secondary', 'outline', 'danger', 'text'],
  //     control: { type: 'radio' }, // Automatically inferred when 'options' is defined
  //   },
  //   size: {
  //     options: ['sm', 'md', 'lg', 'xl', 'xxl'],
  //     control: { type: 'radio' }, // Automatically inferred when 'options' is defined
  //   },
  // },
} as Meta<typeof Checkbox>

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Example = Template.bind({})
