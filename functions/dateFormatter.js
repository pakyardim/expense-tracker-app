export default function dateFormatter(today) {
  const yyyy = today.getFullYear();
  const hour = today.getHours();
  const min = today.getMinutes();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[today.getDay()].substring(0, 3);

  const formattedToday =
    dd + "/" + mm + "/" + yyyy + " (" + dayName + ")      " + hour + ":" + min;
  return formattedToday;
}

export function getDayAbbr(date){
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date.getDay()].substring(0, 3);
}

export function isSameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function intFormatter(date){
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + mm + yyyy;
  return parseInt(formattedToday);
}