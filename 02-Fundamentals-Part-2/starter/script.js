'use strict';
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log();

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));




function cutFruitPieces(fruit) {
    return fruit * 23;
}

const fruitProcessor = (apples, oranges) => {
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }

    // return retirement;
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));



// Coding Challenge #1

const averageScore = (score1, score2, score3) => (score1 + score2 + score3) / 3

const avgDolphins = averageScore(85, 54, 41)
const avgKoalas = averageScore(23, 34, 27)

// console.log(avgDolphins, avgKoalas)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins / 2 >= avgKoalas) {
        console.log(`Dolphins win  (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas / 2 >= avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log(`No one wins!`)
    }
}

checkWinner(avgDolphins, avgKoalas)


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);



// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // Adds element to the end of the array
console.log(friends);

friends.unshift('John'); // Adds element to the beginning of the array
console.log(friends);

// Remove elements
friends.pop(); // Removes last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Removes first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


// Coding Challenge #2


const bills = [125, 555, 44]

const tip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
}

const calcTip = function (bills) {
    const tip1 = tip(bills[0])
    const tip2 = tip(bills[1])
    const tip3 = tip(bills[2])
    const total1 = bills[0] + tip1
    const total2 = bills[1] + tip2
    const total3 = bills[2] + tip3
    return [[tip1, tip2, tip3], [total1, total2, total3]]
}

console.log(calcTip(bills))

// Objects

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

// Dot vs. Bracket Notation

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);



// Challenge
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)



// Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and hi has ${this.hasDriversLicense ? 'a' : 'no'} drivers's license`
        return this.summary
    }
};


console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
console.log(jonas.summary)



// Coding Challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    },
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    },
};


if (mark.calcBMI() > john.calcBMI()) {
    console.log(` ${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else {
    console.log(` ${john.fullName} BMI (${john.bmi}) is higher than (${mark.fullName}'s (${mark.bmi}`);
}



// Iteration: The for Loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


// Looping Arrays, Breaking and Continuing

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);



const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);



// continue and break

console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

*/

