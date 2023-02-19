function biWeeklyCountDown() {
  const now = moment();
  const currentMonth = now.month();
  const firstThursday = moment().month(currentMonth).date(1).day("Thursday");
  if (firstThursday.isBefore(now)) {
    nextWipe=firstThursday.add(2, "weeks")
    if(nextWipe.isBefore(now)){
      nextWipe =+ nextWipe.add(2, "weeks")
    }
  }
  else nextWipe = firstThursday;

  const targetDate = moment(nextWipe).tz("America/New_York").hour(14).minute(0).second(0);
  const diff = targetDate.diff(now);
  if (diff < 0) {
    targetDate.add(1, "week");
  }
  const duration = moment.duration(targetDate.diff(now));
  const days = duration.days();
  const hours = String(duration.hours()).padStart(2, "0");
  const minutes = String(duration.minutes()).padStart(2, "0");
  const seconds = String(duration.seconds()).padStart(2, "0");

  let countdownString = "";
  if (days < 2) {
    countdownString += days + " day \n";
  } else {
    countdownString += days + " days \n";
  }
  countdownString += hours + ":" + minutes + ":" + seconds;

  const lastReset = moment().subtract(10, "minutes"); // check if last reset was less than 10 minutes ago
  if (now.diff(lastReset) <= 0) {
    const timeSinceReset = moment.duration(now.diff(lastReset));
    countdownString = "Last wiped " + timeSinceReset.hours() + ":" + timeSinceReset.minutes() + ":" + timeSinceReset.seconds() + " ago!";
  }

  else{
      document.getElementById("biweekly-countdown").innerHTML = countdownString;

      localDate = moment(targetDate).local();
      document.getElementById("biweekly-countdown-date").innerHTML = moment(localDate).format('Do MMMM, HH:mm:ss');
      
      setTimeout(biWeeklyCountDown, 1000);
  }
  
}
