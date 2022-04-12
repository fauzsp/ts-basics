function addNumbers(a: number, b: number) {
  return a * b;
}

export const addStrings = (a: string, b: string = ""): string => `${a} + ${b}`;
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;
export const printFormat = (title: string, param: string | number): void => {
  const x = format(title, param);
  console.log(x);
};

// export const fetchUrl = (url: string): Promise<string> => {
//   return Promise.resolve(`Data from ${url}`);
// };

function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} + ${names.join(" ")}`;
}
export const getName = (user: { fName: string; lName: string }): string => {
  return `first name is ${user.fName} and last name is ${user.lName}`;
};

export default addNumbers;
