import addNumbers, {
  addStrings,
  format,
  printFormat,
  getName,
} from "./functions";
const x = addNumbers(3, 4);
const y = addStrings("hello");
const z = getName({ fName: "hello", lName: "world" });
// console.log(printFormat("lucky number", 12));
console.log(z);
