import axios from 'axios';

export const fetchProviders = async () => {
  const response = await axios.get('https://api.apis.guru/v2/providers.json');
  return response.data;
};

export const fetchAPIs = async (provider: string) => {
  const response = await axios.get(`https://api.apis.guru/v2/${provider}.json`);
  return response.data;
};
