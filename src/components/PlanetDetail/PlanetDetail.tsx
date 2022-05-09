import React from 'react';
import { usePlanetInfoQuery } from '../../hooks/usePlanetInfoQuery';

import { planetDescriptionEmpty } from '../../constants';
import { TPlanet } from '../../types/TPlanet';

import './index.css';

interface TPlanetDetailProps {
  onSwitchView?: (value?: any) => void;
  selectedPlanet: TPlanet;
}
const PlanetDetail = ({
  selectedPlanet,
  onSwitchView = () => {}
}: TPlanetDetailProps) => {
  const { loading, error, planetInfo } = usePlanetInfoQuery(
    selectedPlanet.value
  );

  console.log(planetInfo);

  const renderPlanetDetail = () => {
    if (error) return <p>{error}</p>;
    return loading ? (
      <p>Loading</p>
    ) : (
      <>
        <div className="planet-details__text-content">
          {selectedPlanet?.description || planetDescriptionEmpty}
        </div>
        <div
          key={selectedPlanet.id}
          className="planet-details__image-content"
        >
          {planetInfo?.collection.items.map((item: any, idx: number) => {
            if (idx > 3) return false;
            const imgSrc = item.links[0].href;
            const imgAlt = item.data[0].title;
            return (
              <div key={idx}>
                <img src={imgSrc} alt={imgAlt} />
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="planet-details">
      <button onClick={onSwitchView}>Back</button>
      {renderPlanetDetail()}
    </div>
  );
};

export default PlanetDetail;
