import axios from 'axios';

export const BASE_URL = 'https://covid19.mathdro.id/api';
export const COUNTRIES_URL = '/countries';
export const DAILY_URL = '/daily';
export const COUNTRY_DATA_URL = 'https://restcountries.eu/rest/v2/alpha';

export const baseUrl = 'https://disease.sh/v3';

export const allUrl = `${baseUrl}/covid-19/all`;
export const countriesUrl = `${baseUrl}/covid-19/countries`;

export default axios.create({ baseURL: 'https://disease.sh/v3' });