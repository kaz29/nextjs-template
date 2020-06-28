import React from 'react'
import { useObserver } from 'mobx-react'
import { useStores } from '~/helpers/useStores'
import { withStyles, Theme, Box } from '@material-ui/core'

const DefaultLayout: React.FC = ({ children, ...rest }) => {
  const { app } = useStores()

  return useObserver(() => (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  ))
}

const Wrapper = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    flex: 1,
    minWidth: '100vw',
    minHeight: '100vh',
  },
}))(Box)

export default DefaultLayout
