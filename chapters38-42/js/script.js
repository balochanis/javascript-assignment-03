//1
function powerOf(num1, num2)
{
    var result = Math.pow(num1, num2);
    return result;
}
var powerOff = powerOf(2,3);
console.log(powerOff);

//2
function leapYear(year) {
  let startDate = new Date(year, 0, 1);
  let endDate = new Date(year, 11, 31);
  console.log(startDate);
  console.log(endDate);
  var daysDiff = endDate.getTime() - startDate.getTime();
  daysDiff = daysDiff / (1000 * 60 * 60 * 24) + 1;
  let message;
  if (daysDiff === 365) {
    message = "current year is not a leap year";
  } else if (daysDiff === 366) {
    message = "Current Year is a leap year";
  }

  return message;
}
console.log(leapYear("2032"));

//3
function triangle(a, b, c) {
  let sp = (a + b + c) / 2;
  let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
  return area;
}
console.log(triangle(2, 4, 3.5));



//4
function getMarks() {
  let englishMarks = +prompt("Enter English Marks", "90");
  let mathMarks = +prompt("Enter Math Marks", "50");
  let urduMarks = +prompt("Enter Urdu Marks", "40");
  let obtainedMarks = englishMarks + mathMarks + urduMarks;
  let average = getAverage(englishMarks, mathMarks, urduMarks);
  let per = percentage(obtainedMarks);
    var results = [per.toFixed(), average.toFixed()];
    return results;
}

function percentage(obtained)
{
    let obtainedMarks = obtained;
    let percentage = obtainedMarks / 300 * 100;
    return percentage;
}

function getAverage(eng, math, urdu)
{
    let grades = [eng, math, urdu];
    var total = 0;
    for(var i = 0; i < grades.length; i++) {
    total += grades[i];
    }
    var avg = total / grades.length;   
    return avg; 
}
console.log(getMarks());


//5
function customIndexOf(str, char)
{
    let arr = str.split("");
    let txt = char;
    let indexOfChar;
    for(var i=0; i<=arr.length; i++)
    {
        if(arr[i] === char)
        {
          indexOfChar = i;
          break;
        }
    }
    if(indexOfChar === undefined)
    {
      indexOfChar = -1;
    }
    return indexOfChar;
}
var myStr = "text goes here";
var findIndex = "p";
var result = customIndexOf(myStr,findIndex);
console.log(result);





//6
function delVowels(str)
{
    return str.replace(/[aeiou]/gi, "");
}

var sentence = "my name is anis and i am learning without";
var result = delVowels(sentence);
console.log(result);



//7







//8
function calcDistance()
{
  let kilometers = +prompt("Enter distance in Kilometers", 1);
  let meters = (kilometers * 1000);
  let foot = meters * 3.28;
  let inches = foot * 12;
  let centimeters
  return foot;
}


var calculation = calcDistance();
console.log(calculation);