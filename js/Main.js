// var testOne = "What kind of variable am I?"; //string 

// var testTwo = 256;// number

// var testThree = false; //boolean

// var testFour = 'true'; //string

// var testFive = '128'; //string

// var testSix = ""; //undefined


// ---------------------------

// var testOne = "hello" + "there"; //string "hellothere"

// var testTwo = "100"+ 28; // string "10028"

// var testThree = true + 3; //number 4

// var testFour = 'false' + 5; // string "false5"

// var testFive = '128'-3; //number 125

// var testSix = "" * 9; //number  0

// var testSeven = 'zero' -1; // undefined n/a

// var testEight = 'five'.length;// number 4

// var testNine = 'five[0]' + 'ever'; //string 'five[0]ever'

// var testTen = 'a' > 'b'; // boolean false

// var testEleven = 'number'.length < 7; // boolean true

// var testTwelve = '12' == 12; //boolean true

// var testThirteen = 'twelve' == 12; //boolean false

// var testFourteen = '14' === 14;  //boolean false

// var testFifteen = 'Hi there'[0] + 'open seasme'[2] + 'aholamora' [1] + 'eulalia'[4] + 'harkonnen'[4] + 'BATMAN!'[6];// string "Hehlo!" 
// -------------------------------


// var string1 = "my name is ";

// var string2 = "my name is ";

// var string3 = "Kingsley Pappagiorgio.";

// var combinedStrings = string1 + string2 + string3;

// console.log(combinedStrings)

// "Hello, my name is Kingsley Pappagiorgio."
//-----------------------------------------

// var num1 = 8;
// var num2 = 52;
// var num3 = 60; 

// var combinedNumbers = num1 + num2 + num3;

// console.log(combinedNumbers);

// 120

//-----------------------------------------


// var mixedNum1 =10;
// var mixedString1 = "ten";
// var mixedNum2 = "10";
// var mixedConcatenation = mixedNum1	+ mixedNum2 + mixedString1;
// console.log (mixedConcatenation);
// 1010ten

//-----------------------------------------

// var num4 = 5;
// var num5 = 0;

// if (num4 > 1){
// 	console.log("Num4 is greater than 1");
// }
// else {
// 	console.log("Num4 is NOT greater than 1")	
// };

// Num4 is greater than 1

//------------------------------------------

// var num4 = 5;
// var num5 = 0;

// if (num4 < num5 || num4 === num5) {
// 	console.log("If Statement ran!");

// } else if ( num5 === "0" || true ) {
// 	console.log("Else if statement ran");
// } else {
// 	console.log("Else statement ran")
// }; 

// Else if statement ran 


// //--------------------------------------------


// var  string1 = "this is a string"

// for(var i = 0; i < string1.length; i=i + 1){
// 	console.log(i, string1[i])
// };

// 0 "t"
// 1 "h"
// 2 "i"
// 3 "s"
// 4 " "
// 5 "i"
// 6 "s"
// 7 " "
// 8 "a"
// 9 " "
// 10 "s"
// 11 "t"
// 12 "r"
// 13 "i"
// 14 "n"
// 15 "g"

// //-------------------------------------------


// var string2 = "coding";

// var total = 0;

// for(var i = 0; i <string2.length; i++){
// 	total = total + i
// };

// console.log (total);

// 15 

//------------------------------------------------

// var string4= "You're gonna need a bigger boat.";
// for(var i = 0; i < string4.length; i++){
// 	if (string4[i] == "a" || string4[i] == "e" || string4[i] == "i" || string4[i]  == "o" || string4[i] == "u") {
// 	console.log(string4[i]);
// };
// };

// o
// u
// e
// o
// a
// e
// a
// i
// e
// o
// a

//---------------------------------------------------


// function testStuff(a,b) {
// 	if (a > 25 && b < 100) {
// 		console.log (a + " is greater than 25 and " + b + " is less than 100");
// 	} else {
// 		console.log (a + " is NOT greater than 25 and " + b + " is NOT less than 100");
// 	};
// }; 

// testStuff(10,101) // 10 is NOT greater than 25 and 101 is NOT less than 100
// testStuff(26,99) //26 is greater than 25 and 99 is less than 100
// teststuff(100,25) // 100 is greater than 25 and 25 is less than 100


//-------------------------------------------------------

// function testStuff2 (c,d){ 
// 	if (c == 25) {
// 		return c + " is equal to 25";
// 	} else if (d <=100) {
// 		return d  + " is less than or equal to 100";
// 	} else {
// 		return "Neither if nor else if statement ran";
// 	};
// };

// testStuff2 (26,101) //"Neither if nor else if statement ran"
// testStuff2 (25,99) // "25 is equal to 25"
// testStuff2 (102,24) //"24 is less than or equal to 100"

// //----------------------------------------------------------


// function countVowels(someString) {
// 	var vowels = 0;

// 	for (var i = 0; i < someString.length; i++) {
// 		if(someString[i] == "a" || someString[i] == "e" || someString[i] == "i" || someString[i] == "o" || someString[i] == "u"){
// 			vowels++
// 		};
// 	};
// 	return vowels;
// };

// countVowels ("I am the very model of a modern major general")

// // 14
// countVowels ("Exeunt pursued by a bear")

// //8
// countVowels ("o123456789o")

// //2

