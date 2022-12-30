import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLocation } from '../../slices/LocationSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import LocationService from '../../services/LocationService';
import WeatherService from '../../services/WeatherService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './citiesList.scss';

const CitiesList = () => {
    const navigate = useNavigate();
    const {findLocation} = LocationService();
    const {request} = useParams();
    const dispatch = useDispatch();
    const cities = useSelector(state => state.findLocation);
    const loading = useSelector(state => state.findLocation.findLoadingStatus);
    const setCity = (e, cities) => {
        const city = cities.filter(item => {
            return item.id === e.target.closest('div').getAttribute('id');
        })
        dispatch(setLocation({
            city: city[0].name,
            lat: city[0].coordinates.latitude,
            lon: city[0].coordinates.longitude
        }));
        navigate(`/${city[0].name}&lat=${city[0].coordinates.latitude}&lon=${city[0].coordinates.longitude}`);
    }

    useEffect(() => {
        findLocation(request);
    }, [request]);

    if (loading === 'loading') {
        return (
            <Spinner/>
        )
    } else if (loading === 'error') {
        return (
            <ErrorMessage/>
        )
    } else if (loading === 'loaded') {
        const renderCities = (cities) => {
            return (
                cities.map(item => {
                    return (
                        <div className='cities__item'
                        key={item.id}
                        id={item.id}
                        onClick={(e) => setCity(e, cities)}><span>{item.name}</span>, {item.country.name}, {item.adminDivision1.name}</div>
                    )
                })
            )
            
        }

        const items = renderCities(cities.cityList);

        return (
            <section className='cities'>
                <div className="container">
                    <div className="cities__wrapper">
                        <h1>Search Results "{request}"</h1>
                        {items}
                    </div>
                </div>
            </section>
        );
    }
}
 
export default CitiesList;