let watches_date;
const digits = {
	hours: {
  	hours0: document.querySelector(".digit-hours-0"),
    hours1: document.querySelector(".digit-hours-1")
  },
	minutes: {
  	minutes0: document.querySelector(".digit-minutes-0"),
    minutes1: document.querySelector(".digit-minutes-1")
  },
	seconds: {
  	seconds0: document.querySelector(".digit-seconds-0"),
    seconds1: document.querySelector(".digit-seconds-1")
  }
};

const setTime = () => {
	watches_date = new Date();
  let hours = "" + watches_date.getHours();
  if(hours < 10) {
  	hours = "0" + hours;
  }
  let minutes = "" + watches_date.getMinutes();
  if(minutes < 10) {
  	minutes = "0" + minutes;
  }
  let seconds = "" + watches_date.getSeconds();
  if(seconds < 10) {
  	seconds = "0" + seconds;
  }
  digits.hours.hours0.setAttribute("data-digit", hours[0]);
  digits.hours.hours1.setAttribute("data-digit", hours[1]);
  digits.minutes.minutes0.setAttribute("data-digit", minutes[0]);
  digits.minutes.minutes1.setAttribute("data-digit", minutes[1]);
  digits.seconds.seconds0.setAttribute("data-digit", seconds[0]);
  digits.seconds.seconds1.setAttribute("data-digit", seconds[1]);
};

setInterval(setTime, 1000);
setTime();