import { assert } from 'chai';
import { isUndefined } from './is-undefined';
import { falsyValues, truthyValues } from '../test-utils';

describe('isUndefined()', () => {
  const tests = [
    {
      expected: true,
      value: undefined
    },
    {
      expected: false,
      value: 'undefined'
    },
    ...falsyValues
      .filter((falsyValue) => typeof falsyValue !== 'undefined')
      .map((falsyValue) => ({
        expected: false,
        value: falsyValue
      })),
    ...truthyValues.map((truthyValue) => ({
      expected: false,
      value: truthyValue
    }))
  ];

  tests.forEach((test) => {
    it(`checks if ${test.value} is undefined`, () => {
      assert.equal(isUndefined(test.value), test.expected);
    });
  });
});
