import React from 'react'
import { CircularProgress, Box, Theme, withStyles } from '@material-ui/core'
import { colors } from '~/theme'

const LoadingCover: React.FC = (props) => (
  <Wrapper {...props}>
    <StyledCircularProgress />
  </Wrapper>
)

const Wrapper = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: colors.coverBackground,
    width: '100%',
    height: '100%',
    position: 'relative',
    textAlign: 'center',
  },
}))(Box)

const StyledCircularProgress = withStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: 'auto',
  },
}))(CircularProgress)

export default LoadingCover
