'use strict';

/* ------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------ */

const addOne = (arr) => {
  const localArray = [];
  arr.forEach(number => {
    let incrementedNumber = number + 1;
    localArray.push(incrementedNumber);
  });
  return localArray;
};
/* ------------------------------------------------------------------------------------------------*/

const addExclamation = (arr) => {
  const localArray = [];
  arr.forEach(string => localArray.push(string + '!'));
  return localArray;
};

/* ------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------ */

const allUpperCase = (arr) => {
  const localArray = [];
  arr.forEach(string => localArray.push(string.toUpperCase()));
  return localArray;
};

/*------------------------------------------------------------------------------------------------ */

const greeting = (word) => {
  let upperString = word.toUpperCase() + "!";
  return upperString
};

const speaker = (words, callback) => {
  let localArray = [];
  words.forEach(words => localArray.push(callback(words)));
  return localArray
};

/* ------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------ */

const addValues = (arr, value) => {
  arr.push(value);
};
const addNumbers = (num, arr, times, callback) => {
  for (let i = 0; i < times; i++) {
    callback(arr, num)
  }
  return arr
};

/* ------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------ */

const createList = (availableItems) => {
  let list = [];

  availableItems.forEach(item => {
    if (item.available == true) {
      list.push(item.name)
    }
  })
  return list
};

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------ */

const fizzbuzz = (arr) => {
  let result = []

  arr.forEach(number => {
    if (number % 3 == 0 && number % 5 == 0) {
      result.push("Fizz Buzz")
    } else if (number % 3 == 0) {
      result.push("Fizz")
    } else if (number % 5 == 0) {
      result.push("Buzz")
    } else if (number % 3 != 0 && number % 5 != 0) {
      result.push(number)
    }
    return result
  })
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return an array with 1 added to each value of the original array', () => {
    expect(addOne([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 6]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array with an exclamation point added to each value of the original array', () => {
    expect(addExclamation(['hi', 'how', 'are', 'you'])).toStrictEqual(['hi!', 'how!', 'are!', 'you!']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of uppercase strings', () => {
    expect(allUpperCase(['hi', 'how', 'are', 'you'])).toStrictEqual(['HI', 'HOW', 'ARE', 'YOU']);
  });
});

describe('Testing challenge 4', () => {
  test('It should provide an array of strings, that get uppercased, and a "!" at the end', () => {
    expect(speaker(['hello', '301', 'students'], greeting)).toStrictEqual(['HELLO!', '301!', 'STUDENTS!']);
  });
});

describe('Testing challenge 5', () => {
  test('It should add the number 8 to the array five times', () => {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

describe('Testing challenge 6', () => {
  const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

  test('It should only add the available items to the list', () => {
    expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 7', () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});
