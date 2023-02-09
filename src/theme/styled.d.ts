import "styled-components";
import theme from ".";

declare module "styled-components" {
  type ThemeType = {
    primary: string
    secondary: string
    background: string
    border: string
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
