function oddCountDown() {
  const now = moment();
  const nearestMonday = moment().day("Monday");
  if (nearestMonday.isBefore(now)) {
    nearestMonday.add(1, "week");
  }
  const targetDate = moment(nearestMonday).tz("America/New_York").hour(14).minute(0).second(0);
  const diff = targetDate.diff(now);
  const duration = moment.duration(diff);
  const days = duration.days();
  const hours = String(duration.hours()).padStart(2, "0");
  const minutes = String(duration.minutes()).padStart(2, "0");
  const seconds = String(duration.seconds()).padStart(2, "0");

  const lastReset = moment().subtract(10, "minutes"); // check if last reset was less than 10 minutes ago
  if (now.diff(lastReset) <= 0) {
    const timeSinceReset = moment.duration(now.diff(lastReset));
    countdownString = "Last wiped " + timeSinceReset.hours() + ":" + timeSinceReset.minutes() + ":" + timeSinceReset.seconds() + " ago!";
  }

  else{
    if(days<2) document.getElementById("odd-countdown").innerHTML = days + " day \n" + hours + ":" + minutes + ":" + seconds;
    else document.getElementById("odd-countdown").innerHTML = days + " days \n" + hours + ":" + minutes + ":" + seconds;
    
    localDate = moment(targetDate).local();
    document.getElementById("odd-countdown-date").innerHTML = moment(localDate).format('Do MMMM, HH:mm:ss');

    setTimeout(oddCountDown, 1000);
  }
  
}
  