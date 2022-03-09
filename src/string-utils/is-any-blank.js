import { isBlank } from './is-blank';

/**
 * Is any blank.
 *
 * @param {Array} values Values
 * @returns {boolean} True or false
 */
export function isAnyBlank(values) {
  if (!Array.isArray(values)) {
    return false;
  }

  return values.some(isBlank);
}

/**
 * Is none blank.
 *
 * @param {Array} values Values
 * @returns {boolean} True or false
 */
export function isNoneBlank(values) {
  return !isAnyBlank(values);
}
