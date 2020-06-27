import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export const primary = '#1e6a36'
export const secondary = '#b97c1b'

export const colors = {
  primary,
  secondary,
  black: '#000000',
  yuki: '#FFFFFF',
  silver: '#AAAAAA',
  darkSilver: '#808080',
  hai: '#f2f2f2',
  dark: '#333333',
  wakaba: '#7da288',
}

const Mytheme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    text: {
      primary: colors.black,
      secondary: colors.yuki,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default Mytheme
