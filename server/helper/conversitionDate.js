module.exports = function conversitionDate(string) {
  const date = new Date().toJSON().slice(0, 10);

  let age = 0;
  age = Number(date.slice(0, 4)) - Number(string.slice(0, 4));
  const monthToday = date.slice(5, 7);
  const dateToday = date.slice(8, 10);
  const monthInput = string.slice(5, 7);
  const dateInput = string.slice(8, 10);

  if (monthInput > monthToday) {
    age--;
  } else if (monthInput === monthToday) {
    if (dateToday < dateInput) {
      age--;
    }
  }
  return age;
};
