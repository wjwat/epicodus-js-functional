/* eslint-disable */
import { romanNumeralsRecursive, romanNumeralsFunctionalRecursive, romanNumeralsFunctionalRecursive2, convertToRoman } from "./roman-numerals.js";
import { values } from "./roman-numerals.speed.values.js";

const runIt = (func, count) => {
  // Get it hot and ready
  for (let i = 0; i < 5; i++) {
    for (let x = 0; x < values.length; x++) {
      func(values[i]);
    }
  }

  let times = [];
  for (let i = 0; i < count; i++) {
    const timeStart = performance.now();

    for (let x = 0; x < values.length; x++) {
      func(values[x]);
    }

    const timeEnd = performance.now();
    times.push(timeEnd - timeStart);
  }
  return times;
};

for (let i = 0; i < 5; i++) {
  const COUNT = 100;
  const t1 = runIt(romanNumeralsRecursive, COUNT);
  const t2 = runIt(romanNumeralsFunctionalRecursive, COUNT);
  const t3 = runIt(romanNumeralsFunctionalRecursive2, COUNT);
  const t4 = runIt(convertToRoman, COUNT);

  console.log(`
Number of calls: ${COUNT}
Number of values in each call: ${values.length}
Average time for each call:

            romanNumeralsRecursive: ${t1.reduce((p, c) => p + c, 0) / COUNT}
  romanNumeralsFunctionalRecursive: ${t2.reduce((p, c) => p + c, 0) / COUNT}
 romanNumeralsFunctionalRecursive2: ${t3.reduce((p, c) => p + c, 0) / COUNT}
                    convertToRoman: ${t4.reduce((p, c) => p + c, 0) / COUNT}
`);
}
