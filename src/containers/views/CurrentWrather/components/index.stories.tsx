import React from 'react'
import { storiesOf } from '@storybook/react'
import Presentational from '.'
import { currentWeather } from '~/__fixtures__/current_weather'

storiesOf('containers/views/CurrentWeather', module)
  .add('default', () => (
    <Presentational
      currentWeather={currentWeather}
    />
  ))
