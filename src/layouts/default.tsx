import React from 'react'
import { withStyles, Theme, Box } from '@material-ui/core'
import Header from '~/components/Header'

const DefaultLayout: React.FC = ({ children, ...rest }) => {

  return (
    <Wrapper {...rest}>
      <Header />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Wrapper>
  )
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

export default DefaultLayout
