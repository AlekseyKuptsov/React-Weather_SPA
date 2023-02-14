import { fetchCurrentWeather } from "../slices/CurrentWeatherSlice";
import { fetchLocation } from "../slices/LocationSlice";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

const WeatherService = () => {
    const dispatch = useDispatch();
    const _apiBase = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
    const _apiKey = 'key=A5ZWZGJ8WH4KE52PR7VZP22GX';
    const _elements = '&elements=datetime,datetimeEpoch,tempmax,tempmin,temp,feelslike,humidity,windspeed,winddir,pressure,uvindex,conditions,icon,sunrise,sunset,sunriseEpoch,sunsetEpoch,moonrise,moonset,moonphase';

    const getCurrentWeather = useCallback((lat, lon) => dispatch(fetchCurrentWeather([_apiBase, lat, lon, _apiKey, _elements])), [dispatch]);
    const getLocation = useCallback(() => dispatch(fetchLocation()), [dispatch]);

    return {getCurrentWeather, getLocation};
}

 
export default WeatherService;