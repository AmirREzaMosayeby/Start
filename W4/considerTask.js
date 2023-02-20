// const considerTask = function (t, n) {
//   let sumDays = 0;
//   let TaskStrings = [];
//   let newTaskString = [];

//   for (let i = 0; i < n.length; i++) {
//     sumDays += n[i][0];
//     TaskStrings.push(n[i][1]);

//     if (n[i][1].length == 1) {
//       return "yes";
//     }

//     let index = [];
//     console.log(n[i][1].length);

//     for (let j = 1; j < TaskStrings[i].length; j++) {
//       newTaskString.push(TaskStrings[i][j]);
//       newTaskString.forEach((par, inx) =>
//         par == TaskStrings[i][j] ? index.push(inx) : ""
//       );

//       console.log(index[j]);

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
//     }
//   }
//   if (sumDays < t) return false;
// };

// const t = 5,
//   n = [
//     [3, "ABA"],
//     [11, "DDBBCCCBBEZ"],
//     [7, "FFGZZZY"],
//     [1, "Z"],
//   ];
// // console.log(considerTask(t, n));

// const prompt = require("prompt-sync")();

// const second = () => {
//   const data = input();
//   for (const elem of data) {
//     let number = new Number(elem[0]);
//     if ((elem[1].length > number) | (elem[1].length < number)) {
//       console.log("no");
//     } else {
//       indexChecker(elem[1]);
//     }
//   }
// };

// const indexChecker = (text) => {
//   const map = new Map();
//   const array = text.split("");
//   for (let i = 0; i < array.length; i++) {
//     const elem = array[i];
//     if (!map.has(elem)) {
//       map.set(elem, i);
//     } else {
//       if (i - map.get(elem) === 1) {
//         map.set(elem, i);
//       } else {
//         return console.log("no");
//       }
//     }
//   }
//   console.log("yes");
// };

// const input = () => {
//   const t = prompt();
//   const map = new Map();
//   for (let i = 0; i < t; i++) {
//     map.set(prompt(), prompt());
//   }
//   return map;
// };

/////////////////////////////
// function check(s) {
//   let list = [];
//   let pre = "";
//   for (let i = 0; i < s.length; i++) {
//     if (!list.includes(s[i])) list.push(s[i]);
//     else if (pre != s[i]) return "NO";
//     if (s[i] != pre) pre = s[i];
//     // console.log(s[i]);
//   }
//   console.log(pre);
//   return "YES";
// }
// let str = "aabbbbcccfffff";
// console.log(check(str));

// const fun = "code camp".replace(/(\w+)\s(\w+)/, "$2 $1");
// console.log(fun);

// const text = "this sandwich is good";
// const fixRejex = /good/;
// const result = text.replace("good", "okey-dokey");
// console.log(result);

// const hi = "  helloo, world!  ";
// console.log(hi);
// const fixRejex = /^\s+|\s+$/g;
// const res = hi.replace(fixRejex, "");
// console.log(res);
// const fs = require("fs");
// const path = require("path");

// console.log(process.cwd());
// console.log(__dirname);
// console.log(path.join(process.cwd(), ""));

// fs.readFile(path.join(process.cwd(), "index.html"), "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// pfs = {
//   readFile: util.promisify(fs.readFile),
// };

// pfs
//   .readFile(path.join(process.cwd(), "index.html"), "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// async function getData(path) {
//   try {
//     const data = await pfs.readFile(path, "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getData("index.html");
// const name = "farshad";
// obj = {
//   [name]: "AliReza",
// };

// console.log(JSON.stringify(obj));
// console.log(JSON.parse('{ "name": "AMIREZA" }'));

// function countStack(n) {
//   console.log(n);
//   countStack(++n);
// }
// countStack(0);

// fs.readFile("./W4/salam.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// console.log(fs.readFileSync("./W4/salam.txt", "utf-8"));

// console.log(__dirname);
// console.log(__filename);
// console.log(exports);
// console.log(module);

// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));
// console.log(path.resolve());
// console.log(process.cwd());
// console.log(path.join(__dirname, "considerTask.js"));

// fs.readFile(path.join(__dirname, "salam.txt"), "utf-8", (err, data) => {
//   err ? console.log(err) : console.log(data);
// });

// fs.writeFile(
//   path.join(__dirname, "./salam.txt"),
//   " salam amirreza\n",
//   { flag: "a" },
//   (err) => {
//     if (err) console.log(err);
//   }
// );
// fs.readFile(path.join(__dirname, "./salam.txt"), "utf-8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// });

// const pathFile = path.join(__dirname, "./salam.txt");
// const text = "byue\n";

// fs.promises
//   .readFile(pathFile, "utf-8")
//   .then((data) => console.log(data))
//   .then(fs.promises.writeFile(pathFile, text, { flag: "a" }))
//   .catch((err) => console.log(err.message));

// Promise.allSettled([fetch("https://nodejs.org/en/")])
//   .then((res) => console.log(res))
//   .catch((eee) => console.log(eee));

// const promise1 = Promise.resolve();
// const promise2 = new Promise((_, rejects) => setTimeout(rejects, 1000, "foo"));

// const allProm = [promise1, promise2];
// Promise.allSettled(allProm).then((res) => console.log(res));

//   fetch("https://api.github.com/users/teghfo/repos"),
//   fetch("https://api.github.com/users/farshadalemi/repos"),

// Promise.allSettled([
//   fetch("https://api.github.com/users/teghfo/repos"),
//   fetch("https://api.github.com/users/farshadalemi/repos"),
// ])
//   .then((res) => res.map((par) => par.value.json()))
//   .then((data) =>
//     data.map((Element) => Element.then((elm) => console.log(elm)))
//   )
//   .catch((err) => console.error(err));

// axios
//   .get("https://api.github.com/users/teghfo/repos")
//   .then((res) => console.log(res.size))
//   .catch((err) => console.log(err));

const fs = require("fs");
const path = require("path");
const os = require("os");
const util = require("util");
const axios = require("axios");
const { json } = require("stream/consumers");
const { clearLine } = require("readline");
const { resolve } = require("path");
const { rejects } = require("assert");
const htpp = require("http");
const url = require("url");
const lodash = require("lodash");

// const server = htpp.Server();
// const port = process.env.port || 3000;

// const routes = {
//   "/": (req, res) => {
//     res.write("AMIRREZA");
//     return res.end();
//   },
// };

// server.on("request", (req, res) => {
//   const pathName = url.parse(req.url).pathname;
//   const queryParams = url.parse(req.url).query;

//   req.query = queryParams.split("&").reduce((prev, cur) => {
//     const [key, value] = cur.split("=");
//     return { ...prev, [key]: value };
//   }, {});

//   if (!Object.getOwnPropertyNames(routes).includes(pathName)) {
//     res.writeHead(404);
//     return res.end("not found!");
//   } else {
//     return routes[pathName](req, res);
//   }
// });

// server.listen(port, () => console.log(`server run on port ${port}`));
// require("./P3");

// p3.sayHi("amirreza");
// console.log(sayHi("amir"), arr);
// const user = os.userInfo();
// console.log(user);
// console.log(os.uptime());

// const corentOS = {
//   type: os.type(),
//   release: os.release(),
//   total: os.totalmem(),
//   free: os.freemem(),
// };
// console.log(corentOS);

// console.log(path.sep);
// const patht = path.join("/7-js", "W5", "salam.txt");
// console.log(path.basename(patht));
// console.log(path.resolve(__dirname, "salam.txt"));
// const sFile = fs.readFileSync(path.join(__dirname, "salam.txt"), "utf-8");
// console.log(__dirname);
// fs.writeFileSync(path.join(__dirname, "all.txt"), sFile);

// fs.readFileSync(path.join(__dirname, "salam.txt"), "utf-8", (error, result) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const first = result;

//   fs.writeFile(
//     path.join(__dirname, "all.txt"),
//     ` :D${first}`,
//     (error, result) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       console.log(result);
//     }
//   );
// });

const server = htpp.createServer((req, res) => {
  if (req.url === "/") {
    res.end("helllo home");
  }
  if (req.url === "/about") {
    res.end("hello about");
  }
  res.end(
    "<h1>Oops!</h1> <p1>we can find your way!</p1> <a href = '/' >back hom! </a>"
  );
});
server.listen(5000);

const array = [1, [2, [3, [4, [5, [7, [9]]]]]]];
const loArr = lodash.flattenDeep(array);
console.log(loArr);
