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

### 1

```Number of calls: 10000
Number of values in each call: 10000
Average time for each call:

                        recursiveCounter: 0.4485233507514
                          closureCounter: 0.2740758302807808
                            plainCounter: 0.18941594007015228
                    notSoQuickCounterObj: 0.05887229005098343
                    notSoQuickCounterArr: 0.06144167050123215
```

### 2

```Number of calls: 10000
Number of values in each call: 10000
Average time for each call:

                        recursiveCounter: 0.47651740984916685
                          closureCounter: 0.27796725041866305
                            plainCounter: 0.18959232009649277
                    notSoQuickCounterObj: 0.059504269683361054
                    notSoQuickCounterArr: 0.06129546015262604
```

### 3

```Number of calls: 10000
Number of values in each call: 10000
Average time for each call:

                        recursiveCounter: 0.45299770065546036
                          closureCounter: 0.27618342943191526
                            plainCounter: 0.18775856965780258
                    notSoQuickCounterObj: 0.058984500133991244
                    notSoQuickCounterArr: 0.06115396002531052
```