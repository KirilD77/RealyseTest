import React, { useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import Planet from '../Planet/Planet';
import { planetsContext } from '../PlanetsProvider';

import './index.css';

const Planet3dPanel = () => {
  const { planets, selectedPlanet, setSelectedPlanet } =
    useContext(planetsContext);

  return (
    <div className="planet-3d-panel">
      <Canvas>
        <ambientLight intensity={0.3} />
        <spotLight position={[9, 10, 0]} angle={0.9} penumbra={0.5} />
        <pointLight position={[-10, -10, -10]} />
        {planets.map((planet, idx) => {
          const { id } = planet;
          return (
            <Planet
              key={id}
              onClick={() => {
                setSelectedPlanet(planet);
              }}
              isSelected={selectedPlanet?.id === id}
              position={[-1.2 + idx * 2.4, 0, 0]}
            />
          );
        })}
      </Canvas>
    </div>
  );
};

export default Planet3dPanel;
