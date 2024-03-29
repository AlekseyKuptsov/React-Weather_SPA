const ErrorMessage = () => {
    return (
        <div className="loading-error">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                <defs>
                    <linearGradient id="a" x1="54.52" y1="2.17" x2="89.18" y2="62.19" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#d4d7dd"/>
                        <stop offset="0.45" stopColor="#d4d7dd"/>
                        <stop offset="1" stopColor="#bec1c6"/>
                    </linearGradient>
                    <linearGradient id="b" x1="31.42" y1="37.6" x2="68.27" y2="101.43" xlinkHref="#a"/>
                    <linearGradient id="c" x1="-2350.61" y1="4798.1" x2="-2230.48" y2="5006.17" gradientTransform="translate(5344.26 -1582.19) rotate(45)" xlinkHref="#a"/>
                    <linearGradient id="d" x1="-2191.36" y1="5157.82" x2="-2110.09" y2="5298.58" gradientTransform="translate(5497.74 -1952.71) rotate(45)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#f87171"/>
                        <stop offset="0.45" stopColor="#f87171"/>
                        <stop offset="1" stopColor="#dc2626"/>
                    </linearGradient>
                    <symbol id="e" viewBox="0 0 138 96">
                        <path d="M105.23,10.78a15.55,15.55,0,1,1,11.21,26.33H6" fill="none" strokeDasharray="58" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="12" stroke="url(#a)">
                            <animate attributeName="strokeDashoffset" values="0; 1274" dur="6s" repeatCount="indefinite"/>
                        </path>
                        <path d="M60.67,85.22A15.55,15.55,0,1,0,71.89,58.89H6.56" fill="none" strokeDasharray="43" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="12" stroke="url(#b)">
                            <animate attributeName="strokeDashoffset" values="0; 857" dur="6s" repeatCount="indefinite"/>
                        </path>
                    </symbol>
                </defs>
                <g transform="rotate(45 256 256)">
                    <path d="M304,355a24,24,0,0,1-48,0V133" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" stroke="url(#c)"/>
                    <g transform="rotate(180 256 175)">
                        <path d="M376,237c0-53-53.73-96-120-96s-120,43-120,96l12.74-5.85c17.9-8.23,40.88-8,58.49.52l11,5.33,6.81-3.5c18.53-9.51,43.41-9.51,61.94,0l6.81,3.5,11-5.33c17.61-8.54,40.59-8.75,58.49-.52Z" stroke="#ef4444" strokeMiterlimit="10" strokeWidth="4" fill="url(#d)"/>
                        <path d="M293.78,237c6.66-53.6-37.78-96-37.78-96s-44.44,42.4-37.78,96" fill="none" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>

                        <animateTransform
                            attributeName="transform"
                            additive="sum"
                            type="scale"
                            values="1 1; .9 1.1; 1 1"
                            dur="6s"
                            calcMode="spline"
                            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                            repeatCount="indefinite"/>

                        <animateTransform
                            attributeName="transform"
                            additive="sum"
                            type="translate"
                            values="0 0; 29 -14; 0 0"
                            dur="6s"
                            calcMode="spline"
                            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                            repeatCount="indefinite"/>
                    </g>
                </g>
                <use width="138" height="96" transform="translate(62.5 201)" xlinkHref="#e"/>
            </svg>
            <div className="errorMessage">Something is wrong...</div>
        </div>
    );
}
 
export default ErrorMessage;