import { assert } from 'chai';
import { falsyValues } from '../test-utils';

describe('falsyValues', () => {
  falsyValues.forEach(falsyValue => {
    it(`checks ${falsyValue} as falsy value`, () => {
      assert.equal(true, !falsyValue);
    });
  });
});
