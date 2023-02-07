import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LocationService from "../../services/LocationService";
import HeaderIconSelector from "../../assets/icons/HeaderIconSelector";
import './header.scss';

const Header = () => {
    const navigate = useNavigate();
    const {findLocation} = LocationService();
    const [city, setCity] = useState('');
    const onChange = (value) => {
        setCity(value);
    }
    const onSearch = () => {
        setCity('');
        navigate(`/citylist/${city}`)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to='/'>
                        <div className="header__item">
                            <div className="header__logo">
                                <HeaderIconSelector id='header_logo'/>
                            </div>
                        <div className="header__title">World Weather</div>
                    </div>                        
                    </Link>
                    <div className="header__item">
                        <div className="header__theme">
                            <HeaderIconSelector id = 'theme'/>
                        </div>
                        <div className="header__cities">
                            <form action="#"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    onSearch();
                                }}>
                                < input type = "text"
                                    required
                                    name = "city"
                                    id="city"
                                    value={city}
                                    placeholder="Enter city name"
                                    onChange={(e) => {onChange(e.target.value)}
                                }/>
                                <button type="submit" className="button header__button">Search</button>
                            </form>
                        </div>
                    </div>   
                </div>
            </div>
        </header>
    );
}
 
export default Header;