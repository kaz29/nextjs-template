import { default as NextApp } from 'next/app'
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'mobx-react'
import theme from '~/theme'
import GlobalStyle from '~/components/GlobalStyle'
import makeStore, { Store } from '~/stores'
import { withMobx } from '~/helpers/withMobx'
import Layout from '~/layouts'
import { SnackbarProvider } from 'notistack'

type Props = {
  store: Store
}

class App extends NextApp<Props> {
  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { Component, pageProps, store, router } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider {...store}>
          <SnackbarProvider maxSnack={4}>
            <Layout pathname={router.pathname}>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default withMobx(makeStore)(App)
