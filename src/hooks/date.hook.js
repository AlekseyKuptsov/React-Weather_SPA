export const useDate = (currentDate) => {
    const date = currentDate ? new Date(currentDate) : new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const dayNumber = date.getDay();
    let fMonth;
    let fDay;

    switch(month) {
          case 0: fMonth = "января"; break;
          case 1: fMonth = "февраля"; break;
          case 2: fMonth = "марта"; break;
          case 3: fMonth = "апреля"; break;
          case 4: fMonth = "мае"; break;
          case 5: fMonth = "июня"; break;
          case 6: fMonth = "июля"; break;
          case 7: fMonth = "августа"; break;
          case 8: fMonth = "сентября"; break;
          case 9: fMonth = "октября"; break;
          case 10: fMonth = "ноября"; break;
          case 11: fMonth = "декабря"; break;
          default: fMonth = null;
    }

    switch (dayNumber) {
        case 0: fDay = "Пн"; break;
        case 1: fDay = "Вт"; break;
        case 2: fDay = "Ср"; break;
        case 3: fDay = "Чт"; break;
        case 4: fDay = "Пт"; break;
        case 5: fDay = "Сб"; break;
        case 6: fDay = "Вс"; break;
        default: fDay = null;
}

    return {fMonth, day, fDay, hours, minutes}
}