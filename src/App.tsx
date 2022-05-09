import React from 'react';
import './App.css';
import Planet3dPanel from './components/Planet3dPanel/Planet3dPanel';
import PlanetInfoPanel from './components/PlanetInfoPanel/PlanetInfoPanel';
import { PlanetsProvider } from './components/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div className="app">
        <PlanetInfoPanel />
        <Planet3dPanel />
      </div>
    </PlanetsProvider>
  );
}

export default App;
