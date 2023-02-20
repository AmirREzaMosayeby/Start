/*
 Binary Palindromes
Answer to : "https://codeforces.com/problemset/problem/1251/B"

*/

const { Module } = require("module");

// function max_palindrome(s, n) {
//   let flag = 0;
//   for (let i = 0; i < n; i++) {
//     // To check if there is
//     // any string of odd length
//     if (s[i].length % 2 != 0) {
//       flag = 1;
//     }
//   }

//   // If there is at least
//   // 1 string of odd
//   // length.
//   if (flag == 1) {
//     return n;
//   }

//   let z = 0;
//   let o = 0;

//   // If all the strings are
//   // of even length.
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < s[i].length; j++) {
//       // Count of 0's in all
//       // the strings
//       if (s[i][j] == "0") z += 1;
//       // Count of 1's in
//       // all the strings
//       else o += 1;
//     }
//   }

//   // If z is even
//   // and o is even
//   // then ans will be N.
//   if (o % 2 == 0 && z % 2 == 0) {
//     return n;
//   }

//   // Otherwise ans will be N-1.
//   else {
//     return n - 1;
//   }
// }

// let n = 3;
// let s = ["1110", "100110", "010101"];
// console.log(max_palindrome(s, n));

// sayHi = (name) => console.log(`salam ${name}`);

// const arr = [1, 2, 3, 4];
// module.exports.funArray = arr;

// module.exports = sayHi;
// module.exports = {
//   sayHi,
//   arr,
// };
const nim1 = 3;
const nim2 = 2;

const calc = () => {
  console.log(nim1 + nim2);
};
calc();
