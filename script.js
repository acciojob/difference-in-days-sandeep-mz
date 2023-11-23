var dateDiffInDays = function (date1, date2) {
  // Parse the input dates
  const [year1, month1, day1] = date1.split("-").map(Number);
  const [year2, month2, day2] = date2.split("-").map(Number);

  // Calculate the difference in milliseconds between the two dates
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const diffInMilliseconds = Date.UTC(year2, month2 - 1, day2) - Date.UTC(year1, month1 - 1, day1);

  // Convert the difference to days
  const diffInDays = Math.floor(diffInMilliseconds / millisecondsPerDay);

  return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date (YYYY-MM-DD).");
const dateTwo = prompt("Enter End Date (YYYY-MM-DD).");
alert(dateDiffInDays(dateOne, dateTwo));
