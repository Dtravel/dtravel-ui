import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Input, Password } from '../components/Input'
import type { InputProps } from '../components/Input'
import { IconEnvelope, IconEye, IconSearch, IconUser } from '../components/Icon'
import IconUsers from '../components/Icon/icons/IconUsers'
import { Button } from '../components/Button'

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
const PasswordTemplate: Story<InputProps> = (args) => <Password {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'placeholder',
}

export const WithEmailIconPrefix = Template.bind({})
WithEmailIconPrefix.args = {
  placeholder: 'Please enter your email',
  label: 'Email',
  prefix: <IconEnvelope />,
}
export const WithUserIconPrefix = Template.bind({})
WithUserIconPrefix.args = {
  placeholder: 'placeholder small size',
  prefix: <IconUser />,
  size: 'small',
}

export const PasswordExampleSuffix = PasswordTemplate.bind({})
PasswordExampleSuffix.args = {
  placeholder: 'Please enter password',
}

export const PasswordExampleSuffixHasLabel = PasswordTemplate.bind({})
PasswordExampleSuffixHasLabel.args = {
  placeholder: 'Please enter password',
  label: 'Password',
}

export const PriceExample = Template.bind({})
PriceExample.args = {
  placeholder: '0.00',
  prefix: '$',
  suffix: 'USD',
  label: 'Price',
}

export const SearchExamplePrefix = Template.bind({})
SearchExamplePrefix.args = {
  placeholder: 'Search anywhere in the world',
  prefix: <IconSearch />,
}

export const SearchExampleSuffix = Template.bind({})
SearchExampleSuffix.args = {
  placeholder: 'Search anywhere in the hell',
  suffix: <IconSearch />,
}

export const AddonBeforeExampleNoSeparate = Template.bind({})
AddonBeforeExampleNoSeparate.args = {
  placeholder: 'Enter url',
  addonBefore: {
    value: 'https://',
    separate: false,
  },
}
export const AddonBeforeExampleHasSeparate = Template.bind({})
AddonBeforeExampleHasSeparate.args = {
  placeholder: 'Enter url',
  addonBefore: {
    value: 'https://',
    separate: true,
  },
}

export const AddonBeforeExampleHasLabel = Template.bind({})
AddonBeforeExampleHasLabel.args = {
  placeholder: 'Enter url',
  label: 'URL',
  addonBefore: {
    value: 'https://',
    separate: true,
  },
}

export const AddonAfterExample1 = Template.bind({})
AddonAfterExample1.args = {
  placeholder: 'Search anywhere in the world',
  prefix: <IconSearch />,
  addonAfter: {
    style: { padding: 0 },
    value: (
      <Button type={'primary'} size={'xxl'}>
        Search
      </Button>
    ),
  },
}

export const AddonAfterExample2 = Template.bind({})
AddonAfterExample2.args = {
  placeholder: 'Search user',
  prefix: <IconUsers />,
  addonAfter: {
    style: { padding: 0 },
    value: (
      <Button type={'secondary'} icon={<IconSearch />}>
        Search
      </Button>
    ),
    separate: true,
  },
}

export const AddonAfterExample3 = Template.bind({})
AddonAfterExample3.args = {
  placeholder: 'Phil Keys',
  prefix: <IconUsers />,
  addonAfter: {
    style: { padding: 0 },
    value: (
      <Button type={'primary'} size={'xxl'}>
        Sort
      </Button>
    ),
  },
}
