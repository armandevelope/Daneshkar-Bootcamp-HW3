"use strict";

// Tamein 1
const findSquare = function (number) {
  for (let i = 1; i < number; i++) {
    if (i ** 2 >= number) {
      console.log(i);
      break;
    }
  }
};

findSquare(454654);
//------------------------------------------------------------------------

// Tamein 2
let num = [];
const maghsomMoshtarak = function (number) {
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i != number) {
      num.push(i);
    }
  }
  const z = num.reduce((acc, cur) => acc + cur);
  if (z === number) {
    console.log(`Yes ✅`);
  } else {
    console.log(`No ❌`);
  }
};

maghsomMoshtarak(16);

//------------------------------------------------------------------------
// Tamrin 3
const makeTriangle = function (num1, num2, num3) {
  if (num1 * num1 + num2 * num2 == num3 * num3) {
    console.log(`Yes, You can Draw a Triangle ✅`);
  } else {
    console.log(`No, You cant Draw a Triangle ❌`);
  }
};

makeTriangle(3, 4, 5);
makeTriangle(3, 4, 6);

//------------------------------------------------------------------------

// Tamrin 4
const person = {};

const getPersonalData = function (key, value) {
  person[key] = value;
};

getPersonalData("firstName", "Soheil");
getPersonalData("lastName", "Saedi");
getPersonalData("age", 21);
getPersonalData("Phone", "09197164064");
getPersonalData("email", "soheil.saedi1379@gmail.com");
console.log(person);
//------------------------------------------------------------------------

// Tamrin 5

const getWeightTall = function (weight, tall) {
  const BMI = weight / tall ** 2;
  if (BMI < 18.5) {
    console.log(`❌ Underweight: Your BMI is: ${BMI}`);
  } else if (BMI >= 18.5 && BMI < 25) {
    console.log(`✅ Normal: Your BMI is: ${BMI}`);
  } else if (BMI >= 25 && BMI < 30) {
    console.log(`❌ OverWeight: Your BMI is: ${BMI}`);
  } else if (BMI >= 30) {
    console.log(`❌ Obese: Your BMI is: ${BMI}`);
  }
};

getWeightTall(210, 1.82);

const examScore = function (score, dayTrip) {
  if (dayTrip === 0 && score != 0) {
    console.log(`Your Score is: 20`);
  } else if (dayTrip === 7) {
    console.log(`Your Score is ${score}`);
  } else if (dayTrip !== 7) {
    let finalScore = score - dayTrip;
    if (finalScore > 0) console.log(`Your Score is ${finalScore}`);
    else if (finalScore < 0) console.log(`Your Score is ${0}`);
  }
};

examScore(10, 1);
