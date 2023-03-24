import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {WeatherResponse} from './types';

const BASE_API_URL = 'https://api.weatherapi.com/v1/';
const API_KEY = '4c9c817bdb9549f3b48114211232303';

export const weatherApi = createApi({
  reducerPath: 'weather',
  baseQuery: fetchBaseQuery({baseUrl: BASE_API_URL}),
  refetchOnMountOrArgChange: 30,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: builder => ({
    getWeather: builder.query<WeatherResponse, string>({
      query: location =>
        `forecast.json?key=${API_KEY}&q=${location}&days=7&aqi=no&alerts=no`,
    }),
  }),
});

export const {useGetWeatherQuery} = weatherApi;
