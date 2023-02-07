const setDate = (currentDate) => {
    const date = currentDate ? new Date(currentDate) : new Date();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const dayNumber = date.getUTCDay();
    let fMonth;
    let fDay;

    switch(month) {
          case 0: fMonth = "January"; break;
          case 1: fMonth = "February"; break;
          case 2: fMonth = "Marth"; break;
          case 3: fMonth = "April"; break;
          case 4: fMonth = "May"; break;
          case 5: fMonth = "June"; break;
          case 6: fMonth = "Jule"; break;
          case 7: fMonth = "August"; break;
          case 8: fMonth = "September"; break;
          case 9: fMonth = "October"; break;
          case 10: fMonth = "November"; break;
          case 11: fMonth = "December"; break;
          default: fMonth = null;
    }

    switch (dayNumber) {
        case 0: fDay = "Sun"; break;
        case 1: fDay = "Mon"; break;
        case 2: fDay = "Tue"; break;
        case 3: fDay = "Wed"; break;
        case 4: fDay = "Thu"; break;
        case 5: fDay = "Fri"; break;
        case 6: fDay = "Sat"; break;
        default: fDay = null;
    }


    return {fMonth, day, fDay, hours, minutes}
}

export default setDate;