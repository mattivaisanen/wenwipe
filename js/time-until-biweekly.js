function biWeeklyCountDown() {
    const now = moment();
    let nextThursday = moment().day("Thursday").month(1).date(2).hour(14).minute(0).second(0);
    if (nextThursday.isBefore(now)) {
      nextThursday.add(2, "weeks");
    }
    const targetDate = moment(nextThursday).tz("America/New_York");
    const diff = targetDate.diff(now);
    const duration = moment.duration(diff);
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    document.getElementById("biweekly-countdown").innerHTML =
     "~" + days + " days " + hours + ":" + minutes + ":" + seconds;
  
  
      setTimeout(biWeeklyCountDown, 1000);
  }
  