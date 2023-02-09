import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './theme'
import { Header } from './components/Header'

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='app'>
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
