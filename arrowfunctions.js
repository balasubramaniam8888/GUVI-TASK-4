//***(a)PRINT ODD NUMBERS IN AN ARRAY(a)***//

//Enter the vakues here//
let a = [1, 3, 5, 7, 9];
let print = (a) => {
  return a;
};
//returns value in arry as odd numbers//
console.log(print(a));

//***(a)PRINT ODD NUMBERS IN AN ARRAY(a)***//

//***(b)CONVERTING ALL STINGS TO TITTLECAPS IN AN STRING ARRAY(b)***//

//Enter the string here//
let stings = "the world is fine";

let toTitleCase = (stings) => {
  stings = stings.toLowerCase().split(" ");
  //his condition provided to checks the string and converts to tittlecaps//
  for (var i = 0; i < stings.length; i++) {
    stings[i] = stings[i].charAt(0).toUpperCase() + stings[i].slice(1);
  }
  return stings;
};
//it returns the all strings as tittle caps  //
console.log(toTitleCase(stings));

//***(b)CONVERTING ALL STINGS TO TITTLECAPS IN AN STRING ARRAY(b)***//

///***(C)SUM OF ADDITION IN AN ARRAY(C)***///

let arr1 = [1, 2, 3, 4];

// below condtion itrates with the values in an array //
let add = 0;
for (i = 0; i < arr1.length; i++) {
  add += arr1[i];
}
console.log(add);

///***(c)|SUM OF ADDITION IN AN ARRAY|(c)***///

///***(d)RETURN ALL PRIME NUMBERS IN AN ARRAY(d)***///

//Enter the number here
let num = [888];
let prime =(num) => {
  // Below condition iterates the number and checks the entered value is prime or not//
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 1 == 0 && num[i] % num[i] == 0) {
      console.log("the number is a prime !");
    } else {
      console.log("the number is not a prime !");
    }
  }
};
//it returns the value the number is prime or not //
prime(num);

///***(d)RETURN ALL PRIME NUMBERS IN AN ARRAY(d)***///

///***(e)RETURNING ALL PALINDROMES IN AN ARRAY(e)***/

// enter your palindrome word here !!//
let str = "wow";
let is_Palindrome =(str) => {
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
is_Palindrome(str);

///***(e)RETURNING ALL PALINDROMES IN AN ARRAY(e)***///
