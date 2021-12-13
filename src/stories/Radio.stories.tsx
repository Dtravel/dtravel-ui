import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Radio, RadioProps } from '../components/Radio'

export default {
  title: 'Radio',
  component: Radio,
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
} as Meta<typeof Radio>

const Template: Story<RadioProps> = (args) => <Radio {...args} />

export const Example = Template.bind({})
