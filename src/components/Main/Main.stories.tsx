import Main from '.'
import { Meta } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
   title: 'Main',
   component: Main,
   decorators: [withKnobs]
} as Meta

export const Basic = () => (
   <Main
      title={text('Title', 'React Avançado')}
      description={text(
         'Description',
         'TypeScript, ReactJS, NextJS, e Styled Components'
      )}
   />
)
