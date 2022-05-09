import { useEffect, useState } from 'react';

import { planetApiSource } from '../constants';

export const usePlanetInfoQuery = (
  planet: string,
  mediaType: string = 'image'
) => {
  const [planetInfo, setPlanetInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let isUnmounted = false;
    setLoading(true);

    const apiLink = planetApiSource
      .replace('{value}', planet)
      .replace('{type}', mediaType);

    fetch(apiLink)
      .then((response) => response.json())
      .then((data) => {
        if (isUnmounted) return;
        setPlanetInfo(data);
        setLoading(false);
        setError('');
      })
      .catch((e) => {
        if (isUnmounted) return;
        setPlanetInfo(null);
        setLoading(false);
        setError(e.message);
      });
    return () => {
      isUnmounted = true;
    };
  }, [planet, mediaType]);

  return {
    planetInfo,
    loading,
    error
  };
};
