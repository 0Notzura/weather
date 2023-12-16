import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

// Substitua 'SUA_CHAVE_AQUI' pela sua chave de API do Google Cloud
const API_KEY = 'AIzaSyCE9IGJRs5Jy-4DwIDiNXUiQytsNola67k';
const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

interface GeocodeResponse {
  results: Array<{
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }>;
}

async function getLatLngByCity(city: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const response = await axios.get<GeocodeResponse>(API_URL, {
      params: {
        address: city,
        key: API_KEY,
      },
    });

    const location = response.data.results[0]?.geometry?.location;

    if (location) {
      return { lat: location.lat, lng: location.lng };
    } else {
      console.error('Nenhuma localização encontrada para a cidade:', city);
      return null;
    }
  } catch (error:any) {
    console.error('Erro ao obter dados de geocodificação:', error.message);
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: 'A cidade não foi especificada na solicitação.' });
  }

  const result = await getLatLngByCity(city as string);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: 'Não foi possível obter as coordenadas para a cidade especificada.' });
  }
}
