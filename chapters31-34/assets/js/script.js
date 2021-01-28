// 1 Getting the current date and time
var currentDate = new Date();
console.log(currentDate);





// 2 Getting the current month in words
var currentMonth = currentDate.getMonth();
var months = [
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
console.log("Current Month: " + months[currentMonth]);




// 3 getting the current day in 3 words
var currentDay = currentDate.getDay();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDayInWords = days[currentDay];
console.log("Today is " + currentDayInWords);





//4
switch (currentDayInWords) {
  case "Sun":
    console.log("It's Fun Day");
    break;

  case "Sat":
    console.log("It's Fun Day");
    break;

  default:
    console.log("It's Work Day");
    break;
}




//5
var whichDays = currentDate.getDate();

if (whichDays < 15) {
  console.log("First fifteen days of month");
} else if (whichDays > 15) {
  console.log("Last fifteen days of month");
}





//6
var milliSecsSince = currentDate.getTime();
var minutesSince = milliSecsSince / (1000 * 60);

console.log("Current Date: " + currentDate);
console.log("Elapsed milliseconds since: " + currentDate + milliSecsSince);
console.log("Elapsed minutes since: " + currentDate + minutesSince);





//7
var currentHour = currentDate.getHours();

if (currentHour >= 0 && currentHour < 12) {
  console.log("Its AM");
} else if (currentHour >= 12) {
  console.log("Its PM");
}





//8 (Ma'am or Sir, I have issue in this question, It would be good if you provide me the solution for this question)
var yyyy = 2020;
var mm = 12;
var myDates = new Date(yyyy, mm, 0);
console.log(myDates);

//9
var ramzan = new Date("april 23, 2020");
ramzanDate = ramzan.getTime();
var daysFromRamzan = currentDate.getTime();
var daysDiff = Math.floor((currentDate - ramzanDate) / (1000 * 60 * 60 * 24));
console.log(daysDiff + " days have passed since 1st Ramadan, 2020");

//10
var refDate = new Date("dec 05, 2020");
var secsDiff = Math.floor((currentDate.getTime() - refDate.getTime()) / 1000);
console.log("On refeence date " + refDate);
console.log(secsDiff + " seconds had passed since beginning of 2020");


//11
var newTime = new Date();
var newHour = newTime.getHours() - 1;
var beforeOneHour = newTime.setHours(newHour);
console.log("current date: " + currentDate);
console.log("1 hour ago: " + newTime);

//12
var currentYear = currentDate.getFullYear();
var myAge = 29;
var diffInYears = currentYear - myAge;
console.log("Your age is " + myAge );
console.log("Your birth year is: " + diffInYears);


//13
var customerName = "Anis";
var currentMonth = months[currentDate.getMonth()];
var units = 410;
var chargesPerUnit = 16;
var netAmount = units * chargesPerUnit;
var lateSurcharge = 350;
var dueDate = new Date("January 2,2021");
var dueDateInMilliSeconds = dueDate.getTime();
var currentTimeInMilliSeconds = currentDate.getTime();
var amountPayable;

if (currentTimeInMilliSeconds > dueDateInMilliSeconds) {
  amountPayable = netAmount + lateSurcharge;
} else {
  amountPayable = netAmount;
}



document.write(`<h1>K-Electric Bill</h1>`);
document.write(`<p>Customer Name:<b>${customerName}</b></p>`);
document.write(`<p>Month:<b>${currentMonth}</b></p>`);
document.write(`<p>Number of units:<b>${units}</b></p>`);
document.write(`<p>Charges per unit:<b>${chargesPerUnit}</b></p><br><br>`);
document.write(
  `<p>Net Amount Payable (within Due Date):<b>${netAmount}</b></p>`
);
document.write(`<p>Late payment surcharge:<b>${lateSurcharge}</b></p>`);
document.write(
  `<p>Gross Amount Payable (after Due Date):<b>${amountPayable}</b></p>`
);

