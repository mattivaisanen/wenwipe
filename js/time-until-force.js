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
  const hours = duration.hours().toString().padStart(2, '0');
  const minutes = duration.minutes().toString().padStart(2, '0');
  const seconds = duration.seconds().toString().padStart(2, '0');

  if(days<2) document.getElementById("force-countdown").innerHTML = days + " day " +  hours + ":" + minutes + ":" + seconds;
  else document.getElementById("force-countdown").innerHTML = days + " days " +  hours + ":" + minutes + ":" + seconds;
  
  localDate = moment(targetDate).local();
  document.getElementById("force-countdown-date").innerHTML = moment(localDate).format('Do MMMM, HH:mm:ss');

  setTimeout(forceCountDown, 1000);
};
