import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './theme'
import { Header } from './components/Header'
import { MainBanner } from './components/MainBanner'

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='app'>
        <Header />
        <MainBanner />
      </div>
    </ThemeProvider>
  )
}

export default App
