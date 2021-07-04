import React from 'react'
import { default as NextApp } from 'next/app'
import { ThemeProvider } from '@material-ui/styles'
import theme from '~/theme'
import GlobalStyle from '~/components/GlobalStyle'
import Layout from '~/layouts'
import { SnackbarProvider } from 'notistack'

export default class App extends NextApp {
  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { Component, pageProps, router } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SnackbarProvider maxSnack={4}>
          <Layout pathname={router.pathname}>
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </ThemeProvider>
    )
  }
}
