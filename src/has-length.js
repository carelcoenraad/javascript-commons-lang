import { isString } from './object-utils/is-string';

/**
 * Has length.
 *
 * @param {Array|string} value Value
 * @returns {boolean} True or false
 */
export function hasLength(value) {
  return (Array.isArray(value) || isString(value)) && !!value.length;
}
