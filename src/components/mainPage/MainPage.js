import {useEffect} from 'react';
import { useSelector } from 'react-redux';
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
    const {getCurrentWeather}  = WeatherService();
    const {getLocation} = LocationService();
    const location = useSelector(state => state.location);
    const status = useSelector(state => state.location.locationLoadingStatus);
    const weatherStatus = useSelector(state => state.currentWeather.currentWeatherLoadingStatus);

    // const geo = navigator.geolocation;
    // function success(pos) {
    //   var crd = pos.coords;

    //   console.log('Ваше текущее местоположение:');
    //   console.log(`Широта: ${crd.latitude}`);
    //   console.log(`Долгота: ${crd.longitude}`);
    //   console.log(`Плюс-минус ${crd.accuracy} метров.`);
    // };
    // geo.getCurrentPosition(success);

    useEffect(() => {
        if (!window.localStorage.getItem('location')) {
            getLocation();
        } else {
            dispatch(setLocation({
                city: JSON.parse(window.localStorage.getItem('location')).city,
                lat: JSON.parse(window.localStorage.getItem('location')).lat,
                lon: JSON.parse(window.localStorage.getItem('location')).lon
            }));
        }

    }, [])

    useEffect(() => {
        if (status === 'loaded') {
            getCurrentWeather(JSON.parse(window.localStorage.getItem('location')).lat, JSON.parse(window.localStorage.getItem('location')).lon);
        }
    }, [status])

    if (status === 'loading' || weatherStatus === 'loading' || weatherStatus === '') {
        return (
            <Spinner/>
        )
    } else if (status === 'error' || weatherStatus === 'error') {
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