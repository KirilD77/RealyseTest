import { TPlanet } from '../../types/TPlanet';
import './index.css';


interface IPlanetsListProps {
  setSelectedPlanet: (selectedPlanet: TPlanet) => void;
  planets: TPlanet[];
}

const PlanetsList = ({
  setSelectedPlanet,
  planets,
}: IPlanetsListProps) => {
  return (
    <ul className="planets-list">
      {planets.map((planet) => {
        const { id, title } = planet;
        return (
          <li
            className="planets-list__item"
            key={id}
            onClick={() => {
              setSelectedPlanet(planet);
            }}
          >
            {title}
          </li>
        );
      })}
    </ul>
  );
};

export default PlanetsList;
