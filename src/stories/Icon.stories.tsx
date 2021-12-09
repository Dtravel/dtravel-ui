import * as React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import './Icon.stories.scss'
import * as DtravelIcons from '../components/Icon'

let str = `import { IconDisclosureArrowUp, IconMap } from 'dtravel-ui'`

const allIcons: {
  [key: string]: any
} = DtravelIcons

export const DemoIcon = () => {
  const iconToArray = Object.keys(allIcons)
  return (
    <div>
      <div className={'notes'}>
        <p>How to use:</p>
        <code>{str}</code>
      </div>

      <div className={'icon-list'}>
        {iconToArray.map((key) => {
          const Icon = allIcons[key]

          return (
            <div className={'icon-item'} key={key}>
              <div className={'icon'}>
                <Icon width={32} height={32} />
              </div>
              <div className={'icon-name'}>{key}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default {
  title: 'Icons',
  component: DemoIcon,
} as Meta<typeof DemoIcon>
