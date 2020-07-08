import React from 'react'
import { storiesOf } from '@storybook/react'
import Presentational from '.'

storiesOf('containers/Home', module)
  .add('default', () => (
    <Presentational />
  ))
