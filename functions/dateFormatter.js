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