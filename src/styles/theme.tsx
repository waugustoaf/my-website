import { ThemeProvider } from "styled-components"

export const theme = {
  colors: {
    primary: '#2D2F33',
    secondary: '#25262A',
    tertiary: '#8080FF',
    quaternary: '#4A4B57',
    fontPrimary: '#FEFEFE',
    fontSecondary: '#858585',

  },
};

export const CustomThemeProvider: React.FC = ({children}) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}