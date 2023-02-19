function forceCountDown() {
  const now = moment();
  const currentMonth = now.month();
  const firstThursday = moment().month(currentMonth).date(1).day("Thursday");
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


  const lastReset = moment().subtract(10, "minutes"); // check if last reset was less than 10 minutes ago
  if (now.diff(lastReset) <= 0) {
    const timeSinceReset = moment.duration(now.diff(lastReset));
    countdownString = "Last wiped " + timeSinceReset.hours() + ":" + timeSinceReset.minutes() + ":" + timeSinceReset.seconds() + " ago!";
  }

  else{

    if(days<2) document.getElementById("force-countdown").innerHTML = days + " day " +  hours + ":" + minutes + ":" + seconds;
    else document.getElementById("force-countdown").innerHTML = days + " days " +  hours + ":" + minutes + ":" + seconds;
    
    localDate = moment(targetDate).local();
    document.getElementById("force-countdown-date").innerHTML = moment(localDate).format('Do MMMM, HH:mm:ss');

    setTimeout(forceCountDown, 1000);
  }
  
}
