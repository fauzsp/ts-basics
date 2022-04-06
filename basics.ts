let firstName = "Edward Kennway";
let hasLoggedIn: boolean = true;
let myRegex = /foo/;
const splitName: string[] = firstName.split(" ");
interface Person {
  firstName: string;
  lastName: string;
}
const myPerson: Person = {
  firstName: "Joe",
  lastName: "Barry",
};
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";
console.log(ids[30]);
