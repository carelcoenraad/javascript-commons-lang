import { assert } from 'chai';
import { toStringYesNo } from './to-string-yes-no';
import { falsyValues, truthyValues } from '../test-utils';

describe('toStringYesNo()', () => {
  const tests = [
    {
      expected: 'yes',
      value: true
    },
    {
      expected: 'no',
      value: false
    },
    ...falsyValues
      .filter(falsyValue => falsyValue !== false)
      .map(falsyValue => ({
        expected: null,
        value: falsyValue
      })),
    ...truthyValues
      .filter(truthyValue => truthyValue !== true)
      .map(truthyValue => ({
        expected: null,
        value: truthyValue
      }))
  ];

  tests.forEach(test => {
    it(`converts ${test.value} to ${test.expected}`, () => {
      assert.equal(toStringYesNo(test.value), test.expected);
    });
  });
});
