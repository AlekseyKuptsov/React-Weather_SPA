import { useSelector } from "react-redux";
import CurrentTemp from "./currentTemp/CurrentTemp";
import CurrentInfo from "./currentInfo/CurrentInfo";
import './current.scss';

const Current = () => {
    const currentWeather = useSelector(state => state.currentWeather.currentConditions.currentConditions);
    const location = useSelector(state => state.location.city.city)

    return (
        <section className="current">
            <div className="container">
                <div className="current__wrapper">
                    <CurrentTemp
                        temp = { currentWeather.temp }
                        id={currentWeather.icon}
                        descr={currentWeather.conditions}
                        city={location}/>
                    <CurrentInfo
                        temp = {currentWeather.temp}
                        feel={currentWeather.feelslike}
                        pressure={currentWeather.pressure}
                        humidity={currentWeather.humidity}
                        windSpeed={currentWeather.windspeed}
                        windDirDeg={currentWeather.winddir}/>                     
                </div> 
            </div>
        </section>
    );
}
 
export default Current;