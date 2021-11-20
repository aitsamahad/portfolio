import "../styles/globals.css"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import theme from "@styles/theme"
import { NoSsr } from "@mui/core"
import PageWrapper from "@common/Wrappers/PageWrapper"

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <NoSsr>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </NoSsr>
    </ThemeProvider>
  )
}

export default MyApp
