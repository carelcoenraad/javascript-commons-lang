import { assert } from 'chai';
import { isEmpty } from './is-empty';
import { falsyValues, truthyValues } from '../test-utils';

describe('isEmpty()', () => {
  const tests = [
    {
      expected: true,
      value: []
    },
    {
      expected: false,
      value: ['test']
    },
    ...falsyValues.map(falsyValue => ({
      expected: false,
      value: falsyValue
    })),
    ...truthyValues
      .filter(truthyValue => !Array.isArray(truthyValue))
      .map(truthyValue => ({
        expected: false,
        value: truthyValue
      }))
  ];

  tests.forEach(test => {
    it(`checks if ${test.value} is empty`, () => {
      assert.equal(isEmpty(test.value), test.expected);
    });
  });
});
