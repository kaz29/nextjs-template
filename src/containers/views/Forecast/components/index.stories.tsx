import React from 'react'
import { storiesOf } from '@storybook/react'
import Presentational from '.'
import { forecast } from '~/__fixtures__/forecast'

storiesOf('containers/views/Forecast', module)
  .add('default', () => (
    <Presentational
      loading={false}
      forecast={forecast}
    />
  ))
