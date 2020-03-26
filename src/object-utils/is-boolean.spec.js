import { assert } from 'chai';
import { isBoolean } from './is-boolean';
import { falsyValues, truthyValues } from '../test-utils';

describe('isBoolean()', () => {
  const tests = [
    {
      expected: true,
      value: true
    },
    {
      expected: true,
      value: false
    },
    {
      expected: false,
      value: 'true'
    },
    {
      expected: false,
      value: 'false'
    },
    ...falsyValues
      .filter((falsyValue) => falsyValue !== false)
      .map((falsyValue) => ({
        expected: false,
        value: falsyValue
      })),
    ...truthyValues
      .filter((truthyValue) => truthyValue !== true)
      .map((truthyValue) => ({
        expected: false,
        value: truthyValue
      }))
  ];

  tests.forEach((test) => {
    it(`checks if ${test.value} is a boolean`, () => {
      assert.equal(isBoolean(test.value), test.expected);
    });
  });
});
