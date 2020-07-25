import { createMuiTheme, Theme } from '@material-ui/core/styles'
import { red, indigo, pink, orange, blue, green, grey } from '@material-ui/core/colors'
import { BreakpointValues } from '@material-ui/core/styles/createBreakpoints'
import { globalStyles } from './globalStyles'

const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif'
const defaultBreakpoints: BreakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

export const colors = {
  coverBackground: 'rgba(0, 0, 0, .2)',
}

const theme: Theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': globalStyles,
    },
  },

  breakpoints: {
    values: defaultBreakpoints,
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      ['@media (min-width:0px) and (orientation: landscape)']: {
        minHeight: 48,
      },
      [`@media (min-width:${defaultBreakpoints.sm}px)`]: {
        minHeight: 64,
      },
    },
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
    secondary: {
      light: pink.A200,
      main: pink.A400,
      dark: pink.A700,
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
    warning: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
    info: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    background: {
      paper: '#fff',
      default: grey[50],
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.1)',
      hoverOpacity: 0.1,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: defaultFontFamily,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: defaultFontFamily,
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: defaultFontFamily,
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: defaultFontFamily,
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: defaultFontFamily,
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontFamily: defaultFontFamily,
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      fontFamily: defaultFontFamily,
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontFamily: defaultFontFamily,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontFamily: defaultFontFamily,
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontFamily: defaultFontFamily,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontFamily: defaultFontFamily,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      fontFamily: defaultFontFamily,
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: defaultFontFamily,
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontFamily: defaultFontFamily,
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 4,
  },
})

export default theme
