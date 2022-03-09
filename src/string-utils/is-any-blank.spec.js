import { assert } from 'chai';
import { isAnyBlank } from './is-any-blank';
import { falsyValues, truthyValues } from '../test-utils';

describe.only('isAnyBlank()', () => {
  const tests = [
    {
      expected: false,
      value: ['test', 'test']
    },
    {
      expected: true,
      value: ['', 'test']
    },
    {
      expected: true,
      value: ['test', '']
    },
    {
      expected: false,
      value: 'test'
    },
    ...falsyValues.map((falsyValue) => ({
      expected: false,
      value: falsyValue
    })),
    ...truthyValues.map((truthyValue) => ({
      expected: false,
      value: truthyValue
    }))
  ];

  tests.forEach((test) => {
    it(`checks if ${test.value} is blank`, () => {
      assert.equal(isAnyBlank(test.value), test.expected);
    });
  });
});
