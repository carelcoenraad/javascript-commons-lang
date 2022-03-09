import { isBlank } from './is-blank';

/**
 * Is all blank.
 *
 * @param {Array} values Values
 * @returns {boolean} True or false
 */
export function isAllBlank(values) {
  if (!Array.isArray(values)) {
    return true;
  }

  return values.every(isBlank);
}
