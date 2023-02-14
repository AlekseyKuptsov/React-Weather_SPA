import thermometer from './thermometer.svg';
import barometer from './barometer.svg';
import humidity from './humidity.svg';
import wind from './wind.svg';

const CurrentIconSelector = ({id}) => {
        switch (id) {
            case 'temperature':
                return (
                    <img src={thermometer} alt="temperature" />
                );
            case 'preasure':
                return (
                    <img src={barometer} alt="pressure" />
                );
            case 'humidity':
                return (
                    <img src={humidity} alt="humidity" />
                );
            case 'wind':
                return (
                    <img src={wind} alt="wind" />
                );
            default:
                return null;
        }
    }
 
export default CurrentIconSelector;