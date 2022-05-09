import { createContext, ReactNode, useState } from 'react';

import { planets } from '../constants';
import { TPlanet } from '../types/TPlanet';

type TPlanetsContext = {
  planets: TPlanet[];
  setSelectedPlanet: (planet: TPlanet | null) => void;
  selectedPlanet: TPlanet | null;
};

export const planetsContext = createContext<TPlanetsContext>({} as TPlanetsContext);

export const PlanetsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPlanet, setSelectedPlanet] =
    useState<TPlanetsContext['selectedPlanet']>(null);

  return (
    <planetsContext.Provider
      value={{
        planets,
        selectedPlanet,
        setSelectedPlanet: (planet: TPlanet | null) => setSelectedPlanet(planet)
      }}
    >
      {children}
    </planetsContext.Provider>
  );
};
