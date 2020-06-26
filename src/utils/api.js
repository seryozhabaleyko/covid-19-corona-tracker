import axios from 'axios';

export const BASE_URL = 'https://covid19.mathdro.id/api';
export const COUNTRIES_URL = '/countries';
export const DAILY_URL = '/daily';
export const COUNTRY_DATA_URL = 'https://restcountries.eu/rest/v2/alpha';

export default axios.create({ baseURL: 'https://disease.sh/v2' });