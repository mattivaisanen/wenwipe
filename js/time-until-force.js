
function forceCountDown() {
  const now = moment();
  const currentMonth = now.month();
  const firstThursday = moment().month(currentMonth).date(1)
    .day("Thursday");
  if (firstThursday.isBefore(now)) {
    firstThursday.add(1, "month");
  }
  const targetDate = moment(firstThursday).tz("America/New_York").hour(14).minute(0).second(0);
  const diff = targetDate.diff(now);
  const duration = moment.duration(diff);
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  document.getElementById("force-countdown").innerHTML =
  "~" + days + " days " + hours + ":" + minutes + ":" + seconds;


  setTimeout(forceCountDown, 1000);
};

countDown();
