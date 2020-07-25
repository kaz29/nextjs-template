import React from 'react'
import { storiesOf } from '@storybook/react'
import WindIcon from './'
import { Box } from '@material-ui/core'

storiesOf('components/WindIcon', module)
  .add('default', () => {

    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <WindIcon
          degree={50}
          kph={13}
          dir={'NE'}
        />
      </Box>
    )
  })
  .add('list', () => {
    const winds = [
      {degree: 0, dir: 'N', kph: 10},
      {degree: 45, dir: 'NE', kph: 11},
      {degree: 90, dir: 'E', kph: 12},
      {degree: 135, dir: 'SE', kph: 13},
      {degree: 180, dir: 'S', kph: 14},
      {degree: 225, dir: 'SW', kph: 15},
      {degree: 270, dir: 'W', kph: 16},
      {degree: 315, dir: 'NW', kph: 17},
    ]

    return (
      <div>
        {
          winds.map((wind, index) => {
            return (
              <Box style={{marginTop: 32}} key={`windicon-${index}`} display="flex" alignItems="center" justifyContent="center">
                <WindIcon
                  degree={wind.degree}
                  dir={wind.dir}
                  kph={wind.kph}
                />
              </Box>
            )
          })
        }
      </div>
    )
  }, { info: { disable: true } })
