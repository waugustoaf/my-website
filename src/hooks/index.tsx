import { CustomThemeProvider } from '../styles/theme';
import { TechnologyProvider } from './technology';

export const HooksProvider: React.FC = ({ children }) => {
  return (
    <CustomThemeProvider>
      <TechnologyProvider>{children}</TechnologyProvider>
    </CustomThemeProvider>
  );
};
