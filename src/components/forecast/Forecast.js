import { useSelector } from 'react-redux';
import WeatherIconSelector from '../../assets/icons/WeatherIconSelector';
import setDate from '../../utils/setDate';
import Slider from 'react-slick';
import './forecast.scss';

const Forecast = () => {
    const forecast = useSelector(state => state.currentWeather.days);
    const todayWeather = useSelector(state => state.currentWeather.currentConditions);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2
    }

    const renderCardItem = (data) => {
        return (
            data.map((item, i) => {
                const {fDay, fMonth, day} = setDate((item.datetimeEpoch + (3600 * todayWeather.tzoffset))*1000);
                return (
                    <div className="forecast__cards-item" key={i}>
                        <div className="forecast__cards-day">{fDay}</div>
                        <div className="forecast__cards-date">{day} {fMonth}</div>
                        <div className="forecast__cards-icon"><WeatherIconSelector id={item.icon}/></div>
                        <div className="forecast__cards-maxtemp">{Math.round(item.tempmax - 273)}&deg;C</div>
                        <div className="forecast__cards-mintemp">{Math.round(item.tempmin - 273)}&deg;C</div>
                        <div className="forecast__cards-precip">{item.conditions}</div>
                    </div>
                )
            })
        )
    }

    const cardItems = renderCardItem(forecast);

    return (
        <section className='forecast'>
            <div className="container">
                <div className="forecast__wrapper">
                    <div className="forecast__cards">
                        <Slider {...settings}>
                            {cardItems}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Forecast;