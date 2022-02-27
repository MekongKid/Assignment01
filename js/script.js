/*
    App Name: First Java JavaScript Application
    Author: Panya Lim
    Date: 02/21/22
*/

// let greeting = "say Hello"; // > Just testing the let variable...
// if (true) {
//     let greeting = "say Bonjour instead";
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

// Exercises:

// STEP 1 Convert the following highlighted identifiers to Camel Case notation:
    // Camel Case       | highlighted 
    // let someMonth; | let some_Month;
    // function theMonth(); | function the_Month();
    // let currentMonth; | let current_Month;
    // let summerMonth; | let summer_Month;
    // let myLibraryFunction | let MyLibrary-function

// STEP 2. Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a 
    //null literal expression.
   // 21 = numeric, 'Whatupppps...' = string, True = Boolean, null = literal null value
//STEP 3. Give me two examples of complex / variable expressions.
    // var x = 1; var y = 2; var z = (x + y) ^3;
    // let x = 2; let y = 4; let z = x + y * 2;

// STEP 4. Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip 
    /*Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your 
    identifiers.*/
    // firstName = Paul; lastName = Lim; Address = 355 First St.; City = San Diego; State = CA; zipCode = 92115; 
    // yourAge = 21; ref_Source = school; contactInfo = 1234567;
// SETP 5. Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to 
    // those variables.
        // let firstName = Paul; let lastName = Lim; let City = San Diego;
// STEP 6. Create a variable. 
    // Add a number and a string and display the coerced result in the browser’s console window. 
        //let num = console.log('What is your number between 1 to 99');
// STEP 7. Create two variables. 
    /*For the first variable, add a Boolean and a string and display the coerced result. 
    For the second variable, add a number and a Boolean and display the coerced result. */
        // 1. let myCatName = 'Floyd', isCatId = true;
        // 2. let myFavNum = 7; alert('Paul favorite number is' + myFavNum = 'true');

    // SETP 8. Is the following string literal valid? If not, how would you fix it?
    /* let someString = 'Who once said, "Only two things are infinite, the universe 
and human stupidity, and I'm not sure about the former."';
window.console.log(someString); */ 
    // No. I would add \\ before "Only two things..." need line-terminator to escape sequence to a variable.

// STEP 9. Create a variable that produces a null value in the console window. 
        // let a * 2; let a * null; alert(a)
    //Then, create a variable that produces an undefined value in the console window.
        // let b; alert(b);

// STEP 10. Use the unary type of operator on various literals to return the following types within the console window: string, 
    //number, Boolean, object, and undefined.
        // console.log(typeof'bonjour.'); // returns string
        // console.log(typeof 2 ); // returns number
        // console.log(typeof false); // returns Boolean
        // let bike = { company:'Colngo'}; //create object
        // console.log(typeof bike); // returns object
        // console.log(typeof undefined); // return

// STEP 11. Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
    /*Hello Zak Ruvalcaba, welcome to the JavaScript class!
    Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators 
    to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.*/
    // alert('Hello ' + 'PanYa Lim,' +  ' welcome to JS class!');

// STEP 12. Declare a variable called name and set it equal to your name.
    //Substitute your name in the previous alert string with the variable instead.
     // let name = 'PanYa'
     // alert('Hello  + name +  ', welcome to JS class!');

// STEP 13. Declare a variable called course and set it equal to “JavaScript”. 
    //Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
    // let name = 'Panya'
    // let course = 'JavaScript!'
    // alert('Hello ' + $name + ', welcome to ' + course);

// STEP 14. Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should 
    //display as follows:
    /*Hello Zak Ruvalcaba.
Welcome to the JavaScript class!*/
    //let name = 'Panya'
    //let course = 'JavaScript!'
    //alert('Hello ' + name + ',\n welcome to ' + course);

// STEP 15. Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response 
    //will now be captured in the name variable. 
    // let name = prompt(`what is your ${name}?`)
    

// STEP 16. Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are 
    //taking. The prompt’s response will now be captured in the course variable.
    // let course = prompt("what course are you taking?")

//STEP 17. Declare a variable called x and assign it a value of 10. 
    /*Declare a variable called y and assign it a value of 20. 
Display the sum of those two numbers in the console window.*/
//  let x = 10;
//  let y = 20;
//  console.log( x + y);

// STEP 18. Declare a variable called x and assign it a value of 20. 
    /*Add and assign 20 to that variable and display the result in the console window.
The result should be 40.*/
    // let x = 20;
    // console.log(x + 20);

//STEP 19. Declare a variable called x and assign it a value of 20.
    /*Multiply and assign 5 to that variable and display the result in the console window. 
The result should be 100.*/
// let x = 20 * 5;
// console.log(x);

// STEP 20. Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
    /*Divide and assign 1 to that variable and display the result in the console window. 
The result should be 2. If you got 6.66 try again.*/
// let x = (20 / 3);  // need to solve this problem.
// x /= 1;
// console.log(x);

// STEP 21. Using a set of Comparison and Logical operators, 
  // write an application that evaluates to true and displays the result 
    //within the console window.
    // let x = 4;
    // let y = 3;
    // console.log( x == 4 && y == 3);

// STEP 22. Using a set of Comparison and Logical operators, 
 // write an application that evaluates to false and displays the result 
    //within the console window. 
    // The application cannot use the same operators used in the previous application.
    // let a = 10;
    // let b = 20;
    // console.log( a === b || b === a );