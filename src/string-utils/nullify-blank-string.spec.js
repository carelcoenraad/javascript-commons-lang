import { assert } from 'chai';
import { nullifyEmptyString } from './nullify-blank-string';
import { falsyValues, truthyValues } from '../test-utils';

describe('nullifyEmptyString()', () => {
  const tests = [
    {
      expected: null,
      value: ''
    },
    {
      expected: 'test',
      value: 'test'
    },
    ...falsyValues
      .filter((falsyValue) => falsyValue !== '')
      .map((falsyValue) => ({
        expected: falsyValue,
        value: falsyValue
      })),
    ...truthyValues.map((truthyValue) => ({
      expected: truthyValue,
      value: truthyValue
    }))
  ];

  tests.forEach((test) => {
    it(`converts ${test.value} to ${test.expected}`, () => {
      assert.deepEqual(nullifyEmptyString(test.value), test.expected);
    });
  });
});
