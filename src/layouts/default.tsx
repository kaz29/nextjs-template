import React from 'react'
import { useObserver } from 'mobx-react'
import { useStores } from '~/helpers/useStores'
import { withStyles, Theme, Box } from '@material-ui/core'
import Header from '~/components/Header/components'

const DefaultLayout: React.FC = ({ children, ...rest }) => {
  const { app } = useStores()

  return useObserver(() => (
    <Wrapper {...rest}>
      <Header />
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
