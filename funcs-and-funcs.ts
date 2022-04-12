export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}
type mutateType = (v: number) => number;
export function mutateArr(numbers: number[], mutate: mutateType): number[] {
  return numbers.map(mutate);
}
console.log(mutateArr([2, 4, 6], (v) => v * 10));

export function takeValueFunc(num: number) {
  return (val: number) => num + val;
}
const addOne = takeValueFunc(55);
console.log(addOne(2));
