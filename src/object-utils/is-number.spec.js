import { assert } from 'chai';
import { isNumber } from './is-number';
import { falsyValues, truthyValues } from '../test-utils';

describe('isNumber()', () => {
  const tests = [
    { expected: true, value: 0 },
    { expected: true, value: 42 },
    { expected: true, value: -42 },
    { expected: true, value: 3.14 },
    { expected: true, value: -3.14 },
    { expected: true, value: Infinity },
    { expected: true, value: -Infinity },
    { expected: true, value: NaN },
    ...falsyValues
      .filter((falsyValue) => falsyValue !== 0 && !Number.isNaN(falsyValue))
      .map((falsyValue) => ({
        expected: false,
        value: falsyValue
      })),
    ...truthyValues
      .filter(
        (truthyValue) =>
          truthyValue !== 42 &&
          truthyValue !== -42 &&
          truthyValue !== 3.14 &&
          truthyValue !== -3.14 &&
          truthyValue !== Infinity &&
          truthyValue !== -Infinity
      )
      .map((truthyValue) => ({
        expected: false,
        value: truthyValue
      }))
  ];

  tests.forEach((test) => {
    it(`checks if ${test.value} is a number`, () => {
      assert.equal(isNumber(test.value), test.expected);
    });
  });
});
