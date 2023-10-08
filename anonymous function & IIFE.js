//***(a)PRINTING ODD NUMBERS IN AN ARRAY USING ANONYMOUS & IIFE|(a)***//
let print = function (a) {
  return a;
};
let a = [1, 3, 5, 7, 9]; //Enter the vakues here//
console.log(print(a)); //returns value in arry as odd numbers//

// printing odd numbers in an array using IIFE
(function () {
  let a = [1, 3, 5, 7, 9]; //Enter the vakues here//
  console.log(a); //returns value in arry as odd numbers//
})();
//***(a)|PRINTING ODD NUMBERS IN AN ARRAY USING ANONYMOUS & IIFE|(a)***//

///***(b)|CONVERT ALL THE STRINGS TO TITTLE CAPS IN A STRING ARRAY|***///

//**convering all the strings to tittle caps in a string array**//
let toTitleCase = function (stings) {
  stings = stings.toLowerCase().split(" ");
  //this condition provided to checks the string and converts to tittlecaps//
  for (var i = 0; i < stings.length; i++) {
    stings[i] = stings[i].charAt(0).toUpperCase() + stings[i].slice(1);
  }
  return stings;
};
let stings = "the world is fine"; //Enter the string here//
console.log(toTitleCase(stings));

//***converTing all the strings to tittle caps in a string array using IIFE***//
(function (stings) {
  stings = "hello world is fine"; //Enter the string//
  stings = stings.toLowerCase().split(" ");
  //this condition provided to checks the string and converts to tittlecaps//
  for (var i = 0; i < stings.length; i++) {
    stings[i] = stings[i].charAt(0).toUpperCase() + stings[i].slice(1);
  }
  console.log(stings);
})();
///***(b)|CONVERT ALL THE STRINGS TO TITTLE CAPS IN A STRING ARRAY|(B)***///

///***(c)|SUM OF ADDITION IN AN ARRAY|(c)***///

//**sum of an array using anonymous function */
let sum = function () {
  // below condtion itrates with the values in an array //
  let add = 0;
  for (i = 0; i < arr1.length; i++) {
    add += arr1[i];
  }
  return add;
};
//enter your valus here//
let arr1 = [1, 2, 3, 4];
console.log(sum(arr1));

  //**sum of an array using IIFE */
  (function sum() {
    //enter your values here
    let arr1 = [1, 2, 3, 4];

    // below condtion itrates with the values in an array //
    let add = 0;
    for (i = 0; i < arr1.length; i++) {
      add += arr1[i];
    }
    console.log(add);
  
  })();

///***(c)|SUM OF ADDITION IN AN ARRAY|(c)***///

///***(d)|RETURNING ALL THE PRIME NUMBERS IN AN ARRAY|(d)***///

//**IIFE function to return prime numbers**//
(function prime(num) {
  num = [888]; //Enter the number here

  // below condition iterates the number and checks the entered value is prime or not//
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    if (num[i] % 1 && num[i] % num[i] == 0) {
      console.log("the number is a prime !");
    } else {
      console.log("the number is not a prime !");
    }
  }
})();
//***anonyomus function to return prime numbers***///
let prime = function (num) {
  // below condition iterates the number and checks the entered value is prime or not//
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 1 == 0 && num[i] % num[i] == 0) {
      console.log("the number is a prime !");
    } else {
      console.log("the number is not a prime !");
    }
  }
};
num = [888]; //Enter the number here
prime(num);
///***(d)|RETURNING ALL THE PRIME NUMBERS IN AN ARRAY|(d)***///

///***|(e)RETURN ALL THE PALINDROMES IN AN ARRAY(e)|***///

//*returning palindrome in a  array using anonymus function***//

function isPalindrome(str) {
  var j = str.length - 1;
  for (var i = 0; i < str.length / 2; i++) {
    //this condition provided to checks the word is palindrome or not !! //
    if (str[i] != str[j]) {
      return console.log("the word is not palindrome!:");
    }
    j--;
  }
  return console.log("the word is palindrome!:");
}
// enter your palindrome word here !!//
let str = "wow";
isPalindrome(str);

//***convering all the strings to tittle caps in a string array using IIFE***//
(function isPalindrome(str) {
  str = "wow"; // Enter the string here //
  var j = str.length - 1;

  for (var i = 0; i < str.length / 2; i++) {
    //this condition provided to checks the word is palindrome or not !! //
    if (str[i] != str[j]) {
      return console.log("the word is not palindrome!");
    }
    j--;
  }
  return console.log("the word is palindrome!");
})();

///|***(e)RETURN ALL THE PALINGROMES IN AN ARRAY(e)***|///

//|***(f)RETURN MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE***|///
//returning median using IIFFE
(function median() {
  // enter your arrays values here //
  let A = [2, 4, 6, 8, 10, 12, 14, 16];
  let B = [1, 2, 3, 4, 5, 6, 7, 8];

  let C = [...A, ...B];
  //this sorted the merged array inn ascending order
  console.log(
    C.sort(function (a, b) {
      return a - b;
    })
  );
  //this calculates the number of observations in an array //
  let L = C.length;
  //if the observation number is even
  //the condition below checks the condition for median//

  if (L % 2 === 0) {
    D = L / 2;
    E = L / 2 + 1;

    console.log(
      "the median will be the average of ",
      D,
      "and",
      E,
      "observations. !"
    );
    // this returns the median value
    console.log("the median is :", (C[D - 1] + C[E - 1]) / 2);
  } else {
    //if the observation is odd
    //this
    F = L + 1 / 2;
    console.log(F);
  }
})();
//returning median using anonymous function //
let median = function () {
  let C = [...A, ...B];
  //this sorted the merged array inn ascending order
  console.log(
    C.sort(function (a, b) {
      return a - b;
    })
  );
  //this calculates the number of observations in an array //
  let L = C.length;
  //if the observation number is even
  //the condition below checks the condition for median//

  if (L % 2 === 0) {
    D = L / 2;
    E = L / 2 + 1;

    console.log(
      "the median will be the average of ",
      D,
      "and",
      E,
      "observations. !"
    );
    // this returns the median value
    console.log("the median is :", (C[D - 1] + C[E - 1]) / 2);
  } else {
    //if the observation is odd
    //this
    F = L + 1 / 2;
    return F;
  }
};
// enter your arrays values here //
let A = [2, 4, 6, 8, 10, 12, 14, 16];
let B = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(median(A, B));
//median formula ref:https://byjus.com/maths/median/

//***|(f)RETURN MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE(f)|***///

///***|(g)REMOVING DUPLICATES IN AN ARRAY(g)|***//

//Taking an array with duplicate elements//

let removeDuplicates = function () {
  let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

  return arr.filter((element, index) => arr.indexOf(element) === index);
}; //it removes the duplicate values in an array//
console.log(removeDuplicates());

///|(g)***REMOVING DUPLICATES IN AN ARRAY(g)|***///

///|(h)***ROTATE AN ARRAY BY K VALES***|(h)///

// taking value k = length of an arry using IIFE//
(function name() {
  const arr = [1, 2, 3, 4, 5];
  for (i = 0; i < arr.length; i++) {
    count = i;
    console.log([...arr.slice(count, arr.length), ...arr.slice(0, count)]);
  }
})();

//taking  k = length of an  array using anonymous function
let rotate = function () {
  const arr = [1, 2, 3, 4, 5];
  for (i = 0; i < arr.length; i++) {
    count = i;
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
  }
};
console.log(rotate());
///***(h)ROTATE AN ARRAY BY K VALES(h)***///
