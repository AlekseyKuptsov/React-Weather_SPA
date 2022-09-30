import DailyConditions from "./dailyConditions/DailyConditions";
import DailyDaylight from "./dailyDaylight/DailyDaylight";

import './dailyWeather.scss';

const DailyWeather = () => {


    return (
        <section className="daily">
            <div className="container">
                <div className="daily__wrapper">
                    <DailyConditions/>
                    <DailyDaylight/>
                </div>
            </div>    
        </section>
    );
}
 
export default DailyWeather;