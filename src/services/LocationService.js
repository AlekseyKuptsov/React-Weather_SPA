import { fetchLocation } from "../slices/LocationSlice";
import { fetchFindLocation } from "../slices/CityFinderSlice";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

const LocationService = () => {
    const dispatch = useDispatch();
    const _apiBase = 'https://spott.p.rapidapi.com/places/autocomplete?limit=15&skip=0&'
    const options = {
        method: 'GET',
        body: null,
        headers: {
            'X-RapidAPI-Key': '5cc34e80eemsh26dfb20985835dep191769jsn1d72fa849e75',
            'X-RapidAPI-Host': 'spott.p.rapidapi.com'
        }
    };

    const getLocation = useCallback(() => dispatch(fetchLocation()), [dispatch]);
    const findLocation = useCallback((city) => dispatch(fetchFindLocation([_apiBase, city, options])), [dispatch])

    return {getLocation, findLocation};
}

 
export default LocationService;