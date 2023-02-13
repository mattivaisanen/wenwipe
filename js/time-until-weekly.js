function weeklyCountDown() {
  const now = moment();
  const nextThursday = moment().day("Thursday");
  if (nextThursday.isBefore(now)) {
    nextThursday.add(1, "week");
  }
  const targetDate = moment(nextThursday).tz("America/New_York").hour(14).minute(0).second(0);
  const diff = targetDate.diff(now);
  if (diff < 0) {
    targetDate.add(1, "week");
  }
  const duration = moment.duration(targetDate.diff(now));
  const days = duration.days();
  const hours = String(duration.hours()).padStart(2, "0");
  const minutes = String(duration.minutes()).padStart(2, "0");
  const seconds = String(duration.seconds()).padStart(2, "0");
  document.getElementById("weekly-countdown").innerHTML =
  "~" + days + " days \n" + hours + ":" + minutes + ":" + seconds;
  localDate = moment(targetDate).local();
  document.getElementById("weekly-countdown-date").innerHTML = moment(localDate).format('Do MMMM, hh:mm:ss');

  setTimeout(weeklyCountDown, 1000);
}
