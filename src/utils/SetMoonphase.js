const setMoonphase = (moonphase) => {
    switch (true) {
        case (moonphase > 0.73): {
            return "Waning crescent";
        }
        case (moonphase <= 0.73 && moonphase > 0.67): {
            return "Last quarter";
        }
        case (moonphase <= 0.67 && moonphase > 0.53): {
            return "Waning gibbous";
        }
        case (moonphase <= 0.53 && moonphase >= 0.47): {
            return "Full moon";
        }
        case (moonphase < 0.47 && moonphase >= 0.33): {
            return "Waxing gibbous";
        }
        case (moonphase < 0.33 && moonphase >= 0.27): {
            return "First quarter";
        }
        case (moonphase < 0.27 && moonphase >= 0.2): {
            return "Waxing crescent";
        }
        case (moonphase < 0.2): {
            return "New moon";
        }
        default: {
            return null
        }
    }
}
 
export default setMoonphase;