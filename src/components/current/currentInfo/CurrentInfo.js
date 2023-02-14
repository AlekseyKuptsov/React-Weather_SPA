import CurrentIconSelector from "../../../assets/icons/CurretIconSelector";
import info_bg_light from '../../../assets/img/info_bg_light.png';

const CurretInfo = ({temp, feel, pressure, humidity, windSpeed, windDirDeg}) => {
    let windDir;
    switch (true) {
        case (+windDirDeg > 337 || +windDirDeg < 22): {
            windDir = "north wind";
            break;
        }
        case (+windDirDeg >= 22 && +windDirDeg < 67): {
            windDir = "north-east wind";
            break;
        }
        case (+windDirDeg >= 67 && +windDirDeg < 112): {
            windDir = "east wind";
            break;
        }
        case (+windDirDeg >= 112 && +windDirDeg < 157): {
            windDir = "south-east wind";
            break;
        }
        case (+windDirDeg >= 157 && +windDirDeg < 202): {
            windDir = "south wind";
            break;
        }
        case (+windDirDeg >= 202 && +windDirDeg < 247): {
            windDir = "south-west wind";
            break;
        }
        case (+windDirDeg >= 247 && +windDirDeg < 292): {
            windDir = "west wind";
            break;
        }
        case (+windDirDeg >= 292 && +windDirDeg < 337): {
            windDir = "north-west wind";
            break;
        }
        default: {
            windDir = "";
        }
    }

    return (
        <div className="current__info">
            <div className="current__info-item">
                <div className="current__info-icon">
                    <CurrentIconSelector id='temperature'/>
                </div>
                <div className="current__info-descr">Temperature:</div>
                <div className="current__info-value">{Math.round(temp - 273)}&deg; - feels like {Math.round(feel - 273)}&deg;</div>                        
            </div>
            <div className="current__info-item">
                <div className="current__info-icon">
                    <CurrentIconSelector id ='preasure'/>
                </div>
                <div className="current__info-descr">Pressure:</div>
                <div className="current__info-value">{Math.round(Number(pressure) / 1.333)} millimetre of mercury</div>
            </div>
            <div className="current__info-item">
                <div className="current__info-icon">
                    <CurrentIconSelector id='humidity'/>
                </div>
                <div className="current__info-descr">Humidity:</div>
                <div className="current__precipitation-value">{Math.round(humidity)}%</div>
            </div>
            <div className="current__info-item">
                <div className="current__info-icon">
                    <CurrentIconSelector id='wind'/>
                </div>
                <div className="current__info-descr">Wind:</div>
                <div className="current__info-value">{windSpeed} m/s {windDir}</div>
            </div>
        </div>
    );
}
 
export default CurretInfo;