function biWeeklyCountDown() {
  const now = moment();
  const currentMonth = now.month();
  const firstThursday = moment().month(currentMonth).date(1).day("Thursday");

  if (firstThursday.isBefore(now)) {
    nextWipe = firstThursday.add(2, "week").tz("America/New_York").hour(14).minute(0).second(0);
  } 

  else if(firstThursday.add(2, "week").isBefore(now)) {
    nextWipe = firstThursday.add(4, "week").tz("America/New_York").hour(14).minute(0).second(0)
  }

  else nextWipe = firstThursday.tz("America/New_York").hour(14).minute(0).second(0);

  const diff = nextWipe.diff(now);
  if (diff < 0) {
  nextWipe.add(1, "week");
  }
  const duration = moment.duration(nextWipe.diff(now));
  const days = duration.days();
  const hours = String(duration.hours()).padStart(2, "0");
  const minutes = String(duration.minutes()).padStart(2, "0");
  const seconds = String(duration.seconds()).padStart(2, "0");
  
  let countdownString = "";
  if(days<2) countdownString += days + " day \n";
  else countdownString += days + " days \n";
  countdownString += hours + ":" + minutes + ":" + seconds;
  
  document.getElementById("biweekly-countdown").innerHTML = countdownString;
  
  localDate = moment(nextWipe).local();
  document.getElementById("biweekly-countdown-date").innerHTML = moment(localDate).format('Do MMMM, HH:mm:ss');
  
  setTimeout(biWeeklyCountDown, 1000);
  }