/* eslint-disable */
import { recursiveCounter, closureCounter, plainCounter, notSoQuickCounterObj, notSoQuickCounterArr } from "./coin-counter.js";
import { values } from './coin-counter.speed.values.js';

const runIt = (func, count) => {
  for (let i = 0; i < 5; i++) {
    for (let x = 0; x < values.length; x++) {
      func(values[x]);
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

const main = (count, funcs) => {

  console.log(`Number of calls: ${count}`);
  console.log(`Number of values in each call: ${values.length}`);
  console.log('Average time for each call:\n');

  funcs.forEach(f => {
    const time = runIt(f, count);
    const average = time.reduce((p, c) => p + c, 0) / count;

    console.log(`${f.name}`.padStart(40) + `: ${average}`);
  });
};

const COUNT = 10000;
const FUNCS = [
  recursiveCounter,
  closureCounter,
  plainCounter,
  notSoQuickCounterObj,
  notSoQuickCounterArr
];

main(COUNT, FUNCS);
