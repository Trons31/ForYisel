import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { DarkTheme } from '../themes/DarkTheme'
import { UiContext, UiProvider } from '../context/ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <UiProvider>
        <ThemeProvider theme={DarkTheme} >
            <CssBaseline /> 
              <Component {...pageProps} />
        </ThemeProvider>
      </UiProvider>
  )
}

export default MyApp
