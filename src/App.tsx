import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './theme'
import { Header } from './components/Header'
import { MainBanner } from './components/MainBanner'
import { ProductsGrid } from './components/ProductsGrid'

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='app'>
        <Header />
        <MainBanner />
        <ProductsGrid />
      </div>
    </ThemeProvider>
  )
}

export default App
