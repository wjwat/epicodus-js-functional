/* eslint-disable fp/no-unused-expression,fp/no-nil */
import { recursiveCounter, countCoins, closureCounter, closureCountCoins, plainCounter, notSoQuickCounterArr, notSoQuickCounterObj } from "./coin-counter";

describe('countCoins', () => {
  test('Returns the number of coins of a given value that are less than the first value', () => {
    expect(countCoins(99, 25)).toEqual(3);
    expect(countCoins(99, 10)).toEqual(9);
    expect(countCoins(99, 5)).toEqual(19);
    expect(countCoins(99, 1)).toEqual(99);
  });
});

describe('recursiveCounter', () => {
  test('Returns array containing the number of coins equal to the value passed in, in descending order', () => {
    expect(recursiveCounter(1)).toEqual([0, 0, 0, 1]);
    expect(recursiveCounter(26)).toEqual([1, 0, 0, 1]);
    expect(recursiveCounter(41)).toEqual([1, 1, 1, 1]);
    expect(recursiveCounter(99)).toEqual([3, 2, 0, 4]);
    expect(recursiveCounter(100)).toEqual([0, 0, 0, 0]);
    expect(recursiveCounter(87)).toEqual([3, 1, 0, 2]);
  });
});

describe('closureCountCoins', () => {
  const quarter = closureCountCoins(25);
  const dime = closureCountCoins(10);
  const nickel = closureCountCoins(5);
  const penny = closureCountCoins(1);

  test('Returns the number of coins of a given value that are less than the first value', () => {
    expect(quarter(99)).toEqual(3);
    expect(dime(99)).toEqual(9);
    expect(nickel(99)).toEqual(19);
    expect(penny(99)).toEqual(99);
  });
});

describe('closureCounter', () => {
  test('Returns array containing the number of coins equal to the value passed in, in descending order', () => {
    expect(closureCounter(1)).toEqual([0, 0, 0, 1]);
    expect(closureCounter(26)).toEqual([1, 0, 0, 1]);
    expect(closureCounter(41)).toEqual([1, 1, 1, 1]);
    expect(closureCounter(99)).toEqual([3, 2, 0, 4]);
    expect(closureCounter(100)).toEqual([0, 0, 0, 0]);
    expect(closureCounter(87)).toEqual([3, 1, 0, 2]);
  });
});

describe('plainCounter', () => {
  test('Returns array containing the number of coins equal to the value passed in, in descending order', () => {
    expect(plainCounter(1)).toEqual([0, 0, 0, 1]);
    expect(plainCounter(26)).toEqual([1, 0, 0, 1]);
    expect(plainCounter(41)).toEqual([1, 1, 1, 1]);
    expect(plainCounter(99)).toEqual([3, 2, 0, 4]);
    expect(plainCounter(100)).toEqual([0, 0, 0, 0]);
    expect(plainCounter(87)).toEqual([3, 1, 0, 2]);
  });
});

describe('notSoQuickCounterObj', () => {
  test('Returns array containing the number of coins equal to the value passed in, in descending order', () => {
    expect(notSoQuickCounterObj(1)).toEqual([0, 0, 0, 1]);
    expect(notSoQuickCounterObj(26)).toEqual([1, 0, 0, 1]);
    expect(notSoQuickCounterObj(41)).toEqual([1, 1, 1, 1]);
    expect(notSoQuickCounterObj(99)).toEqual([3, 2, 0, 4]);
    expect(notSoQuickCounterObj(100)).toEqual([0, 0, 0, 0]);
    expect(notSoQuickCounterObj(87)).toEqual([3, 1, 0, 2]);
  });
});

describe('notSoQuickCounterArr', () => {
  test('Returns array containing the number of coins equal to the value passed in, in descending order', () => {
    expect(notSoQuickCounterArr(1)).toEqual([0, 0, 0, 1]);
    expect(notSoQuickCounterArr(26)).toEqual([1, 0, 0, 1]);
    expect(notSoQuickCounterArr(41)).toEqual([1, 1, 1, 1]);
    expect(notSoQuickCounterArr(99)).toEqual([3, 2, 0, 4]);
    expect(notSoQuickCounterArr(100)).toEqual([0, 0, 0, 0]);
    expect(notSoQuickCounterArr(87)).toEqual([3, 1, 0, 2]);
  });
});
