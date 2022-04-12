```javascript
[1627,3906,372,2543,3650,3153,1320,461,3169,2887,2210,854].forEach(e => {
  let res = [];
  [romanNumeralsRecursive, romanNumeralsFunctionalRecursive, romanNumeralsFunctionalRecursive2].forEach(f => {
    res.push(f(e));
  })
  console.log(res.every(e => e === res[0]));
  res = [];
})
```