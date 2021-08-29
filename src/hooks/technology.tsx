import React, { createContext, useContext, useEffect, useState } from 'react';
import { TechDTO } from '../dtos/TechDTO';
import { api } from '../services/api';

interface TechnologiesProps {
  technologies: TechDTO[];
}

const TechnologyContext = createContext<TechnologiesProps>(
  {} as TechnologiesProps,
);

export const TechnologyProvider: React.FC = ({ children }) => {
  const [technologies, setTechnologies] = useState<TechDTO[]>([]);

  useEffect(() => {
    (async () => {
      const response: TechDTO[] = (await api.get('/technologies')).data;

      setTechnologies(response);
    })();
  }, []);

  return (
    <TechnologyContext.Provider value={{ technologies }}>
      {children}
    </TechnologyContext.Provider>
  );
};

export const useTechnology = (): TechnologiesProps => {
  const context = useContext(TechnologyContext);

  if (!context) {
    throw new Error('useTechnology must be used within TechnologyProvider');
  }

  return context;
};
