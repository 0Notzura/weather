import { useState } from 'react';

interface Coordinates {
  lat: number;
  lng: number;
}

interface ApiError {
  error: string;
}

export const useGetCoordinates = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({ lat: 0, lng: 0 });
  const [error, setError] = useState<string>('');

  const getCoordinates = async (city: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/geoLocation?city=${encodeURIComponent(city)}`);
      const data = await response.json();

      if (response.ok) {
        setCoordinates(data);
        setError('');
      } else {
        setError((data as ApiError)?.error || 'Erro desconhecido ao obter as coordenadas.');
      }
    } catch (error) {
      setError('Erro na requisição.');
    }
  };

  return { coordinates, error, getCoordinates };
};
