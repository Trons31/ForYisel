import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { DarkTheme } from '../themes/DarkTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DarkTheme} >
        <CssBaseline /> 
          <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp
