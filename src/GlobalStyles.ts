import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .app {
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
  }

  .primary {
    background-color: ${({ theme }) => theme.colors.primary};

  }

  .secondary {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textOnSecondary};
  }

  .attention-text {
    color: ${({ theme }) => theme.colors.attention};
  }
  
`
