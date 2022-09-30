import WeatherIconSelector from "../../../assets/icons/WeatherIconSelector";
import setDate from "../../../utils/setDate";

const CurrentTemp = ({temp, id, descr, city}) => {
    const {minutes, hours, day, fMonth} = setDate();
    return (
        <div className="current__temp">
            <div className="current__temp-item" >
                <div className="current__temp-descr">
                    <div className="current__temp-value">{Math.round(temp - 273)}&deg;C</div>
                    <div className="current__temp-date">
                        <p className="current__temp-date">{day} {fMonth}</p>
                        <p className="current__temp-date">Today</p>
                    </div>  
                </div>
                <div className="current__temp-icon">
                    <WeatherIconSelector id={id}/>
                    <p className="current__temp-precip">{descr}</p>
                </div>
            </div>
            <p>Time: {hours}:{minutes}</p>
            <p>Region: {city}</p>
        </div>
    );
}
 
export default CurrentTemp;