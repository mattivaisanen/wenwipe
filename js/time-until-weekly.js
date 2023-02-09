function weeklyCountDown() {
    const now = moment();
    const nextThursday = moment().day("Thursday");
    if (nextThursday.isBefore(now)) {
      nextThursday.add(1, "week");
    }
    const targetDate = moment(nextThursday).tz("America/New_York").hour(14).minute(0).second(0);
    const diff = targetDate.diff(now);
    const duration = moment.duration(diff);
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    document.getElementById("weekly-countdown").innerHTML =
    "~" + days + " days " + hours + ":" + minutes + ":" + seconds;
  
      setTimeout(weeklyCountDown, 1000);
  }
  