function oddCountDown() {
  const now = moment();
  const nextMonday = moment().day("Monday");
  if (nextMonday.isBefore(now)) {
    nextMonday.add(1, "week");
  }
  const targetDate = moment(nextMonday).tz("America/New_York").hour(14).minute(0).second(0);
  const diff = targetDate.diff(now);
  const duration = moment.duration(diff);
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  document.getElementById("odd-countdown").innerHTML =
  "~" + days + " days " + hours + ":" + minutes + ":" + seconds;

    setTimeout(oddCountDown, 1000);
}
