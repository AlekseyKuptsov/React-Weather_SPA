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
        if (!city) getLocation()  
    }, [city])
    
    useEffect(() => {
        if (!city && location.locationLoadingStatus === 'loaded') {
            getCurrentWeather(location.city.lat, location.city.lon);
        } else if (city) {
            dispatch(setLocation({
                city: city.substring(0, city.indexOf('lat')-1),
                lat: city.substring(city.indexOf('lat')+4, city.indexOf('lon')-1),
                lon: city.substring(city.indexOf('lon')+4)
            }));
            getCurrentWeather(city.substring(city.indexOf('lat')+4, city.indexOf('lon')-1), city.substring(city.indexOf('lon')+4));
        }
    }, [location.locationLoadingStatus, city])        


    // const geo = navigator.geolocation;
    // function success(pos) {
    //   var crd = pos.coords;

    //   console.log('Ваше текущее местоположение:');
    //   console.log(`Широта: ${crd.latitude}`);
    //   console.log(`Долгота: ${crd.longitude}`);
    //   console.log(`Плюс-минус ${crd.accuracy} метров.`);
    // };
    // geo.getCurrentPosition(success);

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