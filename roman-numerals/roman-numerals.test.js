/* eslint-disable fp/no-unused-expression,fp/no-nil */
import { romanNumeralsFunctionalRecursive, romanNumeralsFunctionalRecursive2, romanNumeralsRecursive, convertToRoman } from "./roman-numerals.js";

// I'd like to expand these test values, but I would very much like to not
// generate them by hand. My first thought would be to just randomly generate
// integer values and pass those into one of the implementations I've written
// then output the return value as an array and copy/paste it in here, but the
// issue with that is if my implementation is wrong how can I be sure that I'm
// not returning bad values because my original values are poisoned by bad code!
// Also I should just generate the values from 0 to 3999 instead of random values.
const TESTVALUES = [
  [1320, 'MCCCXX'],
  [2109, 'MMCIX'],
  [1080, 'MLXXX'],
  [102, 'CII'],
  [0, ''],
  [1, 'I'],
  [3, 'III'],
  [2, 'II'],
  [1000, 'M'],
  [3999, 'MMMCMXCIX'],
  [500, 'D'],
  [400, 'CD'],
  [40, 'XL'],
  [5, 'V'],
  [4, 'IV']
];

describe('romanNumeralsFunctionalRecursive', () => {
  test.each(TESTVALUES)('Correctly converts integer value to string representation in roman numerals',
    (value, numeral) => {
      expect(romanNumeralsFunctionalRecursive(value)).toEqual(numeral);
    });
});

describe('romanNumeralsFunctionalRecursive2', () => {
  test.each(TESTVALUES)('Correctly converts integer value to string representation in roman numerals',
    (value, numeral) => {
      expect(romanNumeralsFunctionalRecursive2(value)).toEqual(numeral);
    });
});

describe('romanNumeralsRecursive', () => {
  test.each(TESTVALUES)('Correctly converts integer value to string representation in roman numerals',
    (value, numeral) => {
      expect(romanNumeralsRecursive(value)).toEqual(numeral);
    });
});

describe('convertToRoman', () => {
  test.each(TESTVALUES)('Correctly converts integer value to string representation in roman numerals',
    (value, numeral) => {
      expect(convertToRoman(value)).toEqual(numeral);
    });
});