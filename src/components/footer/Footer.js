import React from 'react';
import VisualCrossingIcon from "../../assets/icons/VisualCrossingIcon.png"
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className="footer__wrapper">
                    <div className="footer__item">
                        <div className="footer__data">Initial Data: Visual Crossing Weather</div>
                        <div><a href="https://www.visualcrossing.com"><img src={VisualCrossingIcon} alt="visualcrossing"/></a></div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__copyright">© 2022  AlexKuptsov</div>
                    </div>  
                </div>
            </div>  
        </footer>

    );
};

export default Footer;