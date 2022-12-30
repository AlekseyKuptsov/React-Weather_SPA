import { useSelector } from "react-redux";
import CurrentTemp from "./currentTemp/CurrentTemp";
import CurrentInfo from "./currentInfo/CurrentInfo";
import './current.scss';

const Current = () => {
    const currentWeather = useSelector(state => state.currentWeather.currentConditions);
    const location = useSelector(state => state.location.city.city)

    return (
        <section className="current">
            <div className="container">
                <div className="current__wrapper">
                    <CurrentTemp
                        temp = { currentWeather.currentConditions.temp }
                        id={currentWeather.currentConditions.icon}
                        descr={currentWeather.currentConditions.conditions}
                        city={location}
                        utc={currentWeather.tzoffset}/>
                    <CurrentInfo
                        temp = {currentWeather.currentConditions.temp}
                        feel={currentWeather.currentConditions.feelslike}
                        pressure={currentWeather.currentConditions.pressure}
                        humidity={currentWeather.currentConditions.humidity}
                        windSpeed={currentWeather.currentConditions.windspeed}
                        windDirDeg={currentWeather.currentConditions.winddir}/>                     
                </div> 
            </div>
        </section>
    );
}
 
export default Current;