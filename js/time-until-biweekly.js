function biWeeklyCountDown() {
  const now = moment();

  //find first thursday of month.
  let firstThursday = moment().startOf('month');
  while (firstThursday.day() !== 4) {firstThursday.add(1, 'day');}

  //find next thursdday
  let nextThursday = moment().startOf('day');
  while (nextThursday.day() !== 4) {nextThursday.add(1, 'day');}

  if (firstThursday.isSame(nextThursday, 'day')){
    firstThursday = targetDate}

  else firstThursday.add(2, 'weeks');

  if (firstThursday.isBefore(moment(), 'day')) {
    firstThursday.add(4, 'weeks');
  }


  //let nextSecondThursday = moment().day("Thursday").month(0).date(12).hour(14).minute(0).second(0);
  //while (nextSecondThursday.isBefore(now)) {
  //  nextSecondThursday.add(2, "weeks");
  //}
  const targetDate = moment(nextThursday).tz("America/New_York").hour(14).minute(0).second(0);
  const diff = targetDate.diff(now);
  const duration = moment.duration(diff);
  const days = duration.days();
  const hours = String(duration.hours()).padStart(2, "0");
  const minutes = String(duration.minutes()).padStart(2, "0");
  const seconds = String(duration.seconds()).padStart(2, "0");
  document.getElementById("biweekly-countdown").innerHTML = "~" + days + " days \n" + hours + ":" + minutes + ":" + seconds;
  localDate = moment(targetDate).local();
  document.getElementById("biweekly-countdown-date").innerHTML = moment(localDate).format('Do MMMM, HH:mm:ss');

    setTimeout(biWeeklyCountDown, 1000);
}
