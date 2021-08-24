import { CustomThemeProvider } from '../styles/theme';

export const HooksProvider: React.FC = ({ children }) => {
  return <CustomThemeProvider>{children}</CustomThemeProvider>;
};
