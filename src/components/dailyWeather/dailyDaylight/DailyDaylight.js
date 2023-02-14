import { useSelector } from "react-redux";
import setMoonphase from "../../../utils/SetMoonphase";
import UVIndexSelector from "../../../assets/icons/UVIndexSelector";
import sunset from "../../../assets/icons/sunset.svg";
import sunrise from "../../../assets/icons/sunrise.svg";
import moonset from "../../../assets/icons/moonset.svg";
import moonrise from "../../../assets/icons/moonrise.svg"
import uvindex from "../../../assets/icons/uv-index.svg"

const DailyDaylight = () => {
    const daylightCond = useSelector(state => state.currentWeather.days[0]);
    const dailightHours = Math.floor((daylightCond.sunsetEpoch - daylightCond.sunriseEpoch) / 3600);
    const dailightMinutes = ((daylightCond.sunsetEpoch - daylightCond.sunriseEpoch) % 3600 / 60).toFixed(0);

    return (
        <div className="daily__daylight">
            <div className='daily__daylight-item'>
                <div className='daily__daylight-rise'>
                    <div className='daily__daylight-icon'>  
                        <img src={sunrise} alt="sunrise" />
                    </div>
                    <p>{daylightCond.sunrise?.slice(0, 5) ?? null}</p>
                </div>
                <div className='daily__daylight-duration'>
                    <p><span>Daylight</span></p>
                    <p>{dailightHours} h {dailightMinutes} min</p>
                </div>
                <div className='daily__daylight-set'>
                    <div className='daily__daylight-icon'>
                        <img src={sunset} alt="sunset"/>
                    </div>
                    <p>{daylightCond.sunset?.slice(0, 5) ?? null}</p>
                </div>
            </div>
            <div className='daily__daylight-item'>
                <div className='daily__daylight-rise'>
                    <div className='daily__daylight-icon'>
                        <img src={moonrise} alt="moonrise" />
                    </div>
                    <p>{daylightCond.moonrise?.slice(0, 5) ?? null}</p>
                </div>
                <div className='daily__daylight-duration'>
                    <p><span>Moonphase</span></p>
                    <p>{setMoonphase(daylightCond.moonphase ? daylightCond.moonphase : null)}</p>
                </div>
                <div className='daily__daylight-set'>
                    <div className='daily__daylight-icon'>
                        <img src={moonset} alt="moonset" />
                    </div>
                    <p>{daylightCond.moonset?.slice(0, 5) ?? null}</p>
                </div>
            </div>
            <div className="daily__daylight-item">
                <div className = 'daily__daylight-icon'>
                    <img src={uvindex} alt="uvindex" />
                </div>
                <div>
                    <p><span>UV-index</span></p>
                    <p>{daylightCond.uvindex ?? null}</p>
                </div>
                <div className = 'daily__daylight-icon'>
                    <UVIndexSelector value={daylightCond.uvindex ?? null}/>
                </div>
            </div>
        </div>
    );
}
 
export default DailyDaylight;