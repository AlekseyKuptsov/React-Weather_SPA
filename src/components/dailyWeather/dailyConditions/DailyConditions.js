import { useSelector } from "react-redux";
import WeatherIconSelector from "../../../assets/icons/WeatherIconSelector";
import setDate from "../../../utils/setDate";

const DailyConditions = () => {
    const {day, fMonth} = setDate();
    const transformData = (data) => {
        return {
            descr: data.datetime,
            temp: data.temp,
            precip: data.icon,
            pressure: data.pressure,
            humidity: data.humidity,
            windSpeed: data.windspeed,
            feels: data.feelslike
        }
    }
    const dailyWeather = useSelector(state => state.currentWeather.daily);
    const weather = dailyWeather.map(item => transformData(item));
    
    const renderItems = (weather) => {
        return (
            weather.map((item, i) => {
                return (
                    <div className="daily__weather-item" key={i}>
                        <div>{i === 0 ? "Утро" : i === 1 ? "День" : i === 2 ? "Вечер" : "Ночь"}</div>
                        <div>{Math.round(item.temp - 273)}&deg;C</div>
                        <div><WeatherIconSelector id={item.precip}/></div>
                        <div>{Math.round(Number(item.pressure) / 1.333)}</div>
                        <div>{Math.round(item.humidity)}%</div>
                        <div>{item.windSpeed}</div>
                        <div>{Math.round(item.feels - 273)}&deg;C</div>
                    </div>
                )
            })
        )
    }

    const items = renderItems(weather);
    return (
        <div className="daily__weather">
            <div className="daily__weather-item">
                <div>{day} {fMonth}</div>
                <div>Температура</div>
                <div>Осадки</div>
                <div>Давление мм.рт.ст.</div>
                <div>Влажность</div>
                <div>Ветер м/с</div>
                <div>Ощущается</div>
            </div>
            {items}
        </div>
    );
}
 
export default DailyConditions;