import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className="footer__wrapper">
                    <div className="footer__data">Initial Data: Visual Crossing Weather</div>
                    <div className="footer__copyright">© 2022  AlexKuptsov</div>
                </div>
            </div>  
        </footer>

    );
};

export default Footer;