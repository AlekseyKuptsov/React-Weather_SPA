const setMoonphase = (moonphase) => {
    switch (true) {
        case (moonphase > 0.73): {
            return "Старя луна";
        }
        case (moonphase <= 0.73 && moonphase > 0.67): {
            return "Последняя четверть";
        }
        case (moonphase <= 0.67 && moonphase > 0.53): {
            return "Убывающая луна";
        }
        case (moonphase <= 0.53 && moonphase >= 0.47): {
            return "Полнолуние";
        }
        case (moonphase < 0.47 && moonphase >= 0.33): {
            return "Прибывающая луна";
        }
        case (moonphase < 0.33 && moonphase >= 0.27): {
            return "Первая четверть";
        }
        case (moonphase < 0.27 && moonphase >= 0.2): {
            return "Молодая луна";
        }
        case (moonphase < 0.2): {
            return "Новолуние";
        }
        default: {
            return null
        }
    }
}
 
export default setMoonphase;