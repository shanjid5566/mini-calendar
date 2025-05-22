const calender = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = document.querySelector(".date");
  let day = document.querySelector(".day");
  let month = document.querySelector(".month");
  let year = document.querySelector(".year");
  let currentTime = new Date();
  setInterval(() => {
    date.innerHTML = (currentTime.getDate()<10? "0":"")+currentTime.getDate();
    day.innerHTML = dayNames[currentTime.getDay()];
    month.innerHTML = monthNames[currentTime.getMonth()];
    year.innerHTML = (currentTime.getFullYear()<10? "0":"")+currentTime.getFullYear();
  }, 1000);
};
calender();
