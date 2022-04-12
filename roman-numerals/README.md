# Roman Numerals

Each function accepts a positive integer value from 0 to 3999 which will return
a string representing that number in roman numerals.

Ex:
```
> romanNumeralsRecursive(3999)
'MMMCMXCIX'
```

* **romanNumeralsFunctionalRecursive** - Written in a functional style with recursion.
* **romanNumeralsFunctionalRecursive2** - Written in a functional style with recursion.
* **romanNumeralsRecursive** - Written using recursion.
* **convertToRoman** - Original implementation written previously in Epicodus.

## Assumptions

- The biggest assumption is that I have some idea of what I'm doing.
  * Are these things recursive?
  * Are they actually functional?

## Speed Tests

### 1

```
Number of calls: 1000
Number of values in each call: 10000
Average time for each call:

                  romanNumeralsRecursive: 1.1275065997838973
        romanNumeralsFunctionalRecursive: 78.51575920021534
       romanNumeralsFunctionalRecursive2: 79.21807499992848
                          convertToRoman: 1.490601996064186
```

### 2

```
Number of calls: 1000
Number of values in each call: 10000
Average time for each call:

                  romanNumeralsRecursive: 1.1384318991899491
        romanNumeralsFunctionalRecursive: 69.53923230099679
       romanNumeralsFunctionalRecursive2: 69.2771383010149
                          convertToRoman: 1.3472476032972336
```

### 3

```
Number of calls: 1000
Number of values in each call: 10000
Average time for each call:

                  romanNumeralsRecursive: 1.187750498533249
        romanNumeralsFunctionalRecursive: 74.53605599999428
       romanNumeralsFunctionalRecursive2: 70.93465989816188
                          convertToRoman: 1.3183945007324218
```