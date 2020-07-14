import React from 'react'
import { useObserver } from 'mobx-react'
import { useStores } from '~/helpers/useStores'
import { withStyles, Theme, Box } from '@material-ui/core'
import Header from '~/components/Header'
import LoadingCover from '~/components/LoadingCover'

const DefaultLayout: React.FC = ({ children, ...rest }) => {
  const { app } = useStores()

  return useObserver(() => (
    <Wrapper {...rest}>
      <Header />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      { app.isLoading && (<StyledLoadingCover />)}
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

const ContentWrapper = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    flex: 1,
    minHeight: '100%',
    margin: 'auto',
    maxWidth: theme.breakpoints.values.sm,
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md,
    },
},
}))(Box)

const StyledLoadingCover = withStyles(() => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 'auto',
    height: 'auto',
  },
}))(LoadingCover)

export default DefaultLayout
