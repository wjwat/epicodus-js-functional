/* eslint-disable */
import { recursiveCounter, closureCounter, plainCounter, notSoQuickCounter } from "./coin-counter.js";
import { values } from './coin-counter.speed.values.js';

// Use this to gen your values and pipe the output to `coin-counter.speed.values.js`
// const genValues = () => {
//   const getRandomIntInclusive = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//   const values = Array.from({length: 10000}, () => getRandomIntInclusive(1, 99));
//   console.log(JSON.stringify(values));
// }

const runIt = (func, count) => {
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
}

const COUNT = 100000;
const t1 = runIt(recursiveCounter, COUNT);
const t2 = runIt(closureCounter, COUNT);
const t3 = runIt(plainCounter, COUNT);
const t4 = runIt(notSoQuickCounter, COUNT);

console.log(`
Number of calls: ${COUNT}
Number of values in each call: ${values.length}
Average time for each call:

  recursiveCounter: ${t1.reduce((p, c) => p + c, 0) / COUNT}
    closureCounter: ${t2.reduce((p, c) => p + c, 0) / COUNT}
      plainCounter: ${t3.reduce((p, c) => p + c, 0) / COUNT}
 notSoQuickCounter: ${t4.reduce((p, c) => p + c, 0) / COUNT}
`);
