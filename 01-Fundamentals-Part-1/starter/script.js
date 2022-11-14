/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

let country = 'Latvia';
let continent = 'Europe';
let population = '1.9 million';

console.log(country);
console.log(continent);
console.log(population);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);


// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 2; // x = x / 2 = 50
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// Coding Challenge #1

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log('Test1:', markBMI, johnBMI, markHigherBMI);

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log('Test2:', markBMI, johnBMI, markHigherBMI);



// Strings and Template Literals

const firstName = 'Janis';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);



// Taking Decisions: if / else Statements
const age = 12;


if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Coding Challenge #2
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(` Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
} else {
    console.log(` John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}


// Type Conversion and Coercion
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 1000;
if (money) {
    console.log("Don't spend it all ;)");
}   else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
}   else {
    console.log('Height is UNDEFINED');
}


// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = prompt("Whats your favorite number?");

if (Number(favorite) === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (Number(favorite) === 7) {
    console.log('7 is also a cool number');
} else if (Number(favorite) === 9) {
    console.log('9 is also a cool number');
}   else {
    console.log('Number is not 23 or 7 or 9');
}

if (Number(favorite) !== 23) console.log('Why not 23?');



const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
}   else {
    console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
}   else if (hasDriversLicense && hasGoodVision && isTired) {
    console.log('Sarah should rest before driving!');
}   else {
    console.log('Someone else should drive...');
}   



// Coding Challenge #3
const dolphinsScore1 = 12;
const dolphinsScore2 = 113;
const dolphinsScore3 = 14;
const koalasScore1 = 14;
const koalasScore2 = 113;
const koalasScore3 = 12;

const averageDolphinsScore = ( dolphinsScore1 + dolphinsScore2 + dolphinsScore3 ) / 3;
console.log('Average Dolphins score: ', averageDolphinsScore );
const averageKoalasScore = ( koalasScore1 + koalasScore2 + koalasScore3 ) / 3;
console.log('Average Koalas score: ', averageKoalasScore );

let winingTeam;
let isDraw
if ( averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100 ) { winingTeam = 'Dolphins' }
else if ( averageDolphinsScore < averageKoalasScore && averageKoalasScore >= 100 ){ winingTeam = 'Koalas'  }
else if ( averageDolphinsScore === averageKoalasScore && averageDolphinsScore >= 100 ){ isDraw = true  }
else if ( averageDolphinsScore === averageKoalasScore && averageDolphinsScore < 100 ){ isDraw = 'below100'  }

if ( winingTeam ) { console.log(`The winners is the ${ winingTeam }!`) }
else if ( isDraw === true ) { console.log(`Both teams are winners! The result is draw!`) }
else if ( isDraw === 'below100' ) { console.log(`Both teams are losers! The result is draw and below 100!`) }
else { console.log(`Both teams are losers! The highest result was below 100`) }



// The switch Statement
const day = prompt('What day is it today?');

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples'); 
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}   else if (day === 'tuesday') {
    console.log('Prepare theory videos');
}   else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
}   else if (day === 'friday') {
    console.log('Record videos');
}   else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
}   else {
    console.log('Not a valid day!');
}


// Statements and Expressions
// 3 + 4
// 1991
// true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);


const age = 19;

// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
}
else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);



// Coding Challenge #4

const bill = 40;

const tip = bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.20;

console.log (`The bill was ${ bill }, the tip was ${ tip }, and the total value ${ bill + tip}`);

*/

// Functions
 