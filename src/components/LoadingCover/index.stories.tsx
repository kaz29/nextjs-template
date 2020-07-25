import React from 'react'
import { storiesOf } from '@storybook/react'
import LoadingCover from './'

storiesOf('components/LoadingCover', module)
  .add('default', () => (
    <div style={{
      width: '100%',
      height: '300px',
      backgroundColor: 'black',
    }}>
      <LoadingCover />
    </div>
  ))
