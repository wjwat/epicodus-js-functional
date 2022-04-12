///* eslint-disable fp/no-nil */
/* eslint-disable */
export const romanNumeralsRecursive = (value) => {

  if (value === 0) {
    return '';
  } else if (value >= 1000) {
    return 'M' + romanNumeralsRecursive(value - 1000);
  } else if (value >= 900) {
    return 'CM' + romanNumeralsRecursive(value - 900);
  } else if (value >= 500) {
    return 'D' + romanNumeralsRecursive(value - 500);
  } else if (value >= 400) {
    return 'CD' + romanNumeralsRecursive(value - 400);
  } else if (value >= 100) {
    return 'C' + romanNumeralsRecursive(value - 100);
  } else if (value >= 90) {
    return 'XC' + romanNumeralsRecursive(value - 90);
  } else if (value >= 50) {
    return 'L' + romanNumeralsRecursive(value - 50);
  } else if (value >= 40) {
    return 'XL' + romanNumeralsRecursive(value - 40);
  } else if (value >= 10) {
    return 'X' + romanNumeralsRecursive(value - 10);
  } else if (value >= 9) {
    return 'IX' + romanNumeralsRecursive(value - 9);
  } else if (value >= 5) {
    return 'V' + romanNumeralsRecursive(value - 5);
  } else if (value >= 4) {
    return 'IV' + romanNumeralsRecursive(value - 4);
  } else if (value >= 1) {
    return 'I' + romanNumeralsRecursive(value - 1);
  }
};

export const romanNumeralsFunctionalRecursive = (value) => {
  const NUMERALS = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C' ,
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };

  if (value === 0) {
    return '';
  }

  const maxValue = Object.keys(NUMERALS) // {1: ..., 2: ...} => ["1", "2"]
    .map(Number) // When you pull out the keys it makes them strings, this turns them back into numbers
    .reduce((a, b) => (value < b) ? a : b);

  return NUMERALS[maxValue] + romanNumeralsFunctionalRecursive(value - maxValue);
};

export const romanNumeralsFunctionalRecursive2 = (value) => {
  const NUMERALS = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C' ,
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };

  if (value === 0) {
    return '';
  }

  const maxValue = Object.keys(NUMERALS) // {1: ..., 2: ...} => ["1", "2"]
    .map(Number) // When you pull out the keys it makes them strings, this turns them back into numbers
    .reduce((a, b) => {
      if (value === a || (value > a && value < b)) {
        return a;
      } else {
        return b;
      }
    });

  return NUMERALS[maxValue] + romanNumeralsFunctionalRecursive(value - maxValue);
};

export const convertToRoman = (num) => {
  const NUMERALS = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1}

	let roman = '';

	for (let n in NUMERALS) {
		while (num >= NUMERALS[n]) {
			roman += n;
			num -= NUMERALS[n];
      if (num === 0) {
        return roman;
      }
		}
	}

	return roman;
}