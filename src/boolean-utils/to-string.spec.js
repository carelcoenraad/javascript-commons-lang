import { assert } from 'chai';
import { toString } from './to-string';
import { falsyValues, truthyValues } from '../test-utils';

describe('toString()', () => {
  const tests = [
    {
      expected: 'true',
      value: true
    },
    {
      expected: 'false',
      value: false
    },
    ...falsyValues
      .filter((falsyValue) => falsyValue !== false)
      .map((falsyValue) => ({
        expected: null,
        value: falsyValue
      })),
    ...truthyValues
      .filter((truthyValue) => truthyValue !== true)
      .map((truthyValue) => ({
        expected: null,
        value: truthyValue
      }))
  ];

  tests.forEach((test) => {
    it(`converts ${test.value} to ${test.expected}`, () => {
      assert.equal(toString(test.value), test.expected);
    });
  });
});
