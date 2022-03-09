import { isString } from '../object-utils/is-string';

/**
 * Is blank.
 *
 * @param {string} value Value
 * @returns {boolean} True or false
 */
export function isBlank(value) {
  if (
    !value ||
    !isString(value) ||
    value.length === 0 ||
    value.trim().length === 0
  ) {
    return true;
  }

  return false;
}

/**
 * Is not blank.
 *
 * @param {string} value Value
 * @returns {boolean} True or false
 */
export function isNotBlank(value) {
  return !isBlank(value);
}
