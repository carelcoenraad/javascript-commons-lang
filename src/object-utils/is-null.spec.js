import { assert } from 'chai';
import { isNull } from './is-null';
import { falsyValues, truthyValues } from '../test-utils';

describe('isNull()', () => {
  const tests = [
    {
      expected: true,
      value: null
    },
    {
      expected: false,
      value: 'null'
    },
    ...falsyValues
      .filter(falsyValue => falsyValue !== null)
      .map(falsyValue => ({
        expected: false,
        value: falsyValue
      })),
    ...truthyValues.map(truthyValue => ({
      expected: false,
      value: truthyValue
    }))
  ];

  tests.forEach(test => {
    it(`checks if ${test.value} is null`, () => {
      assert.equal(isNull(test.value), test.expected);
    });
  });
});
