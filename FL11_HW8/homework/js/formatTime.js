let formatTime = (minutes) => {
  let hours = 0;
  let days = 0;
  days = Math.trunc(minutes / 1440);
  hours = Math.trunc((minutes - days * 1440) / 60);
  minutes -= hours * 60 + days * 1440;
  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
}
formatTime(6452);
