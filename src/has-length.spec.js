import { assert } from 'chai';
import { hasLength } from './has-length';
import { falsyValues, truthyValues } from './test-utils';

describe('hasLength()', () => {
  const tests = [
    {
      expected: true,
      value: 'test'
    },
    {
      expected: true,
      value: ' '
    },
    {
      expected: true,
      value: ['test']
    },
    {
      expected: false,
      value: []
    },
    ...falsyValues.map((falsyValue) => ({
      expected: false,
      value: falsyValue
    })),
    ...truthyValues
      .filter(
        (truthyValue) =>
          !Array.isArray(truthyValue) &&
          truthyValue !== '0' &&
          truthyValue !== 'false'
      )
      .map((truthyValue) => ({
        expected: false,
        value: truthyValue
      }))
  ];

  tests.forEach((test) => {
    it(`checks if ${test.value} has length`, () => {
      assert.equal(hasLength(test.value), test.expected);
    });
  });
});
