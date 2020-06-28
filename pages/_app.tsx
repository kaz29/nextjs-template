import { default as NextApp } from 'next/app'
import { ThemeProvider } from '@material-ui/styles'
import theme from '~/theme'
import GlobalStyle from '~/components/GlobalStyle'

class App extends NextApp {
  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default App
