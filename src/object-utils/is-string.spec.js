import { assert } from 'chai';
import { isString } from './is-string';
import { falsyValues, truthyValues } from '../test-utils';

describe('isString()', () => {
  const tests = [
    {
      expected: true,
      value: ''
    },
    {
      expected: true,
      value: ``
    },
    {
      expected: true,
      value: 'test'
    },
    {
      expected: true,
      value: 'null'
    },
    {
      expected: true,
      value: 'undefined'
    },
    {
      expected: true,
      value: 'true'
    },
    {
      expected: true,
      value: 'false'
    },
    ...falsyValues
      .filter((falsyValue) => falsyValue !== '' && falsyValue !== ``)
      .map((falsyValue) => ({
        expected: false,
        value: falsyValue
      })),
    ...truthyValues
      .filter((truthyValue) => truthyValue !== '0' && truthyValue !== 'false')
      .map((truthyValue) => ({
        expected: false,
        value: truthyValue
      }))
  ];

  tests.forEach((test) => {
    it(`checks if ${test.value} is a string`, () => {
      assert.equal(isString(test.value), test.expected);
    });
  });
});
