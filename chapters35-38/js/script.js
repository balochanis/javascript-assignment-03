
//1
function showDateTime() {
  var currentTime = new Date();
  console.log(currentTime);
}
showDateTime();


//2
function greetUser() {
  var firstName = prompt("Enter your first name?", "Anis");
  var lastName = prompt("Enter your last name?", "Baloch");
  console.log(`Welcome to my website ${firstName} ${lastName}`);
}
greetUser();



//3
function sum() {
  var num1 = +prompt("Enter first number", 5);
  var num2 = +prompt("Enter second number", 6);
  var total = num1 + num2;
  return total;
}
console.log(sum());




//4
var num1 = +prompt("Enter first number", 5);
var num2 = +prompt("Enter second number", 7);
var operator = prompt("Enter your arthimetic operation", "*");

function calculator(numm1, numm2, opr) {
  var result;
  if (opr === "+") {
    result = numm1 + numm2;
  } else if (opr === "-") {
    result = numm1 - numm2;
  } else if (opr === "*") {
    result = numm1 * numm2;
  } else if (opr === "/") {
    result = num1 / numm2;
  }

  return console.log(result);
}

calculator(num1, num2, operator);




//5
function square(num) {
  var squareNum = num * num;
  return squareNum;
}

var squareInt = +prompt("Enter a number to get its square", 4);
var squareResult = square(squareInt);
console.log(squareResult);









//6
function factorial(num) {
    let result = (num * (4-1) * (3-1) * (2-1) );
    return result;
}

var factorialNum = +prompt("Enter a number to get its factorial");
console.log(factorial(factorialNum));






//7
function counting(x,y)
{
    let num1 = parseInt(x);
    let num2 = parseInt(y);
    for(var i = num1; i<=num2; i++)
    {
        console.log(i);
    }
}

var startNum = prompt("Enter starting number", 5);
var endNum = prompt("Enter end number",15);
var countingResult = counting(startNum, endNum);
console.log(countingResult);






//10
function palindrome(str) {
  var splitted = str.split("");

  var rev = splitted.reverse();
  if (splitted === rev) {
    console.log("Matching");
  }
}
var myStr = "madam";
palindrome(myStr);






//11

function properCase(myStr)
{
    var result;
    let myStrSplitted = myStr.split(" ");
    for(var i = 0; i<myStrSplitted.length; i++)
    {
        myStrSplitted[i] = myStrSplitted[i][0].toUpperCase() + myStrSplitted[i].slice(1).toLowerCase();
    }
    result = myStrSplitted.join(" ");
    return result;

}
var fullName = prompt("Enter your full name", 'anis baloch sarbazi');
var myresult = properCase(fullName);
console.log(myresult);




//12
function guessLongestWord(word) {
  word = word.split(" ");
  var longestWord = word[0];
  for (var i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }

  return longestWord;
}

var sentence = prompt(
  "Enter a sentence, i will return you the longest word",
  "Web Development Tutorial"
);
var found = guessLongestWord(sentence);
console.log(found);





//13
function occurances(word)
{
    var splitted = word.split(" ");
    for(var i=0; i<splitted.length; i++)
    {
        console.log(splitted[i] = splitted[i][i]);
    }
}

var myword = prompt("Enter a word","w3resources");
var character = prompt("Enter a character","o");

var occ = occurances(myword);
console.log(occ);