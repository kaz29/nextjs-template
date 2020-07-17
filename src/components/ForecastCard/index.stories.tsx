import React from 'react'
import { storiesOf } from '@storybook/react'
import ForecastCard from '.'
import { forecast } from '~/__fixtures__/forecast'

storiesOf('components/ForecastCard', module)
  .add('default', () => (
    <ForecastCard
      forecastDay={forecast.forecast.forecastday[0]}
    />
  ))
