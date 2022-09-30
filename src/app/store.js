import { configureStore } from '@reduxjs/toolkit';
import currentWeather from '../slices/CurrentWeatherSlice';
import location from '../slices/LocationSlice';
import findLocation from '../slices/CityFinderSlice'

const store = configureStore({
  reducer: {
    currentWeather: currentWeather,
    location: location,
    findLocation: findLocation
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
