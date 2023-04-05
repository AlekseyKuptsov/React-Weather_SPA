import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { useDispatch } from 'react-redux';
import { setLocation } from '../../slices/LocationSlice';
import WeatherService from '../../services/WeatherService';
import LocationService from '../../services/LocationService';
import Current from "../current/Current";
import DailyWeather from "../dailyWeather/DailyWeather";
import Forecast from "../forecast/Forecast";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const MainPage = () => {
    const dispatch = useDispatch();
    const {getLocation} = LocationService();
    const {getCurrentWeather}  = WeatherService();
    const location = useSelector(state => state.location);
    const weatherStatus = useSelector(state => state.currentWeather.currentWeatherLoadingStatus);
    const {city} = useParams();
    
    useEffect(() => {
        if (!city) getLocation();
    }, [city]) // eslint-disable-line react-hooks/exhaustive-deps
    
    useEffect(() => {
        if (!city && location.locationLoadingStatus === 'loaded') {
            getCurrentWeather(location.city.latitude, location.city.longitude);
        } else if (city) {
            dispatch(setLocation({
                city: city.substring(0, city.indexOf('lat')-1),
                latitude: city.substring(city.indexOf('lat')+4, city.indexOf('lon')-1),
                longitude: city.substring(city.indexOf('lon')+4)
            }));
            getCurrentWeather(city.substring(city.indexOf('lat')+4, city.indexOf('lon')-1), city.substring(city.indexOf('lon')+4));
        }
    }, [location.locationLoadingStatus]) // eslint-disable-line react-hooks/exhaustive-deps   


    if (location.locationLoadingStatus === 'loading' || weatherStatus === 'loading' || weatherStatus === '') {
        return (
            <Spinner/>
        )
    } else if (location.locationLoadingStatus === 'error' || weatherStatus === 'error') {
        return (
            <ErrorMessage/>
        )
    }

    return (
        <>
            <Current/>
            <DailyWeather/>
            <Forecast/>
        </>
    );
}
 
export default MainPage;