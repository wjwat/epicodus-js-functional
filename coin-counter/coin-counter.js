/* eslint-disable fp/no-nil */
/// Most of this was written under the assumption that they would only be
/// accepting the change portion of any given value as an integer.
/// Ex: 2.99 => recursiveCounter(99);

/**
 * Determines the change to be returned that matches value.
 * @param {number} value - Integer from 0 to 99.
 * @returns {array} Coins from penny to quarter that match value.
 */

export const recursiveCounter = (value) => {
  // Would returning a default case be okay when passed in garbage values? How
  // would I communicate to the caller that what they've done is stupid? As I
  // wrote this I figured that's just not something that's done in JS.
  if (value < 1 || value > 99 || !Number.isInteger(value)) {
    return [0, 0, 0, 0];
  }

  // This feels dumb, but it works.
  return [
    countCoins(value, 25),
    countCoins(value % 25, 10),
    countCoins(value % 25 % 10, 5),
    countCoins(value % 25 % 10 % 5, 1)
  ];
};

// This is recursive, but it would be much easier to just write it as
// floor(v / c) and move on. Also does not check whether the values passed in
// are valid or not minus checking if coinValue is greater than value.
export const countCoins = (value, coinValue) => {
  if (coinValue > value) {
    return 0;
  } else {
    return countCoins(value - coinValue, coinValue) + 1;
  }
};

/******************************************************************************/

// this also feels dumb, but again it works
export const closureCounter = value => {
  const quarter = closureCountCoins(25);
  const dime = closureCountCoins(10);
  const nickel = closureCountCoins(5);
  const penny = closureCountCoins(1);

  return [
    quarter(value),
    dime(value % 25),
    nickel(value % 25 % 10),
    penny(value % 25 % 10 % 5)
  ];
};

export const closureCountCoins = coin => value => {
  if (!Number.isInteger(value) ||
      !Number.isInteger(coin) ||
      coin > value ||
      coin > 99 ||
      coin < 1 ||
      value > 99 ||
      value < 1) {
    return 0;
  } else {
    return Math.floor(value / coin);
  }
};

/******************************************************************************/

export const plainCounter = value => {
  if (value < 1 || value > 99 || !Number.isInteger(value)) {
    return [0, 0, 0, 0];
  }

  return [
    Math.floor(value / 25),
    Math.floor((value % 25) / 10),
    Math.floor((value % 25 % 10) / 5),
    Math.floor((value % 25 % 10 % 5))
  ];
};

/******************************************************************************/

// is this slow because i'm just returning immediately?
// notSoQuickCounter
// would it be faster to keep the values as strings and then split them?
export const notSoQuickCounter = value => {
  return [[ 0, 0, 0, 1 ],[ 0, 0, 0, 2 ],[ 0, 0, 0, 3 ],[ 0, 0, 0, 4 ],[ 0, 0, 1, 0 ],[ 0, 0, 1, 1 ],[ 0, 0, 1, 2 ],[ 0, 0, 1, 3 ],[ 0, 0, 1, 4 ],[ 0, 1, 0, 0 ],[ 0, 1, 0, 1 ],[ 0, 1, 0, 2 ],[ 0, 1, 0, 3 ],[ 0, 1, 0, 4 ],[ 0, 1, 1, 0 ],[ 0, 1, 1, 1 ],[ 0, 1, 1, 2 ],[ 0, 1, 1, 3 ],[ 0, 1, 1, 4 ],[ 0, 2, 0, 0 ],[ 0, 2, 0, 1 ],[ 0, 2, 0, 2 ],[ 0, 2, 0, 3 ],[ 0, 2, 0, 4 ],[ 1, 0, 0, 0 ],[ 1, 0, 0, 1 ],[ 1, 0, 0, 2 ],[ 1, 0, 0, 3 ],[ 1, 0, 0, 4 ],[ 1, 0, 1, 0 ],[ 1, 0, 1, 1 ],[ 1, 0, 1, 2 ],[ 1, 0, 1, 3 ],[ 1, 0, 1, 4 ],[ 1, 1, 0, 0 ],[ 1, 1, 0, 1 ],[ 1, 1, 0, 2 ],[ 1, 1, 0, 3 ],[ 1, 1, 0, 4 ],[ 1, 1, 1, 0 ],[ 1, 1, 1, 1 ],[ 1, 1, 1, 2 ],[ 1, 1, 1, 3 ],[ 1, 1, 1, 4 ],[ 1, 2, 0, 0 ],[ 1, 2, 0, 1 ],[ 1, 2, 0, 2 ],[ 1, 2, 0, 3 ],[ 1, 2, 0, 4 ],[ 2, 0, 0, 0 ],[ 2, 0, 0, 1 ],[ 2, 0, 0, 2 ],[ 2, 0, 0, 3 ],[ 2, 0, 0, 4 ],[ 2, 0, 1, 0 ],[ 2, 0, 1, 1 ],[ 2, 0, 1, 2 ],[ 2, 0, 1, 3 ],[ 2, 0, 1, 4 ],[ 2, 1, 0, 0 ],[ 2, 1, 0, 1 ],[ 2, 1, 0, 2 ],[ 2, 1, 0, 3 ],[ 2, 1, 0, 4 ],[ 2, 1, 1, 0 ],[ 2, 1, 1, 1 ],[ 2, 1, 1, 2 ],[ 2, 1, 1, 3 ],[ 2, 1, 1, 4 ],[ 2, 2, 0, 0 ],[ 2, 2, 0, 1 ],[ 2, 2, 0, 2 ],[ 2, 2, 0, 3 ],[ 2, 2, 0, 4 ],[ 3, 0, 0, 0 ],[ 3, 0, 0, 1 ],[ 3, 0, 0, 2 ],[ 3, 0, 0, 3 ],[ 3, 0, 0, 4 ],[ 3, 0, 1, 0 ],[ 3, 0, 1, 1 ],[ 3, 0, 1, 2 ],[ 3, 0, 1, 3 ],[ 3, 0, 1, 4 ],[ 3, 1, 0, 0 ],[ 3, 1, 0, 1 ],[ 3, 1, 0, 2 ],[ 3, 1, 0, 3 ],[ 3, 1, 0, 4 ],[ 3, 1, 1, 0 ],[ 3, 1, 1, 1 ],[ 3, 1, 1, 2 ],[ 3, 1, 1, 3 ],[ 3, 1, 1, 4 ],[ 3, 2, 0, 0 ],[ 3, 2, 0, 1 ],[ 3, 2, 0, 2 ],[ 3, 2, 0, 3 ],[ 3, 2, 0, 4 ]][value-1];
};
