const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const verDubbelen = numbers1
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);
console.log(verDubbelen);
