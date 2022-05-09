import { useContext } from 'react';

import PlanetsList from '../PlanetsList/PlanetsList';
import { planetsContext } from '../PlanetsProvider';

import { TPlanet } from '../../types/TPlanet';
import PlanetDetail from '../PlanetDetail/PlanetDetail';

import './index.css';

const PlanetInfoPanel = () => {
  const { planets, setSelectedPlanet, selectedPlanet } =
    useContext(planetsContext);
  
  const renderView = () => {
    if (!selectedPlanet) {
      return (
        <PlanetsList
          planets={planets}
          setSelectedPlanet={(planet: TPlanet) => setSelectedPlanet(planet)}
        />
      );
    }
    return (
      <PlanetDetail
        selectedPlanet={selectedPlanet}
        onSwitchView={() => {
          setSelectedPlanet(null);
        }}
      />
    );
  };

  return <div className="planet-info">{renderView()}</div>;
};

export default PlanetInfoPanel;
