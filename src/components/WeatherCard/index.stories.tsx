import React from 'react'
import { storiesOf } from '@storybook/react'
import WeatherCard from '.'
import { currentWeather } from '~/__fixtures__/current_weather'

storiesOf('components/WeatherCard', module)
  .add('default', () => (
    <WeatherCard
      currentWeather={currentWeather}
    />
  ))
