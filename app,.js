// Chapter 05

// Math expressions Familiar operators

// Questions

// q 01
var num1 = 5; var num2 = 4;
result = (num1 + num2)
console.log(result);

// q 02
// Subtract
var num1 = 5; var num2 = 4;
result = (num1 - num2)
console.log(result);

// Multiply
var num1 = 5; var num2 = 4;
result = (num1 * num2)
console.log(result);

// Divide
var num1 = 5; var num2 = 4;
result = (num1 / num2)
console.log(result);

// Modulus
var num1 = 5; var num2 = 4;
result = (num1 % num2)
console.log(result);

// q 03

var myMath;
document.write("Value after Variable declaration is :" + myMath + "<br>")

myMath = 5;
document.write("Initial Value :" + myMath + "<br>")

myMath++
document.write("Value after increament is :" + myMath + "<br>")

myMath = myMath + 7;
document.write("Value after addition is :" + myMath + "<br>")

--myMath
document.write("Value after decrement is :" + myMath + "<br>")

myMath;
var reminder = 2;

result = (myMath % reminder)
document.write("The reminder is : " + result + '<br> <br>')

document.write("Question 04 <br>")
// q 04
var ticketmovie = 600;
var tickets = 5;
var price =  ticketmovie *tickets;
document.write("Total Cost to buy 5 tickets to a movie is :" + price + "PKR" + "<br> <br>")

document.write("Question 05 <br>")
// q 05
var table = 4;
var tb1 = 1;var tb2 = 2;var tb3 = 3;var tb4 = 4;var tb5 = 5;var tb6 = 6;var tb7 = 7;var tb8 = 8;var tb9 = 9;var tb10 = 10;
document.write("4 X 1 = " + table * tb1 + "<br>")
document.write("4 X 2 = " + table * tb2 + "<br>")
document.write("4 X 3 = " + table * tb3 + "<br>")
document.write("4 X 4 = " + table * tb4 + "<br>")
document.write("4 X 5 = " + table * tb5 + "<br>")
document.write("4 X 6 = " + table * tb6 + "<br>")
document.write("4 X 7 = " + table * tb7 + "<br>")
document.write("4 X 8 = " + table * tb8 + "<br>")
document.write("4 X 9 = " + table * tb9 + "<br>")
document.write("4 X 10 = " + table * tb10+ "<br> <br>")

document.write("Question 06 <br>")
// q 06
var Celcius = 25;
var fahrenhiet = (Celcius*9/5)+32;
document.write(fahrenhiet + " F is ")

var fahrenhiet;
var Celcius = (fahrenhiet - 32)* 5 / 9;
document.write(Celcius + " C <br>")

document.write("25 C is 77 F <br> <br>")

document.write("Question 07 <br>")
// q 07
var item1 = 650; var quantity = 3;
document.write("Price of item1 : 650 <br>" )
document.write("qty of item1 : 3 <br>" )

var item2 = 100; var qty = 7;
document.write("Price of item2 : 100 <br>" )
document.write("qty of item2 : 7 <br>" )
var charges = 100;
document.write("Shipping Charges : 100 <br>" )

document.write("Total Cost of your order is : " + (item1*quantity + item2*qty + charges) + "<br> <br>")

document.write("Question 08 <br>")
// q 08
var totalMarks = 980; var obtainMarks = 804;
document.write("Total Marks : " + totalMarks + "<br>")
document.write("Obtained Marks : " + obtainMarks + "<br>")

document.write("Percentage :" + (obtainMarks / totalMarks)*100 + "<br> <br>")

document.write("Question 09 <br>")
// q 09
var dollar = 104.80; var riyal = 28;
document.write("Total Currency is PKR :" + (dollar*10 + riyal*25) + "<br> <br>");

// q 10
var num1 = 4;
var result = (num1 + 5 * 10 / 2)

console.log(result);

document.write("Questio 11 <br>")
// q 11
var year = 2024; var birthYear = 2004;
document.write("Current year :" + year + "<br>")
document.write("Current birthYear :" + birthYear + "<br>")
result = (year - birthYear)
document.write("Your age is :" + result + "<br> <br>")


document.write("Question 12 <br>")
// q 12
var value = 3.142;
var radius = 20;

var circumference = 2 * 20 *value;
document.write("Radius of Circle :" + radius + "<br>");
document.write("The Circumference is :" + circumference + "<br>");

var area = 3.142 * 20 * 20;
document.write("The Area is :" +  area  + "<br> <br>");

document.write("Question 13 <br>")
// q 13
var snack = "favorite snack : Chocalate Chips";
var current_age = 20;
var maximum_age = 80;
var amount = 3;

document.write(snack + "<br>")
document.write("The Current age is :" + current_age + "<br>")
document.write("The Maximum age is :" + maximum_age + "<br>")
document.write("Amount of Snack per day : " + amount + "<br>")
document.write("You will need "+ (maximum_age-current_age)*amount + "<br> <br> <br>" )

// Chapter 06
// Math Erperetion : Unfamiliar Operetors

document.write("---------------------- Chapter 06 ---------------------- <br> <br>")
// q 01
var a = 10;
document.write("The Value of a is :" + a + "<br> <br>")

++a
document.write("The Value of ++a is :" + a + "<br>")
document.write("Now the Value of a is : 11 <br> <br>" )

a++
document.write("The Value of a++ is :" + a + "<br>")
document.write("Now the Value of a is : 12 <br> <br>")

--a
document.write("The Value of --a is :" + a + "<br>")
document.write("The Value of a is : 11 <br> <br>")

a--
document.write("The Value of a-- is :" + a + "<br>")
document.write("The Value of a is : 10 <br> <br>")

// q 02
var a = 2, b = 1;
result = --a - --b + ++b  + b--;
console.log(result);

// Explain
// --a ==> 1
// --a - --b ==> 1 - 0
// --a - --b + ++b ==> 1 - 0 + 1
// --a _ --b + ++b + b-- ==> 1 - 0 + 1 + 1

// a --> 1
// b --> 2
// result 3

// q 03
// var userInput = prompt("User Name")

// // q -4
// table = 5;
// var tblInput = +prompt("Enter Table 5")
// console.log("5 X 2 =" + tblInput*table);

// q 05
document.write("***********Mark Sheet************ <br> <br>")

document.write("Subjects TotalMarks ObtainMarks Percentage <br> <br>")
var subject_1 = prompt("Enter 1st Subject")
document.write(subject_1 + " ---- " + " 200 "+ " ---- " )

var total = 200;
var obtainMarks = +prompt("Enter !st Subject Num 200 out of")

document.write(  obtainMarks +" ---- ")

var Percentage = ((obtainMarks / total)*100 +"%");
document.write(Percentage +"<br>");




var subject_2 = prompt("Enter 2nd Subject")
document.write(subject_2 + " ---- " + " 200 "+ " ---- " )

var total = 200;
var obtainMarks = +prompt("Enter 2nd Subject Num 200 out of")

document.write(  obtainMarks +" ---- ")

var Percentage = ((obtainMarks / total)*100 +"%");
document.write(Percentage +"<br>");




var subject_3 = prompt("Enter 3rd Subject")
document.write(subject_3 + " ---- " + " 200 "+ " ---- " )

var total = 200;
var obtainMarks = +prompt("Enter 3rd Subject Num 200 out of")

document.write(  obtainMarks +" ---- ")

var Percentage = ((obtainMarks / total)*100 +"%");
document.write(Percentage +"<br>");


document.write("----------- 200 " +"----"+ (obtainMarks*3) + " ---- " + (Percentage*3))

































