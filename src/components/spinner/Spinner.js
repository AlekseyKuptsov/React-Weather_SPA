const Spinner = () => {
    return (
        <div className='spinner'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <defs>
                    <linearGradient id="a" x1="21.97" y1="14.63" x2="42.03" y2="49.37" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#d4d7dd"/>
                        <stop offset="0.45" stopColor="#d4d7dd"/>
                        <stop offset="1" stopColor="#bec1c6"/>
                        <animateTransform attributeName="gradientTransform" type="rotate" values="0 32 32; 360 32 32" dur="1s" repeatCount="indefinite"/>
                    </linearGradient>
                </defs>
                <path d="M43,32A11,11,0,1,1,32,21,11,11,0,0,1,43,32ZM25,14.61l-.48,1a33.68,33.68,0,0,0-3.42,17.82h0M39,49.39l.48-1a33.68,33.68,0,0,0,3.42-17.82h0" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#a)">
                    <animateTransform attributeName="transform" type="rotate" values="360 32 32; 0 32 32" dur="1s" repeatCount="indefinite"/>
                </path>
            </svg>
        </div>
    );
}
 
export default Spinner;