import React, { useEffect } from 'react'
import { CssBaseline } from '@material-ui/core'

const GlobalStyle: React.FC = () => {
  useEffect(() => {
    const WebFontLoader = require('webfontloader')
    WebFontLoader.load({
      timeout: 3000,
      google: {
        families: [
          'Noto+Sans+JP:400,700',
        ],
      },
    })
  }, [])
  return (<CssBaseline />)
}

export default GlobalStyle
