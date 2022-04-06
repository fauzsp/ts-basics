function addNumbers(a: number, b: number) {
  return a * b;
}

export const addStrings = (a: string, b: string = ""): string => `${a} + ${b}`;
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;
export const printFormat = (title: string, param: string): void => {
  const x = format(title, param);
  console.log(x);
};

export default addNumbers;
