import 'styled-components'

declare module 'styled-components' {
  type ThemeType = {
    colors: {
      primary: string
      secondary: string
      lightSecondary: string
      background: string
      border: string
      textOnSecondary: string
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
