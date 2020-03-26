import { assert } from 'chai';
import { truthyValues } from '../test-utils';

describe('truthyValues', () => {
  truthyValues.forEach((truthyValue) => {
    it(`checks ${truthyValue} as truthy value`, () => {
      assert.equal(true, !!truthyValue);
    });
  });
});
