const numbers = [1, 8, 3, 2, 5, 7, 9];

// function sort(numbers) {
//   let newNum = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 1; j < numbers.length; j++) {
//       if (numbers[i] - numbers[j] < 0) {
//         newNum.push(numbers[j]);
//       } else {
//         newNum.push(numbers[i]);
//       }
//     }
//   }
//   console.log(newNum);
// }
// sort(numbers);

// function sort(array) {
//   let newArr = [];

//   for (let i = 0; i <= array.length; i++) {
//     newArr.push(array[i]);
//   }

//   sort(newArr);
//   newArr.Clear();

//   return newArr;
//   newArr = [];
// }
// console.log(sort(numbers));

// function getTime(delay) {
//   return new Promise((resolve, reject) => {
//     if (delay > 5000) {
//       //   return reject(`time to long`);
//       throw new Error("it,s take tooooooo long!");
//     }
//     return setTimeout(resolve("Light wieght!"), delay);
//   });
// }
// getTime(6000)
//   .then((elm) => console.log(elm))
//   .catch((err) => console.error(err));

// const data = fetch("");
// data
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.reject().catch((err) => {
//   throw new Error("err");
// });
// console.log("salam");

// const data = await fetch();
// const res = await data.json();
const considerTask = function (t, n) {
  let sumDays = 0;
  let TaskStrings = [];
  let newTaskString = [];
  let index = [];

  for (let i = 0; i < n.length; i++) {
    sumDays += n[i][0];
    TaskStrings.push(n[i][1]);

    if (n[i][1].length == 1) {
      return "yes";
    }

    // for (let j = 0; j < TaskStrings[i].length; j++) {
    //   newTaskString.push(TaskStrings[i][j]);
    //   newTaskString.forEach((par, inx) =>
    //     par == TaskStrings[i][j + 1] ? index.push(inx) : ""
    //   );
    //   if (index[j] - index[i] == 1) {
    //     return "yes";
    //   } else {
    //     return "no";
    //   }

    //   console.log(index[j + 1]);
    //   console.log([index[j]]);

    //   if (index[j] - index[j - 1] == -1) {
    //     return "yes!!!";
    //   } else {
    //     return "no!";
    //   }

    //   if (newTaskString.includes(TaskStrings[i][j])) {
    //     index.push(newTaskString.indexOf(TaskStrings[i][j]));
    //   } else {
    //     newTaskString.push(TaskStrings[i][j]);
    //   }

    //   if (0 - index[j] !== -1) {
    //     return "yes!!!";
    //   } else {
    //     return "no!";
    //   }
  }
};
//   console.log(index);
//   if (sumDays < t) return false;
// };

// const t = 5,
//   n = [
// [3, "ABA"],

// [11, "DDBBCCCBBEZ"],
//     [7, "FFGZZZY"],
//     [1, "Z"],
//   ];
// console.log(considerTask(t, n));

const fs = require("fs");
const path = require("path");
const axios = require("axios");

// console.log(process.cwd());
// console.log(__dirname);

// fs.writeFile("./note.txt", "salam\n", { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.readFile("./note.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// axios.get("https://google.com").then((res) => console.log(res));

// const server = http.server()

// const port = proccess.env.PORT || 3000;
// server.on('request', (req, res) => {console.log(req),
//     res.write('salam'),res.

// })
