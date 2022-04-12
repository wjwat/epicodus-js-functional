# Coin Counter

Each function accepts an integer and returns an array of integer values that
correspond to quarters, dimes, nickels, and pennies in that order.

Ex:
```
> plainCounter(99)
 [
   3, // quarters
   2, // dimes
   0, // nickels
   4  // pennies
 ]
```

* **recursiveCounter** - Written using recursion.
* **closureCounter** - Written using closures.
* **plainCounter** - Written using straightforward division.

## Assumptions

- Each variation of the count function should only accept a positive integer in
  the range of 1 to 99. If an unknown value is encountered it will return an
  array with no coins ([0, 0, 0, 0]).
    * Is this an appropriate way to handle this, or is it the idea that you
      should just make a decision and stick with it?
- Each variation of the function contains some small tests to make sure the
  returned values are as expected.
    * Tests should be expanded to handle nonsense values.

## Speed Tests

**Number of calls per run**: 100000

**Number of values in each call**: 10000


|        | recursiveCounter    | closureCounter      | plainCounter        |
| ------ | ------------------- | ------------------- | ------------------- |
| Run 1: | 0.4565629079544544  | 0.2744140979230404  | 0.19207193504095077 |
| Run 2: | 0.45168512005925177 | 0.2839983238703013  | 0.20247976997613906 |
| Run 3: | 0.4612077459514141  | 0.27645305890858174 | 0.21394654999613763 |
