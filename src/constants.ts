import { TPlanet } from './types/TPlanet';

export const planets: TPlanet[] = [
  {
    title: 'Earth',
    value: 'earth',
    description:
      'Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water.',
    id: '1'
  },
  {
    title: 'Mars',
    value: 'mars',
    description:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war.',
    id: '2'
  }
];
export const planetDescriptionEmpty = 'Planet description is not available right nowPlanet description is not available right now'

export const planetApiSource =
  'https://images-api.nasa.gov/search?q={value}&media_type={type}';
