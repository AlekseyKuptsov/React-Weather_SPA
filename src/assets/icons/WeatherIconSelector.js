import cloudy from './cloudy.svg';
import clearDay from './clear-day.svg';
import clearNight from './clear-night.svg';
import partlyCloudyDay from './partly-cloudy-day.svg';
import partlyCloudyNight from './partly-cloudy-night.svg';
import fog from './fog.svg';
import hail from './hail.svg';
import rainSnowShowersDay from './rain-snow-showers-day.svg';
import rainSnowShowersNight from './rain-snow-showers-night.svg';
import rainSnow from './rain-snow.svg';
import rain from './rain.svg';
import showersDay from './showers-day.svg';
import showersNight from './showers-night.svg';
import sleet from './sleet.svg';
import snowShowersDay from './snow-showers-day.svg';
import snowShowersNight from './snow-showers-night.svg';
import snow from './snow.svg';
import thunderRain from './thunder-rain.svg';
import thunderShowersDay from './thunder-showers-day.svg';
import thunderShowersNight from './thunder-showers-night.svg';
import wind from './thunder.svg';
import thunder from './wind.svg';
import NA from './not-available.svg';

const WeatherIconSelector = ({id}) => {
    switch (id) {
        case "clear-day": {
            return (
                <img src={clearDay} alt="clear day"/>
            );
        }
        case "clear-night": {
            return (
                <img src={clearNight} alt="clear night"/>
            )
        }
        case "cloudy": {
            return (
                <img src={cloudy} alt="cloudy"/>
            )
        }
        case "partly-cloudy-day": {
            return (
                <img src={partlyCloudyDay} alt="partly cloudy day"/>
            )
        }
        case "partly-cloudy-night": {
            return (
                <img src={partlyCloudyNight} alt="partly cloudy night"/>               
            )                  
        }
        case "fog": {
            return (
                <img src={fog} alt="fog"/>
            )
        }
        case "hail": {
            return (
                <img src={hail} alt="hail"/>
            )
        }
        case "rain-snow-showers-day": {
            return (
                <img src={rainSnowShowersDay} alt="rain snow showers day"/>
            )
        }
        case "rain-snow-showers-night": {
            return (
                <img src={rainSnowShowersNight} alt="rain snow showers night"/>
            )
        }
        case "rain-snow": {
            return (         
                <img src={rainSnow} alt="rain snow"/>
            )
        }
        case "rain": {
            return (
                <img src={rain} alt="rain"/>
            )
        }
        case "showers-day": {
            return (  
                <img src={showersDay} alt="showers day"/>
            )
        }
        case "showers-night": {
            return (
                <img src={showersNight} alt="showers night"/>
            )
        }
        case "sleet": {
            return (      
                <img src={sleet} alt="sleet" />
            )
        }
        case "snow-showers-day": {
            return (   
                <img src={snowShowersDay} alt="snow showers day"/>
            )
        }
        case "snow-showers-night": {
            return (  
                <img src={snowShowersNight} alt="snow showers night"/>
            )
        }
        case "snow": {
            return (           
                <img src={snow} alt="snow"/>
            )
        }
        case "thunder-rain": {
            return (
                <img src={thunderRain} alt="thunder rain" />
            )
        }
        case "thunder-showers-day": {
            return (
                <img src={thunderShowersDay} alt="thunder showers day"/>
            )
        }
        case "thunder-showers-night": {
            return (           
                <img src={thunderShowersNight} alt="thunder showers night"/>
            )
        }
        case "thunder": {
            return (  
                <img src={thunder} alt="thunder"/>
            )
        }
        case "wind": {
            return (
                <img src={wind} alt="wind"/>
            )  
        }
        default: {
            return (
                <img src={NA} alt="not available"/>
            );
        }

    }
}
 
export default WeatherIconSelector;