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

```javascript
// Use this to gen your values and pipe the output to `coin-counter.speed.values.js`
const genValues = () => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const values = Array.from({length: 10000}, () => getRandomIntInclusive(1, 99));
  console.log(JSON.stringify(values));
}
```